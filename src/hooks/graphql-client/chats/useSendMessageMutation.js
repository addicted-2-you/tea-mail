import { useMutation } from '@apollo/client';

import { SEND_MESSAGE } from '~/graphql/client/mutations/messages-mutations';
import { GET_CHAT } from '~/graphql/client/queries/chats-queries';

export default function useSendMessageMutation({ chatId }) {
  const [sendMessageMutation] = useMutation(SEND_MESSAGE, {
    update(
      proxy,
      {
        data: {
          sendMessage: [message],
        },
      },
    ) {
      const {
        chats: [chat],
      } = proxy.readQuery({ query: GET_CHAT, variables: { id: chatId } });

      const updatedChat = { ...chat, messages: [...chat.messages, message] };
      proxy.writeQuery({
        query: GET_CHAT,
        variables: { id: chatId },
        data: {
          chats: [updatedChat],
        },
      });
    },
  });

  return { sendMessageMutation };
}
