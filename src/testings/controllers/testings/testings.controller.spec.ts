import { Test, TestingModule } from '@nestjs/testing';
import { TestingsController } from './testings.controller';

describe('TestingsController', () => {
  let controller: TestingsController;

  beforeEach(async () => {
    // ?? Bir tet modülü oluşturuluyor ve derleme işlemi yapılıyor.
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestingsController],
    }).compile();

    controller = module.get<TestingsController>(TestingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
