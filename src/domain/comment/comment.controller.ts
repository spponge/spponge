/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Patch, Delete, UseGuards, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/domain/auth/jwt/jwt.guard';
import { User } from 'src/common/decorator/user.decorator';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/input/create-comment.dto';
import { UpdateCommentDto } from './dto/input/update-comment.dto';

@ApiTags('Comment')
@Controller('comment')
export class CommentController {
    constructor(private readonly commentService: CommentService) {}

    @ApiOperation({ summary: '댓글 작성 API' })
    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() createCommentDto: CreateCommentDto, @User() user): Promise<void> {
        return await this.commentService.create(createCommentDto, user.id);
    }

    @ApiOperation({ summary: '댓글 수정 API' })
    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    async update(
        @Param('id') CommentId: number,
        @Body() updateCommentDto: UpdateCommentDto,
        @User() user,
    ): Promise<void> {
        return await this.commentService.update(CommentId, updateCommentDto, user.id);
    }

    @ApiOperation({ summary: '댓글 삭제 API' })
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async delete(@Param('id') CommentId: number, @User() user): Promise<void> {
        return await this.commentService.delete(CommentId, user.id);
    }
}
