/* eslint-disable max-classes-per-file */
/* eslint-disable class-methods-use-this */

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Arg, Ctx, Mutation, Resolver, ObjectType, Field, Query } from 'type-graphql';

import { User } from '~/graphql/schema/entities/User';
import { UserProfile } from '~/graphql/schema/types/UserProfile';

@ObjectType()
class LoginResponse {
  @Field()
  token: string;
}

@Resolver()
export class AuthResolver {
  @Query(() => UserProfile, { nullable: true })
  async userProfile(@Arg('accessToken') accessToken: string) {
    const { id } = jwt.verify(accessToken, process.env.JWT_SECRET_KEY as string) as { id: number };
    const user = await User.findOne({ where: { id } });
    if (user) {
      return {
        id: user.id,
        username: user.username,
        accessToken,
      };
    }

    return null;
  }

  @Mutation(() => LoginResponse)
  async register(
    @Arg('username') username: string,
    @Arg('password') password: string,
    @Ctx() context,
  ) {
    const bcryptedPassword = await bcrypt.hash(password, Number(process.env.BCRYPT_SALT));
    await User.insert({ username, password: bcryptedPassword });

    const token = jwt.sign({ username, password }, process.env.JWT_SECRET_KEY as string, {
      expiresIn: '1w',
    });

    context.res.cookie('jwt', token);

    return { token };
  }

  @Mutation(() => LoginResponse, { nullable: true })
  async logIn(
    @Arg('username') username: string,
    @Arg('password') password: string,
    @Ctx() context,
  ) {
    const user = await User.findOne({ where: { username } });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY as string, {
        expiresIn: '1w',
      });

      context.res.cookie('jwt', token);

      return {
        token,
      };
    }

    return null;
  }
}
