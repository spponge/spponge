import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class VerifyUserEmailDto {
    @IsEmail()
    @IsNotEmpty()
    @ApiProperty({
        example: 'honggd@gmail.com',
        description: '이메일',
        required: true,
    })
    email: string;
}
