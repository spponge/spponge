/* eslint-disable prettier/prettier */
import {
  Column,
  Entity,
  JoinColumn, ManyToMany,
  ManyToOne, OneToMany,
  PrimaryGeneratedColumn,
  Unique
} from "typeorm";
import { Tiers } from './tier.entites';
import { CategoryUsers } from './categoryUser.entites';
import { Categories } from './category.entites';
import { Questions } from './question.entites';
import { QuestionLikes } from './questionLike.entites';
import { Comments } from './comment.entites';
import { CommentLikes } from './commentLike.entites';
@Entity()
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
  @Column({ type: 'int', name: 'TierId' })
  TierId: number;
  @ManyToOne(() => Tiers, (Tiers) => Tiers.Users, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @OneToMany(() => CategoryUsers, (CategoryUsers) => CategoryUsers.Users)
  CategoryUsers:CategoryUsers
  @OneToMany(() => Questions, (Questions) => Questions.Users)
  Questions:Questions[]
  @OneToMany(() => QuestionLikes, (QuestionLikes) => QuestionLikes.Users)
  QuestionLikes:QuestionLikes[]
  @OneToMany(() => Comments, (Comments) => Comments.Users)
  Comments:Comments[]
  @OneToMany(() => CommentLikes, (CommentLikes) => CommentLikes.Users)
  CommentLikes:CommentLikes[]
  // 다대다 지양
  // @ManyToMany(() => Categories, (Categories) => Categories.Users)
  // Categories: Categories[]
  // Joins
  @JoinColumn([{ name: 'TierId', referencedColumnName: 'id' }])
    // Relations
  Tiers: Tiers;
}



