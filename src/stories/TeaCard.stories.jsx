import React from 'react';

// components
import TeaCard from '../components/TeaCard';

// utils
import { nop } from '../utils/utils';

// mocks
import { MILK_OOLONG_TEA } from '../../mocks/tea-mocks';

// styles
import '../index.scss';

export default {
  title: 'Tea Card',
  component: TeaCard,
};

export function Primary() {
  return (
    <TeaCard
      id={MILK_OOLONG_TEA.id}
      title={MILK_OOLONG_TEA.title}
      price={MILK_OOLONG_TEA.price}
      portions={MILK_OOLONG_TEA.portions}
      addToCart={nop}
      deleteTea={nop}
    />
  );
}
