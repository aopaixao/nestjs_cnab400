import { Test, TestingModule } from '@nestjs/testing';
import { CnabResolver } from './cnab.resolver';

describe('CnabResolver', () => {
  let resolver: CnabResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CnabResolver],
    }).compile();

    resolver = module.get<CnabResolver>(CnabResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
