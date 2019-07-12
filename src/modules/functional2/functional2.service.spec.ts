import { Test, TestingModule } from '@nestjs/testing';
import { Functional2Service } from './functional2.service';

describe('Functional2Service', () => {
  let service: Functional2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Functional2Service],
    }).compile();

    service = module.get<Functional2Service>(Functional2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
