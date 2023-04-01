import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/common/auth/jwt-auth.guard';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/input/create-comment.dto';
import { JwtPayload } from 'src/common/auth/interfaces/jwt-payload.interface';

@ApiTags('Comment')
@Controller('comment')
export class CommentController {
    constructor(private readonly commentService: CommentService) {}

    @ApiOperation({ summary: '댓글작성 API' })
    @UseGuards(JwtAuthGuard)
    @Post()
    async create(
        @Body() createCommentDto: CreateCommentDto,
        @Req() req: Request & { user: JwtPayload },
    ): Promise<void> {
        return await this.commentService.create(createCommentDto, req.user.email);
    }
}
