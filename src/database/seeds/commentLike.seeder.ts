import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import {CommentLikes} from '../entity/commentLike.entities'

export default class CommentLikeSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    const commentLikeFactory = await factoryManager.get(CommentLikes);
    // save 5 factories generated entities, to the database
    await commentLikeFactory.saveMany(300);
  }
}
