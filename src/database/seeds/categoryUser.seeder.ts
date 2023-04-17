/*
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import {CategoryUsers} from '../entity/categoryUser.entities'

export default class CategoryUserSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    const categoryUserFactory = await factoryManager.get(CategoryUsers);
    // save 5 factories generated entities, to the database
    await categoryUserFactory.saveMany(300);
  }
}*/
