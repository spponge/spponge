/* eslint-disable prettier/prettier */
import { Comments } from 'src/entity/comment.entities';
import { CreateCommentDto } from './dto/input/create-comment.dto';
import { UpdateCommentDto } from './dto/input/update-comment.dto';

export interface CommentRepository {
    create(createCommentDto: CreateCommentDto, UserId: number): Promise<void>;
    findOne(CommentId: number): Promise<Comments>;
    findAllByQuestionId(QuestionId: number): Promise<Comments[]>;
    update(Commentid: number, updateCommentDto: UpdateCommentDto, UserId: number): Promise<void>;
    delete(Commentid: number, UserId: number): Promise<void>;
}
export const CommentRepository = Symbol('CommentRepository');
