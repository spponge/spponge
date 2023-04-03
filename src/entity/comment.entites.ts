/* eslint-disable prettier/prettier */
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique
} from "typeorm";
import { Questions } from './question.entites';
import { ReComments } from './recomment.entites';
import { CommentLikes } from './commentLike.entites';
import { Users } from "./user.entites";

// Comment Entity
@Entity('Comment')
export class Comments {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;
  @Column({ nullable: true })
  comment: string;
  @Column({ type: 'int', name: 'QuestionId' })
  QuestionId: number;
  @Column({ type: 'int', name: 'UserId' })
  UserId: number;
  // Relations
  @ManyToOne(() => Questions, (question) => question.Comments, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @ManyToOne(() => Users, Users => Users.Comments, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @OneToMany(() => ReComments, (reComment) => reComment.Comments)
  ReComments: ReComments[];
  @OneToMany(() => CommentLikes, (CommentLikes)=>CommentLikes.Comments)
  CommentLikes: CommentLikes
  // Joins
  @JoinColumn([{ name: 'QuestionId', referencedColumnName: 'id' }])
  Questions: Questions;
  @JoinColumn([{ name: 'UserId', referencedColumnName: 'id' }])
  Users: Users;
}