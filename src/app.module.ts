/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { LoggerMiddleware } from "./common/middleware/logger";
import { QuestionModule } from "./domain/question/question.module";
import { UserModule } from "./domain/user/user.module";
import { Tiers } from "./entity/tier.entites";
import { Users } from "./entity/user.entites";
import { Categories } from "./entity/category.entites";
import { CategoryUsers } from "./entity/categoryUser.entites";
import { Comments } from "./entity/comment.entites";
import { CommentLikes } from "./entity/commentLike.entites";
import { Questions } from "./entity/question.entites";
import { QuestionLikes } from "./entity/questionLike.entites";
import { ReComments } from "./entity/recomment.entites";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          type: "mysql",
          host: "localhost",
          // host: '192.168.1.35',
          // host: 'host.docker.internal',
          // host: 'mysql-server',
          port: 3306,
          username: configService.get("DB_USERNAME"),
          password: configService.get("DB_PASSWORD"),
          database: configService.get("DB_DATABASE"),
          entities: [Tiers, Users, Categories, CategoryUsers, Comments, CommentLikes, Questions, QuestionLikes, ReComments],
          synchronize: true
        };
      }
    }),
    UserModule,
    QuestionModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer
      .apply(LoggerMiddleware)
      // .exclude({ path: '/', method: RequestMethod.GET })
      .forRoutes("*");
  }
}
