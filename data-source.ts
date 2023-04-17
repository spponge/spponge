import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';

import TierSeeder  from './src/database/seeds/tier.seeder';
import UserSeeder  from './src/database/seeds/user.seeder';
import CategoryUserSeeder  from './src/database/seeds/categoryUser.seeder';
import CategorySeeder  from './src/database/seeds/category.seeder';
import QuestionSeeder from "./src/database/seeds/question.seeder";
import QuestionLikeSeeder from "./src/database/seeds/questionLike.seeder";
import CommentSeeder from "./src/database/seeds/comment.seeder";
import CommentLikeSeeder from "./src/database/seeds/commentLike.seeder";
import ReCommentSeeder from "./src/database/seeds/recomment.seeder";

import { Tiers } from "./src/database/entity/tier.entities";
import { Categories } from "./src/database/entity/category.entities";
import { Users } from "./src/database/entity/user.entities";
import { CategoryUsers } from "./src/database/entity/categoryUser.entities";
import { Questions } from "./src/database/entity/question.entities";
import { QuestionLikes } from "./src/database/entity/questionLike.entities";
import { Comments } from "./src/database/entity/comment.entities";
import { CommentLikes } from "./src/database/entity/commentLike.entities";
import { ReComments } from "./src/database/entity/recomment.entities";


const options: DataSourceOptions & SeederOptions = {
  type: "mysql",
  host: "localhost",
  username: 'user',
  password: '1080',
  database: 'spponge',
  entities: [
    Tiers,
    Categories,
    Users,
    CategoryUsers,
    Questions,
    QuestionLikes,
    Comments,
    CommentLikes,
    ReComments
  ],

  seeds: [
    TierSeeder,
    CategorySeeder,
    UserSeeder,
    CategoryUserSeeder,
    QuestionSeeder,
    QuestionLikeSeeder,
    CommentSeeder,
    CommentLikeSeeder,
    ReCommentSeeder
  ],
  factories: ['src/database/factories/*{.ts,.js}']
};

export const dataSource = new DataSource(options);
dataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err)
  })
