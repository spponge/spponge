/* eslint-disable prettier/prettier */
import { forwardRef, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/entity/user.entities';
import { UserRepository } from './user.repository';
import { PassportModule } from '@nestjs/passport';
import { AuthModule } from 'src/common/auth/auth.module';

@Module({
    imports: [TypeOrmModule.forFeature([Users]), PassportModule, forwardRef(() => AuthModule)],
    controllers: [UserController],
    providers: [UserService, UserRepository],
    exports: [TypeOrmModule, UserRepository],
})
export class UserModule {}
