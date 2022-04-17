/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';

import { GET_TEA } from '~/graphql/client/queries/tea-queries';

import TeaCard from '~/components/TeaCard';

function TeaCatalogView() {
  const { data, loading } = useQuery(GET_TEA);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <h2>Tea Catalog</h2>

      <TeaCatalogList>
        {data.tea.map((teaItem) => (
          <li key={teaItem.id}>
            <TeaCard id={teaItem.id} title={teaItem.title} price={teaItem.price} />
          </li>
        ))}
      </TeaCatalogList>
    </div>
  );
}

const TeaCatalogList = styled.ul`
  list-style: none;
`;

export default TeaCatalogView;
