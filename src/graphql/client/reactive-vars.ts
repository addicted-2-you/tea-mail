import { makeVar } from '@apollo/client';

// types
import { ICartItem } from '~/types/ICartItem';
import { IUserProfile } from '~/types/IUserProfile';

// TODO: save cart data in the localStorage
export const cart = makeVar<ICartItem[]>([]);

export const userProfile = makeVar<IUserProfile | null>(null);
