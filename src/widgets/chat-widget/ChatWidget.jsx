/* eslint-disable @typescript-eslint/no-use-before-define */

import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';

// components
import ChatInputEntry from '~/components/ChatInputEntry';
import { ChatContext } from '~/components/chat/ChatContext';
import ChatMessagesList from '~/components/chat/ChatMessagesList';

// graphql
import useSendMessageMutation from '~/hooks/graphql-client/chats/useSendMessageMutation';
import { GET_CHAT } from '~/graphql/client/queries/chats-queries';

// icons
import ChatDownIcon from '~/assets/img/chat-down.svg';
import ChatUpIcon from '~/assets/img/chat-up.svg';

const chatId = 1;
const senderId = -1;
const username = 'akavalenka';

function ChatWidget() {
  const [chatOpen, setChatOpen] = React.useState(false);

  const { sendMessageMutation } = useSendMessageMutation({ chatId });

  const {
    data: chatData = { chats: [null] },
    loading,
    error,
  } = useQuery(GET_CHAT, { variables: { id: 1 } });

  const {
    chats: [chatWithAdmin],
  } = chatData;

  const chatWidgetContextValue = React.useMemo(
    () => ({
      async sendMessage(messageText) {
        const result = await sendMessageMutation({
          variables: {
            chatId,
            senderId,
            messageText,
          },
        });

        console.log(result);
      },
    }),
    [sendMessageMutation],
  );

  const usernameFirstLetter = React.useMemo(() => username.charAt(0).toUpperCase(), []);

  const onToggleChatButtonClick = () => {
    setChatOpen(!chatOpen);
  };

  return (
    <ChatContext.Provider value={chatWidgetContextValue}>
      <ChatWidgetWrapper>
        <MessagesListContainer open={chatOpen}>
          {chatWithAdmin && chatOpen ? (
            <ChatMessagesList messages={chatWithAdmin.messages} currentUserId={-1} />
          ) : null}
        </MessagesListContainer>

        <ChatWidgetControls>
          <ChatWidgetControlsTopRow>
            <ToggleChatButton type="button" onClick={onToggleChatButtonClick}>
              {chatOpen ? (
                <img src={ChatUpIcon} alt="chat-up-icon" />
              ) : (
                <img src={ChatDownIcon} alt="chat-down-icon" />
              )}
            </ToggleChatButton>
          </ChatWidgetControlsTopRow>

          <ChatWidgetControlsBottomRow>
            <UserAvatar>{usernameFirstLetter}</UserAvatar>

            <ChatInputContainer>
              <ChatInputEntry />
            </ChatInputContainer>
          </ChatWidgetControlsBottomRow>
        </ChatWidgetControls>
      </ChatWidgetWrapper>
    </ChatContext.Provider>
  );
}

const ChatWidgetWrapper = styled.div`
  position: absolute;
  padding: 7px;
  width: 360px;
  right: 25px;
  bottom: 25px;
`;

const MessagesListContainer = styled.div`
  height: ${({ open }) => (open ? '500px' : '20px')};
  overflow: hidden auto;
  display: flex;
  flex-direction: column-reverse;
  background-color: #2a1a4333;
  transition: height ease-in-out 0.25s;
  border-radius: 10px 10px 0 0;
`;

const ChatWidgetControls = styled.div`
  padding: 5px 7.5px;
  background-color: #12002d;
  border-radius: 0 0 7px 7px;
`;

const ChatWidgetControlsTopRow = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const ToggleChatButton = styled.button`
  padding: 4px;
  border: none;
  background-color: #00000000;
  opacity: 0.75;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

const ChatWidgetControlsBottomRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 5px;
`;

const ChatInputContainer = styled.div`
  flex-grow: 1;
`;

const UserAvatar = styled.p`
  padding: 4px;
  height: 35px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff99;
  font-weight: 600;
  line-height: 0px;
  border: 1px solid #ffffff99;
  border-radius: 100%;
  background-color: #2a1a43;
`;

export default ChatWidget;
