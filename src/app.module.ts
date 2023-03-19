import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './common/middleware/logger';
import { QuestionModule } from './domain/question/question.module';
import { UserModule } from './domain/user/user.module';

@Module({
  imports: [UserModule, QuestionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer
      .apply(LoggerMiddleware)
      // .exclude({ path: '/', method: RequestMethod.GET })
      .forRoutes('*');
  }
}
