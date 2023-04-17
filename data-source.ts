import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { Tiers } from './src/database/entity/tier.entities';
import { Users } from './src/database/entity/user.entities';
import { CategoryUsers } from './src/database/entity/categoryUser.entities';
import { Categories } from './src/database/entity/category.entities';
import  TierSeeder  from './src/database/seeds/zz.tier.seeder';
import  UserSeeder  from './src/database/seeds/zx.user.seeder';
import  CategoryUserSeeder  from './src/database/seeds/zw.categoryUser.seeder';
import  CategorySeeder  from './src/database/seeds/zy.category.seeder';


const options: DataSourceOptions & SeederOptions = {
  type: "mysql",
  host: "localhost",
  username: 'user',
  password: '1080',
  database: 'spponge',
  entities: [
    'src/database/entity/*{.ts,.js}'
  ],

  seeds: [
    'src/database/seeds/*{.ts,.js}'
  ],
  factories: ['src/database/factories/*{.ts,.js}']
};

export const dataSource = new DataSource(options);