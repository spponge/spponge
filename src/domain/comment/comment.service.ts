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

    async create(createCommentDto: CreateCommentDto, userId: number): Promise<void> {
        return await this.commentRepository.create(createCommentDto, userId);
    }

    async findAllByQuestionId(QuestionId: number): Promise<Comments[]> {
        return await this.commentRepository.findAllByQuestionId(QuestionId);
    }

    async update(commentId: number, updateCommentDto: UpdateCommentDto, userId: number): Promise<void> {
        const comment = await this.commentRepository.findOne(commentId);
        if (!comment) {
            throw new NotFoundException('없는 댓글입니다.');
        }
        if (comment.UserId !== userId) {
            throw new UnauthorizedException('수정 권한이 없습니다.');
        }
        return await this.commentRepository.update(commentId, updateCommentDto, userId);
    }

    async delete(commentId: number, userId): Promise<void> {
        const comment = await this.commentRepository.findOne(commentId);
        if (!comment) {
            throw new NotFoundException('없는 댓글입니다.');
        }
        if (comment.UserId !== userId) {
            throw new UnauthorizedException('삭제 권한이 없습니다.');
        }
        return await this.commentRepository.delete(commentId, userId);
    }
}
