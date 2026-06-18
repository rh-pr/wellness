import { ObjectType, Field } from "@nestjs/graphql";

@ObjectType()
export class Favorite {
    @Field()
    id!: string;

    @Field()
    userId!: string;

    @Field()
    contentId!: string;

    @Field(() => Date)
    createdAt!: Date;
}