/* eslint-disable prettier/prettier */
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Comments } from './comment.entites';

// ReComment Entity
@Entity('ReComment')
export class ReComments {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;
  @Column({ nullable: true })
  comment: string;
  @Column({ type: 'int', name: 'CommentId' })
  CommentId: number;
  // Relations
  @ManyToOne(() => Comments, (Comments) => Comments.ReComments,{
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'CommentId', referencedColumnName: 'id' }])
  Comments: Comments;
}
