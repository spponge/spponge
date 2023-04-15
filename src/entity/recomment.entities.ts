/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Comments } from './comment.entities';
import { Users } from './user.entities';

@Entity()
export class ReComments {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    id: number;

    @Column({ type: 'varchar', name: 'content' })
    content: string;

    @Column({ type: 'int', name: 'CommentId' })
    CommentId: number;

    @ManyToOne(() => Comments, Comments => Comments.ReComments, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    @ManyToOne(() => Users, Users => Users.ReComments, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    @JoinColumn([{ name: 'UserId', referencedColumnName: 'id' }])
    Users: Users;
    @JoinColumn([{ name: 'CommentId', referencedColumnName: 'id' }])
    Comments: Comments;
}
