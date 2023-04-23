/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entity/user.entities';
import { Repository } from 'typeorm';
import { IUserRepository } from './user.repository.interface';
import { CreateUserDto } from './dto/input/create-user.dto';
import { VerifyUserEmailDto } from './dto/input/verify-user-email.dto';

@Injectable()
export class UserRepository implements IUserRepository {
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

    async findUserByEmail(emailVerificationDto: VerifyUserEmailDto): Promise<Users> {
        const { email } = emailVerificationDto;
        return await this.userModel.findOne({
            where: {
                email,
            },
        });
    }

    async findUserByIdWithoutPassword(userId: number): Promise<Users | null> {
        const user = await this.userModel
            .createQueryBuilder('user')
            .select(['user.id', 'user.email', 'user.nickName'])
            .where('user.id = :id', { id: userId })
            .getOne();
        return user;
    }
}
