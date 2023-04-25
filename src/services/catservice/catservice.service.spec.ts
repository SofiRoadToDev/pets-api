import { Test, TestingModule } from '@nestjs/testing';
import { CatserviceService } from './catservice.service';

describe('CatserviceService', () => {
  let service: CatserviceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatserviceService],
    }).compile();

    service = module.get<CatserviceService>(CatserviceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
