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
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // Relations
  @ManyToOne(() => Users, (Users) => Users.CommentLikes)
  Users: Users;

  @ManyToOne(() => Comments, (Comments) => Comments.CommentLikes)
  Comments: Comments;
}
