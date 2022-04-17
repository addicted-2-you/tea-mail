import { gql } from '@apollo/client';

export const GET_TEA = gql`
  query GetTea {
    tea {
      id
      title
      price
    }
  }
`;
