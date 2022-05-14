/* eslint-disable class-methods-use-this */

import { Arg, Int, Mutation, Query } from 'type-graphql';

import { Message } from '~/graphql/schema/entities/Message';

export class MessageResolver {
  @Query(() => [Message])
  async messages() {
    return Message.find();
  }

  @Mutation(() => [Message])
  async sendMessage(
    @Arg('senderid', () => Int) senderid: number,
    @Arg('chatid', () => Int) chatid: number,
    @Arg('messagetext', { nullable: true }) messagetext?: string,
    @Arg('url', { nullable: true }) url?: string,
  ) {
    const insertResult = await Message.insert({ senderid, chatid, messagetext, url });
    const insertedMessage = await Message.findOne({ where: { id: insertResult.raw.insertId } });
    return [insertedMessage];
  }
}
