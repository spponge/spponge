/* eslint-disable prettier/prettier */
import { Controller, Res, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/input/create-user.dto';
import { LoginUserDto } from './dto/input/login-user.dto';
import { VerifyUserEmailDto } from './dto/input/verify-user-email.dto';
import { Response } from 'express';

@ApiTags('User')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @ApiOperation({ summary: '이메일 인증코드 전송 API' })
    @Post('codeEmail')
    async sendVerificationCode(@Body() emailVerificationDto: VerifyUserEmailDto): Promise<string> {
        const code = await this.userService.sendVerificationCode(emailVerificationDto);
        return code;
    }

    @ApiOperation({ summary: '회원가입 API' })
    @Post('signup')
    async create(@Body() createUserDto: CreateUserDto): Promise<void> {
        await this.userService.create(createUserDto);
        return;
    }

    @ApiOperation({ summary: '유저 로그인 API' })
    @Post('login')
    async login(@Body() loginUserDto: LoginUserDto, @Res({ passthrough: true }) response: Response): Promise<void> {
        const jwt = await this.userService.login(loginUserDto);
        response.cookie('jwt', jwt.access_token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000, //1 day
        });
        return;
    }
}
