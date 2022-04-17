/* eslint-disable class-methods-use-this */

import { Arg, Query, Resolver } from 'type-graphql';

import { Tea } from '~/graphql/schema/entities/Tea';

@Resolver()
export class TeaResolver {
  @Query(() => [Tea])
  async tea(@Arg('id', { nullable: true }) id?: string) {
    if (id) {
      const tea = await Tea.findOne(id);
      return [tea];
    }

    return Tea.find();
  }
}
