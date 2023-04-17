/*
/!* eslint-disable prettier/prettier *!/
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique
} from "typeorm";
import { Questions } from './question.entities';
import { ReComments } from './recomment.entities';
import { CommentLikes } from './commentLike.entities';
import { Users } from "./user.entities";

// Comment Entity
@Entity('Comment')
export class Comments {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;
  @Column({ nullable: true })
  content: string;
  @Column({ type: 'int', name: 'QuestionId' })
  QuestionId: number;
  @Column({ type: 'int', name: 'UserId' })
  UserId: number;
  // Relations
  @ManyToOne(() => Questions, (question) => question.Comments, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'QuestionId', referencedColumnName: 'id' }])
  Questions: Questions;
  @ManyToOne(() => Users, Users => Users.Comments, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'UserId', referencedColumnName: 'id' }])
  Users: Users;
  @OneToMany(() => ReComments, (reComment) => reComment.Comments)
  ReComments: ReComments[];
  @OneToMany(() => CommentLikes, (CommentLikes)=>CommentLikes.Comments)
  CommentLikes: CommentLikes
}*/
