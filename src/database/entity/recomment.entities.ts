/* eslint-disable prettier/prettier */
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Comments } from './comment.entities';
import { Users } from "./user.entities";

// ReComment Entity
@Entity('ReComment')
export class ReComments {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;
  @Column({ nullable: true })
  content: string;
  @Column({ type: 'int', name: 'CommentId' })
  CommentId: number;
  @Column({ type: 'int', name: 'UserId' })
  UserId: number;
  // Relations
  @ManyToOne(() => Comments, (Comments) => Comments.ReComments,{
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'CommentId', referencedColumnName: 'id' }])
  Comments: Comments;
  @ManyToOne(() => Users, (Users) => Users.ReComments,{
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'UserId', referencedColumnName: 'id' }])
  Users: Users;
}
