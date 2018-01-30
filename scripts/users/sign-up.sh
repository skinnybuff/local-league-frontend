#!/bin/bash

# sh shell/sign-up.sh

curl "http://localhost:4741/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
  "credentials": {
    "email": "'"${EMAIL}"'",
    "password": "'"${PASS}"'",
    "password_confirmation": "'"${CONFIRM}"'"
  }
}'

echo
