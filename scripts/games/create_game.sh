#!/bin/bash

curl "http://localhost:4741/games" \
  --include \
  --request POST \
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

# games controller params
# :date, :location, :home_team, :home_score, :away_team, :away_score
