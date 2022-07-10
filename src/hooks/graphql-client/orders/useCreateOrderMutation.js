import { useMutation } from '@apollo/client';

import { CREATE_ORDER } from '~/graphql/client/mutations/orders-mutations';

export default function useCreateOrderMutation() {
  const [createOrderMutation] = useMutation(CREATE_ORDER);
  return { createOrderMutation };
}
