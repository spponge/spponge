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
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  comment: string;

  // Relations
  @ManyToOne(() => Questions, (question) => question.Comments)
  Questions: Questions;

  @OneToMany(() => ReComments, (reComment) => reComment.Comments)
  ReComments: ReComments[];

  @OneToMany(() => CommentLikes, (CommentLikes)=>CommentLikes.Comments)
  CommentLikes: CommentLikes

  @ManyToOne(() => Users, Users => Users.Comments)
  Users:Users
}