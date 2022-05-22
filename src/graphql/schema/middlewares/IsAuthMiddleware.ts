import { verify } from 'jsonwebtoken';
import { MiddlewareFn } from 'type-graphql';

import { IContext } from '~/types/IContext';

export const isAuth: MiddlewareFn<IContext> = (...args) => {
  console.log(args);

  // const { authorization } = context.req.headers;
  // if (!authorization) {
  //   throw new Error('not auth');
  // }

  // try {
  //   const [, token] = authorization.split(' ');
  //   const payload = verify(token, process.env.JWT_SECRET_KEY as string);
  //   context.payload = payload as object;
  // } catch (err) {
  //   console.log(err);
  //   throw new Error('not auth');
  // }

  // return next();
};
