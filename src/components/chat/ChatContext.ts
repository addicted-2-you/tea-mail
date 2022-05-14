import React from 'react';

import { IMessage } from '~/types/IMessage';

export interface IChatContext {
  sendMessage: (message: IMessage) => Promise<any>;
}

export const chatContextDefaultValue: IChatContext = {
  sendMessage: () => Promise.resolve(),
};

export const ChatContext = React.createContext<IChatContext>(chatContextDefaultValue);
