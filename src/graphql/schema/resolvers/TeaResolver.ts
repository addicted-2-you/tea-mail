/* eslint-disable class-methods-use-this */

import { Arg, Int, Mutation, Query, Resolver } from 'type-graphql';

import { Tea } from '~/graphql/schema/entities/Tea';

const PAGE_SIZE = 8;

@Resolver()
export class TeaResolver {
  @Query(() => [Tea])
  async tea(@Arg('offset', () => Int) offset?: number) {
    return Tea.find({
      relations: ['portions'],
      order: { id: 'asc' },
      skip: offset,
      take: PAGE_SIZE,
    });
  }

  @Mutation(() => Tea)
  async deleteTea(@Arg('id', { nullable: true }) id: number) {
    const tea = await Tea.findOneBy({ id });
    tea?.remove();
    return tea;
  }
}
