import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./user.entites";

@Entity()
export class Tiers {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;
  @Column({ type: "varchar", name: "tierName" })
  tierName: string;
  // @OneToMany(() => Users, (Users) => Users.Tiers)
  // Users: Users[];
}
