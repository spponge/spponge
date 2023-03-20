/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entity/user.entites';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/input/create-user.dto';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    async create(createUserDto: CreateUserDto): Promise<void> {
        const { email, password, nickName } = createUserDto;
        const hashedPassword = await bcrypt.hash(password, 10);
        await this.userRepository.create({ email, password: hashedPassword, nickName });
        return;
    }
}
