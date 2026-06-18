import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MoodEntryModel = runtime.Types.Result.DefaultSelection<Prisma.$MoodEntryPayload>;
export type AggregateMoodEntry = {
    _count: MoodEntryCountAggregateOutputType | null;
    _avg: MoodEntryAvgAggregateOutputType | null;
    _sum: MoodEntrySumAggregateOutputType | null;
    _min: MoodEntryMinAggregateOutputType | null;
    _max: MoodEntryMaxAggregateOutputType | null;
};
export type MoodEntryAvgAggregateOutputType = {
    intensity: number | null;
};
export type MoodEntrySumAggregateOutputType = {
    intensity: number | null;
};
export type MoodEntryMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    mood: $Enums.MoodType | null;
    intensity: number | null;
    emoji: string | null;
    note: string | null;
    createdAt: Date | null;
};
export type MoodEntryMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    mood: $Enums.MoodType | null;
    intensity: number | null;
    emoji: string | null;
    note: string | null;
    createdAt: Date | null;
};
export type MoodEntryCountAggregateOutputType = {
    id: number;
    userId: number;
    mood: number;
    intensity: number;
    emoji: number;
    note: number;
    createdAt: number;
    _all: number;
};
export type MoodEntryAvgAggregateInputType = {
    intensity?: true;
};
export type MoodEntrySumAggregateInputType = {
    intensity?: true;
};
export type MoodEntryMinAggregateInputType = {
    id?: true;
    userId?: true;
    mood?: true;
    intensity?: true;
    emoji?: true;
    note?: true;
    createdAt?: true;
};
export type MoodEntryMaxAggregateInputType = {
    id?: true;
    userId?: true;
    mood?: true;
    intensity?: true;
    emoji?: true;
    note?: true;
    createdAt?: true;
};
export type MoodEntryCountAggregateInputType = {
    id?: true;
    userId?: true;
    mood?: true;
    intensity?: true;
    emoji?: true;
    note?: true;
    createdAt?: true;
    _all?: true;
};
export type MoodEntryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MoodEntryWhereInput;
    orderBy?: Prisma.MoodEntryOrderByWithRelationInput | Prisma.MoodEntryOrderByWithRelationInput[];
    cursor?: Prisma.MoodEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MoodEntryCountAggregateInputType;
    _avg?: MoodEntryAvgAggregateInputType;
    _sum?: MoodEntrySumAggregateInputType;
    _min?: MoodEntryMinAggregateInputType;
    _max?: MoodEntryMaxAggregateInputType;
};
export type GetMoodEntryAggregateType<T extends MoodEntryAggregateArgs> = {
    [P in keyof T & keyof AggregateMoodEntry]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMoodEntry[P]> : Prisma.GetScalarType<T[P], AggregateMoodEntry[P]>;
};
export type MoodEntryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MoodEntryWhereInput;
    orderBy?: Prisma.MoodEntryOrderByWithAggregationInput | Prisma.MoodEntryOrderByWithAggregationInput[];
    by: Prisma.MoodEntryScalarFieldEnum[] | Prisma.MoodEntryScalarFieldEnum;
    having?: Prisma.MoodEntryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MoodEntryCountAggregateInputType | true;
    _avg?: MoodEntryAvgAggregateInputType;
    _sum?: MoodEntrySumAggregateInputType;
    _min?: MoodEntryMinAggregateInputType;
    _max?: MoodEntryMaxAggregateInputType;
};
export type MoodEntryGroupByOutputType = {
    id: string;
    userId: string;
    mood: $Enums.MoodType;
    intensity: number | null;
    emoji: string | null;
    note: string | null;
    createdAt: Date;
    _count: MoodEntryCountAggregateOutputType | null;
    _avg: MoodEntryAvgAggregateOutputType | null;
    _sum: MoodEntrySumAggregateOutputType | null;
    _min: MoodEntryMinAggregateOutputType | null;
    _max: MoodEntryMaxAggregateOutputType | null;
};
type GetMoodEntryGroupByPayload<T extends MoodEntryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MoodEntryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MoodEntryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MoodEntryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MoodEntryGroupByOutputType[P]>;
}>>;
export type MoodEntryWhereInput = {
    AND?: Prisma.MoodEntryWhereInput | Prisma.MoodEntryWhereInput[];
    OR?: Prisma.MoodEntryWhereInput[];
    NOT?: Prisma.MoodEntryWhereInput | Prisma.MoodEntryWhereInput[];
    id?: Prisma.StringFilter<"MoodEntry"> | string;
    userId?: Prisma.StringFilter<"MoodEntry"> | string;
    mood?: Prisma.EnumMoodTypeFilter<"MoodEntry"> | $Enums.MoodType;
    intensity?: Prisma.IntNullableFilter<"MoodEntry"> | number | null;
    emoji?: Prisma.StringNullableFilter<"MoodEntry"> | string | null;
    note?: Prisma.StringNullableFilter<"MoodEntry"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"MoodEntry"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    generatedContents?: Prisma.GeneratedContentListRelationFilter;
    tasks?: Prisma.TaskListRelationFilter;
};
export type MoodEntryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    mood?: Prisma.SortOrder;
    intensity?: Prisma.SortOrderInput | Prisma.SortOrder;
    emoji?: Prisma.SortOrderInput | Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    generatedContents?: Prisma.GeneratedContentOrderByRelationAggregateInput;
    tasks?: Prisma.TaskOrderByRelationAggregateInput;
};
export type MoodEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.MoodEntryWhereInput | Prisma.MoodEntryWhereInput[];
    OR?: Prisma.MoodEntryWhereInput[];
    NOT?: Prisma.MoodEntryWhereInput | Prisma.MoodEntryWhereInput[];
    userId?: Prisma.StringFilter<"MoodEntry"> | string;
    mood?: Prisma.EnumMoodTypeFilter<"MoodEntry"> | $Enums.MoodType;
    intensity?: Prisma.IntNullableFilter<"MoodEntry"> | number | null;
    emoji?: Prisma.StringNullableFilter<"MoodEntry"> | string | null;
    note?: Prisma.StringNullableFilter<"MoodEntry"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"MoodEntry"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    generatedContents?: Prisma.GeneratedContentListRelationFilter;
    tasks?: Prisma.TaskListRelationFilter;
}, "id">;
export type MoodEntryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    mood?: Prisma.SortOrder;
    intensity?: Prisma.SortOrderInput | Prisma.SortOrder;
    emoji?: Prisma.SortOrderInput | Prisma.SortOrder;
    note?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.MoodEntryCountOrderByAggregateInput;
    _avg?: Prisma.MoodEntryAvgOrderByAggregateInput;
    _max?: Prisma.MoodEntryMaxOrderByAggregateInput;
    _min?: Prisma.MoodEntryMinOrderByAggregateInput;
    _sum?: Prisma.MoodEntrySumOrderByAggregateInput;
};
export type MoodEntryScalarWhereWithAggregatesInput = {
    AND?: Prisma.MoodEntryScalarWhereWithAggregatesInput | Prisma.MoodEntryScalarWhereWithAggregatesInput[];
    OR?: Prisma.MoodEntryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MoodEntryScalarWhereWithAggregatesInput | Prisma.MoodEntryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"MoodEntry"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"MoodEntry"> | string;
    mood?: Prisma.EnumMoodTypeWithAggregatesFilter<"MoodEntry"> | $Enums.MoodType;
    intensity?: Prisma.IntNullableWithAggregatesFilter<"MoodEntry"> | number | null;
    emoji?: Prisma.StringNullableWithAggregatesFilter<"MoodEntry"> | string | null;
    note?: Prisma.StringNullableWithAggregatesFilter<"MoodEntry"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"MoodEntry"> | Date | string;
};
export type MoodEntryCreateInput = {
    id?: string;
    mood: $Enums.MoodType;
    intensity?: number | null;
    emoji?: string | null;
    note?: string | null;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutMoodEntriesInput;
    generatedContents?: Prisma.GeneratedContentCreateNestedManyWithoutMoodEntryInput;
    tasks?: Prisma.TaskCreateNestedManyWithoutMoodEntryInput;
};
export type MoodEntryUncheckedCreateInput = {
    id?: string;
    userId: string;
    mood: $Enums.MoodType;
    intensity?: number | null;
    emoji?: string | null;
    note?: string | null;
    createdAt?: Date | string;
    generatedContents?: Prisma.GeneratedContentUncheckedCreateNestedManyWithoutMoodEntryInput;
    tasks?: Prisma.TaskUncheckedCreateNestedManyWithoutMoodEntryInput;
};
export type MoodEntryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mood?: Prisma.EnumMoodTypeFieldUpdateOperationsInput | $Enums.MoodType;
    intensity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    emoji?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutMoodEntriesNestedInput;
    generatedContents?: Prisma.GeneratedContentUpdateManyWithoutMoodEntryNestedInput;
    tasks?: Prisma.TaskUpdateManyWithoutMoodEntryNestedInput;
};
export type MoodEntryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    mood?: Prisma.EnumMoodTypeFieldUpdateOperationsInput | $Enums.MoodType;
    intensity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    emoji?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    generatedContents?: Prisma.GeneratedContentUncheckedUpdateManyWithoutMoodEntryNestedInput;
    tasks?: Prisma.TaskUncheckedUpdateManyWithoutMoodEntryNestedInput;
};
export type MoodEntryCreateManyInput = {
    id?: string;
    userId: string;
    mood: $Enums.MoodType;
    intensity?: number | null;
    emoji?: string | null;
    note?: string | null;
    createdAt?: Date | string;
};
export type MoodEntryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mood?: Prisma.EnumMoodTypeFieldUpdateOperationsInput | $Enums.MoodType;
    intensity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    emoji?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MoodEntryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    mood?: Prisma.EnumMoodTypeFieldUpdateOperationsInput | $Enums.MoodType;
    intensity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    emoji?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MoodEntryListRelationFilter = {
    every?: Prisma.MoodEntryWhereInput;
    some?: Prisma.MoodEntryWhereInput;
    none?: Prisma.MoodEntryWhereInput;
};
export type MoodEntryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MoodEntryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    mood?: Prisma.SortOrder;
    intensity?: Prisma.SortOrder;
    emoji?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MoodEntryAvgOrderByAggregateInput = {
    intensity?: Prisma.SortOrder;
};
export type MoodEntryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    mood?: Prisma.SortOrder;
    intensity?: Prisma.SortOrder;
    emoji?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MoodEntryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    mood?: Prisma.SortOrder;
    intensity?: Prisma.SortOrder;
    emoji?: Prisma.SortOrder;
    note?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MoodEntrySumOrderByAggregateInput = {
    intensity?: Prisma.SortOrder;
};
export type MoodEntryNullableScalarRelationFilter = {
    is?: Prisma.MoodEntryWhereInput | null;
    isNot?: Prisma.MoodEntryWhereInput | null;
};
export type MoodEntryCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.MoodEntryCreateWithoutUserInput, Prisma.MoodEntryUncheckedCreateWithoutUserInput> | Prisma.MoodEntryCreateWithoutUserInput[] | Prisma.MoodEntryUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MoodEntryCreateOrConnectWithoutUserInput | Prisma.MoodEntryCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.MoodEntryCreateManyUserInputEnvelope;
    connect?: Prisma.MoodEntryWhereUniqueInput | Prisma.MoodEntryWhereUniqueInput[];
};
export type MoodEntryUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.MoodEntryCreateWithoutUserInput, Prisma.MoodEntryUncheckedCreateWithoutUserInput> | Prisma.MoodEntryCreateWithoutUserInput[] | Prisma.MoodEntryUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MoodEntryCreateOrConnectWithoutUserInput | Prisma.MoodEntryCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.MoodEntryCreateManyUserInputEnvelope;
    connect?: Prisma.MoodEntryWhereUniqueInput | Prisma.MoodEntryWhereUniqueInput[];
};
export type MoodEntryUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.MoodEntryCreateWithoutUserInput, Prisma.MoodEntryUncheckedCreateWithoutUserInput> | Prisma.MoodEntryCreateWithoutUserInput[] | Prisma.MoodEntryUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MoodEntryCreateOrConnectWithoutUserInput | Prisma.MoodEntryCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.MoodEntryUpsertWithWhereUniqueWithoutUserInput | Prisma.MoodEntryUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.MoodEntryCreateManyUserInputEnvelope;
    set?: Prisma.MoodEntryWhereUniqueInput | Prisma.MoodEntryWhereUniqueInput[];
    disconnect?: Prisma.MoodEntryWhereUniqueInput | Prisma.MoodEntryWhereUniqueInput[];
    delete?: Prisma.MoodEntryWhereUniqueInput | Prisma.MoodEntryWhereUniqueInput[];
    connect?: Prisma.MoodEntryWhereUniqueInput | Prisma.MoodEntryWhereUniqueInput[];
    update?: Prisma.MoodEntryUpdateWithWhereUniqueWithoutUserInput | Prisma.MoodEntryUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.MoodEntryUpdateManyWithWhereWithoutUserInput | Prisma.MoodEntryUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.MoodEntryScalarWhereInput | Prisma.MoodEntryScalarWhereInput[];
};
export type MoodEntryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.MoodEntryCreateWithoutUserInput, Prisma.MoodEntryUncheckedCreateWithoutUserInput> | Prisma.MoodEntryCreateWithoutUserInput[] | Prisma.MoodEntryUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MoodEntryCreateOrConnectWithoutUserInput | Prisma.MoodEntryCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.MoodEntryUpsertWithWhereUniqueWithoutUserInput | Prisma.MoodEntryUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.MoodEntryCreateManyUserInputEnvelope;
    set?: Prisma.MoodEntryWhereUniqueInput | Prisma.MoodEntryWhereUniqueInput[];
    disconnect?: Prisma.MoodEntryWhereUniqueInput | Prisma.MoodEntryWhereUniqueInput[];
    delete?: Prisma.MoodEntryWhereUniqueInput | Prisma.MoodEntryWhereUniqueInput[];
    connect?: Prisma.MoodEntryWhereUniqueInput | Prisma.MoodEntryWhereUniqueInput[];
    update?: Prisma.MoodEntryUpdateWithWhereUniqueWithoutUserInput | Prisma.MoodEntryUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.MoodEntryUpdateManyWithWhereWithoutUserInput | Prisma.MoodEntryUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.MoodEntryScalarWhereInput | Prisma.MoodEntryScalarWhereInput[];
};
export type EnumMoodTypeFieldUpdateOperationsInput = {
    set?: $Enums.MoodType;
};
export type MoodEntryCreateNestedOneWithoutGeneratedContentsInput = {
    create?: Prisma.XOR<Prisma.MoodEntryCreateWithoutGeneratedContentsInput, Prisma.MoodEntryUncheckedCreateWithoutGeneratedContentsInput>;
    connectOrCreate?: Prisma.MoodEntryCreateOrConnectWithoutGeneratedContentsInput;
    connect?: Prisma.MoodEntryWhereUniqueInput;
};
export type MoodEntryUpdateOneWithoutGeneratedContentsNestedInput = {
    create?: Prisma.XOR<Prisma.MoodEntryCreateWithoutGeneratedContentsInput, Prisma.MoodEntryUncheckedCreateWithoutGeneratedContentsInput>;
    connectOrCreate?: Prisma.MoodEntryCreateOrConnectWithoutGeneratedContentsInput;
    upsert?: Prisma.MoodEntryUpsertWithoutGeneratedContentsInput;
    disconnect?: Prisma.MoodEntryWhereInput | boolean;
    delete?: Prisma.MoodEntryWhereInput | boolean;
    connect?: Prisma.MoodEntryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MoodEntryUpdateToOneWithWhereWithoutGeneratedContentsInput, Prisma.MoodEntryUpdateWithoutGeneratedContentsInput>, Prisma.MoodEntryUncheckedUpdateWithoutGeneratedContentsInput>;
};
export type MoodEntryCreateNestedOneWithoutTasksInput = {
    create?: Prisma.XOR<Prisma.MoodEntryCreateWithoutTasksInput, Prisma.MoodEntryUncheckedCreateWithoutTasksInput>;
    connectOrCreate?: Prisma.MoodEntryCreateOrConnectWithoutTasksInput;
    connect?: Prisma.MoodEntryWhereUniqueInput;
};
export type MoodEntryUpdateOneWithoutTasksNestedInput = {
    create?: Prisma.XOR<Prisma.MoodEntryCreateWithoutTasksInput, Prisma.MoodEntryUncheckedCreateWithoutTasksInput>;
    connectOrCreate?: Prisma.MoodEntryCreateOrConnectWithoutTasksInput;
    upsert?: Prisma.MoodEntryUpsertWithoutTasksInput;
    disconnect?: Prisma.MoodEntryWhereInput | boolean;
    delete?: Prisma.MoodEntryWhereInput | boolean;
    connect?: Prisma.MoodEntryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MoodEntryUpdateToOneWithWhereWithoutTasksInput, Prisma.MoodEntryUpdateWithoutTasksInput>, Prisma.MoodEntryUncheckedUpdateWithoutTasksInput>;
};
export type MoodEntryCreateWithoutUserInput = {
    id?: string;
    mood: $Enums.MoodType;
    intensity?: number | null;
    emoji?: string | null;
    note?: string | null;
    createdAt?: Date | string;
    generatedContents?: Prisma.GeneratedContentCreateNestedManyWithoutMoodEntryInput;
    tasks?: Prisma.TaskCreateNestedManyWithoutMoodEntryInput;
};
export type MoodEntryUncheckedCreateWithoutUserInput = {
    id?: string;
    mood: $Enums.MoodType;
    intensity?: number | null;
    emoji?: string | null;
    note?: string | null;
    createdAt?: Date | string;
    generatedContents?: Prisma.GeneratedContentUncheckedCreateNestedManyWithoutMoodEntryInput;
    tasks?: Prisma.TaskUncheckedCreateNestedManyWithoutMoodEntryInput;
};
export type MoodEntryCreateOrConnectWithoutUserInput = {
    where: Prisma.MoodEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.MoodEntryCreateWithoutUserInput, Prisma.MoodEntryUncheckedCreateWithoutUserInput>;
};
export type MoodEntryCreateManyUserInputEnvelope = {
    data: Prisma.MoodEntryCreateManyUserInput | Prisma.MoodEntryCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type MoodEntryUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.MoodEntryWhereUniqueInput;
    update: Prisma.XOR<Prisma.MoodEntryUpdateWithoutUserInput, Prisma.MoodEntryUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.MoodEntryCreateWithoutUserInput, Prisma.MoodEntryUncheckedCreateWithoutUserInput>;
};
export type MoodEntryUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.MoodEntryWhereUniqueInput;
    data: Prisma.XOR<Prisma.MoodEntryUpdateWithoutUserInput, Prisma.MoodEntryUncheckedUpdateWithoutUserInput>;
};
export type MoodEntryUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.MoodEntryScalarWhereInput;
    data: Prisma.XOR<Prisma.MoodEntryUpdateManyMutationInput, Prisma.MoodEntryUncheckedUpdateManyWithoutUserInput>;
};
export type MoodEntryScalarWhereInput = {
    AND?: Prisma.MoodEntryScalarWhereInput | Prisma.MoodEntryScalarWhereInput[];
    OR?: Prisma.MoodEntryScalarWhereInput[];
    NOT?: Prisma.MoodEntryScalarWhereInput | Prisma.MoodEntryScalarWhereInput[];
    id?: Prisma.StringFilter<"MoodEntry"> | string;
    userId?: Prisma.StringFilter<"MoodEntry"> | string;
    mood?: Prisma.EnumMoodTypeFilter<"MoodEntry"> | $Enums.MoodType;
    intensity?: Prisma.IntNullableFilter<"MoodEntry"> | number | null;
    emoji?: Prisma.StringNullableFilter<"MoodEntry"> | string | null;
    note?: Prisma.StringNullableFilter<"MoodEntry"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"MoodEntry"> | Date | string;
};
export type MoodEntryCreateWithoutGeneratedContentsInput = {
    id?: string;
    mood: $Enums.MoodType;
    intensity?: number | null;
    emoji?: string | null;
    note?: string | null;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutMoodEntriesInput;
    tasks?: Prisma.TaskCreateNestedManyWithoutMoodEntryInput;
};
export type MoodEntryUncheckedCreateWithoutGeneratedContentsInput = {
    id?: string;
    userId: string;
    mood: $Enums.MoodType;
    intensity?: number | null;
    emoji?: string | null;
    note?: string | null;
    createdAt?: Date | string;
    tasks?: Prisma.TaskUncheckedCreateNestedManyWithoutMoodEntryInput;
};
export type MoodEntryCreateOrConnectWithoutGeneratedContentsInput = {
    where: Prisma.MoodEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.MoodEntryCreateWithoutGeneratedContentsInput, Prisma.MoodEntryUncheckedCreateWithoutGeneratedContentsInput>;
};
export type MoodEntryUpsertWithoutGeneratedContentsInput = {
    update: Prisma.XOR<Prisma.MoodEntryUpdateWithoutGeneratedContentsInput, Prisma.MoodEntryUncheckedUpdateWithoutGeneratedContentsInput>;
    create: Prisma.XOR<Prisma.MoodEntryCreateWithoutGeneratedContentsInput, Prisma.MoodEntryUncheckedCreateWithoutGeneratedContentsInput>;
    where?: Prisma.MoodEntryWhereInput;
};
export type MoodEntryUpdateToOneWithWhereWithoutGeneratedContentsInput = {
    where?: Prisma.MoodEntryWhereInput;
    data: Prisma.XOR<Prisma.MoodEntryUpdateWithoutGeneratedContentsInput, Prisma.MoodEntryUncheckedUpdateWithoutGeneratedContentsInput>;
};
export type MoodEntryUpdateWithoutGeneratedContentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mood?: Prisma.EnumMoodTypeFieldUpdateOperationsInput | $Enums.MoodType;
    intensity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    emoji?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutMoodEntriesNestedInput;
    tasks?: Prisma.TaskUpdateManyWithoutMoodEntryNestedInput;
};
export type MoodEntryUncheckedUpdateWithoutGeneratedContentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    mood?: Prisma.EnumMoodTypeFieldUpdateOperationsInput | $Enums.MoodType;
    intensity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    emoji?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tasks?: Prisma.TaskUncheckedUpdateManyWithoutMoodEntryNestedInput;
};
export type MoodEntryCreateWithoutTasksInput = {
    id?: string;
    mood: $Enums.MoodType;
    intensity?: number | null;
    emoji?: string | null;
    note?: string | null;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutMoodEntriesInput;
    generatedContents?: Prisma.GeneratedContentCreateNestedManyWithoutMoodEntryInput;
};
export type MoodEntryUncheckedCreateWithoutTasksInput = {
    id?: string;
    userId: string;
    mood: $Enums.MoodType;
    intensity?: number | null;
    emoji?: string | null;
    note?: string | null;
    createdAt?: Date | string;
    generatedContents?: Prisma.GeneratedContentUncheckedCreateNestedManyWithoutMoodEntryInput;
};
export type MoodEntryCreateOrConnectWithoutTasksInput = {
    where: Prisma.MoodEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.MoodEntryCreateWithoutTasksInput, Prisma.MoodEntryUncheckedCreateWithoutTasksInput>;
};
export type MoodEntryUpsertWithoutTasksInput = {
    update: Prisma.XOR<Prisma.MoodEntryUpdateWithoutTasksInput, Prisma.MoodEntryUncheckedUpdateWithoutTasksInput>;
    create: Prisma.XOR<Prisma.MoodEntryCreateWithoutTasksInput, Prisma.MoodEntryUncheckedCreateWithoutTasksInput>;
    where?: Prisma.MoodEntryWhereInput;
};
export type MoodEntryUpdateToOneWithWhereWithoutTasksInput = {
    where?: Prisma.MoodEntryWhereInput;
    data: Prisma.XOR<Prisma.MoodEntryUpdateWithoutTasksInput, Prisma.MoodEntryUncheckedUpdateWithoutTasksInput>;
};
export type MoodEntryUpdateWithoutTasksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mood?: Prisma.EnumMoodTypeFieldUpdateOperationsInput | $Enums.MoodType;
    intensity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    emoji?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutMoodEntriesNestedInput;
    generatedContents?: Prisma.GeneratedContentUpdateManyWithoutMoodEntryNestedInput;
};
export type MoodEntryUncheckedUpdateWithoutTasksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    mood?: Prisma.EnumMoodTypeFieldUpdateOperationsInput | $Enums.MoodType;
    intensity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    emoji?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    generatedContents?: Prisma.GeneratedContentUncheckedUpdateManyWithoutMoodEntryNestedInput;
};
export type MoodEntryCreateManyUserInput = {
    id?: string;
    mood: $Enums.MoodType;
    intensity?: number | null;
    emoji?: string | null;
    note?: string | null;
    createdAt?: Date | string;
};
export type MoodEntryUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mood?: Prisma.EnumMoodTypeFieldUpdateOperationsInput | $Enums.MoodType;
    intensity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    emoji?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    generatedContents?: Prisma.GeneratedContentUpdateManyWithoutMoodEntryNestedInput;
    tasks?: Prisma.TaskUpdateManyWithoutMoodEntryNestedInput;
};
export type MoodEntryUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mood?: Prisma.EnumMoodTypeFieldUpdateOperationsInput | $Enums.MoodType;
    intensity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    emoji?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    generatedContents?: Prisma.GeneratedContentUncheckedUpdateManyWithoutMoodEntryNestedInput;
    tasks?: Prisma.TaskUncheckedUpdateManyWithoutMoodEntryNestedInput;
};
export type MoodEntryUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    mood?: Prisma.EnumMoodTypeFieldUpdateOperationsInput | $Enums.MoodType;
    intensity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    emoji?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MoodEntryCountOutputType = {
    generatedContents: number;
    tasks: number;
};
export type MoodEntryCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    generatedContents?: boolean | MoodEntryCountOutputTypeCountGeneratedContentsArgs;
    tasks?: boolean | MoodEntryCountOutputTypeCountTasksArgs;
};
export type MoodEntryCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MoodEntryCountOutputTypeSelect<ExtArgs> | null;
};
export type MoodEntryCountOutputTypeCountGeneratedContentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GeneratedContentWhereInput;
};
export type MoodEntryCountOutputTypeCountTasksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskWhereInput;
};
export type MoodEntrySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    mood?: boolean;
    intensity?: boolean;
    emoji?: boolean;
    note?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    generatedContents?: boolean | Prisma.MoodEntry$generatedContentsArgs<ExtArgs>;
    tasks?: boolean | Prisma.MoodEntry$tasksArgs<ExtArgs>;
    _count?: boolean | Prisma.MoodEntryCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["moodEntry"]>;
