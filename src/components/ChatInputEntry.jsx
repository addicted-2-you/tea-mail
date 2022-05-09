/* eslint-disable @typescript-eslint/no-use-before-define */

import React from 'react';
import styled from 'styled-components';

function ChatInputEntry() {
  const [text, setText] = React.useState('');

  const onTextEntryChange = (e) => {
    setText(e.target.value);
  };

  return (
    <ChatInputEntryWrapper>
      {text ? (
        <TextEntrySizer>
          <TextEntrySizerText>{text}</TextEntrySizerText>
        </TextEntrySizer>
      ) : null}

      <TextEntry placeholder="Say Something..." value={text} onChange={onTextEntryChange} />
    </ChatInputEntryWrapper>
  );
}

const ChatInputEntryWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const TextEntrySizer = styled.div`
  position: absolute;
  max-width: 100%;
  padding: 5px;
  z-index: 0;
  background-color: #612cda;
  border-radius: 5px 5px 5px 0px;
`;

const TextEntrySizerText = styled.div`
  padding: 5px;
  visibility: hidden;
  font-size: 14px;
  line-height: 15px;
  white-space: pre-wrap;
`;

const TextEntry = styled.textarea`
  position: relative;
  padding: 5px;
  width: 100%;
  display: inline-block;
  z-index: 1;
  overflow: hidden;
  color: #ffffff;
  font-size: 14px;
  line-height: 15px;
  background-color: #ffffff00;
  border: none;
  resize: none;

  &:focus {
    outline: none;
  }
`;

export default ChatInputEntry;
