/* eslint-disable prettier/prettier */
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Users } from './user.entites';
import { Comments } from './comment.entites';

// CommentLike Entity
@Entity('CommentLike')
export class CommentLikes {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;
  @Column({ type: 'int', name: 'CommentId' })
  CommentId: number;
  @Column({ type: 'int', name: 'UserId' })
  UserId: number;
  // Relations
  @ManyToOne(() => Users, (Users) => Users.CommentLikes, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @ManyToOne(() => Comments, (Comments) => Comments.CommentLikes, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  // Joins
  @JoinColumn([{ name: 'UserId', referencedColumnName: 'id' }])
  Users: Users;
  @JoinColumn([{ name: 'CommentId', referencedColumnName: 'id' }])
  Comments: Comments;
}
