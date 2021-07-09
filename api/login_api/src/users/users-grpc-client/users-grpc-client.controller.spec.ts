import { Test, TestingModule } from '@nestjs/testing';
import { UsersGrpcClientController } from './users-grpc-client.controller';

describe('UsersGrpcClientController', () => {
  let controller: UsersGrpcClientController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersGrpcClientController],
    }).compile();

    controller = module.get<UsersGrpcClientController>(UsersGrpcClientController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
