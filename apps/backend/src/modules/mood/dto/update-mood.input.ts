import { CreateMoodInput } from './create-mood.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMoodInput extends PartialType(CreateMoodInput) {
  @Field(() => Int)
  id: number;
}
