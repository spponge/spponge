/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { Comments } from './comment.entities';
import { Questions } from './question.entities';
import { ReComments } from './recomment.entities';
import { Tiers } from './tier.entities';

@Entity()
@Unique(['email'])
export class Users {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
    id: number;

    @Column({ type: 'varchar', name: 'email' })
    email: string;

    @Column({ type: 'varchar', name: 'password' })
    password: string;

    @Column({ type: 'int', name: 'point' })
    point: number;

    @Column({ type: 'varchar', name: 'nickName' })
    nickName: string;

    @Column({ type: 'int', name: 'TierId' })
    TierId: number;

    @ManyToOne(() => Tiers, Tiers => Tiers.Users, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    @OneToMany(() => Comments, Comments => Comments.Users)
    Comments: Comments[];

    @OneToMany(() => ReComments, ReComments => ReComments.Users)
    ReComments: ReComments[];

    @OneToMany(() => Questions, Questions => Questions.Users)
    Questions: Questions[];

    @JoinColumn([{ name: 'TierId', referencedColumnName: 'id' }])
    Tiers: Tiers;
}
