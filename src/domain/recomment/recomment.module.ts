import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReComments } from 'src/entity/recomment.entities';
import { RecommentController } from './recomment.controller';
import { ReCommentRepository } from './recomment.repository';
import { IReCommentRepository } from './recomment.repository.interface';
import { ReCommentService } from './recomment.service';

@Module({
    imports: [TypeOrmModule.forFeature([ReComments])],
    controllers: [RecommentController],
    providers: [ReCommentService, { provide: IReCommentRepository, useClass: ReCommentRepository }],
})
export class RecommentModule {}
