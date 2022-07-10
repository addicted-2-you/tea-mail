import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Field, Float, Int, ObjectType } from 'type-graphql';

@ObjectType()
@Entity('tea_portions')
export class Portion extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column('varchar')
  title: string;

  @Field(() => Float)
  @Column('float')
  quantor: number;
}
