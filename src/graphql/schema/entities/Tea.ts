import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, JoinTable, ManyToMany } from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';

import { Portion } from './Portion';

@ObjectType()
@Entity('tea')
export class Tea extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column('varchar')
  title: string;

  @Field(() => Number)
  @Column('float')
  price: number;

  @Field(() => Number)
  @Column('int')
  teaType: number;

  @Field(() => [Portion])
  @ManyToMany(() => Portion)
  @JoinTable({
    name: 'm2m_tea_portions',

    joinColumn: {
      name: 'teaId',
      referencedColumnName: 'id',
    },

    inverseJoinColumn: {
      name: 'portionId',
      referencedColumnName: 'id',
    },
  })
  portions: Portion[];
}
