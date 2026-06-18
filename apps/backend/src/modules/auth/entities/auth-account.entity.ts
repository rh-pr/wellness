import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class OauthAccount {
  @Field()
  id!: string;

  @Field()
  userId!: string;

  @Field()
  provider!: string;

  @Field()
  providerAccountId!: string;

  @Field({ nullable: true })
  tokenType?: string;

  @Field(() => Number, { nullable: true })
  expiresAt?: number;
}