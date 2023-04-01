/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';
import { CommentRepository } from './comment.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comments } from 'src/entity/comment.entities';
import { UserModule } from '../user/user.module';

@Module({
    imports: [TypeOrmModule.forFeature([Comments]), UserModule],
    controllers: [CommentController],
    providers: [CommentService, CommentRepository],
})
export class CommentModule {}
