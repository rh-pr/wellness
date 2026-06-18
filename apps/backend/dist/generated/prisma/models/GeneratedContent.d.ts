import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type GeneratedContentModel = runtime.Types.Result.DefaultSelection<Prisma.$GeneratedContentPayload>;
export type AggregateGeneratedContent = {
    _count: GeneratedContentCountAggregateOutputType | null;
    _min: GeneratedContentMinAggregateOutputType | null;
    _max: GeneratedContentMaxAggregateOutputType | null;
};
export type GeneratedContentMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    moodEntryId: string | null;
    type: $Enums.ContentType | null;
    languageCode: string | null;
    providerId: string | null;
    createdAt: Date | null;
};
export type GeneratedContentMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    moodEntryId: string | null;
    type: $Enums.ContentType | null;
    languageCode: string | null;
    providerId: string | null;
    createdAt: Date | null;
};
export type GeneratedContentCountAggregateOutputType = {
    id: number;
    userId: number;
    moodEntryId: number;
    type: number;
    content: number;
    languageCode: number;
    providerId: number;
    createdAt: number;
    _all: number;
};
export type GeneratedContentMinAggregateInputType = {
    id?: true;
    userId?: true;
    moodEntryId?: true;
    type?: true;
    languageCode?: true;
    providerId?: true;
    createdAt?: true;
};
export type GeneratedContentMaxAggregateInputType = {
    id?: true;
    userId?: true;
    moodEntryId?: true;
    type?: true;
    languageCode?: true;
    providerId?: true;
    createdAt?: true;
};
export type GeneratedContentCountAggregateInputType = {
    id?: true;
    userId?: true;
    moodEntryId?: true;
    type?: true;
    content?: true;
    languageCode?: true;
    providerId?: true;
    createdAt?: true;
    _all?: true;
};
export type GeneratedContentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GeneratedContentWhereInput;
    orderBy?: Prisma.GeneratedContentOrderByWithRelationInput | Prisma.GeneratedContentOrderByWithRelationInput[];
    cursor?: Prisma.GeneratedContentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | GeneratedContentCountAggregateInputType;
    _min?: GeneratedContentMinAggregateInputType;
    _max?: GeneratedContentMaxAggregateInputType;
};
export type GetGeneratedContentAggregateType<T extends GeneratedContentAggregateArgs> = {
    [P in keyof T & keyof AggregateGeneratedContent]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateGeneratedContent[P]> : Prisma.GetScalarType<T[P], AggregateGeneratedContent[P]>;
};
export type GeneratedContentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GeneratedContentWhereInput;
    orderBy?: Prisma.GeneratedContentOrderByWithAggregationInput | Prisma.GeneratedContentOrderByWithAggregationInput[];
    by: Prisma.GeneratedContentScalarFieldEnum[] | Prisma.GeneratedContentScalarFieldEnum;
    having?: Prisma.GeneratedContentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GeneratedContentCountAggregateInputType | true;
    _min?: GeneratedContentMinAggregateInputType;
    _max?: GeneratedContentMaxAggregateInputType;
};
export type GeneratedContentGroupByOutputType = {
    id: string;
    userId: string;
    moodEntryId: string | null;
    type: $Enums.ContentType;
    content: runtime.JsonValue;
    languageCode: string;
    providerId: string;
    createdAt: Date;
    _count: GeneratedContentCountAggregateOutputType | null;
    _min: GeneratedContentMinAggregateOutputType | null;
    _max: GeneratedContentMaxAggregateOutputType | null;
};
type GetGeneratedContentGroupByPayload<T extends GeneratedContentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<GeneratedContentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof GeneratedContentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], GeneratedContentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], GeneratedContentGroupByOutputType[P]>;
}>>;
export type GeneratedContentWhereInput = {
    AND?: Prisma.GeneratedContentWhereInput | Prisma.GeneratedContentWhereInput[];
    OR?: Prisma.GeneratedContentWhereInput[];
    NOT?: Prisma.GeneratedContentWhereInput | Prisma.GeneratedContentWhereInput[];
    id?: Prisma.StringFilter<"GeneratedContent"> | string;
    userId?: Prisma.StringFilter<"GeneratedContent"> | string;
    moodEntryId?: Prisma.StringNullableFilter<"GeneratedContent"> | string | null;
    type?: Prisma.EnumContentTypeFilter<"GeneratedContent"> | $Enums.ContentType;
    content?: Prisma.JsonFilter<"GeneratedContent">;
    languageCode?: Prisma.StringFilter<"GeneratedContent"> | string;
    providerId?: Prisma.StringFilter<"GeneratedContent"> | string;
    createdAt?: Prisma.DateTimeFilter<"GeneratedContent"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    moodEntry?: Prisma.XOR<Prisma.MoodEntryNullableScalarRelationFilter, Prisma.MoodEntryWhereInput> | null;
    favorites?: Prisma.FavoriteListRelationFilter;
};
export type GeneratedContentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    moodEntryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    languageCode?: Prisma.SortOrder;
    providerId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    moodEntry?: Prisma.MoodEntryOrderByWithRelationInput;
    favorites?: Prisma.FavoriteOrderByRelationAggregateInput;
};
export type GeneratedContentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.GeneratedContentWhereInput | Prisma.GeneratedContentWhereInput[];
    OR?: Prisma.GeneratedContentWhereInput[];
    NOT?: Prisma.GeneratedContentWhereInput | Prisma.GeneratedContentWhereInput[];
    userId?: Prisma.StringFilter<"GeneratedContent"> | string;
    moodEntryId?: Prisma.StringNullableFilter<"GeneratedContent"> | string | null;
    type?: Prisma.EnumContentTypeFilter<"GeneratedContent"> | $Enums.ContentType;
    content?: Prisma.JsonFilter<"GeneratedContent">;
    languageCode?: Prisma.StringFilter<"GeneratedContent"> | string;
    providerId?: Prisma.StringFilter<"GeneratedContent"> | string;
    createdAt?: Prisma.DateTimeFilter<"GeneratedContent"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    moodEntry?: Prisma.XOR<Prisma.MoodEntryNullableScalarRelationFilter, Prisma.MoodEntryWhereInput> | null;
    favorites?: Prisma.FavoriteListRelationFilter;
}, "id">;
export type GeneratedContentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    moodEntryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    languageCode?: Prisma.SortOrder;
    providerId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.GeneratedContentCountOrderByAggregateInput;
    _max?: Prisma.GeneratedContentMaxOrderByAggregateInput;
    _min?: Prisma.GeneratedContentMinOrderByAggregateInput;
};
export type GeneratedContentScalarWhereWithAggregatesInput = {
    AND?: Prisma.GeneratedContentScalarWhereWithAggregatesInput | Prisma.GeneratedContentScalarWhereWithAggregatesInput[];
    OR?: Prisma.GeneratedContentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.GeneratedContentScalarWhereWithAggregatesInput | Prisma.GeneratedContentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"GeneratedContent"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"GeneratedContent"> | string;
    moodEntryId?: Prisma.StringNullableWithAggregatesFilter<"GeneratedContent"> | string | null;
    type?: Prisma.EnumContentTypeWithAggregatesFilter<"GeneratedContent"> | $Enums.ContentType;
    content?: Prisma.JsonWithAggregatesFilter<"GeneratedContent">;
    languageCode?: Prisma.StringWithAggregatesFilter<"GeneratedContent"> | string;
    providerId?: Prisma.StringWithAggregatesFilter<"GeneratedContent"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"GeneratedContent"> | Date | string;
};
export type GeneratedContentCreateInput = {
    id?: string;
    type: $Enums.ContentType;
    content: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    languageCode: string;
    providerId: string;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutGeneratedContentsInput;
    moodEntry?: Prisma.MoodEntryCreateNestedOneWithoutGeneratedContentsInput;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutContentInput;
};
export type GeneratedContentUncheckedCreateInput = {
    id?: string;
    userId: string;
    moodEntryId?: string | null;
    type: $Enums.ContentType;
    content: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    languageCode: string;
    providerId: string;
    createdAt?: Date | string;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutContentInput;
};
export type GeneratedContentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType;
    content?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    languageCode?: Prisma.StringFieldUpdateOperationsInput | string;
    providerId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutGeneratedContentsNestedInput;
    moodEntry?: Prisma.MoodEntryUpdateOneWithoutGeneratedContentsNestedInput;
    favorites?: Prisma.FavoriteUpdateManyWithoutContentNestedInput;
};
export type GeneratedContentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    moodEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType;
    content?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    languageCode?: Prisma.StringFieldUpdateOperationsInput | string;
    providerId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutContentNestedInput;
};
export type GeneratedContentCreateManyInput = {
    id?: string;
    userId: string;
    moodEntryId?: string | null;
    type: $Enums.ContentType;
    content: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    languageCode: string;
    providerId: string;
    createdAt?: Date | string;
};
export type GeneratedContentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType;
    content?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    languageCode?: Prisma.StringFieldUpdateOperationsInput | string;
    providerId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GeneratedContentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    moodEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType;
    content?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    languageCode?: Prisma.StringFieldUpdateOperationsInput | string;
    providerId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GeneratedContentListRelationFilter = {
    every?: Prisma.GeneratedContentWhereInput;
    some?: Prisma.GeneratedContentWhereInput;
    none?: Prisma.GeneratedContentWhereInput;
};
export type GeneratedContentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type GeneratedContentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    moodEntryId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    languageCode?: Prisma.SortOrder;
    providerId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type GeneratedContentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    moodEntryId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    languageCode?: Prisma.SortOrder;
    providerId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type GeneratedContentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    moodEntryId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    languageCode?: Prisma.SortOrder;
    providerId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type GeneratedContentScalarRelationFilter = {
    is?: Prisma.GeneratedContentWhereInput;
    isNot?: Prisma.GeneratedContentWhereInput;
};
export type GeneratedContentCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.GeneratedContentCreateWithoutUserInput, Prisma.GeneratedContentUncheckedCreateWithoutUserInput> | Prisma.GeneratedContentCreateWithoutUserInput[] | Prisma.GeneratedContentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.GeneratedContentCreateOrConnectWithoutUserInput | Prisma.GeneratedContentCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.GeneratedContentCreateManyUserInputEnvelope;
    connect?: Prisma.GeneratedContentWhereUniqueInput | Prisma.GeneratedContentWhereUniqueInput[];
};
export type GeneratedContentUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.GeneratedContentCreateWithoutUserInput, Prisma.GeneratedContentUncheckedCreateWithoutUserInput> | Prisma.GeneratedContentCreateWithoutUserInput[] | Prisma.GeneratedContentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.GeneratedContentCreateOrConnectWithoutUserInput | Prisma.GeneratedContentCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.GeneratedContentCreateManyUserInputEnvelope;
    connect?: Prisma.GeneratedContentWhereUniqueInput | Prisma.GeneratedContentWhereUniqueInput[];
};
export type GeneratedContentUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.GeneratedContentCreateWithoutUserInput, Prisma.GeneratedContentUncheckedCreateWithoutUserInput> | Prisma.GeneratedContentCreateWithoutUserInput[] | Prisma.GeneratedContentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.GeneratedContentCreateOrConnectWithoutUserInput | Prisma.GeneratedContentCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.GeneratedContentUpsertWithWhereUniqueWithoutUserInput | Prisma.GeneratedContentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.GeneratedContentCreateManyUserInputEnvelope;
    set?: Prisma.GeneratedContentWhereUniqueInput | Prisma.GeneratedContentWhereUniqueInput[];
    disconnect?: Prisma.GeneratedContentWhereUniqueInput | Prisma.GeneratedContentWhereUniqueInput[];
    delete?: Prisma.GeneratedContentWhereUniqueInput | Prisma.GeneratedContentWhereUniqueInput[];
    connect?: Prisma.GeneratedContentWhereUniqueInput | Prisma.GeneratedContentWhereUniqueInput[];
    update?: Prisma.GeneratedContentUpdateWithWhereUniqueWithoutUserInput | Prisma.GeneratedContentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.GeneratedContentUpdateManyWithWhereWithoutUserInput | Prisma.GeneratedContentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.GeneratedContentScalarWhereInput | Prisma.GeneratedContentScalarWhereInput[];
};
export type GeneratedContentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.GeneratedContentCreateWithoutUserInput, Prisma.GeneratedContentUncheckedCreateWithoutUserInput> | Prisma.GeneratedContentCreateWithoutUserInput[] | Prisma.GeneratedContentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.GeneratedContentCreateOrConnectWithoutUserInput | Prisma.GeneratedContentCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.GeneratedContentUpsertWithWhereUniqueWithoutUserInput | Prisma.GeneratedContentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.GeneratedContentCreateManyUserInputEnvelope;
    set?: Prisma.GeneratedContentWhereUniqueInput | Prisma.GeneratedContentWhereUniqueInput[];
    disconnect?: Prisma.GeneratedContentWhereUniqueInput | Prisma.GeneratedContentWhereUniqueInput[];
    delete?: Prisma.GeneratedContentWhereUniqueInput | Prisma.GeneratedContentWhereUniqueInput[];
    connect?: Prisma.GeneratedContentWhereUniqueInput | Prisma.GeneratedContentWhereUniqueInput[];
    update?: Prisma.GeneratedContentUpdateWithWhereUniqueWithoutUserInput | Prisma.GeneratedContentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.GeneratedContentUpdateManyWithWhereWithoutUserInput | Prisma.GeneratedContentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.GeneratedContentScalarWhereInput | Prisma.GeneratedContentScalarWhereInput[];
};
export type GeneratedContentCreateNestedManyWithoutMoodEntryInput = {
    create?: Prisma.XOR<Prisma.GeneratedContentCreateWithoutMoodEntryInput, Prisma.GeneratedContentUncheckedCreateWithoutMoodEntryInput> | Prisma.GeneratedContentCreateWithoutMoodEntryInput[] | Prisma.GeneratedContentUncheckedCreateWithoutMoodEntryInput[];
    connectOrCreate?: Prisma.GeneratedContentCreateOrConnectWithoutMoodEntryInput | Prisma.GeneratedContentCreateOrConnectWithoutMoodEntryInput[];
    createMany?: Prisma.GeneratedContentCreateManyMoodEntryInputEnvelope;
    connect?: Prisma.GeneratedContentWhereUniqueInput | Prisma.GeneratedContentWhereUniqueInput[];
};
export type GeneratedContentUncheckedCreateNestedManyWithoutMoodEntryInput = {
    create?: Prisma.XOR<Prisma.GeneratedContentCreateWithoutMoodEntryInput, Prisma.GeneratedContentUncheckedCreateWithoutMoodEntryInput> | Prisma.GeneratedContentCreateWithoutMoodEntryInput[] | Prisma.GeneratedContentUncheckedCreateWithoutMoodEntryInput[];
    connectOrCreate?: Prisma.GeneratedContentCreateOrConnectWithoutMoodEntryInput | Prisma.GeneratedContentCreateOrConnectWithoutMoodEntryInput[];
    createMany?: Prisma.GeneratedContentCreateManyMoodEntryInputEnvelope;
    connect?: Prisma.GeneratedContentWhereUniqueInput | Prisma.GeneratedContentWhereUniqueInput[];
};
export type GeneratedContentUpdateManyWithoutMoodEntryNestedInput = {
    create?: Prisma.XOR<Prisma.GeneratedContentCreateWithoutMoodEntryInput, Prisma.GeneratedContentUncheckedCreateWithoutMoodEntryInput> | Prisma.GeneratedContentCreateWithoutMoodEntryInput[] | Prisma.GeneratedContentUncheckedCreateWithoutMoodEntryInput[];
    connectOrCreate?: Prisma.GeneratedContentCreateOrConnectWithoutMoodEntryInput | Prisma.GeneratedContentCreateOrConnectWithoutMoodEntryInput[];
    upsert?: Prisma.GeneratedContentUpsertWithWhereUniqueWithoutMoodEntryInput | Prisma.GeneratedContentUpsertWithWhereUniqueWithoutMoodEntryInput[];
    createMany?: Prisma.GeneratedContentCreateManyMoodEntryInputEnvelope;
    set?: Prisma.GeneratedContentWhereUniqueInput | Prisma.GeneratedContentWhereUniqueInput[];
    disconnect?: Prisma.GeneratedContentWhereUniqueInput | Prisma.GeneratedContentWhereUniqueInput[];
    delete?: Prisma.GeneratedContentWhereUniqueInput | Prisma.GeneratedContentWhereUniqueInput[];
    connect?: Prisma.GeneratedContentWhereUniqueInput | Prisma.GeneratedContentWhereUniqueInput[];
    update?: Prisma.GeneratedContentUpdateWithWhereUniqueWithoutMoodEntryInput | Prisma.GeneratedContentUpdateWithWhereUniqueWithoutMoodEntryInput[];
    updateMany?: Prisma.GeneratedContentUpdateManyWithWhereWithoutMoodEntryInput | Prisma.GeneratedContentUpdateManyWithWhereWithoutMoodEntryInput[];
    deleteMany?: Prisma.GeneratedContentScalarWhereInput | Prisma.GeneratedContentScalarWhereInput[];
};
export type GeneratedContentUncheckedUpdateManyWithoutMoodEntryNestedInput = {
    create?: Prisma.XOR<Prisma.GeneratedContentCreateWithoutMoodEntryInput, Prisma.GeneratedContentUncheckedCreateWithoutMoodEntryInput> | Prisma.GeneratedContentCreateWithoutMoodEntryInput[] | Prisma.GeneratedContentUncheckedCreateWithoutMoodEntryInput[];
    connectOrCreate?: Prisma.GeneratedContentCreateOrConnectWithoutMoodEntryInput | Prisma.GeneratedContentCreateOrConnectWithoutMoodEntryInput[];
    upsert?: Prisma.GeneratedContentUpsertWithWhereUniqueWithoutMoodEntryInput | Prisma.GeneratedContentUpsertWithWhereUniqueWithoutMoodEntryInput[];
    createMany?: Prisma.GeneratedContentCreateManyMoodEntryInputEnvelope;
    set?: Prisma.GeneratedContentWhereUniqueInput | Prisma.GeneratedContentWhereUniqueInput[];
    disconnect?: Prisma.GeneratedContentWhereUniqueInput | Prisma.GeneratedContentWhereUniqueInput[];
    delete?: Prisma.GeneratedContentWhereUniqueInput | Prisma.GeneratedContentWhereUniqueInput[];
    connect?: Prisma.GeneratedContentWhereUniqueInput | Prisma.GeneratedContentWhereUniqueInput[];
    update?: Prisma.GeneratedContentUpdateWithWhereUniqueWithoutMoodEntryInput | Prisma.GeneratedContentUpdateWithWhereUniqueWithoutMoodEntryInput[];
    updateMany?: Prisma.GeneratedContentUpdateManyWithWhereWithoutMoodEntryInput | Prisma.GeneratedContentUpdateManyWithWhereWithoutMoodEntryInput[];
    deleteMany?: Prisma.GeneratedContentScalarWhereInput | Prisma.GeneratedContentScalarWhereInput[];
};
export type EnumContentTypeFieldUpdateOperationsInput = {
    set?: $Enums.ContentType;
};
export type GeneratedContentCreateNestedOneWithoutFavoritesInput = {
    create?: Prisma.XOR<Prisma.GeneratedContentCreateWithoutFavoritesInput, Prisma.GeneratedContentUncheckedCreateWithoutFavoritesInput>;
    connectOrCreate?: Prisma.GeneratedContentCreateOrConnectWithoutFavoritesInput;
    connect?: Prisma.GeneratedContentWhereUniqueInput;
};
export type GeneratedContentUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: Prisma.XOR<Prisma.GeneratedContentCreateWithoutFavoritesInput, Prisma.GeneratedContentUncheckedCreateWithoutFavoritesInput>;
    connectOrCreate?: Prisma.GeneratedContentCreateOrConnectWithoutFavoritesInput;
    upsert?: Prisma.GeneratedContentUpsertWithoutFavoritesInput;
    connect?: Prisma.GeneratedContentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.GeneratedContentUpdateToOneWithWhereWithoutFavoritesInput, Prisma.GeneratedContentUpdateWithoutFavoritesInput>, Prisma.GeneratedContentUncheckedUpdateWithoutFavoritesInput>;
};
export type GeneratedContentCreateWithoutUserInput = {
    id?: string;
    type: $Enums.ContentType;
    content: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    languageCode: string;
    providerId: string;
    createdAt?: Date | string;
    moodEntry?: Prisma.MoodEntryCreateNestedOneWithoutGeneratedContentsInput;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutContentInput;
};
export type GeneratedContentUncheckedCreateWithoutUserInput = {
    id?: string;
    moodEntryId?: string | null;
    type: $Enums.ContentType;
    content: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    languageCode: string;
    providerId: string;
    createdAt?: Date | string;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutContentInput;
};
export type GeneratedContentCreateOrConnectWithoutUserInput = {
    where: Prisma.GeneratedContentWhereUniqueInput;
    create: Prisma.XOR<Prisma.GeneratedContentCreateWithoutUserInput, Prisma.GeneratedContentUncheckedCreateWithoutUserInput>;
};
export type GeneratedContentCreateManyUserInputEnvelope = {
    data: Prisma.GeneratedContentCreateManyUserInput | Prisma.GeneratedContentCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type GeneratedContentUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.GeneratedContentWhereUniqueInput;
    update: Prisma.XOR<Prisma.GeneratedContentUpdateWithoutUserInput, Prisma.GeneratedContentUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.GeneratedContentCreateWithoutUserInput, Prisma.GeneratedContentUncheckedCreateWithoutUserInput>;
};
export type GeneratedContentUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.GeneratedContentWhereUniqueInput;
    data: Prisma.XOR<Prisma.GeneratedContentUpdateWithoutUserInput, Prisma.GeneratedContentUncheckedUpdateWithoutUserInput>;
};
export type GeneratedContentUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.GeneratedContentScalarWhereInput;
    data: Prisma.XOR<Prisma.GeneratedContentUpdateManyMutationInput, Prisma.GeneratedContentUncheckedUpdateManyWithoutUserInput>;
};
export type GeneratedContentScalarWhereInput = {
    AND?: Prisma.GeneratedContentScalarWhereInput | Prisma.GeneratedContentScalarWhereInput[];
    OR?: Prisma.GeneratedContentScalarWhereInput[];
    NOT?: Prisma.GeneratedContentScalarWhereInput | Prisma.GeneratedContentScalarWhereInput[];
    id?: Prisma.StringFilter<"GeneratedContent"> | string;
    userId?: Prisma.StringFilter<"GeneratedContent"> | string;
    moodEntryId?: Prisma.StringNullableFilter<"GeneratedContent"> | string | null;
    type?: Prisma.EnumContentTypeFilter<"GeneratedContent"> | $Enums.ContentType;
    content?: Prisma.JsonFilter<"GeneratedContent">;
    languageCode?: Prisma.StringFilter<"GeneratedContent"> | string;
    providerId?: Prisma.StringFilter<"GeneratedContent"> | string;
    createdAt?: Prisma.DateTimeFilter<"GeneratedContent"> | Date | string;
};
export type GeneratedContentCreateWithoutMoodEntryInput = {
    id?: string;
    type: $Enums.ContentType;
    content: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    languageCode: string;
    providerId: string;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutGeneratedContentsInput;
    favorites?: Prisma.FavoriteCreateNestedManyWithoutContentInput;
};
export type GeneratedContentUncheckedCreateWithoutMoodEntryInput = {
    id?: string;
    userId: string;
    type: $Enums.ContentType;
    content: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    languageCode: string;
    providerId: string;
    createdAt?: Date | string;
    favorites?: Prisma.FavoriteUncheckedCreateNestedManyWithoutContentInput;
};
export type GeneratedContentCreateOrConnectWithoutMoodEntryInput = {
    where: Prisma.GeneratedContentWhereUniqueInput;
    create: Prisma.XOR<Prisma.GeneratedContentCreateWithoutMoodEntryInput, Prisma.GeneratedContentUncheckedCreateWithoutMoodEntryInput>;
};
export type GeneratedContentCreateManyMoodEntryInputEnvelope = {
    data: Prisma.GeneratedContentCreateManyMoodEntryInput | Prisma.GeneratedContentCreateManyMoodEntryInput[];
    skipDuplicates?: boolean;
};
export type GeneratedContentUpsertWithWhereUniqueWithoutMoodEntryInput = {
    where: Prisma.GeneratedContentWhereUniqueInput;
    update: Prisma.XOR<Prisma.GeneratedContentUpdateWithoutMoodEntryInput, Prisma.GeneratedContentUncheckedUpdateWithoutMoodEntryInput>;
    create: Prisma.XOR<Prisma.GeneratedContentCreateWithoutMoodEntryInput, Prisma.GeneratedContentUncheckedCreateWithoutMoodEntryInput>;
};
export type GeneratedContentUpdateWithWhereUniqueWithoutMoodEntryInput = {
    where: Prisma.GeneratedContentWhereUniqueInput;
    data: Prisma.XOR<Prisma.GeneratedContentUpdateWithoutMoodEntryInput, Prisma.GeneratedContentUncheckedUpdateWithoutMoodEntryInput>;
};
export type GeneratedContentUpdateManyWithWhereWithoutMoodEntryInput = {
    where: Prisma.GeneratedContentScalarWhereInput;
    data: Prisma.XOR<Prisma.GeneratedContentUpdateManyMutationInput, Prisma.GeneratedContentUncheckedUpdateManyWithoutMoodEntryInput>;
};
export type GeneratedContentCreateWithoutFavoritesInput = {
    id?: string;
    type: $Enums.ContentType;
    content: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    languageCode: string;
    providerId: string;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutGeneratedContentsInput;
    moodEntry?: Prisma.MoodEntryCreateNestedOneWithoutGeneratedContentsInput;
};
export type GeneratedContentUncheckedCreateWithoutFavoritesInput = {
    id?: string;
    userId: string;
    moodEntryId?: string | null;
    type: $Enums.ContentType;
    content: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    languageCode: string;
    providerId: string;
    createdAt?: Date | string;
};
export type GeneratedContentCreateOrConnectWithoutFavoritesInput = {
    where: Prisma.GeneratedContentWhereUniqueInput;
    create: Prisma.XOR<Prisma.GeneratedContentCreateWithoutFavoritesInput, Prisma.GeneratedContentUncheckedCreateWithoutFavoritesInput>;
};
export type GeneratedContentUpsertWithoutFavoritesInput = {
    update: Prisma.XOR<Prisma.GeneratedContentUpdateWithoutFavoritesInput, Prisma.GeneratedContentUncheckedUpdateWithoutFavoritesInput>;
    create: Prisma.XOR<Prisma.GeneratedContentCreateWithoutFavoritesInput, Prisma.GeneratedContentUncheckedCreateWithoutFavoritesInput>;
    where?: Prisma.GeneratedContentWhereInput;
};
export type GeneratedContentUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: Prisma.GeneratedContentWhereInput;
    data: Prisma.XOR<Prisma.GeneratedContentUpdateWithoutFavoritesInput, Prisma.GeneratedContentUncheckedUpdateWithoutFavoritesInput>;
};
export type GeneratedContentUpdateWithoutFavoritesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType;
    content?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    languageCode?: Prisma.StringFieldUpdateOperationsInput | string;
    providerId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutGeneratedContentsNestedInput;
    moodEntry?: Prisma.MoodEntryUpdateOneWithoutGeneratedContentsNestedInput;
};
export type GeneratedContentUncheckedUpdateWithoutFavoritesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    moodEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType;
    content?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    languageCode?: Prisma.StringFieldUpdateOperationsInput | string;
    providerId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GeneratedContentCreateManyUserInput = {
    id?: string;
    moodEntryId?: string | null;
    type: $Enums.ContentType;
    content: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    languageCode: string;
    providerId: string;
    createdAt?: Date | string;
};
export type GeneratedContentUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType;
    content?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    languageCode?: Prisma.StringFieldUpdateOperationsInput | string;
    providerId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    moodEntry?: Prisma.MoodEntryUpdateOneWithoutGeneratedContentsNestedInput;
    favorites?: Prisma.FavoriteUpdateManyWithoutContentNestedInput;
};
export type GeneratedContentUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    moodEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType;
    content?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    languageCode?: Prisma.StringFieldUpdateOperationsInput | string;
    providerId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutContentNestedInput;
};
export type GeneratedContentUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    moodEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType;
    content?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    languageCode?: Prisma.StringFieldUpdateOperationsInput | string;
    providerId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GeneratedContentCreateManyMoodEntryInput = {
    id?: string;
    userId: string;
    type: $Enums.ContentType;
    content: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    languageCode: string;
    providerId: string;
    createdAt?: Date | string;
};
export type GeneratedContentUpdateWithoutMoodEntryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType;
    content?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    languageCode?: Prisma.StringFieldUpdateOperationsInput | string;
    providerId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutGeneratedContentsNestedInput;
    favorites?: Prisma.FavoriteUpdateManyWithoutContentNestedInput;
};
export type GeneratedContentUncheckedUpdateWithoutMoodEntryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType;
    content?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    languageCode?: Prisma.StringFieldUpdateOperationsInput | string;
    providerId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    favorites?: Prisma.FavoriteUncheckedUpdateManyWithoutContentNestedInput;
};
export type GeneratedContentUncheckedUpdateManyWithoutMoodEntryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType;
    content?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    languageCode?: Prisma.StringFieldUpdateOperationsInput | string;
    providerId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GeneratedContentCountOutputType = {
    favorites: number;
};
export type GeneratedContentCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    favorites?: boolean | GeneratedContentCountOutputTypeCountFavoritesArgs;
};
export type GeneratedContentCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GeneratedContentCountOutputTypeSelect<ExtArgs> | null;
};
export type GeneratedContentCountOutputTypeCountFavoritesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FavoriteWhereInput;
};
export type GeneratedContentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    moodEntryId?: boolean;
    type?: boolean;
    content?: boolean;
    languageCode?: boolean;
    providerId?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    moodEntry?: boolean | Prisma.GeneratedContent$moodEntryArgs<ExtArgs>;
    favorites?: boolean | Prisma.GeneratedContent$favoritesArgs<ExtArgs>;
    _count?: boolean | Prisma.GeneratedContentCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["generatedContent"]>;
