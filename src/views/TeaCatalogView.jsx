import { useQuery } from '@apollo/client';
import React from 'react';

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

      <ul>
        {data.tea.map((teaItem) => (
          <li key={teaItem.id}>
            <TeaCard id={teaItem.id} title={teaItem.title} price={teaItem.price} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeaCatalogView;
