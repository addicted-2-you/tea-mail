import { ICartItem } from '~/types/ICartItem';

export const cartItemComparer = (cartItem: ICartItem, newItem: ICartItem) =>
  cartItem.tea.id === newItem.tea.id && cartItem.teaPortion.id === newItem.teaPortion.id;
