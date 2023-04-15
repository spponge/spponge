/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comments } from 'src/entity/comment.entities';
import { ICommentRepository } from './comment.repository.interface';
import { UserModule } from '../user/user.module';
import { AuthModule } from 'src/common/auth/auth.module';
import { CommentRepository } from './comment.repository';

@Module({
    imports: [TypeOrmModule.forFeature([Comments]), UserModule, AuthModule],
    controllers: [CommentController],
    providers: [CommentService, { provide: ICommentRepository, useClass: CommentRepository }],
})
export class CommentModule {}
