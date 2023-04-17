/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt/jwt.strategy';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt', session: false }),
        JwtModule.register({
            secret: 'my impooooooooooooooooortent secreeeeeeeeeeeeeeet',
            signOptions: { expiresIn: '60m' },
        }),
        UserModule,
    ],
    providers: [JwtStrategy, AuthService],
    exports: [JwtModule],
    controllers: [AuthController],
})
export class AuthModule {}
