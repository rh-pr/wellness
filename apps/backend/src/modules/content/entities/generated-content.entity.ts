import { ObjectType, Field, registerEnumType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';
import { ContentType } from 'generated/prisma/client';
import type { GeneratedContentPayload } from 'src/common/types/content';

registerEnumType(ContentType, {
    name: 'ContentType',
});


@ObjectType()
export class GeneratedContent {
    @Field()
    id!: string;

    @Field()
    userId!: string;

    @Field()
    moodEntryId!: string;

    @Field(() => ContentType)
    type!: ContentType

    @Field(() => GraphQLJSON)
    content!: GeneratedContentPayload;

    @Field()
    languageCode!: string;

    @Field()
    providerId!: string;

    @Field(() => Date)
    createdAt!: Date;
}