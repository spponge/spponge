/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comments } from 'src/entity/comment.entities';
import { CommentRepository } from './comment.repository.interface';
import { UserModule } from '../user/user.module';
import { UserRepository } from '../user/user.repository';
import { AuthModule } from 'src/domain/auth/auth.module';
import { CommentRepositoryImpl } from './comment.repository';

@Module({
    imports: [TypeOrmModule.forFeature([Comments]), UserModule, AuthModule],
    controllers: [CommentController],
    providers: [CommentService, { provide: CommentRepository, useClass: CommentRepositoryImpl }],
})
export class CommentModule {}
