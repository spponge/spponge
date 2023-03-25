/* eslint-disable */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getHello(): string {
        return 'actions Test3!';
    }
}
