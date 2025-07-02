import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { AddressUpdate } from './address-update/address-update.entity';
import { UsersModule } from './users/users.module';
import { AddressUpdateModule } from './address-update/address-update.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'relocate.db',
      entities: [User, AddressUpdate],
      synchronize: true, //auto-creating from entities
    }),
    TypeOrmModule.forFeature([User, AddressUpdate]),
    UsersModule,
    AddressUpdateModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
