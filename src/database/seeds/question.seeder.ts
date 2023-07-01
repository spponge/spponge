import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import {Questions} from '../entity/question.entities'

export default class QuestionSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    const questionFactory = await factoryManager.get(Questions);
    // save 5 factories generated entities, to the database
    await questionFactory.saveMany(100);
    console.log('Question seeding complete')
  }
}
