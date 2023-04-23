/* eslint-disable prettier/prettier */
import { Users } from 'src/entity/user.entities';
import { CreateUserDto } from './dto/input/create-user.dto';
import { UpdateUserDto } from './dto/input/update-user.dto';
import { VerifyUserEmailDto } from './dto/input/verify-user-email.dto';

export interface IUserRepository {
    create(createUserDto: CreateUserDto): Promise<void>;
    findUserByEmail(emailVerificationDto: VerifyUserEmailDto): Promise<Users>;
    findUserByIdWithoutPassword(UserId: number): Promise<Users | null>;
    updateNickName(updateUserDto: UpdateUserDto, UserId: number): Promise<void>;
}
export const IUserRepository = Symbol('IUserRepository');
