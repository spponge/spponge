/* eslint-disable prettier/prettier */
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Questions } from './question.entites';
import { Users } from './user.entites';

// QuestionLike Entity
@Entity('QuestionLike')
export class QuestionLikes {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // Relations
  @ManyToOne(() => Questions, (Questions) => Questions.QuestionLikes)
  Questions: Questions;

  @ManyToOne(() => Users, (Users) => Users.QuestionLikes)
  Users: Users;
}
