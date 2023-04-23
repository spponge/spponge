/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entity/user.entities';
import { Repository } from 'typeorm';
import { IUserRepository } from './user.repository.interface';
import { CreateUserDto } from './dto/input/create-user.dto';
import { VerifyUserEmailDto } from './dto/input/verify-user-email.dto';
import { UpdateUserDto } from './dto/input/update-user.dto';

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
            .select(['user.id', 'user.email', 'user.nickName', 'user.point', 'user.TierId'])
            .where('user.id = :id', { id: userId })
            .getOne();
        return user;
    }

    async updateNickName(updateUserDto: UpdateUserDto, UserId: number): Promise<void> {
        const { nickName } = updateUserDto;
        await this.userModel.update({ id: UserId }, { nickName: nickName });
        return;
    }

    async delete(UserId: number): Promise<void> {
        await this.userModel.delete({ id: UserId });
    }
}
