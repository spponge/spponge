/* eslint-disable prettier/prettier */
import { CreateCommentDto } from './dto/input/create-comment.dto';

export interface CommentRepository {
    create(createCommentDto: CreateCommentDto, userId: number): Promise<void>;
}
export const CommentRepository = Symbol('CommentRepository');
