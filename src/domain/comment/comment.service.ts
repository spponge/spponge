/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from '../user/user.repository';
import { CommentRepository } from './comment.repository.interface';
import { CreateCommentDto } from './dto/input/create-comment.dto';

@Injectable()
export class CommentService {
    constructor(
        @Inject(CommentRepository)
        private readonly commentRepository: CommentRepository,
    ) {}

    async create(createCommentDto: CreateCommentDto, userId: number): Promise<void> {
        return await this.commentRepository.create(createCommentDto, userId);
    }
}
