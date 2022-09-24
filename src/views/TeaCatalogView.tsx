/* eslint-disable @typescript-eslint/no-use-before-define */

import React from 'react';
import styled from 'styled-components';
import { useQuery, useReactiveVar } from '@apollo/client';

// types
import { ICartItem } from '~/types/ICartItem';

// graphql
import { GET_TEA } from '~/graphql/client/queries/tea-queries';
import { cart } from '~/graphql/client/reactive-vars';

// components
import TeaCard from '~/components/TeaCard';

// hooks
import useDeleteTeaMutation from '~/hooks/tea/useDeleteTeaMutation';

// utils
import { cartItemComparer } from '~/utils/cart-utils';

function TeaCatalogView() {
  const [hasMoreTea, setHasMoreTea] = React.useState(true);

  const { data, loading, error, fetchMore } = useQuery(GET_TEA, {
    variables: {
      offset: 0,
    },
  });

  const currentCart = useReactiveVar(cart);

  const { deleteTeaMutation } = useDeleteTeaMutation();

  const onFetchMore = () => {
    fetchMore({
      variables: {
        offset: data.tea.length,
      },
    }).then((result) => {
      setHasMoreTea(result.data.tea.length === 8);
    });
  };

  const addTeaToCart = React.useCallback(
    (newCartItem: ICartItem) => {
      let modifiedCart = [];

      const sameTeaOrder = currentCart.find((curCartItem) =>
        cartItemComparer(curCartItem, newCartItem),
      );

      if (sameTeaOrder) {
        modifiedCart = currentCart.map((currentCartItem) =>
          cartItemComparer(currentCartItem, newCartItem)
            ? { ...currentCartItem, count: currentCartItem.count + 1 }
            : currentCartItem,
        );
      } else {
        modifiedCart = [...currentCart, newCartItem];
      }

      cart(modifiedCart);

      window.localStorage.setItem('cart', JSON.stringify(modifiedCart));
    },
    [currentCart],
  );

  const deleteTea = React.useCallback(
    (id: number) => deleteTeaMutation({ variables: { id } }),
    [deleteTeaMutation],
  );

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }

  return (
    <div>
      <h2>Tea Catalog</h2>

      <TeaCatalogList>
        {data.tea.map((teaItem) => (
          <li key={teaItem.id}>
            <TeaCard
              id={teaItem.id}
              title={teaItem.title}
              price={teaItem.price}
              portions={teaItem.portions}
              addTeaToCart={addTeaToCart}
              deleteTea={deleteTea}
            />
          </li>
        ))}
      </TeaCatalogList>

      {hasMoreTea ? <FetchMoreButton onClick={onFetchMore}>Fetch More Tea</FetchMoreButton> : null}
    </div>
  );
}

const TeaCatalogList = styled.ul`
  padding: 100px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
`;

const FetchMoreButton = styled.button`
  padding: 2px 4px;
  font-size: 16px;
  background-color: gray;
  border: 1px solid black;
  border-radius: 1px;
  cursor: pointer;
`;

export default TeaCatalogView;
