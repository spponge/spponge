/* eslint-disable prettier/prettier */
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne, OneToOne,
  PrimaryGeneratedColumn,
  Unique
} from "typeorm";
import { Categories } from "./category.entities";
import { Users } from "./user.entities";

@Entity('CategoryUser')
export class CategoryUsers {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;
  @Column({ type: 'int', name: 'UserId' })
  UserId: number;
  @Column({ type: 'int', name: 'CategoryId' })
  CategoryId: number;
  @ManyToOne(() => Categories, (Categories) => Categories.CategoryUsers, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'CategoryId', referencedColumnName: 'id' }])
  Categories: Categories;
  @ManyToOne(() => Users, (Users) => Users.CategoryUsers, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'UserId', referencedColumnName: 'id' }])
  Users: Users;
}