/* eslint-disable class-methods-use-this */

import { Arg, Int, Mutation, Query, Resolver } from 'type-graphql';

// entities
import { M2M_TeaOrders } from '~/graphql/schema/entities/M2M_TeaOrders';
import { Order } from '~/graphql/schema/entities/Order';
import { OrderData } from '~/graphql/schema/types/OrderData';

@Resolver()
export class OrderResolver {
  @Query(() => [Order])
  async orders() {
    return Order.find();
  }

  @Mutation(() => [Order])
  async createOrder(
    @Arg('userId', () => Int) userId: number,
    @Arg('orderData', () => [OrderData]) orderData: [OrderData],
    @Arg('userphone', { nullable: true }) userphone?: string,
    @Arg('status', { nullable: true }) status?: string,
  ) {
    const insertResult = await Order.insert({ userId, userphone, status });
    const insertedOrder = await Order.findOne({ where: { id: insertResult.raw.insertId } });
    orderData.forEach(async ({ teaId, portionId }) => {
      await M2M_TeaOrders.insert({ teaId, portionId, orderId: insertResult.raw.insertId });
    });

    return [insertedOrder];
  }
}
