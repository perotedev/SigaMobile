import { join } from 'path';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  await app.listen(4040);

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

  await app.startAllMicroservicesAsync();
}
bootstrap();
