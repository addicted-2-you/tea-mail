import React from 'react';
import { useReactiveVar } from '@apollo/client';

import { cart } from '~/graphql/client/reactive-vars';

function CartView() {
  const currentCart = useReactiveVar(cart);

  console.log(currentCart);

  return (
    <table>
      <thead>
        <tr>
          <th>Tea</th>
          <th>Portion</th>
          <th>Number</th>
        </tr>
      </thead>

      <tbody>
        {currentCart.map((currentCartItem) => (
          <tr key={`${currentCartItem.tea.id}-${currentCartItem.teaPortion.id}`}>
            <td>{currentCartItem.tea.title}</td>
            <td>{currentCartItem.teaPortion.title}</td>
            <td>{currentCartItem.count}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CartView;
