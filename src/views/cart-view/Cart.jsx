import React from 'react';
import { useReactiveVar } from '@apollo/client';

// components
import TitledBlock from '~/components/TitledBlock';
import CartListItem from '~/components/cart-view/CartListItem';

// hooks
import useCreateOrderMutation from '~/hooks/graphql-client/orders/useCreateOrderMutation';

import { cart } from '~/graphql/client/reactive-vars';

// icons
import ClearCartIcon from '~/assets/img/ban-solid.svg';
import CircleCheckIcon from '~/assets/img/circle-check-solid.svg';

function Cart({ userProfile }) {
  const currentCart = useReactiveVar(cart);

  const { createOrderMutation } = useCreateOrderMutation();

  const fullPrice = React.useMemo(
    () => currentCart.reduce((acc, item) => acc + item.tea.price * item.teaPortion.quantor, 0),
    [currentCart],
  );

  const clearCart = React.useCallback(() => {
    cart([]);
    window.localStorage.setItem('cart', '[]');
  }, []);

  const confirmOrder = React.useCallback(async () => {
    // make a request to the server to create the order
    const orderData = currentCart.map((item) => ({
      teaId: item.tea.id,
      portionId: item.teaPortion.id,
    }));

    if (userProfile) {
      await createOrderMutation({ variables: { userId: userProfile.id, orderData } });
    }

    // if success, clear the cart
    clearCart();
  }, [clearCart, createOrderMutation, currentCart, userProfile]);

  const deleteFromCart = React.useCallback(
    (id) => {
      const newCart = currentCart.filter((item) => item.id !== id);
      cart(newCart);
      window.localStorage.setItem('cart', JSON.stringify(newCart));
    },
    [currentCart],
  );

  return (
    <TitledBlock title="Корзина" classList="w-2/5">
      {currentCart.length ? (
        <>
          <div className="flex gap-x-2">
            <button type="button" onClick={clearCart}>
              <img
                className="cursor-pointer opacity-75 hover:opacity-100"
                width="16"
                src={ClearCartIcon}
                alt="clear cart"
              />
            </button>

            <button type="button" onClick={confirmOrder}>
              <img
                className="cursor-pointer opacity-75 hover:opacity-100"
                width="16"
                src={CircleCheckIcon}
                alt="confirm cart"
              />
            </button>
          </div>

          <table className="w-full table-auto">
            <tbody>
              {currentCart.map((item) => (
                <tr className="border-b-2 border-b-gray-300 even:bg-gray-100" key={item.id}>
                  <CartListItem
                    id={item.id}
                    tea={item.tea}
                    portion={item.teaPortion}
                    deleteFromCart={deleteFromCart}
                  />
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-end">
            <strong>Итого: {fullPrice} BYN</strong>
          </div>
        </>
      ) : (
        <p className="italic text-center">Корзина пуста :)</p>
      )}
    </TitledBlock>
  );
}

export default Cart;
