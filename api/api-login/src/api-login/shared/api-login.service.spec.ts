import { Test, TestingModule } from '@nestjs/testing';
import { ApiLoginService } from './api-login.service';

describe('ApiLoginService', () => {
  let provider: ApiLoginService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiLoginService],
    }).compile();

    provider = module.get<ApiLoginService>(ApiLoginService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
