import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { Tiers } from './src/database/entity/tier.entities';
import { Users } from './src/database/entity/user.entities';
import { CategoryUsers } from './src/database/entity/categoryUser.entities';
import { Categories } from './src/database/entity/category.entities';
import  TierSeeder  from './src/database/seeds/tier.seeder';
import  UserSeeder  from './src/database/seeds/user.seeder';
import  CategoryUserSeeder  from './src/database/seeds/categoryUser.seeder';
import  CategorySeeder  from './src/database/seeds/category.seeder';


const options: DataSourceOptions & SeederOptions = {
  type: "mysql",
  host: "localhost",
  username: 'user',
  password: '1080',
  database: 'spponge',
  entities: [
    Tiers,
    Users,
    CategoryUsers,
    Categories
  ],

  seeds: [
    TierSeeder,
    UserSeeder,
    CategoryUserSeeder,
    CategorySeeder
  ],
  factories: ['src/database/factories/*{.ts,.js}']
};

export const dataSource = new DataSource(options);