import { ObjectType, Field, registerEnumType } from "@nestjs/graphql";
import { MessageRole } from "generated/prisma/enums";

registerEnumType(MessageRole, {
    name: "MessageRole",
});

@ObjectType()
export class ChatMessage {
    @Field()
    id!: string;

    @Field()
    chatSessionId!: string;

    @Field(() => MessageRole)
    role!: MessageRole;

    @Field()
    content!: string;

    @Field(() => Date)
    createdAt!: Date;
}