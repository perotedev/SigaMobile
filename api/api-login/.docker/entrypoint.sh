#!/bin/bash

cd /home/node/app

npm install
npm install --save @nestjs/mongoose mongoose
npm install --save-dev @types/mongoose
npm run start:dev