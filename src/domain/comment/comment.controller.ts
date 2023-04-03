/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Patch, Req, UseGuards, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/common/auth/jwt-auth.guard';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/input/create-comment.dto';
import { JwtPayload } from 'src/common/auth/interfaces/jwt-payload.interface';
import { UpdateCommentDto } from './dto/input/update-comment.dto';

@ApiTags('Comment')
@Controller('comment')
export class CommentController {
    constructor(private readonly commentService: CommentService) {}

    @ApiOperation({ summary: '댓글 작성 API' })
    @UseGuards(JwtAuthGuard)
    @Post()
    async create(
        @Body() createCommentDto: CreateCommentDto,
        @Req() req: Request & { user: JwtPayload },
    ): Promise<void> {
        console.log(`@Controller: ${req.user.id}`);
        return await this.commentService.create(createCommentDto, req.user.id);
    }

    @ApiOperation({ summary: '댓글 수정 API' })
    // @UseGuards(JwtAuthGuard)
    @Patch(':id')
    async update(
        @Param('id') id: number,
        // @Req() req: Request & { user: JwtPayload },
        @Body() updateCommentDto: UpdateCommentDto,
    ): Promise<void> {
        return await this.commentService.update(id, updateCommentDto);
    }
}
