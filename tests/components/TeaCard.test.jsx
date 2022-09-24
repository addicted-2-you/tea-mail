import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// components
import TeaCard from '~/components/TeaCard';

// utils
import { nop } from '~/utils/utils';

import { teaArray } from '../../mocks/tea-mocks';

describe('TeaCard', () => {
  describe('render', () => {
    let renderResult = null;

    beforeEach(() => {
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

    it('should display an icon for each card', () => {
      expect(renderResult.getAllByAltText('mug hot').length).toBe(teaArray.length);
    });

    it('should display an "Add to Cart"-button for each card', () => {
      expect(renderResult.getAllByText('В корзину').length).toBe(teaArray.length);
    });

    it('should display all tea titles', () => {
      teaArray.forEach((tea) => {
        expect(renderResult.getByText(tea.title)).toBeInTheDocument();
      });
    });
  });
});
