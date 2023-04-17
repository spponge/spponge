import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./user.entities";
import { dataSource } from "../../../data-source";

@Entity()
export class Tiers {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;
  @Column({ type: "varchar", name: "tierName" })
  tierName: string;
  @OneToMany(() => Users, (Users) => Users.Tiers)
  Users: Users[];

  public async getRandomTier():Promise<Tiers> {
    // Tier Entity와의 관계 설정
    const tierRepository = dataSource.getRepository(Tiers);
    return await tierRepository
      .createQueryBuilder('tier')
      .select('id')
      .orderBy('RANDOM()')
      .getOne();
  }
}
