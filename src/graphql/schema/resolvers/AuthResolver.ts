/* eslint-disable max-classes-per-file */
/* eslint-disable class-methods-use-this */

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {
  Arg,
  Ctx,
  Field,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  UseMiddleware,
} from 'type-graphql';

import { User } from '~/graphql/schema/entities/User';
import { isAuth } from '~/graphql/schema/middlewares/IsAuthMiddleware';

import { IContext } from '~/types/IContext';

@ObjectType()
class LoginResponse {
  @Field()
  token: string;
}

@Resolver()
export class AuthResolver {
  @Query(() => [User])
  users() {
    return User.find();
  }

  @Mutation(() => User)
  async register(
    @Arg('username') username: string,
    @Arg('password') password: string,
    @Ctx() context: IContext,
  ) {
    const bcryptedPassword = await bcrypt.hash(password, Number(process.env.BCRYPT_SALT));
    const userInsertResult = await User.insert({ username, password: bcryptedPassword });
    const insertedUser = await User.findOne({ where: { id: userInsertResult.raw.insertId } });

    const token = jwt.sign({ username, password }, process.env.JWT_SECRET_KEY as string, {
      expiresIn: '1w',
    });

    context.res.cookie('jwt', token);

    return insertedUser;
  }

  @Mutation(() => LoginResponse, { nullable: true })
  async logIn(
    @Arg('username') username: string,
    @Arg('password') password: string,
    @Ctx() context: IContext,
  ) {
    const user = await User.findOne({ where: { username } });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY as string, {
        expiresIn: '7d',
      });

      context.res.cookie('jwt', token);

      return {
        token,
      };
    }

    return null;
  }
}
