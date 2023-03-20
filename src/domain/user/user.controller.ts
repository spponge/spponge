/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/input/create-user.dto';
import { CreateOutputDto } from './dto/output/create';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @ApiTags('User')
    @Post()
    async create(@Body() createUserDto: CreateUserDto): Promise<void> {
        await this.userService.create(createUserDto);
        return;
    }
}
