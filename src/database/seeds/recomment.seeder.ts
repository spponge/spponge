import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { ReComments } from '../entity/recomment.entities'

export default class ReCommentSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    const reCommentFactory = await factoryManager.get(ReComments);
    // save 5 factories generated entities, to the database
    await reCommentFactory.saveMany(200);
    console.log('ReComment seeding complete')
  }
}
