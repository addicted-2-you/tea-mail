/* eslint-disable class-methods-use-this */

import bcrypt from 'bcryptjs';
import { Arg, Mutation, Resolver } from 'type-graphql';

import { User } from '~/graphql/schema/entities/User';

@Resolver()
export class AuthResolver {
  @Mutation(() => User)
  async register(@Arg('username') username: string, @Arg('password') password: string) {
    const bcryptedPassword = await bcrypt.hash(password, Number(process.env.BCRYPT_SALT));
    const userInsertResult = await User.insert({ username, password: bcryptedPassword });
    const insertedUser = await User.findOne({ where: { id: userInsertResult.raw.insertId } });
    return insertedUser;
  }

  @Mutation(() => User, { nullable: true })
  async logIn(@Arg('username') username: string, @Arg('password') password: string) {
    const user = await User.findOne({ where: { username } });
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }

    return null;
  }
}
