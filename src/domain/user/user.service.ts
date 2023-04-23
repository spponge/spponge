/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Users } from 'src/entity/user.entities';
import { CreateUserDto } from './dto/input/create-user.dto';
import { IUserRepository } from './user.repository.interface';

@Injectable()
export class UserService {
    constructor(
        @Inject(IUserRepository)
        private readonly userRepository: IUserRepository,
    ) {}

    async create(createUserDto: CreateUserDto): Promise<void> {
        const { email, password, confirmPassword, nickName } = createUserDto;
        const checkDuplicatedUser = await this.userRepository.findUserByEmail({ email });
        if (checkDuplicatedUser) {
            throw new Error('이미 존재하는 계정입니다.');
        }
        if (password !== confirmPassword) {
            throw new Error('비밀번호가 일치하지 않습니다.');
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await this.userRepository.create({ email, password: hashedPassword, confirmPassword, nickName });
        return;
    }

    async findOne(UserId: number): Promise<Users> {
        return await this.userRepository.findUserByIdWithoutPassword(UserId);
    }
}
