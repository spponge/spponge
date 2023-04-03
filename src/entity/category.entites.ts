/* eslint-disable prettier/prettier */
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne, OneToMany,
  PrimaryGeneratedColumn,
  Unique
} from "typeorm";
import { Users } from './user.entites';
import { CategoryUsers } from "./categoryUser.entites";

// Categorys Entity
@Entity('Categories')
export class Categories {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  category: string;

  Relations
  @ManyToMany(() => Users, (Users) => Users.Categories)
  Users: Users[];

  @OneToMany(() => CategoryUsers, (CategoryUsers) => CategoryUsers.Categories)
  CategoryUsers: CategoryUsers[];
}