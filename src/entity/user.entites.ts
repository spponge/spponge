import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Tiers } from './tier.entites';

@Entity()
export class Users {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column({ type: 'string', name: 'email' })
  email: string;

  @Column({ type: 'string', name: 'password' })
  password: string;

  @Column({ type: 'int', name: 'point' })
  point: number;

  @Column({ type: 'string', name: 'nickName' })
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
