import { makeVar } from '@apollo/client';

import { ICartItem } from '~/types/ICartItem';

// TODO: save cart data in the localStorage
export const cart = makeVar<ICartItem[]>([]);
