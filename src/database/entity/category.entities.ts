/* eslint-disable prettier/prettier */
import {
  Column,
  Entity,OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CategoryUsers } from "./categoryUser.entities";
import { dataSource } from "../../../data-source";

// Categorys Entity
@Entity('Category')
export class Categories {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;
  @Column({ nullable: true })
  category: string;
  // Relations
  @OneToMany(() => CategoryUsers, (CategoryUsers) => CategoryUsers.Categories)
  CategoryUsers: CategoryUsers[];

  // 다대다 지양
  // @ManyToMany(() => Users, (Users) => Users.Categories)
  // Users: Users[];

  public async getRandomCategory():Promise<Categories> {
    // Tier Entity와의 관계 설정
    const categoryRepository = dataSource.getRepository(Categories);
    return await categoryRepository
      .createQueryBuilder('category')
      .select('category.id')
      .orderBy('RAND()')
      .getOne();
  }
}
