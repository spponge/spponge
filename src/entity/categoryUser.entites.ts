/* eslint-disable prettier/prettier */
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne, OneToOne,
  PrimaryGeneratedColumn,
  Unique
} from "typeorm";
import { Categories } from "./category.entites";
import { Users } from "./user.entites";

@Entity()
export class CategoryUsers {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;
  @Column({ type: 'int', name: 'UserId' })
  UserId: number;
  @Column({ type: 'int', name: 'CategoryId' })
  CategoryId: number;
  // Relations
  @ManyToOne(() => Users, (Users) => Users.CategoryUsers, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @ManyToOne(() => Categories, (Categories) => Categories.CategoryUsers, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  // Joins
  @JoinColumn([{ name: 'UserId', referencedColumnName: 'id' }])
  Users: Users;
  @JoinColumn([{ name: 'CategoryId', referencedColumnName: 'id' }])
  Categories: Categories;
}
