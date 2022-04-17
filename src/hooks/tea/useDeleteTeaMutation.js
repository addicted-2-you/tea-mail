import { useMutation } from '@apollo/client';

import { DELETE_TEA } from '~/graphql/client/mutations/tea-mutations';
import { GET_TEA } from '~/graphql/client/queries/tea-queries';

export default function useDeleteTeaMutation() {
  const [deleteTeaMutation] = useMutation(DELETE_TEA, {
    update(proxy, { data: { deleteTea } }) {
      const { tea } = proxy.readQuery({
        query: GET_TEA,
      });

      proxy.writeQuery({
        query: GET_TEA,

        data: {
          tea: tea.filter((teaItem) => teaItem.id !== deleteTea.id),
        },
      });
    },
  });

  return { deleteTeaMutation };
}
