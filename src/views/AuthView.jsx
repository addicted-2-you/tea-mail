/* eslint-disable @typescript-eslint/no-use-before-define */

import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

// hooks
import useLogIn from '~/hooks/graphql-client/users/useLogIn';

function AuthView() {
  const { register, handleSubmit } = useForm();

  const { loginMutation } = useLogIn();

  const onAuthFormSubmit = React.useCallback((data) => {
    loginMutation({ variables: { ...data } });
  }, []);

  return (
    <AuthViewWrapper onSubmit={handleSubmit(onAuthFormSubmit)}>
      <AuthForm>
        <AuthFormInput {...register('username')} type="text" placeholder="username" />

        <AuthFormInput {...register('password')} type="password" placeholder="password" />

        <AuthFormSubmit type="submit" />
      </AuthForm>
    </AuthViewWrapper>
  );
}

const AuthViewWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const AuthFormInput = styled.input``;

const AuthFormSubmit = styled.input``;

export default AuthView;
