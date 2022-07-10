import { Field, InputType } from 'type-graphql';

@InputType()
export class OrderData {
  @Field()
  teaId: number;

  @Field()
  portionId: number;
}
