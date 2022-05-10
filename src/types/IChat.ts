import { IMessage } from './IMessage';

export interface IChat {
  id: number;
  title?: string;
  // members: object[];
  messages: IMessage[];
}
