/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/entity/user.entites';
import { UserRepository } from './user.repository';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { MailService } from '../mailer/mail.service';
import { MailModule } from '../mailer/mail.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([Users]),
        PassportModule,
        JwtModule.register({
            secret: 'my impooooooooooooooooortent secreeeeeeeeeeeeeeet',
            signOptions: { expiresIn: '60s' },
        }),
        MailModule,
    ],
    controllers: [UserController],
    providers: [UserService, UserRepository, MailService],
})
export class UserModule {}
