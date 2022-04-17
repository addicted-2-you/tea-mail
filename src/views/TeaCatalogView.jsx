/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';

import { GET_TEA } from '~/graphql/client/queries/tea-queries';

import TeaCard from '~/components/TeaCard';
import useDeleteTeaMutation from '~/hooks/tea/useDeleteTeaMutation';

function TeaCatalogView() {
  const { data, loading } = useQuery(GET_TEA);

  const { deleteTeaMutation } = useDeleteTeaMutation();

  const onTeaDelete = React.useCallback(
    (id) => deleteTeaMutation({ variables: { id } }),
    [deleteTeaMutation],
  );

  if (loading) {
    return <div>loading...</div>;
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
              onTeaDelete={onTeaDelete}
            />
          </li>
        ))}
      </TeaCatalogList>
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

export default TeaCatalogView;
