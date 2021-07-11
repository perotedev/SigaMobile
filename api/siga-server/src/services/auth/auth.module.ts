import { AuthGrpcClientController } from '../../controllers/auth-grpc-client/auth-grpc-client.controller';
import { JwtGrpcServerController } from './jwt-grpc-server/jwt-grpc-server.controller';
import { JwtStrategy } from './jwt/jwt.strategy';
import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './jwt/jwt.constants';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1800s' },
    }),
    ClientsModule.register([{
      name: 'AUTH_PACKAGE',
      transport: Transport.GRPC,
      options: {
        url: 'siga-server:50061',
        package: 'auth',
        protoPath: join(__dirname, '/proto/auth.proto')
      }
    }])
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
    AuthGrpcClientController,
    JwtGrpcServerController
  ]
})
export class AuthModule {}