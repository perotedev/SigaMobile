import { Test, TestingModule } from '@nestjs/testing';
import { ApiLoginController } from './api-login.controller';

describe('ApiLoginController', () => {
  let controller: ApiLoginController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiLoginController],
    }).compile();

    controller = module.get<ApiLoginController>(ApiLoginController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
