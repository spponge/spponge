import { MailerService } from '@nestjs-modules/mailer';
import { ConflictException, Injectable } from '@nestjs/common';
import { VerifyUserEmailDto } from '../user/dto/input/verify-user-email.dto';

@Injectable()
export class MailService {
    constructor(private readonly mailerService: MailerService) {}

    async sendVerificationCode(emailVerificationDto: VerifyUserEmailDto): Promise<string> {
        console.log('Herecomes@MailService');
        const { email } = emailVerificationDto;
        const code = Math.floor(Math.random() * 1000000).toString();

        try {
            await this.mailerService.sendMail({
                to: email,
                subject: '인증코드',
                text: '인증코드: ${code}',
            });
            console.log('success!!!!!');
        } catch (error) {
            throw new ConflictException(error.message);
        }
        return code;
    }
}
