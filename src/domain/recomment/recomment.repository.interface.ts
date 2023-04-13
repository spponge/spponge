import { ReComments } from 'src/entity/recomment.entities';
import { CreateReCommentDto } from './dto/input/create-recomment.dto';
import { UpdateReCommentDto } from './dto/input/update-recomment.dto';

export interface ReCommentRepository {
    create(createReCommentDto: CreateReCommentDto, userId: number): Promise<void>;
    findAllByCommentId(CommentId: number): Promise<ReComments[]>;
    update(updateReCommentDto: UpdateReCommentDto, userId: number): Promise<void>;
}
export const ReCommentRepository = Symbol('ReCommentRepository');
