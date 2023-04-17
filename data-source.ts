import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { Tiers } from './src/database/entity/tier.entities';
import { Users } from './src/database/entity/user.entities';


const options: DataSourceOptions & SeederOptions = {
  type: "mysql",
  host: "localhost",
  username: 'user',
  password: '1080',
  database: 'spponge',
  entities: [Tiers, Users],

  seeds: ['src/database/seeds/*{.ts,.js}'],
  factories: ['src/database/factories/*{.ts,.js}']
};

export const dataSource = new DataSource(options);