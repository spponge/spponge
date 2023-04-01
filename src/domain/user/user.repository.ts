/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entity/user.entites';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/input/create-user.dto';
import { LoginUserDto } from './dto/input/login-user.dto';
import { VerifyUserEmailDto } from './dto/input/verify-user-email.dto';

@Injectable()
export class UserRepository {
    constructor(@InjectRepository(Users) private userModel: Repository<Users>) {}

    async create(createUserDto: CreateUserDto): Promise<void> {
        const newUser = this.userModel.create();
        newUser.email = createUserDto.email;
        newUser.password = createUserDto.password;
        newUser.nickName = createUserDto.nickName;
        newUser.point = 0;
        newUser.TierId = 1;
        await this.userModel.save(newUser);
        return;
    }

    async findUser(loginUserDto: LoginUserDto): Promise<Users> {
        console.log('here comes@UserRepo');
        const { email } = loginUserDto;
        return await this.userModel.findOne({
            where: {
                email,
            },
        });
    }

    async findUserByEmail(emailVerificationDto: VerifyUserEmailDto): Promise<Users> {
        const { email } = emailVerificationDto;
        return await this.userModel.findOne({
            where: {
                email,
            },
        });
    }
}