export type MoodEntrySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    mood?: boolean;
    intensity?: boolean;
    emoji?: boolean;
    note?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["moodEntry"]>;
export type MoodEntrySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    mood?: boolean;
    intensity?: boolean;
    emoji?: boolean;
    note?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["moodEntry"]>;
export type MoodEntrySelectScalar = {
    id?: boolean;
    userId?: boolean;
    mood?: boolean;
    intensity?: boolean;
    emoji?: boolean;
    note?: boolean;
    createdAt?: boolean;
};
export type MoodEntryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "mood" | "intensity" | "emoji" | "note" | "createdAt", ExtArgs["result"]["moodEntry"]>;
export type MoodEntryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    generatedContents?: boolean | Prisma.MoodEntry$generatedContentsArgs<ExtArgs>;
    tasks?: boolean | Prisma.MoodEntry$tasksArgs<ExtArgs>;
    _count?: boolean | Prisma.MoodEntryCountOutputTypeDefaultArgs<ExtArgs>;
};
export type MoodEntryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type MoodEntryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $MoodEntryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MoodEntry";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        generatedContents: Prisma.$GeneratedContentPayload<ExtArgs>[];
        tasks: Prisma.$TaskPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        mood: $Enums.MoodType;
        intensity: number | null;
        emoji: string | null;
        note: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["moodEntry"]>;
    composites: {};
};
export type MoodEntryGetPayload<S extends boolean | null | undefined | MoodEntryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MoodEntryPayload, S>;
export type MoodEntryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MoodEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MoodEntryCountAggregateInputType | true;
};
export interface MoodEntryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MoodEntry'];
        meta: {
            name: 'MoodEntry';
        };
    };
    findUnique<T extends MoodEntryFindUniqueArgs>(args: Prisma.SelectSubset<T, MoodEntryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MoodEntryClient<runtime.Types.Result.GetResult<Prisma.$MoodEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MoodEntryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MoodEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MoodEntryClient<runtime.Types.Result.GetResult<Prisma.$MoodEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MoodEntryFindFirstArgs>(args?: Prisma.SelectSubset<T, MoodEntryFindFirstArgs<ExtArgs>>): Prisma.Prisma__MoodEntryClient<runtime.Types.Result.GetResult<Prisma.$MoodEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MoodEntryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MoodEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MoodEntryClient<runtime.Types.Result.GetResult<Prisma.$MoodEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MoodEntryFindManyArgs>(args?: Prisma.SelectSubset<T, MoodEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MoodEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MoodEntryCreateArgs>(args: Prisma.SelectSubset<T, MoodEntryCreateArgs<ExtArgs>>): Prisma.Prisma__MoodEntryClient<runtime.Types.Result.GetResult<Prisma.$MoodEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MoodEntryCreateManyArgs>(args?: Prisma.SelectSubset<T, MoodEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MoodEntryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MoodEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MoodEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MoodEntryDeleteArgs>(args: Prisma.SelectSubset<T, MoodEntryDeleteArgs<ExtArgs>>): Prisma.Prisma__MoodEntryClient<runtime.Types.Result.GetResult<Prisma.$MoodEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MoodEntryUpdateArgs>(args: Prisma.SelectSubset<T, MoodEntryUpdateArgs<ExtArgs>>): Prisma.Prisma__MoodEntryClient<runtime.Types.Result.GetResult<Prisma.$MoodEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MoodEntryDeleteManyArgs>(args?: Prisma.SelectSubset<T, MoodEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MoodEntryUpdateManyArgs>(args: Prisma.SelectSubset<T, MoodEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MoodEntryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MoodEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MoodEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MoodEntryUpsertArgs>(args: Prisma.SelectSubset<T, MoodEntryUpsertArgs<ExtArgs>>): Prisma.Prisma__MoodEntryClient<runtime.Types.Result.GetResult<Prisma.$MoodEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MoodEntryCountArgs>(args?: Prisma.Subset<T, MoodEntryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MoodEntryCountAggregateOutputType> : number>;
    aggregate<T extends MoodEntryAggregateArgs>(args: Prisma.Subset<T, MoodEntryAggregateArgs>): Prisma.PrismaPromise<GetMoodEntryAggregateType<T>>;
    groupBy<T extends MoodEntryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MoodEntryGroupByArgs['orderBy'];
    } : {
        orderBy?: MoodEntryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MoodEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMoodEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MoodEntryFieldRefs;
}
export interface Prisma__MoodEntryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    generatedContents<T extends Prisma.MoodEntry$generatedContentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MoodEntry$generatedContentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GeneratedContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    tasks<T extends Prisma.MoodEntry$tasksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MoodEntry$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MoodEntryFieldRefs {
    readonly id: Prisma.FieldRef<"MoodEntry", 'String'>;
    readonly userId: Prisma.FieldRef<"MoodEntry", 'String'>;
    readonly mood: Prisma.FieldRef<"MoodEntry", 'MoodType'>;
    readonly intensity: Prisma.FieldRef<"MoodEntry", 'Int'>;
    readonly emoji: Prisma.FieldRef<"MoodEntry", 'String'>;
    readonly note: Prisma.FieldRef<"MoodEntry", 'String'>;
    readonly createdAt: Prisma.FieldRef<"MoodEntry", 'DateTime'>;
}
export type MoodEntryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MoodEntrySelect<ExtArgs> | null;
    omit?: Prisma.MoodEntryOmit<ExtArgs> | null;
    include?: Prisma.MoodEntryInclude<ExtArgs> | null;
    where: Prisma.MoodEntryWhereUniqueInput;
};
export type MoodEntryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MoodEntrySelect<ExtArgs> | null;
    omit?: Prisma.MoodEntryOmit<ExtArgs> | null;
    include?: Prisma.MoodEntryInclude<ExtArgs> | null;
    where: Prisma.MoodEntryWhereUniqueInput;
};
export type MoodEntryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MoodEntrySelect<ExtArgs> | null;
    omit?: Prisma.MoodEntryOmit<ExtArgs> | null;
    include?: Prisma.MoodEntryInclude<ExtArgs> | null;
    where?: Prisma.MoodEntryWhereInput;
    orderBy?: Prisma.MoodEntryOrderByWithRelationInput | Prisma.MoodEntryOrderByWithRelationInput[];
    cursor?: Prisma.MoodEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MoodEntryScalarFieldEnum | Prisma.MoodEntryScalarFieldEnum[];
};
export type MoodEntryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MoodEntrySelect<ExtArgs> | null;
    omit?: Prisma.MoodEntryOmit<ExtArgs> | null;
    include?: Prisma.MoodEntryInclude<ExtArgs> | null;
    where?: Prisma.MoodEntryWhereInput;
    orderBy?: Prisma.MoodEntryOrderByWithRelationInput | Prisma.MoodEntryOrderByWithRelationInput[];
    cursor?: Prisma.MoodEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MoodEntryScalarFieldEnum | Prisma.MoodEntryScalarFieldEnum[];
};
export type MoodEntryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MoodEntrySelect<ExtArgs> | null;
    omit?: Prisma.MoodEntryOmit<ExtArgs> | null;
    include?: Prisma.MoodEntryInclude<ExtArgs> | null;
    where?: Prisma.MoodEntryWhereInput;
    orderBy?: Prisma.MoodEntryOrderByWithRelationInput | Prisma.MoodEntryOrderByWithRelationInput[];
    cursor?: Prisma.MoodEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MoodEntryScalarFieldEnum | Prisma.MoodEntryScalarFieldEnum[];
};
export type MoodEntryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MoodEntrySelect<ExtArgs> | null;
    omit?: Prisma.MoodEntryOmit<ExtArgs> | null;
    include?: Prisma.MoodEntryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MoodEntryCreateInput, Prisma.MoodEntryUncheckedCreateInput>;
};
export type MoodEntryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MoodEntryCreateManyInput | Prisma.MoodEntryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MoodEntryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MoodEntrySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MoodEntryOmit<ExtArgs> | null;
    data: Prisma.MoodEntryCreateManyInput | Prisma.MoodEntryCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MoodEntryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MoodEntryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MoodEntrySelect<ExtArgs> | null;
    omit?: Prisma.MoodEntryOmit<ExtArgs> | null;
    include?: Prisma.MoodEntryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MoodEntryUpdateInput, Prisma.MoodEntryUncheckedUpdateInput>;
    where: Prisma.MoodEntryWhereUniqueInput;
};
export type MoodEntryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MoodEntryUpdateManyMutationInput, Prisma.MoodEntryUncheckedUpdateManyInput>;
    where?: Prisma.MoodEntryWhereInput;
    limit?: number;
};
export type MoodEntryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MoodEntrySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MoodEntryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MoodEntryUpdateManyMutationInput, Prisma.MoodEntryUncheckedUpdateManyInput>;
    where?: Prisma.MoodEntryWhereInput;
    limit?: number;
    include?: Prisma.MoodEntryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MoodEntryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MoodEntrySelect<ExtArgs> | null;
    omit?: Prisma.MoodEntryOmit<ExtArgs> | null;
    include?: Prisma.MoodEntryInclude<ExtArgs> | null;
    where: Prisma.MoodEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.MoodEntryCreateInput, Prisma.MoodEntryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MoodEntryUpdateInput, Prisma.MoodEntryUncheckedUpdateInput>;
};
export type MoodEntryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MoodEntrySelect<ExtArgs> | null;
    omit?: Prisma.MoodEntryOmit<ExtArgs> | null;
    include?: Prisma.MoodEntryInclude<ExtArgs> | null;
    where: Prisma.MoodEntryWhereUniqueInput;
};
export type MoodEntryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MoodEntryWhereInput;
    limit?: number;
};
export type MoodEntry$generatedContentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MoodEntry$tasksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where?: Prisma.TaskWhereInput;
    orderBy?: Prisma.TaskOrderByWithRelationInput | Prisma.TaskOrderByWithRelationInput[];
    cursor?: Prisma.TaskWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaskScalarFieldEnum | Prisma.TaskScalarFieldEnum[];
};
export type MoodEntryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MoodEntrySelect<ExtArgs> | null;
    omit?: Prisma.MoodEntryOmit<ExtArgs> | null;
    include?: Prisma.MoodEntryInclude<ExtArgs> | null;
};
export {};
