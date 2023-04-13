import { ReComments } from 'src/entity/recomment.entities';
import { CreateReCommentDto } from './dto/input/create-recomment.dto';

export interface ReCommentRepository {
    create(createReCommentDto: CreateReCommentDto, userId: number): Promise<void>;
    findAllByCommentId(CommentId: number): Promise<ReComments[]>;
}
export const ReCommentRepository = Symbol('ReCommentRepository');
