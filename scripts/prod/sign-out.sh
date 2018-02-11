#!/bin/bash

# sh shell/sign-out.sh

curl "https://local-league.herokuapp.com/sign-out/${ID}" \
  --include \
  --request DELETE\
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"

echo
