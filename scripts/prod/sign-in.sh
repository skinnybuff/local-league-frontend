#!/bin/bash

# sh shell/sign-in.sh

curl "https://local-league.herokuapp.com/sign-in" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
  "credentials": {
    "email": "'"${EMAIL}"'",
    "password": "'"${PASS}"'"
  }
}'

echo
