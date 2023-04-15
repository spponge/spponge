import { ReComments } from 'src/entity/recomment.entities';
import { CreateReCommentDto } from './dto/input/create-recomment.dto';
import { UpdateReCommentDto } from './dto/input/update-recomment.dto';

export interface IReCommentRepository {
    create(createReCommentDto: CreateReCommentDto, userId: number): Promise<void>;
    findOne(recommentId: number): Promise<ReComments>;
    findAllByCommentId(CommentId: number): Promise<ReComments[]>;
    update(id: number, updateReCommentDto: UpdateReCommentDto, userId: number): Promise<void>;
    delete(id: number, userId: number): Promise<void>;
}
export const IReCommentRepository = Symbol('IReCommentRepository');
