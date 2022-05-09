/* eslint-disable class-methods-use-this */

import { Query } from 'type-graphql';

import { Message } from '~/graphql/schema/entities/Message';

export class MessageResolver {
  @Query(() => [Message])
  async messages() {
    return Message.find();
  }
}
