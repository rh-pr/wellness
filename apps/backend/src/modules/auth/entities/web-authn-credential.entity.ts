import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class WebAuthnCredential {
  @Field()
  id!: string;

  @Field()
  userId!: string;

  @Field()
  credentialId!: string;

  @Field(() => Number)
  signCount!: number;

  @Field(() => Date)
  createdAt!: Date;

  @Field(() => Date)
  lastUsedAt!: Date;
}