import { gql } from '@apollo/client';

export const GET_CHATS = gql`
  query GetChats {
    chats {
      id
      title
    }
  }
`;

export const GET_CHAT = gql`
  query GetChat($id: Int) {
    chats(id: $id) {
      id
      title
      messages {
        id
        messagetext
        url
        senderid
        createdat
      }
    }
  }
`;
