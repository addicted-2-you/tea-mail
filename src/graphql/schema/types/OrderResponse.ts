import { Field, ObjectType } from 'type-graphql';

import { Order } from '../entities/Order';
import { TeaOrder } from './TeaOrder';

@ObjectType()
export class OrderResponse extends Order {
  @Field(() => [TeaOrder])
  teaOrders: TeaOrder[];
}
