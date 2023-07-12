#!/bin/bash

# PRODUCTION

git reset --hard
git pull origin master
npm i
npm run build
pm2 start "npm run start" --name=First-NextJS-project

# DEVELOPMENT
# yarn i yarn -g
# yarn 
# yarn run build
# pm2 start "yarn run start" --name=HITECHMART-REACT