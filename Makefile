export CDK_DEFAULT_REGION ?= us-west-2
export CDK_ACCOUNT_ID := $(shell aws sts get-caller-identity --output text | awk '{print $$1}')

.PHONY: template
template:
	cdk synth

.PHONY: deploy
deploy:
	cdk deploy --outputs-file cdk.outputs.json

.PHONY: destroy
destroy:
	cdk destroy

.PHONY: diff
diff:
	cdk diff

.PHONY: tools
tools:
	npm i -g @aws-cdk/integ-runner

.PHONY: test
test:
	yarn test

.PHONY: clean
clean:
	rm -rf cdk.out new orig coverage
