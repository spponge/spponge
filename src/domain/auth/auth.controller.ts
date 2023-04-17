import { Body, Controller, Post, Res } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/input/login-user.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @ApiOperation({ summary: '유저 로그인 API' })
    @Post('login')
    async login(@Body() loginUserDto: LoginUserDto, @Res({ passthrough: true }) response: Response): Promise<void> {
        const jwt = await this.authService.login(loginUserDto);
        response.cookie('jwt', jwt.access_token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000, //1 day
        });
        return;
    }
}
