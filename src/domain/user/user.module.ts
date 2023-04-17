/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/database/entity/user.entities';
import { UserRepository } from './user.repository';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users]),
    PassportModule,
    JwtModule.register({
      secret: "my impooooooooooooooooortent secreeeeeeeeeeeeeeet",
      signOptions: { expiresIn: '60s' },
    }),],
  controllers: [UserController],
  providers: [UserService, UserRepository]
})
export class UserModule {}
