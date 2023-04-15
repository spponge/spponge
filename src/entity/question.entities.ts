/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Comments } from './comment.entities';
import { Users } from './user.entities';

@Entity()
export class Questions {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    id: number;

    @Column({ type: 'varchar', name: 'title' })
    title: string;

    @Column({ type: 'varchar', name: 'content' })
    content: string;

    @Column({ type: 'int', name: 'UserId' })
    UserId: number;
    //
    @ManyToOne(() => Users, Users => Users.Questions, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    @OneToMany(() => Comments, Comments => Comments.Questions)
    Comments: Comments[];

    @JoinColumn([{ name: 'UserId', referencedColumnName: 'id' }])
    Users: Users;
}
