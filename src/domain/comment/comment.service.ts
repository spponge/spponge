/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UserRepository } from '../user/user.repository';
import { CommentRepository } from './comment.repository';
import { CreateCommentDto } from './dto/input/create-comment.dto';

@Injectable()
export class CommentService {
    constructor(
        private readonly commentRepository: CommentRepository,
        private readonly userRepository: UserRepository,
    ) {}

    async create(createCommentDto: CreateCommentDto, email: string): Promise<void> {
        const userId = await (await this.userRepository.findUserByEmail({ email })).id;
        return await this.commentRepository.create(createCommentDto, userId);
    }
}
