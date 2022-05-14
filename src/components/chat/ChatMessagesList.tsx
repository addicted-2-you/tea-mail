/* eslint-disable @typescript-eslint/no-use-before-define */

import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';

// types
import { IMessage } from '~/types/IMessage';

// graphql
import { GET_CHAT } from '~/graphql/client/queries/chats-queries';

interface IChatMessagesListProps {
  messages: IMessage[];
  currentUserId: number;
}

function ChatMessagesList(props: IChatMessagesListProps) {
  const { messages, currentUserId } = props;

  return (
    <ChatMessagesListWrapper>
      <MessagesList>
        {messages.map((message) => (
          <MessagesListItem key={message.id} currentUser={message.senderid === currentUserId}>
            {message.messagetext}
          </MessagesListItem>
        ))}
      </MessagesList>
    </ChatMessagesListWrapper>
  );
}

const ChatMessagesListWrapper = styled.div``;

const MessagesList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;

const MessagesListItem = styled.li`
  padding: 5px;
  width: fit-content;
  display: inline-block;
  align-self: ${({ currentUser }) => (currentUser ? 'flex-end' : 'flex-start')};
  background-color: ${({ currentUser }) => (currentUser ? '#6171a6' : '#44475b')};
  border-radius: 3px;
`;

export default ChatMessagesList;
