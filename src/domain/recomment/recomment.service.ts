import { Inject, Injectable } from '@nestjs/common';
import { CreateReCommentDto } from './dto/input/create-recomment.dto';
import { ReCommentRepository } from './recomment.repository.interface';

@Injectable()
export class ReCommentService {
    constructor(
        @Inject(ReCommentRepository)
        private readonly recommentRepository: ReCommentRepository,
    ) {}

    async create(createReCommentDto: CreateReCommentDto, CommentId: number): Promise<void> {
        return await this.recommentRepository.create(createReCommentDto, CommentId);
    }
}
