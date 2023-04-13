/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comments } from 'src/entity/comment.entities';
import { Repository } from 'typeorm';
import { CommentRepository } from './comment.repository.interface';
import { CreateCommentDto } from './dto/input/create-comment.dto';
import { UpdateCommentDto } from './dto/input/update-comment.dto';

@Injectable()
export class CommentRepositoryImpl implements CommentRepository {
    constructor(@InjectRepository(Comments) private commentModel: Repository<Comments>) {}

    async create(createCommentDto: CreateCommentDto, userId: number): Promise<void> {
        const newComment = await this.commentModel.create();
        newComment.content = createCommentDto.content;
        newComment.QuestionId = createCommentDto.questionId;
        newComment.UserId = userId;
        await this.commentModel.save(newComment);
        return;
    }

    async findOne(commentId: number): Promise<Comments> {
        return await this.commentModel.findOne({
            where: { id: commentId },
        });
    }

    async findAllByQuestionId(QuestionId: number): Promise<Comments[]> {
        return await this.commentModel.find({
            where: { QuestionId },
        });
    }

    async update(id: number, updateCommentDto: UpdateCommentDto, userId: number): Promise<void> {
        const content = updateCommentDto.content;
        await this.commentModel.update({ id, UserId: userId }, { content });
        return;
    }

    async delete(id: number, userId: number): Promise<void> {
        await this.commentModel.delete({ id, UserId: userId });
    }
}
