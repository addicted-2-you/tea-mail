import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// components
import TeaCard from '~/components/TeaCard';

// utils
import { nop } from '~/utils/utils';

const teaArray = [
  {
    id: 1,
    title: 'Молочный Улун',
    price: 10,
    portions: [
      { id: 1, title: '5 г.' },
      { id: 2, title: '10 г.' },
      { id: 3, title: '15 г.' },
      { id: 4, title: '25 г.' },
      { id: 5, title: '50 г.' },
    ],
  },

  {
    id: 2,
    title: 'Сливчоный Виноградный Улун',
    price: 25,
    portions: [
      { id: 4, title: '25 г.' },
      { id: 5, title: '50 г.' },
    ],
  },

  {
    id: 3,
    title: 'Древний Улун',
    price: 100,
    portions: [
      { id: 6, title: '100 г.' },
      { id: 7, title: '200 г.' },
      { id: 8, title: '1 шт.' },
      { id: 9, title: '2 шт.' },
    ],
  },

  {
    id: 4,
    title: 'Заяц Гун Тин',
    price: 10,
    portions: [
      { id: 10, title: '3 шт.' },
      { id: 11, title: '4 шт.' },
    ],
  },

  {
    id: 5,
    title: 'Гу Тин в кирпиче (из почечного сырья)',
    price: 10,
    portions: [
      { id: 12, title: '5 шт.' },
      { id: 13, title: '6 шт.' },
    ],
  },
];

describe('TeaCard', () => {
  describe('render', () => {
    let renderResult = null;

    beforeAll(() => {
      renderResult = render(
        teaArray.map((tea) => (
          <TeaCard
            key={tea.id}
            id={tea.id}
            title={tea.title}
            price={tea.price}
            portions={tea.portions}
            onClick={nop}
            onChange={nop}
            onDelete={nop}
          />
        )),
      );
    });

    it('displays all tea titles', () => {
      teaArray.forEach((tea) => {
        expect(renderResult.getByText(tea.title)).toBeInTheDocument();
      });
    });
  });
});
