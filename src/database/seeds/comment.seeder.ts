import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import {Comments} from '../entity/comment.entities'

export default class CommentSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    const commentFactory = await factoryManager.get(Comments);
    // save 5 factories generated entities, to the database
    await commentFactory.saveMany(300);
    console.log('Comment seeding complete')
  }
}
