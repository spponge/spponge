/* eslint-disable prettier/prettier */
import { Comments } from 'src/entity/comment.entities';
import { CreateCommentDto } from './dto/input/create-comment.dto';
import { UpdateCommentDto } from './dto/input/update-comment.dto';

export interface CommentRepository {
    create(createCommentDto: CreateCommentDto, userId: number): Promise<void>;
    findOne(commentId: number): Promise<Comments>;
    findAllByQuestionId(QuestionId: number): Promise<Comments[]>;
    update(id: number, updateCommentDto: UpdateCommentDto, userId: number): Promise<void>;
    delete(id: number, userId: number): Promise<void>;
}
export const CommentRepository = Symbol('CommentRepository');
