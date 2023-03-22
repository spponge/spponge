/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entity/user.entites';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from './dto/input/create-user.dto';
import { LoginUserDto } from "./dto/input/login-user.dto";
import { LoginOutputDto } from "./dto/output/login.dto";

@Injectable()
export class UserService {
    constructor(
      private readonly userRepository: UserRepository,
      private readonly jwtService: JwtService
    ) {}

    async create(createUserDto: CreateUserDto): Promise<void> {
        const { email, password, nickName } = createUserDto;
        const hashedPassword = await bcrypt.hash(password, 10);
        await this.userRepository.create({ email, password: hashedPassword, nickName });
        return;
    }

    async login(loginUserDto: LoginUserDto): Promise<LoginOutputDto> {
        const {password} = loginUserDto;
        const user = await this.userRepository.findUser(loginUserDto);
        if (!user) {
            throw new UnauthorizedException('로그인에 실패하였습니다.');
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new UnauthorizedException('로그인에 실패하였습니다.');
        }
        const payload = {nickname: user.nickName, sub: user.id};
        const access_token = this.jwtService.sign(payload)
        return {
            access_token
        }
    }
}
