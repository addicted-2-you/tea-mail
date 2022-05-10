import { Field, Int, GraphQLISODateTime, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Chat } from './Chat';

@ObjectType()
@Entity('messages')
export class Message extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String, { nullable: true })
  @Column({ type: 'varchar', nullable: true })
  messagetext?: string;

  @Field(() => String, { nullable: true })
  @Column({ type: 'varchar', nullable: true })
  url?: string;

  @Field(() => Int)
  @Column('int')
  senderid: number;

  @Field(() => Int)
  @Column('int')
  chatid: number;

  @Field(() => GraphQLISODateTime)
  @Column('datetime')
  createdat: Date;

  @Field(() => Chat)
  @ManyToOne(() => Chat, (chat) => chat.messages)
  @JoinColumn({ name: 'chatid', referencedColumnName: 'id' })
  chat: Chat;
}
