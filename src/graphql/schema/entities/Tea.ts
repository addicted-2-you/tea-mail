import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';

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
  units: number;

  @Field(() => Number)
  @Column('int')
  teatype: number;
}
