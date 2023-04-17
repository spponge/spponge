/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/input/create-user.dto';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    async create(createUserDto: CreateUserDto): Promise<void> {
        const { email, password, confirmPassword, nickName } = createUserDto;
        const checkDuplicatedUser = await this.userRepository.findUserByEmail({ email });
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
}
