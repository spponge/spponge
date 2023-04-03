/* eslint-disable prettier/prettier */
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne, OneToMany,
  PrimaryGeneratedColumn,
  Unique
} from "typeorm";
import { QuestionLikes } from './questionLike.entites';
import { Comments } from './comment.entites';
import { Users } from './user.entites';

@Entity('Question')
export class Questions {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  title: string;

  @Column({ nullable: true })
  content: string;

  // Relations
  @OneToMany(() => QuestionLikes, (QuestionLikes) => QuestionLikes.Questions)
  QuestionLikes: QuestionLikes[];

  @OneToMany(() => Comments, (Comments) => Comments.Questions)
  Comments: Comments[];

  @ManyToOne(() => Users, Users => Users.Questions, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })

  @JoinColumn([{ name: 'UserId', referencedColumnName: 'id' }])
  Users: Users;
}
