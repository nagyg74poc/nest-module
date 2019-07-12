import { Test, TestingModule } from '@nestjs/testing';
import { Functional1Service } from './functional1.service';

describe('Functional1Service', () => {
  let service: Functional1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Functional1Service],
    }).compile();

    service = module.get<Functional1Service>(Functional1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
