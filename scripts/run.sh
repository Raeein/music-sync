#!/bin/bash
# docker build -t music-sync .
# docker run --rm -p 3000:3000 music-sync

rm -rf node_modeules/
rm package-lock.json
npm i
npm run dev
