/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserRepository } from 'src/domain/user/user.repository';
import { Users } from 'src/entity/user.entities';
import { Payload } from './jwt.payload';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly userRepository: UserRepository) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'my impooooooooooooooooortent secreeeeeeeeeeeeeeet',
            ignoreExpiration: false,
        });
    }

    async validate(payload: Payload): Promise<Users> {
        const user = await this.userRepository.findUserByIdWithoutPassword(payload.sub);
        if (user) {
            return user;
        } else {
            throw new UnauthorizedException();
        }
    }
}
