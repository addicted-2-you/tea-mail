import { Field, Int, ObjectType } from 'type-graphql';
import { BaseEntity, PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

@ObjectType()
@Entity('m2m_tea_orders')
export class M2M_TeaOrders extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Int)
  @Column('int')
  teaId: number;

  @Field(() => Int)
  @Column('int')
  orderId: number;

  @Field(() => Int)
  @Column('int')
  portionId: number;
}
