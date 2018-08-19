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
# Install yaml2json using `yarn add yamljs --save-dev`
formattedEcho "Converting swagger.yaml to swagger.json"
node_modules/.bin/yaml2json swagger.yaml -p -i4 > swagger.json

# Generate Api client service from swagger.json file
# Install a4apigen using `yarn add ng-swagger-gen --save-dev`
formattedEcho "Generating Api client models and service class"
node_modules/.bin/ng-swagger-gen -i swagger.json -o src/app/core/api/testra

# Cleanup swagger.json file
formattedEcho "Cleanup temp files"
rm -f swagger.json swagger.yaml
