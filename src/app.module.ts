/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { LoggerMiddleware } from "./common/middleware/logger";
import { QuestionModule } from "./domain/question/question.module";
import { UserModule } from "./domain/user/user.module";
import { Users } from "./database/entity/user.entities";
import { Tiers } from "./database/entity/tier.entities";
import { Categories } from "./database/entity/category.entities";
import { CategoryUsers } from "./database/entity/categoryUser.entities";
import { Comments } from "./database/entity/comment.entities";
import { CommentLikes } from "./database/entity/commentLike.entities";
import { Questions } from "./database/entity/question.entities";
import { QuestionLikes } from "./database/entity/questionLike.entities";
import { ReComments } from "./database/entity/recomment.entities";

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
          synchronize: false,
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
