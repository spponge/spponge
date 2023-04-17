import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { ReComments } from '../entity/recomment.entities'

export default class RecommentSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    const recommentFactory = await factoryManager.get(ReComments);
    // save 5 factories generated entities, to the database
    await recommentFactory.saveMany(200);
  }
}
