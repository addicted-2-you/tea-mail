import { useMutation } from '@apollo/client';

import { SEND_MESSAGE } from '~/graphql/client/mutations/messages-mutations';
import { GET_CHAT } from '~/graphql/client/queries/chats-queries';

export default function useSendMessageMutation({ chatId }) {
  const [sendMessageMutation] = useMutation(SEND_MESSAGE, {
    update(proxy, { data: { sendMessage } }) {
      const chatsData = proxy.readQuery({ query: GET_CHAT, variables: { chatId } });
      console.log(chatsData, sendMessage);
      proxy.write({
        query: GET_CHAT,
        variables: { chatId },
        data: {
          chats: [...chatsData.chats.messages, sendMessage],
        },
      });
    },
  });

  return { sendMessageMutation };
}
