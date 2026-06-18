import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class AnonymousSession {
    @Field()
    id!: string;

    @Field()
    deviceId!: string;

    @Field({ nullable: true })
    userId?: string;

    @Field(() => Date, { nullable: true })
    popupDismissedAt?: Date;

    @Field(() => Date, { nullable: true })
    popupNextShowAt?: Date;

    @Field(() => Date)
    createdAt!: Date;

    @Field(() => Date)
    lastSeenAt!: Date;

    @Field(() => Date)
    expireAt!: Date;
}