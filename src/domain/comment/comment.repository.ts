/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comments } from 'src/entity/comment.entities';
import { Repository } from 'typeorm';
import { ICommentRepository } from './comment.repository.interface';
import { CreateCommentDto } from './dto/input/create-comment.dto';
import { UpdateCommentDto } from './dto/input/update-comment.dto';

@Injectable()
export class CommentRepository implements ICommentRepository {
    constructor(@InjectRepository(Comments) private commentModel: Repository<Comments>) {}

    async create(createCommentDto: CreateCommentDto, UserId: number): Promise<void> {
        const newComment = await this.commentModel.create();
        newComment.content = createCommentDto.content;
        newComment.QuestionId = createCommentDto.QuestionId;
        newComment.UserId = UserId;
        await this.commentModel.save(newComment);
        return;
    }

    async findOne(CommentId: number): Promise<Comments> {
        return await this.commentModel.findOne({
            where: { id: CommentId },
        });
    }

    async findAllByQuestionId(QuestionId: number): Promise<Comments[]> {
        return await this.commentModel.find({
            where: { QuestionId },
        });
    }

    async update(CommentId: number, updateCommentDto: UpdateCommentDto, UserId: number): Promise<void> {
        const content = updateCommentDto.content;
        await this.commentModel.update({ id: CommentId, UserId }, { content });
        return;
    }

    async delete(CommentId: number, UserId: number): Promise<void> {
        await this.commentModel.delete({ id: CommentId, UserId });
    }
}
