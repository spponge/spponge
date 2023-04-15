/* eslint-disable prettier/prettier */
import { Inject, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { Comments } from 'src/entity/comment.entities';
import { CommentRepository } from './comment.repository.interface';
import { CreateCommentDto } from './dto/input/create-comment.dto';
import { UpdateCommentDto } from './dto/input/update-comment.dto';

@Injectable()
export class CommentService {
    constructor(
        @Inject(CommentRepository)
        private readonly commentRepository: CommentRepository,
    ) {}

    async create(createCommentDto: CreateCommentDto, UserId: number): Promise<void> {
        return await this.commentRepository.create(createCommentDto, UserId);
    }

    async findAllByQuestionId(QuestionId: number): Promise<Comments[]> {
        return await this.commentRepository.findAllByQuestionId(QuestionId);
    }

    async update(CommentId: number, updateCommentDto: UpdateCommentDto, UserId): Promise<void> {
        const comment = await this.commentRepository.findOne(CommentId);
        if (!comment) {
            throw new NotFoundException('없는 댓글입니다.');
        }
        if (comment.UserId !== UserId) {
            throw new UnauthorizedException('수정 권한이 없습니다.');
        }
        return await this.commentRepository.update(CommentId, updateCommentDto, UserId);
    }

    async delete(CommentId: number, UserId): Promise<void> {
        const comment = await this.commentRepository.findOne(CommentId);
        if (!comment) {
            throw new NotFoundException('없는 댓글입니다.');
        }
        if (comment.UserId !== UserId) {
            throw new UnauthorizedException('삭제 권한이 없습니다.');
        }
        return await this.commentRepository.delete(CommentId, UserId);
    }
}
