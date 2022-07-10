import React from 'react';
import { useReactiveVar } from '@apollo/client';

// components
import CartListItem from '~/components/cart-view/CartListItem';

import { cart } from '~/graphql/client/reactive-vars';

// icons
import ClearCartIcon from '~/assets/img/ban-solid.svg';
import CircleCheckIcon from '~/assets/img/circle-check-solid.svg';

function CartView() {
  const currentCart = useReactiveVar(cart);

  const fullPrice = React.useMemo(
    () => currentCart.reduce((acc, item) => acc + item.tea.price * item.teaPortion.quantor, 0),
    [currentCart],
  );

  const clearCart = React.useCallback(() => {
    cart([]);
    window.localStorage.setItem('cart', '[]');
  }, []);

  const confirmOrder = React.useCallback(() => {
    // make a request to the server to create the order
    // if success, clear the cart
    // if fail, show an error message
  }, []);

  const deleteFromCart = React.useCallback(
    (id) => {
      const newCart = currentCart.filter((item) => item.id !== id);
      cart(newCart);
      window.localStorage.setItem('cart', JSON.stringify(newCart));
    },
    [currentCart],
  );

  return (
    <div className="pt-7 flex flex-col justify-start items-center">
      <div className="pb-10 w-2/3 border-2 border-gray-200 rounded-xl">
        <div className="px-4 py-2 rounded-lg bg-gray-200">
          <h2 className="text-2xl text-center font-bold">Корзина</h2>
        </div>

        <div className="px-3 pt-10">
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
        </div>
      </div>
    </div>
  );
}

export default CartView;
