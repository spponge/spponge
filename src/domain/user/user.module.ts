/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/entity/user.entities';
import { UserRepository } from './user.repository';

@Module({
    imports: [TypeOrmModule.forFeature([Users])],
    controllers: [UserController],
    providers: [UserService, UserRepository],
    exports: [TypeOrmModule, UserRepository],
})
export class UserModule {}
