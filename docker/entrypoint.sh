#!/bin/sh
set -xe
: "${TESTRA_API_URL?Need a Testra api url as ENV variable}"

sed -i "s,TESTRA_API_URL,$TESTRA_API_URL,g" /usr/share/nginx/html/main*.js

exec "$@"
