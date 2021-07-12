import { join } from 'path';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      url: '0.0.0.0:50051',
      package: 'users',
      protoPath: join(__dirname, '/services/users/proto/users.proto'),
    }
  });

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      url: '0.0.0.0:50061',
      package: 'auth',
      protoPath: join(__dirname, '/services/auth/proto/auth.proto'),
    }
  });

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      url: '0.0.0.0:50071',
      package: 'studants',
      protoPath: join(__dirname, '/services/studants/proto/studants.proto'),
    }
  });
  
  await app.listen(4040);
  await app.startAllMicroservices();
}
bootstrap();
