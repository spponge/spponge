import { Body, Controller, Post, Patch, Delete, UseGuards, Param } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/common/auth/jwt/jwt.guard';
import { User } from 'src/common/decorator/user.decorator';
import { CreateReCommentDto } from './dto/input/create-recomment.dto';
import { UpdateReCommentDto } from './dto/input/update-recomment.dto';
import { ReCommentService } from './recomment.service';

@Controller('recomment')
export class RecommentController {
    constructor(private readonly recommentService: ReCommentService) {}

    @ApiOperation({ summary: '대댓글 작성 API' })
    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() createRecommentDto: CreateReCommentDto, @User() user): Promise<void> {
        return await this.recommentService.create(createRecommentDto, user.id);
    }

    @ApiOperation({ summary: '대댓글 수정 API' })
    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    async update(
        @Param('id') ReCommentId: number,
        @Body() updateReCommentDto: UpdateReCommentDto,
        @User() user,
    ): Promise<void> {
        return await this.recommentService.update(ReCommentId, updateReCommentDto, user.id);
    }

    @ApiOperation({ summary: '대댓글 삭제 API' })
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async delete(@Param('id') ReCommentId: number, @User() user): Promise<void> {
        return await this.recommentService.delete(ReCommentId, user.id);
    }
}
