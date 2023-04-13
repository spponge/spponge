import { Inject, Injectable } from '@nestjs/common';
import { ReComments } from 'src/entity/recomment.entities';
import { CreateReCommentDto } from './dto/input/create-recomment.dto';
import { UpdateReCommentDto } from './dto/input/update-recomment.dto';
import { ReCommentRepository } from './recomment.repository.interface';

@Injectable()
export class ReCommentService {
    constructor(
        @Inject(ReCommentRepository)
        private readonly recommentRepository: ReCommentRepository,
    ) {}

    async create(createReCommentDto: CreateReCommentDto, UserId: number): Promise<void> {
        return await this.recommentRepository.create(createReCommentDto, UserId);
    }

    async findAllByCommentId(CommentId: number): Promise<ReComments[]> {
        return await this.recommentRepository.findAllByCommentId(CommentId);
    }

    async update(id: number, updateReCommentDto: UpdateReCommentDto, UserId: number): Promise<void> {
        return await this.recommentRepository.update(id, updateReCommentDto, UserId);
    }
}
