import React from 'react';

// hooks
import useRegister from '~/hooks/graphql-client/users/useRegister';
import useLogIn from '~/hooks/graphql-client/users/useLogIn';

function AuthView() {
  const { registerMutation } = useRegister();
  const { loginMutation } = useLogIn();

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onLogIn = React.useCallback(() => {
    loginMutation({ variables: { username, password } });
  }, [loginMutation, username, password]);

  const onRegister = React.useCallback(() => {
    registerMutation({ variables: { username, password } });
  }, [registerMutation, username, password]);

  return (
    <form className="h-screen flex justify-center items-center">
      <div className="flex flex-col gap-3">
        <input type="text" placeholder="username" value={username} onChange={onUsernameChange} />

        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={onPasswordChange}
        />

        <div className="flex gap-x-2">
          <button type="button" onClick={onLogIn}>
            Log In
          </button>

          <button type="button" onClick={onRegister}>
            Register
          </button>
        </div>
      </div>
    </form>
  );
}

export default AuthView;
