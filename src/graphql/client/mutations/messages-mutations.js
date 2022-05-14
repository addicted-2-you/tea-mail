import { gql } from '@apollo/client';

export const SEND_MESSAGE = gql`
  mutation SendMessage($chatId: Int!, $senderId: Int!, $messageText: String) {
    sendMessage(chatid: $chatId, senderid: $senderId, messagetext: $messageText) {
      id
      senderid
      chatid
      messagetext
      url
    }
  }
`;
