import { Module } from '@nestjs/common';
import { AddressUpdateService } from './address-update.service';
import { AddressUpdateController } from './address-update.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressUpdate } from './address-update.entity';
import { User } from '../users/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AddressUpdate, User])],
  providers: [AddressUpdateService],
  controllers: [AddressUpdateController],
})
export class AddressUpdateModule {}