export type GeneratedContentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    moodEntryId?: boolean;
    type?: boolean;
    content?: boolean;
    languageCode?: boolean;
    providerId?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    moodEntry?: boolean | Prisma.GeneratedContent$moodEntryArgs<ExtArgs>;
}, ExtArgs["result"]["generatedContent"]>;
export type GeneratedContentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    moodEntryId?: boolean;
    type?: boolean;
    content?: boolean;
    languageCode?: boolean;
    providerId?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    moodEntry?: boolean | Prisma.GeneratedContent$moodEntryArgs<ExtArgs>;
}, ExtArgs["result"]["generatedContent"]>;
export type GeneratedContentSelectScalar = {
    id?: boolean;
    userId?: boolean;
    moodEntryId?: boolean;
    type?: boolean;
    content?: boolean;
    languageCode?: boolean;
    providerId?: boolean;
    createdAt?: boolean;
};
export type GeneratedContentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "moodEntryId" | "type" | "content" | "languageCode" | "providerId" | "createdAt", ExtArgs["result"]["generatedContent"]>;
export type GeneratedContentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    moodEntry?: boolean | Prisma.GeneratedContent$moodEntryArgs<ExtArgs>;
    favorites?: boolean | Prisma.GeneratedContent$favoritesArgs<ExtArgs>;
    _count?: boolean | Prisma.GeneratedContentCountOutputTypeDefaultArgs<ExtArgs>;
};
export type GeneratedContentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    moodEntry?: boolean | Prisma.GeneratedContent$moodEntryArgs<ExtArgs>;
};
export type GeneratedContentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    moodEntry?: boolean | Prisma.GeneratedContent$moodEntryArgs<ExtArgs>;
};
export type $GeneratedContentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "GeneratedContent";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        moodEntry: Prisma.$MoodEntryPayload<ExtArgs> | null;
        favorites: Prisma.$FavoritePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        moodEntryId: string | null;
        type: $Enums.ContentType;
        content: runtime.JsonValue;
        languageCode: string;
        providerId: string;
        createdAt: Date;
    }, ExtArgs["result"]["generatedContent"]>;
    composites: {};
};
export type GeneratedContentGetPayload<S extends boolean | null | undefined | GeneratedContentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$GeneratedContentPayload, S>;
export type GeneratedContentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<GeneratedContentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: GeneratedContentCountAggregateInputType | true;
};
export interface GeneratedContentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['GeneratedContent'];
        meta: {
            name: 'GeneratedContent';
        };
    };
    findUnique<T extends GeneratedContentFindUniqueArgs>(args: Prisma.SelectSubset<T, GeneratedContentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__GeneratedContentClient<runtime.Types.Result.GetResult<Prisma.$GeneratedContentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends GeneratedContentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, GeneratedContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__GeneratedContentClient<runtime.Types.Result.GetResult<Prisma.$GeneratedContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends GeneratedContentFindFirstArgs>(args?: Prisma.SelectSubset<T, GeneratedContentFindFirstArgs<ExtArgs>>): Prisma.Prisma__GeneratedContentClient<runtime.Types.Result.GetResult<Prisma.$GeneratedContentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends GeneratedContentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, GeneratedContentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__GeneratedContentClient<runtime.Types.Result.GetResult<Prisma.$GeneratedContentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends GeneratedContentFindManyArgs>(args?: Prisma.SelectSubset<T, GeneratedContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GeneratedContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends GeneratedContentCreateArgs>(args: Prisma.SelectSubset<T, GeneratedContentCreateArgs<ExtArgs>>): Prisma.Prisma__GeneratedContentClient<runtime.Types.Result.GetResult<Prisma.$GeneratedContentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends GeneratedContentCreateManyArgs>(args?: Prisma.SelectSubset<T, GeneratedContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends GeneratedContentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, GeneratedContentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GeneratedContentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends GeneratedContentDeleteArgs>(args: Prisma.SelectSubset<T, GeneratedContentDeleteArgs<ExtArgs>>): Prisma.Prisma__GeneratedContentClient<runtime.Types.Result.GetResult<Prisma.$GeneratedContentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends GeneratedContentUpdateArgs>(args: Prisma.SelectSubset<T, GeneratedContentUpdateArgs<ExtArgs>>): Prisma.Prisma__GeneratedContentClient<runtime.Types.Result.GetResult<Prisma.$GeneratedContentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends GeneratedContentDeleteManyArgs>(args?: Prisma.SelectSubset<T, GeneratedContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends GeneratedContentUpdateManyArgs>(args: Prisma.SelectSubset<T, GeneratedContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends GeneratedContentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, GeneratedContentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GeneratedContentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends GeneratedContentUpsertArgs>(args: Prisma.SelectSubset<T, GeneratedContentUpsertArgs<ExtArgs>>): Prisma.Prisma__GeneratedContentClient<runtime.Types.Result.GetResult<Prisma.$GeneratedContentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends GeneratedContentCountArgs>(args?: Prisma.Subset<T, GeneratedContentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], GeneratedContentCountAggregateOutputType> : number>;
    aggregate<T extends GeneratedContentAggregateArgs>(args: Prisma.Subset<T, GeneratedContentAggregateArgs>): Prisma.PrismaPromise<GetGeneratedContentAggregateType<T>>;
    groupBy<T extends GeneratedContentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: GeneratedContentGroupByArgs['orderBy'];
    } : {
        orderBy?: GeneratedContentGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, GeneratedContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeneratedContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: GeneratedContentFieldRefs;
}
export interface Prisma__GeneratedContentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    moodEntry<T extends Prisma.GeneratedContent$moodEntryArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GeneratedContent$moodEntryArgs<ExtArgs>>): Prisma.Prisma__MoodEntryClient<runtime.Types.Result.GetResult<Prisma.$MoodEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    favorites<T extends Prisma.GeneratedContent$favoritesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GeneratedContent$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface GeneratedContentFieldRefs {
    readonly id: Prisma.FieldRef<"GeneratedContent", 'String'>;
    readonly userId: Prisma.FieldRef<"GeneratedContent", 'String'>;
    readonly moodEntryId: Prisma.FieldRef<"GeneratedContent", 'String'>;
    readonly type: Prisma.FieldRef<"GeneratedContent", 'ContentType'>;
    readonly content: Prisma.FieldRef<"GeneratedContent", 'Json'>;
    readonly languageCode: Prisma.FieldRef<"GeneratedContent", 'String'>;
    readonly providerId: Prisma.FieldRef<"GeneratedContent", 'String'>;
    readonly createdAt: Prisma.FieldRef<"GeneratedContent", 'DateTime'>;
}
export type GeneratedContentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GeneratedContentSelect<ExtArgs> | null;
    omit?: Prisma.GeneratedContentOmit<ExtArgs> | null;
    include?: Prisma.GeneratedContentInclude<ExtArgs> | null;
    where: Prisma.GeneratedContentWhereUniqueInput;
};
export type GeneratedContentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GeneratedContentSelect<ExtArgs> | null;
    omit?: Prisma.GeneratedContentOmit<ExtArgs> | null;
    include?: Prisma.GeneratedContentInclude<ExtArgs> | null;
    where: Prisma.GeneratedContentWhereUniqueInput;
};
export type GeneratedContentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GeneratedContentSelect<ExtArgs> | null;
    omit?: Prisma.GeneratedContentOmit<ExtArgs> | null;
    include?: Prisma.GeneratedContentInclude<ExtArgs> | null;
    where?: Prisma.GeneratedContentWhereInput;
    orderBy?: Prisma.GeneratedContentOrderByWithRelationInput | Prisma.GeneratedContentOrderByWithRelationInput[];
    cursor?: Prisma.GeneratedContentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GeneratedContentScalarFieldEnum | Prisma.GeneratedContentScalarFieldEnum[];
};
export type GeneratedContentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GeneratedContentSelect<ExtArgs> | null;
    omit?: Prisma.GeneratedContentOmit<ExtArgs> | null;
    include?: Prisma.GeneratedContentInclude<ExtArgs> | null;
    where?: Prisma.GeneratedContentWhereInput;
    orderBy?: Prisma.GeneratedContentOrderByWithRelationInput | Prisma.GeneratedContentOrderByWithRelationInput[];
    cursor?: Prisma.GeneratedContentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GeneratedContentScalarFieldEnum | Prisma.GeneratedContentScalarFieldEnum[];
};
export type GeneratedContentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GeneratedContentSelect<ExtArgs> | null;
    omit?: Prisma.GeneratedContentOmit<ExtArgs> | null;
    include?: Prisma.GeneratedContentInclude<ExtArgs> | null;
    where?: Prisma.GeneratedContentWhereInput;
    orderBy?: Prisma.GeneratedContentOrderByWithRelationInput | Prisma.GeneratedContentOrderByWithRelationInput[];
    cursor?: Prisma.GeneratedContentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GeneratedContentScalarFieldEnum | Prisma.GeneratedContentScalarFieldEnum[];
};
export type GeneratedContentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GeneratedContentSelect<ExtArgs> | null;
    omit?: Prisma.GeneratedContentOmit<ExtArgs> | null;
    include?: Prisma.GeneratedContentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GeneratedContentCreateInput, Prisma.GeneratedContentUncheckedCreateInput>;
};
export type GeneratedContentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.GeneratedContentCreateManyInput | Prisma.GeneratedContentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type GeneratedContentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GeneratedContentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GeneratedContentOmit<ExtArgs> | null;
    data: Prisma.GeneratedContentCreateManyInput | Prisma.GeneratedContentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.GeneratedContentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type GeneratedContentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GeneratedContentSelect<ExtArgs> | null;
    omit?: Prisma.GeneratedContentOmit<ExtArgs> | null;
    include?: Prisma.GeneratedContentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GeneratedContentUpdateInput, Prisma.GeneratedContentUncheckedUpdateInput>;
    where: Prisma.GeneratedContentWhereUniqueInput;
};
export type GeneratedContentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.GeneratedContentUpdateManyMutationInput, Prisma.GeneratedContentUncheckedUpdateManyInput>;
    where?: Prisma.GeneratedContentWhereInput;
    limit?: number;
};
export type GeneratedContentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GeneratedContentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GeneratedContentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GeneratedContentUpdateManyMutationInput, Prisma.GeneratedContentUncheckedUpdateManyInput>;
    where?: Prisma.GeneratedContentWhereInput;
    limit?: number;
    include?: Prisma.GeneratedContentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type GeneratedContentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GeneratedContentSelect<ExtArgs> | null;
    omit?: Prisma.GeneratedContentOmit<ExtArgs> | null;
    include?: Prisma.GeneratedContentInclude<ExtArgs> | null;
    where: Prisma.GeneratedContentWhereUniqueInput;
    create: Prisma.XOR<Prisma.GeneratedContentCreateInput, Prisma.GeneratedContentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.GeneratedContentUpdateInput, Prisma.GeneratedContentUncheckedUpdateInput>;
};
export type GeneratedContentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GeneratedContentSelect<ExtArgs> | null;
    omit?: Prisma.GeneratedContentOmit<ExtArgs> | null;
    include?: Prisma.GeneratedContentInclude<ExtArgs> | null;
    where: Prisma.GeneratedContentWhereUniqueInput;
};
export type GeneratedContentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GeneratedContentWhereInput;
    limit?: number;
};
export type GeneratedContent$moodEntryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MoodEntrySelect<ExtArgs> | null;
    omit?: Prisma.MoodEntryOmit<ExtArgs> | null;
    include?: Prisma.MoodEntryInclude<ExtArgs> | null;
    where?: Prisma.MoodEntryWhereInput;
};
export type GeneratedContent$favoritesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FavoriteSelect<ExtArgs> | null;
    omit?: Prisma.FavoriteOmit<ExtArgs> | null;
    include?: Prisma.FavoriteInclude<ExtArgs> | null;
    where?: Prisma.FavoriteWhereInput;
    orderBy?: Prisma.FavoriteOrderByWithRelationInput | Prisma.FavoriteOrderByWithRelationInput[];
    cursor?: Prisma.FavoriteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FavoriteScalarFieldEnum | Prisma.FavoriteScalarFieldEnum[];
};
export type GeneratedContentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GeneratedContentSelect<ExtArgs> | null;
    omit?: Prisma.GeneratedContentOmit<ExtArgs> | null;
    include?: Prisma.GeneratedContentInclude<ExtArgs> | null;
};
export {};
