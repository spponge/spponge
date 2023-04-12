import { CreateReCommentDto } from './dto/input/create-recomment.dto';

export interface ReCommentRepository {
    create(createReCommentDto: CreateReCommentDto, userId: number): Promise<void>;
}
export const ReCommentRepository = Symbol('ReCommentRepository');
