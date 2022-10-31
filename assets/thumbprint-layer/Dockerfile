FROM public.ecr.aws/sam/build-python3.7
COPY requirements.txt ./
RUN python -m pip install -r requirements.txt -t /opt/python
WORKDIR /
ENTRYPOINT [ "/bin/bash" ]

