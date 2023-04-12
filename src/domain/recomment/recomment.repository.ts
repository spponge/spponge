/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateReCommentDto } from './dto/input/create-recomment.dto';
import { ReCommentRepository } from './recomment.repository.interface';

@Injectable()
export class ReCommentRepositoryImpl implements ReCommentRepository {
    create(createReCommentDto: CreateReCommentDto, userId: number): Promise<void> {
        throw new Error('Method not implemented.');
    }
}
