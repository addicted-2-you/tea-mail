import { gql } from '@apollo/client';

export const LOG_IN = gql`
  mutation LogIn($username: String!, $password: String!) {
    logIn(username: $username, password: $password) {
      token
    }
  }
`;
