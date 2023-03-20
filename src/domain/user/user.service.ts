/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entity/user.entites';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/input/create-user.dto';
import { LoginUserDto } from "./dto/input/login-user.dto";

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    async create(createUserDto: CreateUserDto): Promise<void> {
        const { email, password, nickName } = createUserDto;
        const hashedPassword = await bcrypt.hash(password, 10);
        await this.userRepository.create({ email, password: hashedPassword, nickName });
        return;
    }

    async login(loginUserDto: LoginUserDto): Promise<void> {
        const {password} = loginUserDto;
        const find_user = await this.userRepository.findUser(loginUserDto);
        const isMatch = await bcrypt.compare(password, find_user.password);
        if (!isMatch) {
            throw new UnauthorizedException('로그인에 실패하였습니다.');
        }
    }
}
