/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Questions } from './question.entites';
import { ReComments } from './recomment.entities';
import { Users } from './user.entites';

@Entity()
export class Comments {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    id: number;

    @Column({ type: 'varchar', name: 'content' })
    content: string;

    @Column({ type: 'int', name: 'QuestionId' })
    QuestionId: number;

    @Column({ type: 'int', name: 'UserId' })
    UserId: number;

    @ManyToOne(() => Users, Users => Users.Comments, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    @ManyToOne(() => Questions, Questions => Questions.Comments, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    @OneToMany(() => ReComments, ReComments => ReComments.Comments)
    ReComments: ReComments[];

    @JoinColumn([{ name: 'UserId', referencedColumnName: 'id' }])
    Users: Users;

    @JoinColumn([{ name: 'QuestionId', referencedColumnName: 'id' }])
    Questions: Questions;
}
