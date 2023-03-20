/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/input/create-user.dto';
import { LoginUserDto } from './dto/input/login-user.dto';
import { CreateOutputDto } from './dto/output/create';
import { LoginOutputDto } from './dto/output/login';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @ApiTags('User')
    @Post()
    async create(@Body() createUserDto: CreateUserDto): Promise<void> {
        await this.userService.create(createUserDto);
        return;
    }

    @Post('login')
    async login(@Body() loginUserDto: LoginUserDto): Promise<void> {
        await this.userService.login(loginUserDto);
        return;
        /*토큰을 던져줌
        * 토큰은 jwt를 바로?
        * 공식문서 jwt 부분 참고하기
        * */
    }


}
