import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';

import TierSeeder  from './src/database/seeds/tier.seeder';
import UserSeeder  from './src/database/seeds/user.seeder';
import CategoryUserSeeder  from './src/database/seeds/categoryUser.seeder';
import CategorySeeder  from './src/database/seeds/category.seeder';
import QuestionSeeder from "./src/database/seeds/question.seeder";
import QuestionLikeSeeder from "./src/database/seeds/questionLike.seeder";
import CommentSeeder from './src/database/seeds/comment.seeder';
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

// 모듈이 아니라서 nest config 사용이 힘들다
import * as dotenv from 'dotenv';
dotenv.config();

const options: DataSourceOptions & SeederOptions = {
    type: 'mysql',
    host: process.env.HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [Tiers, Categories, Users, CategoryUsers, Questions, QuestionLikes, Comments, CommentLikes, ReComments],
    // seed 는 순서대로 실행해야 하기 때문에 glob 사용이 힘들다
    seeds: [
        TierSeeder,
        CategorySeeder,
        UserSeeder,
        CategoryUserSeeder,
        QuestionSeeder,
        QuestionLikeSeeder,
        CommentSeeder,
        CommentLikeSeeder,
        ReCommentSeeder,
    ],
    factories: ['src/database/factories/*{.ts,.js}'],
};

export const dataSource = new DataSource(options);
dataSource
    .initialize()
    .then(() => {
        console.log('Data Source has been initialized!');
    })
    .catch(err => {
        console.error('Error during Data Source initialization', err);
    });
