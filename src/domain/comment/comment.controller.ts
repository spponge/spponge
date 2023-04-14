/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Patch, Delete, Req, UseGuards, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/common/auth/jwt/jwt.guard';
import { Users } from 'src/entity/user.entites';
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
    async create(@Body() createCommentDto: CreateCommentDto, @Req() req: Request): Promise<void> {
        const user = req.user as Users;
        return await this.commentService.create(createCommentDto, user.id);
    }

    @ApiOperation({ summary: '댓글 수정 API' })
    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    async update(
        @Param('id') commentId: number,
        @Body() updateCommentDto: UpdateCommentDto,
        @Req() req: Request,
    ): Promise<void> {
        const user = req.user as Users;
        return await this.commentService.update(commentId, updateCommentDto, user.id);
    }

    @ApiOperation({ summary: '댓글 삭제 API' })
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async delete(@Param('id') commentId: number, @Req() req: Request): Promise<void> {
        const user = req.user as Users;
        return await this.commentService.delete(commentId, user.id);
    }
}
