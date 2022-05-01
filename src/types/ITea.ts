import { ITeaFlavor } from './ITeaFlavor';
import { ITeaType } from './ITeaType';

export interface ITea {
  id: number;
  title: string;
  price: number;
  teaType: ITeaType;
  flavors: ITeaFlavor[];
}
