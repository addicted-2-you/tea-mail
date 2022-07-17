import React from 'react';
import { useLazyQuery } from '@apollo/client';

// components
import TitledBlock from '~/components/TitledBlock';
import CartListItem from '~/components/cart-view/CartListItem';

import { GET_ORDERS } from '~/graphql/client/queries/orders-queries';
import { nop } from '~/utils/utils';
import OrderStatusLabel from '~/components/OrderStatusLabel';

function Orders({ userProfile }) {
  const [orders, setOrders] = React.useState([]);

  const [getOrders] = useLazyQuery(GET_ORDERS);

  React.useEffect(() => {
    const asyncWrapper = async () => {
      if (userProfile) {
        const {
          data: { orders: ordersData },
        } = await getOrders({ variables: { userId: userProfile.id } });
        setOrders(ordersData);
      }
    };

    asyncWrapper();
  }, [userProfile, getOrders]);

  return (
    <TitledBlock title="Заказы" classList="w-2/5">
      {orders.length ? (
        orders.map((order) => (
          <div key={order.id} className="mb-10 border-b-4 border-blue-300">
            <div className="pb-4 flex justify-between items-baseline">
              <p className="italic text-sm underline">
                Заказ №{order.id} от <span className="bold">{order.createdAt}</span>
              </p>

              <OrderStatusLabel status={order.status} />
            </div>

            <table className="w-full table-auto">
              <tbody>
                {order.teaOrders.map((item, index) => (
                  <tr
                    className="border-b-2 border-b-gray-300 even:bg-gray-100 last:border-none"
                    key={index}
                  >
                    <CartListItem
                      id={index}
                      tea={item.tea}
                      portion={item.portion}
                      deleteFromCart={nop}
                    />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))
      ) : (
        <p className="italic text-center">Заказов пока нет :)</p>
      )}
    </TitledBlock>
  );
}

export default Orders;
