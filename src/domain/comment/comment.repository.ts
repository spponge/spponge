/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comments } from 'src/entity/comment.entities';
import { Repository } from 'typeorm';

@Injectable()
export class CommentRepository {
    constructor(@InjectRepository(Comments) private userModel: Repository<Comments>) {}
}
