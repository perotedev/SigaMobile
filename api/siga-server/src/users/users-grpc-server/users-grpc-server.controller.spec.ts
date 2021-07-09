import { Test, TestingModule } from '@nestjs/testing';
import { UsersGrpcServerController } from './users-grpc-server.controller';

describe('UsersGrpcServerController', () => {
  let controller: UsersGrpcServerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersGrpcServerController],
    }).compile();

    controller = module.get<UsersGrpcServerController>(UsersGrpcServerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
