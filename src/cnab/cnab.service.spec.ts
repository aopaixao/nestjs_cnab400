import { Test, TestingModule } from '@nestjs/testing';
import { CnabService } from './cnab.service';

describe('CnabService', () => {
  let service: CnabService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CnabService],
    }).compile();

    service = module.get<CnabService>(CnabService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
