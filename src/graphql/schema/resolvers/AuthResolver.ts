/* eslint-disable class-methods-use-this */

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';

import { User } from '~/graphql/schema/entities/User';

@Resolver()
export class AuthResolver {
  @Mutation(() => User)
  async register(
    @Arg('username') username: string,
    @Arg('password') password: string,
    @Ctx() context,
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

  @Mutation(() => User, { nullable: true })
  async logIn(
    @Arg('username') username: string,
    @Arg('password') password: string,
    @Ctx() context,
  ) {
    const user = await User.findOne({ where: { username } });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ username, password }, process.env.JWT_SECRET_KEY as string, {
        expiresIn: '1w',
      });

      context.res.cookie('jwt', token);

      return user;
    }

    return null;
  }
}
