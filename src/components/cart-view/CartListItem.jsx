import React from 'react';

// icons
import CircleMinusIcon from '~/assets/img/circle-minus-solid.svg';

function CartListItem({ id, tea, portion, deleteFromCart }) {
  return (
    <>
      <td>{tea.title}</td>
      <td>{portion.quantor * tea.price} BYN</td>
      <td className="flex justify-end">
        <button
          className="cursor-pointer opacity-75 hover:opacity-100"
          type="button"
          onClick={() => deleteFromCart(id)}
        >
          <img width="16" src={CircleMinusIcon} alt="minus" />
        </button>
      </td>
    </>
  );
}

export default CartListItem;
