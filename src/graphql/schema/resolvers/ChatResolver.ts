/* eslint-disable class-methods-use-this */

import { Arg, Int, Query, Resolver } from 'type-graphql';

import { Chat } from '~/graphql/schema/entities/Chat';

@Resolver();
export class ChatResolver {
  @Query(() => [Chat])
  async chats(@Arg('id', () => Int, { nullable: true }) id?: number) {
    if (id) {
      const chat = await Chat.findOne({ where: { id }, relations: ['messages'] });
      return [chat];
    }

    return Chat.find();
  }
}
