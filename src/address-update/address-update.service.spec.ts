import { Test, TestingModule } from '@nestjs/testing';
import { AddressUpdateService } from './address-update.service';

describe('AddressUpdateService', () => {
  let service: AddressUpdateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddressUpdateService],
    }).compile();

    service = module.get<AddressUpdateService>(AddressUpdateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
