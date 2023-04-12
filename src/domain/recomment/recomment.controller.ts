import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/common/auth/jwt/jwt.guard';
import { Users } from 'src/entity/user.entites';
import { CreateReCommentDto } from './dto/input/create-recomment.dto';
import { ReCommentService } from './recomment.service';

@Controller('recomment')
export class RecommentController {
    constructor(private readonly recommentService: ReCommentService) {}

    @ApiOperation({ summary: '대댓글 작성 API' })
    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() createRecommentDto: CreateReCommentDto, @Req() req: Request): Promise<void> {
        const user = req.user as Users;
        return await this.recommentService.create(createRecommentDto, user.id);
    }
}
