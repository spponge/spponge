/* eslint-disable prettier/prettier */
import { Comments } from 'src/entity/comment.entities';
import { CreateCommentDto } from './dto/input/create-comment.dto';

export interface CommentRepository {
    create(createCommentDto: CreateCommentDto, userId: number): Promise<void>;
    findAllByQuestionId(QuestionId: number): Promise<Comments[]>;
}
export const CommentRepository = Symbol('CommentRepository');
