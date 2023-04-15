import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Users } from '../entity/user.entities';

export default class UserSeeder implements Seeder {
    public async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<any> {
        const userFactory = await factoryManager.get(Users);
        // save 5 factory generated entities, to the database
        await userFactory.saveMany(5);
    }
}
