import { gql } from '@apollo/client';

export const GET_USER_PROFILE = gql`
  query GetUserProfile($accessToken: String!) {
    userProfile(accessToken: $accessToken) {
      id
      username
      accessToken
    }
  }
`;
