import { Body, Controller, Post, Patch, Delete, Req, UseGuards, Param } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/common/auth/jwt/jwt.guard';
import { Users } from 'src/entity/user.entites';
import { CreateReCommentDto } from './dto/input/create-recomment.dto';
import { UpdateReCommentDto } from './dto/input/update-recomment.dto';
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

    @ApiOperation({ summary: '대댓글 수정 API' })
    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    async update(
        @Param('id') id: number,
        @Body() updateReCommentDto: UpdateReCommentDto,
        @Req() req: Request,
    ): Promise<void> {
        const user = req.user as Users;
        return await this.recommentService.update(id, updateReCommentDto, user.id);
    }

    @ApiOperation({ summary: '대댓글 삭제 API' })
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async delete(@Param('id') id: number, @Req() req: Request): Promise<void> {
        const user = req.user as Users;
        return await this.recommentService.delete(id, user.id);
    }
}
