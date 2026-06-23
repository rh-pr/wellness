import { Field, InputType } from "@nestjs/graphql";
import { AssistantProvider } from "generated/prisma/client";

@InputType()
export class CreateSettingsInput {
    @Field()
    userId!: string;

    @Field({ nullable: true })
    thema?: string;

    @Field({ nullable: true })
    language!: string;
    
    @Field({ nullable: true })
    assistantId!: AssistantProvider;
    
    @Field({ nullable: true })
    location?: string;
    
    @Field(() => Boolean, { defaultValue: false })
    notificationsEnabled!: boolean;
}