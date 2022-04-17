import { gql } from '@apollo/client';

export const DELETE_TEA = gql`
  mutation DeleteTea($id: Float!) {
    deleteTea(id: $id) {
      id
      title
      price
    }
  }
`;
