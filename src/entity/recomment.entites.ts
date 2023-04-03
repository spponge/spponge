/* eslint-disable prettier/prettier */
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Comments } from './comment.entites';

// ReComment Entity
@Entity('ReComment')
export class ReComments {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  comment: string;

  // Relations
  @ManyToOne(() => Comments, (Comments) => Comments.ReComments)
  Comments: Comments;
}
