import { DataSource, DataSourceOptions } from 'typeorm';
import { runSeeders, SeederOptions } from 'typeorm-extension';
import UserSeeder from './seed/user.seeder';
import UserFactory from './factory/user.factory';
import { Users } from './entity/user.entities';

(async () => {
    const options: DataSourceOptions & SeederOptions = {
        type: 'mysql',
        host: 'localhost',
        username: 'user',
        password: '1080',
        entities: [Users],

        seeds: [UserSeeder],
        factories: [UserFactory],
    };

    const dataSource = new DataSource(options);
    await dataSource.initialize();

    await runSeeders(dataSource);
})();
