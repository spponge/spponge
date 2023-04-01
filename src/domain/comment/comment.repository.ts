/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comments } from 'src/entity/comment.entities';
import { Repository } from 'typeorm';
import { CreateCommentDto } from './dto/input/create-comment.dto';

@Injectable()
export class CommentRepository {
    constructor(@InjectRepository(Comments) private commentModel: Repository<Comments>) {}

    async create(createCommentDto: CreateCommentDto, id: number): Promise<void> {
        const newComment = await this.commentModel.create();
        newComment.content = createCommentDto.content;
    }
}
