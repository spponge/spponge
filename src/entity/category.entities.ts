/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { Users } from './user.entities';
import { CategoryUsers } from './categoryUser.entities';

// Categorys Entity
@Entity('Categories')
export class Categories {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    id: number;
    @Column({ nullable: true })
    category: string;
    // Relations
    @OneToMany(() => CategoryUsers, CategoryUsers => CategoryUsers.Categories)
    CategoryUsers: CategoryUsers[];

    // 다대다 지양
    // @ManyToMany(() => Users, (Users) => Users.Categories)
    // Users: Users[];
}
