/* eslint-disable prettier/prettier */
import {
  Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique
} from "typeorm";
import { Tiers } from './tier.entities';

import { CategoryUsers } from './categoryUser.entities';
import { Questions } from './question.entities';
import { QuestionLikes } from './questionLike.entities';
import { Comments } from './comment.entities';
import { CommentLikes } from './commentLike.entities';
import { ReComments } from "./recomment.entities";
import { dataSource } from "../../../data-source";

@Entity('User')
@Unique(['email'])
export class Users {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;
  @Column({ type: 'varchar', name: 'email' })
  email: string;
  @Column({ type: 'varchar', name: 'password' })
  password: string;
  @Column({ type: 'int', name: 'point' })
  point: number;
  @Column({ type: 'varchar', name: 'nickName' })
  nickName: string;
  @Column({ type: 'int', name: 'TierId', default: 1 })
  TierId: number;
  @ManyToOne(() => Tiers, (Tiers) => Tiers.Users, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'TierId', referencedColumnName: 'id' }])
  Tiers: Tiers;
  @OneToMany(() => Questions, (Questions) => Questions.Users)
  Questions:Questions[]
  @OneToMany(() => QuestionLikes, (QuestionLikes) => QuestionLikes.Users)
  QuestionLikes:QuestionLikes[]
  @OneToMany(() => Comments, (Comments) => Comments.Users)
  Comments:Comments[]
  @OneToMany(() => CommentLikes, (CommentLikes) => CommentLikes.Users)
  CommentLikes:CommentLikes[]
  @OneToMany(() => ReComments, (ReComments) => ReComments.Users)
  ReComments:ReComments[]
  @OneToMany(() => CategoryUsers, (CategoryUsers) => CategoryUsers.Users)
  CategoryUsers:CategoryUsers[]

  public async getRandomUser():Promise<Users> {
    // Tier Entity와의 관계 설정
    const userRepository = dataSource.getRepository(Users);
    return await userRepository
      .createQueryBuilder('user')
      .select('user.id')
      .orderBy('RAND()')
      .getOne();
  }
}



