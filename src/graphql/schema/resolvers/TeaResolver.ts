/* eslint-disable class-methods-use-this */

import { Arg, Mutation, Query, Resolver } from 'type-graphql';

import { Tea } from '~/graphql/schema/entities/Tea';

@Resolver()
export class TeaResolver {
  @Query(() => [Tea])
  async tea(@Arg('id', { nullable: true }) id?: number) {
    if (id) {
      const tea = await Tea.findOne({ where: { id }, relations: ['portions'] });
      return [tea];
    }

    return Tea.find({ relations: ['portions'] });
  }

  @Mutation(() => Tea)
  async deleteTea(@Arg('id', { nullable: true }) id: number) {
    const tea = await Tea.findOneBy({ id });
    tea?.remove();
    return tea;
  }
}
