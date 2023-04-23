/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class UpdateUserDto {
    @IsString()
    @IsNotEmpty()
    @Matches(/^[가-힣a-zA-Z]+$/)
    @ApiProperty({
        example: '길똥이',
        description: '유저 닉네임',
        required: true,
    })
    nickName: string;
}
