import { InputType, Int, Field } from '@nestjs/graphql';
import { CreateSettingsInput } from './create-settings.input';

@InputType()
export class CreateUserInput {
    @Field()
    username!: string;

    @Field()
    password?: string;
  
    @Field({ nullable: true })
    firstName?: string;
  
    @Field({ nullable: true })
    lastName?: string;
  
    @Field()
    email!: string;
  
    @Field({ nullable: true })
    avatarUrl?: string;
  
    @Field({ nullable: true })
    phoneNumber?: string;

    @Field(() => CreateSettingsInput, { nullable: true })
    settings?: CreateSettingsInput;
}
