#!/bin/bash

GREEN='\033[0;32m'
NO_COLOR='\033[0m'

function formattedEcho {
  echo ""
  echo -e "${GREEN} => $1 ${NO_COLOR}"
  echo ""
}

# Fetch swagger.yaml file from api repo
formattedEcho "Fetching swagger.yaml from github repo"
wget -O swagger.yaml https://raw.githubusercontent.com/testra-tech/testra-api/master/swagger.yaml

# Convert swagger.yaml to swagger.json file
# Install yaml2json using `npm i -g yamljs`
formattedEcho "Converting swagger.yaml to swagger.json"
yaml2json swagger.yaml -p -i4 > swagger.json

# Generate Api client service from swagger.json file
# Install a4apigen using `npm i -g angular4-swagger-client-generator`
formattedEcho "Generating Api client models and service class"
a4apigen -s swagger.json -o src/app/core/api/testra

# Cleanup swagger.json file
formattedEcho "Cleanup temp files"
rm -f swagger.json swagger.yaml
