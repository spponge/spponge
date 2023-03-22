/* eslint-disable prettier/prettier */
import { Controller, Res, Get, Post, Body, Patch, Param, Delete,  } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/input/create-user.dto';
import { LoginUserDto } from './dto/input/login-user.dto';
import { CreateOutputDto } from './dto/output/create';
import { LoginOutputDto } from './dto/output/login.dto';

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
    async login(@Body() loginUserDto: LoginUserDto, @Res({ passthrough: true }) res: Response): Promise<void> {
        const jwt = await this.userService.login(loginUserDto);
        res.cookie('jwt', jwt.access_token,{
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000, //1 day
        });
        return ;
    }
}
