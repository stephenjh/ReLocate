import { Test, TestingModule } from '@nestjs/testing';
import { AddressUpdateController } from './address-update.controller';

describe('AddressUpdateController', () => {
  let controller: AddressUpdateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AddressUpdateController],
    }).compile();

    controller = module.get<AddressUpdateController>(AddressUpdateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
