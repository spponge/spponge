/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/entity/user.entities';
import { UserRepository } from './user.repository';
import { IUserRepository } from './user.repository.interface';

@Module({
    imports: [TypeOrmModule.forFeature([Users])],
    controllers: [UserController],
    providers: [
        UserService,
        UserRepository,
        {
            provide: IUserRepository,
            useClass: UserRepository,
        },
    ],
    exports: [TypeOrmModule, UserRepository],
})
export class UserModule {}
