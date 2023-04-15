/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ReComments } from 'src/entity/recomment.entities';
import { Repository } from 'typeorm';
import { CreateReCommentDto } from './dto/input/create-recomment.dto';
import { UpdateReCommentDto } from './dto/input/update-recomment.dto';
import { IReCommentRepository } from './recomment.repository.interface';

@Injectable()
export class ReCommentRepository implements IReCommentRepository {
    constructor(@InjectRepository(ReComments) private recommentModel: Repository<ReComments>) {}

    async create(createReCommentDto: CreateReCommentDto, UserId: number): Promise<void> {
        const newReComment = await this.recommentModel.create();
        newReComment.content = createReCommentDto.content;
        newReComment.CommentId = createReCommentDto.CommentId;
        newReComment.UserId = UserId;
        await this.recommentModel.save(newReComment);
        return;
    }

    async findOne(ReCommentId: number): Promise<ReComments> {
        return await this.recommentModel.findOne({
            where: { id: ReCommentId },
        });
    }

    async findAllByCommentId(CommentId: number): Promise<ReComments[]> {
        return await this.recommentModel.find({
            where: { CommentId },
        });
    }

    async update(ReCommentId: number, updateReCommentDto: UpdateReCommentDto, UserId: number): Promise<void> {
        const content = updateReCommentDto.content;
        await this.recommentModel.update({ id: ReCommentId, UserId }, { content });
        return;
    }

    async delete(ReCommentId: number, UserId: number): Promise<void> {
        await this.recommentModel.delete({ id: ReCommentId, UserId });
        return;
    }
}
