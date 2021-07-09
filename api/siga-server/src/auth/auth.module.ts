import { JwtGrpcServerController } from './jwt-grpc-server/jwt-grpc-server.controller';

import { JwtStrategy } from './jwt/jwt.strategy';
import { AuthController } from './auth.controller';
import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './jwt/jwt.constants';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1800s' },
    }),
  ],
  providers: [
    JwtStrategy,
    AuthService,
    LocalStrategy
  ],
  exports: [
    AuthModule,
    JwtModule
  ],
  controllers: [
    AuthController,
    JwtGrpcServerController
  ]
})
export class AuthModule {}