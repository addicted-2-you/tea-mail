import { gql } from '@apollo/client';

export const CREATE_ORDER = gql`
  mutation CreateOrder(
    $userId: Int!
    $userphone: String
    $status: String
    $orderData: [OrderData!]!
  ) {
    createOrder(userId: $userId, userphone: $userphone, status: $status, orderData: $orderData) {
      id
    }
  }
`;
