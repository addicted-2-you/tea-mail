import { gql } from '@apollo/client';

export const GET_TEA = gql`
  query GetTea($offset: Int!) {
    tea(offset: $offset) {
      id
      title
      price

      portions {
        id
        title
        quantor
      }
    }
  }
`;
