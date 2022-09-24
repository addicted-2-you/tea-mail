import React from 'react';
import userEvent from '@testing-library/user-event';
import { act, render } from '@testing-library/react';
import '@testing-library/jest-dom';

// components
import ChatInputEntry from '~/components/ChatInputEntry';
import { ChatContext } from '~/components/chat/ChatContext';

describe('render ChatInputEntry', () => {
  let renderResult = null;
  const sendMessagePromise = Promise.resolve();
  let chatContextStub = {
    sendMessage: jest.fn(() => sendMessagePromise),
  };

  beforeEach(() => {
    renderResult = render(
      <ChatContext.Provider value={chatContextStub}>
        <ChatInputEntry />
      </ChatContext.Provider>,
    );
  });

  afterEach(() => {
    chatContextStub.sendMessage.mockClear();
  });

  it('should have text input', () => {
    expect(renderResult.getByPlaceholderText('Say Something...')).toBeInTheDocument();
  });

  it('should call "sendMessage" when Enter pressed', async () => {
    act(() => {
      userEvent.type(renderResult.getByPlaceholderText('Say Something...'), 'hello{enter}');
    });

    await act(() => sendMessagePromise);

    expect(chatContextStub.sendMessage).toBeCalled();
    expect(renderResult.getByPlaceholderText('Say Something...')).toHaveValue('');
  });

  it('should clear text input when Enter pressed', async () => {
    act(() => {
      userEvent.type(renderResult.getByPlaceholderText('Say Something...'), 'hello{enter}');
    });

    await act(() => sendMessagePromise);

    expect(renderResult.getByPlaceholderText('Say Something...')).toHaveValue('');
  });
});
