import { useMutation } from '@apollo/client';

import { setAccessToken } from '~/access-token';

import { REGISTER } from '~/graphql/client/mutations/users-mutations';

export default function useRegister() {
  const [registerMutation] = useMutation(REGISTER, {
    update(
      proxy,
      {
        data: {
          register: { token },
        },
      },
    ) {
      setAccessToken(token, true);
    },
  });

  return { registerMutation };
}
