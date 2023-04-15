import { ReComments } from 'src/entity/recomment.entities';
import { CreateReCommentDto } from './dto/input/create-recomment.dto';
import { UpdateReCommentDto } from './dto/input/update-recomment.dto';

export interface IReCommentRepository {
    create(createReCommentDto: CreateReCommentDto, UserId: number): Promise<void>;
    findOne(ReCommentId: number): Promise<ReComments>;
    findAllByCommentId(CommentId: number): Promise<ReComments[]>;
    update(ReCommentId: number, updateReCommentDto: UpdateReCommentDto, UserId: number): Promise<void>;
    delete(ReCommentId: number, UserId: number): Promise<void>;
}
export const IReCommentRepository = Symbol('IReCommentRepository');
