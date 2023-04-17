/* eslint-disable */
import { IsEmail, IsString, IsNotEmpty, Matches, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
    @IsEmail()
    @IsNotEmpty()
    @ApiProperty({
        example: 'honggd@gmail.com',
        description: '이메일',
        required: true,
    })
    email: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        example: 'asdf1234!',
        description: '비밀번호',
        required: true,
    })
    password: string;
}
