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

  @ManyToOne(() => Users, (Users) => Users.CategoryUsers)
  Users: Users

  @ManyToOne(() => Categories, (Categories) => Categories.CategoryUsers)
  Categories: Categories
}
