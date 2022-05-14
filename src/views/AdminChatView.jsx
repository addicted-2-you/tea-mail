/* eslint-disable @typescript-eslint/no-use-before-define */

import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';

// components
import ChatItem from '~/components/ChatItem';
import ChatMessagesList from '~/components/chat/ChatMessagesList';
import ChatInputEntry from '~/components/ChatInputEntry';
import { ChatContext } from '~/components/chat/ChatContext';

// graphql
import { GET_CHAT, GET_CHATS } from '~/graphql/client/queries/chats-queries';
import useSendMessageMutation from '~/hooks/graphql-client/chats/useSendMessageMutation';

function AdminChatView() {
  const [pickedChat, setPickedChat] = React.useState(null);

  const {
    data: chatsData = { chats: [] },
    loading: loadingChats,
    error: loadingChatsError,
  } = useQuery(GET_CHATS);

  const {
    data: pickedChatData = { chats: [] },
    loading: loadingPickedChat,
    error: loadingPickedChatError,
  } = useQuery(GET_CHAT, {
    skip: !pickedChat,
    variables: { id: pickedChat && pickedChat.id },
  });

  const { sendMessageMutation } = useSendMessageMutation({ chatId: pickedChat && pickedChat.id });

  const onChatItemClick = React.useCallback(
    (chat) => {
      if (pickedChat && pickedChat.id === chat.id) {
        setPickedChat(null);
      } else {
        setPickedChat(chat);
      }
    },
    [pickedChat],
  );

  const chatWidgetContextValue = React.useMemo(
    () => ({
      async sendMessage(messageText) {
        await sendMessageMutation({
          variables: {
            chatId: pickedChat && pickedChat.id,
            senderId: 0,
            messageText,
          },
        });
      },
    }),
    [sendMessageMutation, pickedChat],
  );

  const { chats } = chatsData;
  const {
    chats: [pickedC],
  } = pickedChatData;

  return (
    <ChatContext.Provider value={chatWidgetContextValue}>
      <AdminChatViewWrapper>
        <AdminChatViewChatsPanel>
          {!loadingChats && !loadingChatsError ? (
            <ul>
              {chats.map((chat) => (
                <li key={chat.id}>
                  <ChatItem
                    chat={chat}
                    selected={pickedChat && pickedChat.id === chat.id}
                    pickChat={onChatItemClick}
                  />
                </li>
              ))}
            </ul>
          ) : null}
        </AdminChatViewChatsPanel>

        <AdminChatViewMessagingPanel>
          {pickedChat && !loadingPickedChat && !loadingPickedChatError ? (
            // 0 -- is admin's id (mock)
            <ChatMessagesList messages={pickedC.messages} currentUserId={0} />
          ) : null}

          {pickedChat && !loadingPickedChat && !loadingPickedChatError ? (
            // 0 -- is admin's id (mock)
            <ChatInputEntry />
          ) : null}
        </AdminChatViewMessagingPanel>
      </AdminChatViewWrapper>
    </ChatContext.Provider>
  );
}

const AdminChatViewWrapper = styled.div`
  height: 100vh;
  display: flex;
  background-color: #fdebf7;
`;

const AdminChatViewChatsPanel = styled.div`
  flex-grow: 1;
  border-right: 1px solid #fc28fb55;
  background-color: #282a36;
`;

const AdminChatViewMessagingPanel = styled.div`
  flex-grow: 4;
  background-color: #282a36;
`;

export default AdminChatView;
