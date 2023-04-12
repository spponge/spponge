import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReComments } from 'src/entity/recomment.entities';
import { RecommentController } from './recomment.controller';
import { ReCommentRepositoryImpl } from './recomment.repository';
import { ReCommentRepository } from './recomment.repository.interface';
import { ReCommentService } from './recomment.service';

@Module({
    imports: [TypeOrmModule.forFeature([ReComments])],
    controllers: [RecommentController],
    providers: [ReCommentService, { provide: ReCommentRepository, useClass: ReCommentRepositoryImpl }],
})
export class RecommentModule {}
