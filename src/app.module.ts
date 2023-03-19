import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionModule } from './domain/question/question.module';
import { UserModule } from './domain/user/user.module';

@Module({
  imports: [UserModule, QuestionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
