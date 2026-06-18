import { ObjectType, Field } from "@nestjs/graphql";
import { ChatMessage } from "./chat-messages.entity";

@ObjectType()
export class ChatSession {
    @Field()
    id!: string;

    @Field()
    userId!: string;

    @Field()
    providerId!: string;

    @Field()
    title?: string;

    @Field(() => Date)
    createdAt!: Date;

    @Field(() => Date)
    updatedAt!: Date;

    @Field(() => ChatMessage)
    messages!: ChatMessage[];
}