import { Field, GraphQLISODateTime, Int, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('orders')
export class Order extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Int, { nullable: true })
  @Column({ type: 'int', nullable: true })
  userId: int;

  @Field(() => String, { nullable: true })
  @Column({ type: 'varchar', nullable: true })
  userphone: string;

  @Field(() => String)
  @Column({ type: 'enum', enum: ['new', 'inprogress', 'done', 'cancelled'] })
  status: string;

  @Field(() => GraphQLISODateTime)
  @Column('date')
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  @Column('date')
  updatedAt: Date;
}
