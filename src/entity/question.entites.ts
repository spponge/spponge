/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { QuestionLikes } from './questionLike.entites';
import { Comments } from './comment.entities';
import { Users } from './user.entites';

@Entity('Question')
export class Questions {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    id: number;
    @Column({ nullable: true })
    title: string;
    @Column({ nullable: true })
    content: string;
    @Column({ type: 'int', name: 'UserId' })
    UserId: number;
    // Joins
    @JoinColumn([{ name: 'UserId', referencedColumnName: 'id' }])
    Users: Users;
    // Relations
    @ManyToOne(() => Users, Users => Users.Questions, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    @OneToMany(() => QuestionLikes, QuestionLikes => QuestionLikes.Questions)
    QuestionLikes: QuestionLikes[];
    @OneToMany(() => Comments, Comments => Comments.Questions)
    Comments: Comments[];
}
