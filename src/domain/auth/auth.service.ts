import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from '../user/user.repository';
import { LoginUserDto } from './dto/input/login-user.dto';
import { LoginOutputDto } from './dto/output/login.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly userRepository: UserRepository, private readonly jwtService: JwtService) {}

    async login(loginUserDto: LoginUserDto): Promise<LoginOutputDto> {
        const { email, password } = loginUserDto;
        const user = await this.userRepository.findUserByEmail({ email });
        if (!user) {
            throw new UnauthorizedException('로그인에 실패하였습니다.');
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new UnauthorizedException('로그인에 실패하였습니다.');
        }
        const payload = { nickname: user.nickName, sub: user.id };
        const access_token = this.jwtService.sign(payload);
        return {
            access_token,
        };
    }
}
