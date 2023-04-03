/* eslint-disable prettier/prettier */
import { Comments } from 'src/entity/comment.entities';
import { CreateCommentDto } from './dto/input/create-comment.dto';
import { UpdateCommentDto } from './dto/input/update-comment.dto';

export interface CommentRepository {
    create(createCommentDto: CreateCommentDto, userId: number): Promise<void>;
    findAllByQuestionId(QuestionId: number): Promise<Comments[]>;
    update(id: number, updateCommentDto: UpdateCommentDto): Promise<void>;
    delete(id: number): Promise<void>;
}
export const CommentRepository = Symbol('CommentRepository');
