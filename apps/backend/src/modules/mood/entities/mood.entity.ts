import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { MoodType } from 'generated/prisma/enums';

registerEnumType(MoodType, {
  name: 'MoodType',
})

@ObjectType()
export class Mood {
  @Field()
  id!: string;

  @Field()
  userId!: string;

  @Field(() => MoodType)
  mood!: MoodType;

  @Field(() => Int, { nullable: true })
  intensity?: number;

  @Field({ nullable: true })
  emoji?: string;

  @Field({ nullable: true })
  note?: string;

  @Field(() => Date)
  createdAt!: Date;
}
