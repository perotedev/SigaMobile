#!/bin/bash

cd /home/node/app

# instala o npm na raiz do app
npm install

# instala dependência para o JWT
npm install --save @nestjs/passport passport passport-local
npm install --save-dev @types/passport-local
npm install --save @nestjs/jwt passport-jwt
npm install --save-dev @types/passport-jwt

# instala dependências para o gRPC
npm i --save @nestjs/microservices --legacy-peer-deps
npm i --save @grpc/grpc-js @grpc/proto-loader

npm run start:dev
