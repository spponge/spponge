/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ReComments } from 'src/entity/recomment.entities';
import { Repository } from 'typeorm';
import { CreateReCommentDto } from './dto/input/create-recomment.dto';
import { ReCommentRepository } from './recomment.repository.interface';

@Injectable()
export class ReCommentRepositoryImpl implements ReCommentRepository {
    constructor(@InjectRepository(ReComments) private recommentModel: Repository<ReComments>) {}

    async create(createReCommentDto: CreateReCommentDto, userId: number): Promise<void> {
        const newReComment = await this.recommentModel.create();
        newReComment.content = createReCommentDto.content;
        newReComment.CommentId = createReCommentDto.CommentId;
        newReComment.UserId = userId;
        await this.recommentModel.save(newReComment);
        return;
    }
}
