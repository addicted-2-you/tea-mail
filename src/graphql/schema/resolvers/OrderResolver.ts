/* eslint-disable class-methods-use-this */

import { Arg, Int, Mutation, Query, Resolver } from 'type-graphql';

// entities
import { M2M_TeaOrders } from '~/graphql/schema/entities/M2M_TeaOrders';
import { Order } from '~/graphql/schema/entities/Order';

// types
import { OrderData } from '~/graphql/schema/types/OrderData';
import { OrderResponse } from '~/graphql/schema/types/OrderResponse';

@Resolver()
export class OrderResolver {
  @Query(() => [OrderResponse])
  async orders(@Arg('userId', () => Int) userId: number) {
    const orders = await Order.find({
      where: { userId },
      relations: ['tea', 'portions'],
      relationLoadStrategy: 'query',
      loadRelationIds: true,
    });

    return orders.map((order) => ({
      ...order,

      teaOrders: order.tea.map((tea, index) => ({
        tea,
        portion: order.portions[index],
      })),
    }));
  }

  @Mutation(() => [Order])
  async createOrder(
    @Arg('userId', () => Int) userId: number,
    @Arg('orderData', () => [OrderData]) orderData: [OrderData],
    @Arg('userphone', { nullable: true }) userphone?: string,
    @Arg('status', { nullable: true }) status?: string,
  ) {
    if (!orderData.length) {
      throw new Error('No order data provided');
    }

    const insertResult = await Order.insert({ userId, userphone, status });
    const insertedOrder = await Order.findOne({ where: { id: insertResult.raw.insertId } });
    orderData.forEach(async ({ teaId, portionId }) => {
      await M2M_TeaOrders.insert({ teaId, portionId, orderId: insertResult.raw.insertId });
    });

    return [insertedOrder];
  }
}
