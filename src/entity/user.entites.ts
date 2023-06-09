/* eslint-disable prettier/prettier */
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Tiers } from './tier.entites';

@Entity()
@Unique(['email'])
export class Users {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column({ type: 'varchar', name: 'email' })
  email: string;

  @Column({ type: 'varchar', name: 'password' })
  password: string;

  @Column({ type: 'int', name: 'point' })
  point: number;

  @Column({ type: 'varchar', name: 'nickName' })
  nickName: string;

  @Column({ type: 'int', name: 'TierId' })
  TierId: number;

  @ManyToOne(() => Tiers, (Tiers) => Tiers.Users, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'TierId', referencedColumnName: 'id' }])
  Tiers: Tiers;
}
