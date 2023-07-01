import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import {Categories} from '../entity/category.entities'

export default class CategorySeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    const categoryFactory = await factoryManager.get(Categories);
    // save 5 factories generated entities, to the database
    await categoryFactory.saveMany(15);
    console.log('Category  seeding complete')
  }
}
