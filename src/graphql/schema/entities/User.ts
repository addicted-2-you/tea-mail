import { Field, GraphQLISODateTime, Int, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('users')
export class User extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column('varchar')
  username: string;

  @Column('varchar')
  password: string;

  @Field(() => GraphQLISODateTime)
  @Column('datetime')
  createdat: Date;
}
