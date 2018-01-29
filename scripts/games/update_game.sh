#!/bin/bash

curl "http://localhost:4741/games/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "game": {
      "date": "'"${DATE}"'",
      "location": "'"${LOCAT}"'",
      "home_team": "'"${HOME}"'",
      "home_score": "'"${HS}"'",
      "away_team": "'"${AWAY}"'",
      "away_score": "'"${AS}"'"
    }
  }'

echo
