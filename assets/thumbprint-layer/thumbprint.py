import certifi, sys, json, logging, os, urllib, ssl, socket, requests, traceback
from OpenSSL import crypto, SSL
from uuid import uuid4
from cfn_resource_provider import ResourceProvider

logging.basicConfig()
logger = logging.getLogger()
logger.setLevel(os.getenv('LOG_LEVEL', 'DEBUG'))

request_schema = {
  '$schema': 'http://json-schema.org/draft-04/schema#',
  'type': 'object',
  'required': ['URL'],
  'properties': {
    'URL': {'type': 'string', 'Description': 'The URL to hit'},
  }
}


class Thumbprint(ResourceProvider):
  def __init__(self):
    super(Thumbprint, self).__init__()
    self.request_schema = request_schema

  @property
  def url(self):
    return self.get('URL')

  @property
  def openid_config(self):
    return requests.get(self.url + '/.well-known/openid-configuration').json()

  @property
  def jwks_tuple(self):
    url = urllib.parse.urlparse(self.openid_config['jwks_uri'])
    return (url.hostname, 443)

  @property
  def root_cert(self):
    host, port = self.jwks_tuple
    context = SSL.Context(method=SSL.TLSv1_2_METHOD)
    context.load_verify_locations(cafile=certifi.where())
    conn = SSL.Connection(context, socket=socket.socket(socket.AF_INET, socket.SOCK_STREAM))
    conn.settimeout(5)
    conn.connect((host, port))
    conn.setblocking(1)
    conn.do_handshake()
    conn.set_tlsext_host_name(host.encode())
    return conn.get_peer_cert_chain()[-1]

  @property
  def thumbprint(self):
    return self.root_cert.digest('sha1').decode('utf-8').replace(':','')

  def create(self):
    try:
      self.physical_resource_id = self.thumbprint
    except Exception as e:
      traceback.print_exc()
      self.physical_resource_id = 'could-not-execute'
      self.fail('Failed to execute: %s' % e)

  def update(self):
    # Updates are not possible. Must delete and re-create. :(
    self.delete()
    self.create()

  def delete(self):
    self.success('no-op')

# This is the lambda handler call... but when we operate locally, see the
# __main__ below.
def handler(request, context):
  return Thumbprint().handle(request, context)

# When testing locally we just gather some data, but make no changes. The point
# of this test (right now) is to verify that we can hit the SSL endpoint, get
# the root certificate information and return it.
if __name__ == '__main__':
  print('Beginning test...  validating command-line usage first...')
  url = sys.argv[1]
  if not url:
      print(f'Usage: {sys.argv[0]} <EKS Cluster OIDC URL>')
      sys.exit(1)

  print(f'Will run test against {url} cluster...')
  request = {
    "RequestType": 'CREATE',
    "ResponseURL": "https://httpbin.org/put",
    "StackId": "arn:aws:cloudformation:us-west-2:EXAMPLE/stack-name/guid",
    "RequestId": "request-%s" % uuid4(),
    "ResourceType": "Custom::Resource",
    "LogicalResourceId": "MyCustomResource",
    "ResourceProperties": {
        "URL": url
    }
  }

  print('Creating Thumbprint() object...')
  thumbprint = Thumbprint()
  thumbprint.set_request(request, {})
  print(f'TEST: root_cert thumbprint = {thumbprint.thumbprint}')
