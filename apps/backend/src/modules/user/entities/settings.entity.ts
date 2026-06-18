import { ObjectType, Field } from "@nestjs/graphql";
import { AssistantProvider } from "generated/prisma/client";

@ObjectType()
export class Settings {
    @Field()
    id!: string;

    @Field()
    userId!: string;

    @Field()
    theme!: string;

    @Field()
    language!: string;

    @Field()
    assistantId!: AssistantProvider;

    @Field()
    location?: string;

    @Field(() => Boolean)
    notificationsEnabled!: boolean;

    @Field(() => Date)
    createdAt!: Date;

    @Field(() => Date)
    updatedAt!: Date;
}
