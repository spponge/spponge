/* eslint-disable prettier/prettier */
import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/input/create-user.dto';

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
}
