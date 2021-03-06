/* eslint-disable class-methods-use-this */

import { Arg, Query, Resolver } from 'type-graphql';

import { Portion } from '~/graphql/schema/entities/Portion';

@Resolver()
export class PortionResolver {
  @Query(() => [Portion])
  async portions(@Arg('id', { nullable: true }) id?: number) {
    if (id) {
      const portion = await Portion.findOne({ where: { id } });
      return [portion];
    }

    return Portion.find();
  }
}
