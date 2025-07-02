import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddressUpdate } from './address-update.entity';
import { CreateAddressUpdateDto } from './dto/create-address-update.dto';
import { User } from '../users/user.entity';

@Injectable()
export class AddressUpdateService {
  constructor(
    @InjectRepository(AddressUpdate)
    private addressUpdateRepo: Repository<AddressUpdate>,
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async create(dto: CreateAddressUpdateDto): Promise<AddressUpdate> {
    const user = await this.userRepo.findOne({ where: { id: dto.userId } });
    if (!user) throw new NotFoundException('User not found');

    const update = this.addressUpdateRepo.create({
      user,
      oldAddress: dto.oldAddress,
      newAddress: dto.newAddress,
    });

    return this.addressUpdateRepo.save(update);
  }

  async findAll(): Promise<AddressUpdate[]> {
    return this.addressUpdateRepo.find({ relations: ['user'] });
  }
}
