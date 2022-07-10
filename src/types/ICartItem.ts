import { ITeaPortion } from './ITeaPortion';
import { ITea } from './ITea';

export interface ICartItem {
  id: string;
  tea: ITea;
  teaPortion: ITeaPortion;
  count: number;
}
