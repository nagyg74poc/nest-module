import { Test, TestingModule } from '@nestjs/testing';
import { Functional1Controller } from './functional1.controller';

describe('Functional1 Controller', () => {
  let controller: Functional1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Functional1Controller],
    }).compile();

    controller = module.get<Functional1Controller>(Functional1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
