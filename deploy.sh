#!/bin/sh

aws configure set aws_access_key_id $AWS_ACCESS_KEY_ID \
aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY \
aws configure set default.region us-east-1 \
eb init myapp --platform node.js \
eb create testapi-env \
eb deploy testapi-env \