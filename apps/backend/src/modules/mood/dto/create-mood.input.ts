import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMoodInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
