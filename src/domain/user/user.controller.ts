/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Get, Patch, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/input/create-user.dto';
import { JwtAuthGuard } from '../auth/jwt/jwt.guard';
import { User } from 'src/common/decorator/user.decorator';
import { Users } from 'src/entity/user.entities';
import { UpdateUserDto } from './dto/input/update-user.dto';

@ApiTags('User')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @ApiOperation({ summary: '회원가입 API' })
    @Post()
    async create(@Body() createUserDto: CreateUserDto): Promise<void> {
        await this.userService.create(createUserDto);
        return;
    }

    @ApiOperation({ summary: '회원 정보 조회 API' })
    @UseGuards(JwtAuthGuard)
    @Get()
    async findOne(@User() user): Promise<Users> {
        return await this.userService.findOne(user.id);
    }

    @ApiOperation({ summary: '회원 정보(닉네임) 수정 API' })
    @UseGuards(JwtAuthGuard)
    @Patch()
    async updateNickName(@Body() updateUserDto: UpdateUserDto, @User() user): Promise<void> {
        return await this.userService.updateNickNmae(updateUserDto, user.id);
    }
}
