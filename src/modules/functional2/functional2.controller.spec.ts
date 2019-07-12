import { Test, TestingModule } from '@nestjs/testing';
import { Functional2Controller } from './functional2.controller';

describe('Functional2 Controller', () => {
  let controller: Functional2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Functional2Controller],
    }).compile();

    controller = module.get<Functional2Controller>(Functional2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
