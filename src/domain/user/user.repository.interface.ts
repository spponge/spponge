/* eslint-disable prettier/prettier */
import { Users } from 'src/entity/user.entities';
import { CreateUserDto } from './dto/input/create-user.dto';
import { VerifyUserEmailDto } from './dto/input/verify-user-email.dto';

export interface IUserRepository {
    create(createUserDto: CreateUserDto): Promise<void>;
    findUserByEmail(emailVerificationDto: VerifyUserEmailDto): Promise<Users>;
    findUserByIdWithoutPassword(userId: number): Promise<Users | null>;
}
export const IUserRepository = Symbol('IUserRepository');
