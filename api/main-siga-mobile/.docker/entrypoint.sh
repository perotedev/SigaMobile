#!/bin/bash

cd /home/node/app

# instala o mogoose
npm install
npm install --save @nestjs/mongoose mongoose
npm install --save-dev @types/mongoose

# instala dependência para o JWT
npm install --save @nestjs/passport passport passport-local
npm install --save-dev @types/passport-local
npm install --save @nestjs/jwt passport-jwt
npm install --save-dev @types/passport-jwt

# instala dependência para encriptar senha
npm i bcrypt
npm i -D @types/bcrypt

npm run start:dev
