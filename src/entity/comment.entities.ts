/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Questions } from './question.entites';
import { Replies } from './reply.entities';

@Entity()
export class Comments {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    id: number;

    @Column({ type: 'varchar', name: 'content' })
    content: string;

    @Column({ type: 'int', name: 'QuestionId' })
    QuestionId: number;

    @ManyToOne(() => Questions, Questions => Questions.Comments, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    @OneToMany(() => Replies, Replies => Replies.Comments)
    Replies: Replies[];

    @JoinColumn([{ name: 'QuestionId', referencedColumnName: 'id' }])
    Questions: Questions;
}
