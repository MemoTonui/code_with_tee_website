#!/usr/bin/env bash
# Builds the site and packages it as lsr-app.zip for upload to Truehost
set -e

rm -rf .next lsr-app.zip

npm run build

cp -r public .next/standalone/
cp -r .next/static .next/standalone/.next/

# Never ship local secrets; set them in cPanel instead
rm -f .next/standalone/.env .next/standalone/.env.local

(cd .next/standalone && zip -rq ../../lsr-app.zip .)

echo "Done: lsr-app.zip is ready to upload to the lsr-app folder on Truehost"