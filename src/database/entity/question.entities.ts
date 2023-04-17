/*
/!* eslint-disable prettier/prettier *!/
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne, OneToMany,
  PrimaryGeneratedColumn,
  Unique
} from "typeorm";
import { QuestionLikes } from './questionLike.entities';
import { Comments } from './comment.entities';
import { Users } from './user.entities';

@Entity('Question')
export class Questions {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;
  @Column({ nullable: true })
  title: string;
  @Column({ nullable: true })
  content: string;
  @Column({ type: 'int', name: 'UserId' })
  UserId: number;
  @ManyToOne(() => Users, Users => Users.Questions, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'UserId', referencedColumnName: 'id' }])
  Users: Users;
  @OneToMany(() => QuestionLikes, (QuestionLikes) => QuestionLikes.Questions)
  QuestionLikes: QuestionLikes[];
  @OneToMany(() => Comments, (Comments) => Comments.Questions)
  Comments: Comments[];
}
*/
