#!/bin/bash

cd /home/node/app

# instala o npm na raiz do app
npm install

# instala o mogoose
npm install --save @nestjs/mongoose mongoose --force

# instala dependência para o JWT
npm install --save @nestjs/passport passport passport-local
npm install --save-dev @types/passport-local
npm install --save @nestjs/jwt passport-jwt
npm install --save-dev @types/passport-jwt

# instala dependência para encriptar senha
npm i bcrypt
npm i -D @types/bcrypt

# instala dependências para o gRPC
npm i --save @nestjs/microservices --force
npm i --save @grpc/grpc-js @grpc/proto-loader

npm run start:dev
