/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from './dto/input/create-user.dto';
import { LoginUserDto } from './dto/input/login-user.dto';
import { LoginOutputDto } from './dto/output/login.dto';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository, private readonly jwtService: JwtService) {}

    async create(createUserDto: CreateUserDto): Promise<void> {
        const { email, password, confirmPassword, nickName } = createUserDto;
        const checkDuplicatedUser = await this.userRepository.findUser({ email, password });
        if (checkDuplicatedUser) {
            console.log('here!!');
            throw new Error('이미 존재하는 계정입니다.');
        }
        if (password !== confirmPassword) {
            throw new Error('비밀번호가 일치하지 않습니다.');
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await this.userRepository.create({ email, password: hashedPassword, confirmPassword, nickName });
        return;
    }

    async login(loginUserDto: LoginUserDto): Promise<LoginOutputDto> {
        const { password } = loginUserDto;
        const user = await this.userRepository.findUser(loginUserDto);
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
