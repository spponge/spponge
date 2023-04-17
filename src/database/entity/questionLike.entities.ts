/*/!* eslint-disable prettier/prettier *!/
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Questions } from './question.entities';
import { Users } from './user.entities';

// QuestionLike Entity
@Entity('QuestionLike')
export class QuestionLikes {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;
  @Column({ type: 'int', name: 'QuestionId' })
  QuestionId: number;
  @Column({ type: 'int', name: 'UserId' })
  UserId: number;
    // Relations
  @ManyToOne(() => Questions, (Questions) => Questions.QuestionLikes, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'QuestionId', referencedColumnName: 'id' }])
  Questions: Questions;
  @ManyToOne(() => Users, (Users) => Users.QuestionLikes, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'UserId', referencedColumnName: 'id' }])
  Users: Users;
}*/
