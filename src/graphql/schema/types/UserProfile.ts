import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class UserProfile {
  @Field()
  id: number;

  @Field()
  username: string;

  @Field()
  accessToken: string;
}
