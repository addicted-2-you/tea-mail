import { Field, ObjectType } from 'type-graphql';

import { Tea } from '../entities/Tea';
import { Portion } from '../entities/Portion';

@ObjectType()
export class TeaOrder {
  @Field()
  tea: Tea;

  @Field()
  portion: Portion;
}
