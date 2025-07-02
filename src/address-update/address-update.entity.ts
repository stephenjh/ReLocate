import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class AddressUpdate {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.addressUpdates)
  user: User;

  @Column()
  userId: number;

  @Column()
  oldAddress: string;

  @Column()
  newAddress: string;

  @CreateDateColumn()
  updatedAt: Date;
}
