import { Controller, Post, Body, Get } from '@nestjs/common';
import { AddressUpdateService } from './address-update.service';
import { CreateAddressUpdateDto } from './dto/create-address-update.dto';
import { AddressUpdate } from './address-update.entity';

@Controller('address-update')
export class AddressUpdateController {
  constructor(private readonly addressUpdateService: AddressUpdateService) {}

  @Post()
  async create(@Body() dto: CreateAddressUpdateDto): Promise<AddressUpdate> {
    return this.addressUpdateService.create(dto);
  }

  @Get()
  async findAll(): Promise<AddressUpdate[]> {
    return this.addressUpdateService.findAll();
  }
}
