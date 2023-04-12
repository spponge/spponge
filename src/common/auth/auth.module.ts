/* eslint-disable prettier/prettier */
import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/domain/user/user.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt/jwt.strategy';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt', session: false }),
        JwtModule.register({
            secret: 'my impooooooooooooooooortent secreeeeeeeeeeeeeeet',
            signOptions: { expiresIn: '60m' },
        }),
        forwardRef(() => UserModule),
    ],
    providers: [AuthService, JwtStrategy],
    exports: [JwtModule],
})
export class AuthModule {}
