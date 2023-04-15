/* eslint-disable prettier/prettier */
import { Inject, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { ReComments } from 'src/entity/recomment.entities';
import { CreateReCommentDto } from './dto/input/create-recomment.dto';
import { UpdateReCommentDto } from './dto/input/update-recomment.dto';
import { IReCommentRepository } from './recomment.repository.interface';

@Injectable()
export class ReCommentService {
    constructor(
        @Inject(IReCommentRepository)
        private readonly recommentRepository: IReCommentRepository,
    ) {}

    async create(createReCommentDto: CreateReCommentDto, UserId: number): Promise<void> {
        return await this.recommentRepository.create(createReCommentDto, UserId);
    }

    async findAllByCommentId(CommentId: number): Promise<ReComments[]> {
        return await this.recommentRepository.findAllByCommentId(CommentId);
    }

    async update(ReCommentId: number, updateReCommentDto: UpdateReCommentDto, UserId: number): Promise<void> {
        const recomment = await this.recommentRepository.findOne(ReCommentId);
        if (!recomment) {
            throw new NotFoundException('없는 댓글입니다.');
        }
        if (recomment.UserId !== UserId) {
            throw new UnauthorizedException('수정 권한이 없습니다.');
        }
        return await this.recommentRepository.update(ReCommentId, updateReCommentDto, UserId);
    }

    async delete(ReCommentId: number, UserId: number): Promise<void> {
        const recomment = await this.recommentRepository.findOne(ReCommentId);
        if (!recomment) {
            throw new NotFoundException('없는 댓글입니다.');
        }
        if (recomment.UserId !== UserId) {
            throw new UnauthorizedException('삭제 권한이 없습니다.');
        }
        return await this.recommentRepository.delete(ReCommentId, UserId);
    }
}
