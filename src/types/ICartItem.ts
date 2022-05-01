import { ITeaPortion } from './ITeaPortion';
import { ITea } from './ITea';

export interface ICartItem {
  tea: ITea;
  teaPortion: ITeaPortion;
  count: number;
}
