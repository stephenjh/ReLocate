import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { AddressUpdate } from '../address-update/address-update.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => AddressUpdate, update => update.user)
  addressUpdates: AddressUpdate[];

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;
}
