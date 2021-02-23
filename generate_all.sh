#!/usr/bin/env sh

cd ./go || exit
sh generate.sh
cd ../ts || exit
sh ./generate.sh
yarn build