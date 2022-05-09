import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';

import { Message } from './Message';

@ObjectType()
@Entity('chats')
export class Chat extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column('varchar')
  title: string;

  @Field(() => [Message], { nullable: true })
  @OneToMany(() => Message, (message) => message.chat)
  messages?: Message[];
}
