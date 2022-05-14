/* eslint-disable @typescript-eslint/no-use-before-define */

import React from 'react';
import styled from 'styled-components';

// types
import { IChat } from '~/types/IChat';

interface IChatItemProps {
  selected: boolean;
  chat: IChat;
  pickChat(chat: IChat): void;
}

function ChatItem(props: IChatItemProps) {
  const { selected, chat, pickChat } = props;

  const onChatItemClick = React.useCallback(() => pickChat(chat), [chat, pickChat]);

  return (
    <ChatItemWrapper selected={selected} onClick={onChatItemClick}>
      <ChatItemIconContainer>
        <ChatItemIcon>{chat.id}</ChatItemIcon>
      </ChatItemIconContainer>

      <ChatItemTitleContainer>
        <ChatItemTitle>{chat.title}</ChatItemTitle>
      </ChatItemTitleContainer>
    </ChatItemWrapper>
  );
}

const ChatItemWrapper = styled.div`
  padding: 5px 10px;
  display: grid;
  grid-template-areas: 'chat-icon chat-title' 'chat-icon chat-description';
  grid-template-columns: auto 1fr;
  grid-gap: 5px;
  border-bottom: 1px solid #fc28fb44;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? '#fc28fb11' : 'unset')};

  &:hover {
    background-color: #fc28fb11;
  }
`;

const ChatItemIconContainer = styled.div`
  grid-template: chat-icon;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChatItemIcon = styled.p`
  padding: 7px;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  border-radius: 100%;
  background-color: #fc28fb44;
`;

const ChatItemTitleContainer = styled.div`
  grid-template: chat-title;
`;

const ChatItemTitle = styled.h4`
  font-size: 15px;
  font-weight: 600;
`;

export default ChatItem;
