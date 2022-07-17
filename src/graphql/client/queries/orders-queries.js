import { gql } from '@apollo/client';

export const GET_ORDERS = gql`
  query GetOrders($userId: Int!) {
    orders(userId: $userId) {
      id
      userId
      status
      createdAt

      teaOrders {
        tea {
          id
          title
          price
        }

        portion {
          id
          title
          quantor
        }
      }
    }
  }
`;
