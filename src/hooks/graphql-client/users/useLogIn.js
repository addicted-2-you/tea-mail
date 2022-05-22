import { useMutation } from '@apollo/client';

import { setAccessToken } from '~/access-token';

import { LOG_IN } from '~/graphql/client/mutations/users-mutations';

export default function useLogIn() {
  const [loginMutation] = useMutation(LOG_IN, {
    update(
      proxy,
      {
        data: {
          logIn: { token },
        },
      },
    ) {
      setAccessToken(token, true);
    },
  });

  return { loginMutation };
}
