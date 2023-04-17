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
import { Questions } from './question.entities';
import { ReComments } from './recomment.entities';
import { CommentLikes } from './commentLike.entities';
import { Users } from "./user.entities";
import { dataSource } from "../../../data-source";

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

  public async getRandomComment():Promise<Comments> {
    // Tier Entity와의 관계 설정
    const commentRepository = dataSource.getRepository(Comments);
    return await commentRepository
      .createQueryBuilder('comment')
      .select('id')
      .orderBy('RANDOM()')
      .getOne();
  }
}
