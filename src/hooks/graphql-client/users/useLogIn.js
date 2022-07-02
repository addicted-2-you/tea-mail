import { useMutation } from '@apollo/client';

import { LOG_IN } from '~/graphql/client/mutations/users-mutations';

export default function useLogIn() {
  const [loginMutation] = useMutation(LOG_IN);

  return { loginMutation };
}
