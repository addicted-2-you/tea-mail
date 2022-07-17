import React from 'react';
import { useReactiveVar } from '@apollo/client';

import { userProfile } from '~/graphql/client/reactive-vars';

import Cart from './Cart';
import Orders from './Orders';

function CartView() {
  const currentUserProfile = useReactiveVar(userProfile);

  return (
    <div className="pt-7 flex justify-center gap-x-10">
      <Cart userProfile={currentUserProfile} />

      <Orders userProfile={currentUserProfile} />
    </div>
  );
}

export default CartView;
