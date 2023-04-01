import { Injectable } from '@nestjs/common';
import { CommentRepository } from './comment.repository';
import { CreateCommentDto } from './dto/input/create-comment.dto';

@Injectable()
export class CommentService {
    constructor(private readonly commentRepository: CommentRepository) {}

    async create(createCommentDto: CreateCommentDto, email: string): Promise<void> {
        return await this.commentRepository.create(createCommentDto, id);
    }
}
