import { Column, Entity, OneToMany, PrimaryGeneratedColumn,DataSource } from "typeorm";
import { Users } from "./user.entities";
import { dataSource } from "../../../data-source";

@Entity('Tier')
export class Tiers {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;
  @Column({ type: "varchar", name: "tierName" })
  tierName: string;
  @OneToMany(() => Users, (Users) => Users.Tiers)
  Users: Users[];

  public async getRandomTier(): Promise<Tiers> {
    // Tier Entity와의 관계 설정
    const tierRepository = dataSource.getRepository(Tiers);
    return await tierRepository
      .createQueryBuilder('tier') // 테이블 alias를 'tier'로 지정
      .select('tier.id') // alias를 통해 'tier' 테이블의 id 필드 선택
      .orderBy('RAND()') // 정렬
      .getOne();
  }
}
