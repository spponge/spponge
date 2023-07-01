import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import {QuestionLikes} from '../entity/questionLike.entities'

export default class QuestionLikeSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    const questionLikeFactory = await factoryManager.get(QuestionLikes);
    // save 5 factories generated entities, to the database
    await questionLikeFactory.saveMany(1000);
    console.log('QuestionLike seeding complete')
  }
}
