/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Comments } from './comment.entities';

@Entity()
export class Replies {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    id: number;

    @Column({ type: 'varchar', name: 'content' })
    content: string;

    @Column({ type: 'int', name: 'CommentId' })
    CommentId: number;

    @ManyToOne(() => Comments, Comments => Comments.Replies, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    @JoinColumn([{ name: 'CommentId', referencedColumnName: 'id' }])
    Comments: Comments;
}
