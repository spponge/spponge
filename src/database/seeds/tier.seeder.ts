import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import {Tiers} from '../entity/tier.entities'

export default class TierSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    const tierFactory = await factoryManager.get(Tiers);
    // save 5 factories generated entities, to the database
    await tierFactory.saveMany(10);
  }
}
