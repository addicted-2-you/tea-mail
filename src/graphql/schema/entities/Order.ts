import { BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Field, GraphQLISODateTime, Int, ObjectType } from 'type-graphql';

// models
import { Tea } from './Tea';
import { Portion } from './Portion';

@ObjectType()
@Entity('orders')
export class Order extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Int, { nullable: true })
  @Column({ type: 'int', nullable: true })
  userId: number;

  @Field(() => String, { nullable: true })
  @Column({ type: 'varchar', nullable: true })
  userphone: string;

  @Field(() => String)
  @Column({ type: 'enum', enum: ['new', 'inprogress', 'done', 'cancelled'] })
  status: string;

  // @Field(() => [Tea])
  @ManyToMany(() => Tea)
  @JoinTable({
    name: 'm2m_tea_orders',

    joinColumn: {
      name: 'orderId',
    },

    inverseJoinColumn: {
      name: 'teaId',
      referencedColumnName: 'id',
    },
  })
  tea: Tea[];

  // @Field(() => [Portion])
  @ManyToMany(() => Portion)
  @JoinTable({
    name: 'm2m_tea_orders',

    joinColumn: {
      name: 'orderId',
    },

    inverseJoinColumn: {
      name: 'portionId',
      referencedColumnName: 'id',
    },
  })
  portions: Portion[];

  @Field(() => String)
  @Column('date')
  createdAt: string;

  @Field(() => String)
  @Column('date')
  updatedAt: string;
}
