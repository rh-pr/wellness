import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TaskModel = runtime.Types.Result.DefaultSelection<Prisma.$TaskPayload>;
export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null;
    _min: TaskMinAggregateOutputType | null;
    _max: TaskMaxAggregateOutputType | null;
};
export type TaskMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    moodEntryId: string | null;
    category: $Enums.TaskCategory | null;
    title: string | null;
    description: string | null;
    status: $Enums.TaskStatus | null;
    languageCode: string | null;
    dueDate: Date | null;
    completedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TaskMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    moodEntryId: string | null;
    category: $Enums.TaskCategory | null;
    title: string | null;
    description: string | null;
    status: $Enums.TaskStatus | null;
    languageCode: string | null;
    dueDate: Date | null;
    completedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TaskCountAggregateOutputType = {
    id: number;
    userId: number;
    moodEntryId: number;
    category: number;
    title: number;
    description: number;
    status: number;
    languageCode: number;
    dueDate: number;
    completedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type TaskMinAggregateInputType = {
    id?: true;
    userId?: true;
    moodEntryId?: true;
    category?: true;
    title?: true;
    description?: true;
    status?: true;
    languageCode?: true;
    dueDate?: true;
    completedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TaskMaxAggregateInputType = {
    id?: true;
    userId?: true;
    moodEntryId?: true;
    category?: true;
    title?: true;
    description?: true;
    status?: true;
    languageCode?: true;
    dueDate?: true;
    completedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TaskCountAggregateInputType = {
    id?: true;
    userId?: true;
    moodEntryId?: true;
    category?: true;
    title?: true;
    description?: true;
    status?: true;
    languageCode?: true;
    dueDate?: true;
    completedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type TaskAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskWhereInput;
    orderBy?: Prisma.TaskOrderByWithRelationInput | Prisma.TaskOrderByWithRelationInput[];
    cursor?: Prisma.TaskWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TaskCountAggregateInputType;
    _min?: TaskMinAggregateInputType;
    _max?: TaskMaxAggregateInputType;
};
export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
    [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTask[P]> : Prisma.GetScalarType<T[P], AggregateTask[P]>;
};
export type TaskGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskWhereInput;
    orderBy?: Prisma.TaskOrderByWithAggregationInput | Prisma.TaskOrderByWithAggregationInput[];
    by: Prisma.TaskScalarFieldEnum[] | Prisma.TaskScalarFieldEnum;
    having?: Prisma.TaskScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TaskCountAggregateInputType | true;
    _min?: TaskMinAggregateInputType;
    _max?: TaskMaxAggregateInputType;
};
export type TaskGroupByOutputType = {
    id: string;
    userId: string;
    moodEntryId: string | null;
    category: $Enums.TaskCategory;
    title: string;
    description: string | null;
    status: $Enums.TaskStatus;
    languageCode: string;
    dueDate: Date | null;
    completedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: TaskCountAggregateOutputType | null;
    _min: TaskMinAggregateOutputType | null;
    _max: TaskMaxAggregateOutputType | null;
};
type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TaskGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TaskGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TaskGroupByOutputType[P]>;
}>>;
export type TaskWhereInput = {
    AND?: Prisma.TaskWhereInput | Prisma.TaskWhereInput[];
    OR?: Prisma.TaskWhereInput[];
    NOT?: Prisma.TaskWhereInput | Prisma.TaskWhereInput[];
    id?: Prisma.StringFilter<"Task"> | string;
    userId?: Prisma.StringFilter<"Task"> | string;
    moodEntryId?: Prisma.StringNullableFilter<"Task"> | string | null;
    category?: Prisma.EnumTaskCategoryFilter<"Task"> | $Enums.TaskCategory;
    title?: Prisma.StringFilter<"Task"> | string;
    description?: Prisma.StringNullableFilter<"Task"> | string | null;
    status?: Prisma.EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus;
    languageCode?: Prisma.StringFilter<"Task"> | string;
    dueDate?: Prisma.DateTimeNullableFilter<"Task"> | Date | string | null;
    completedAt?: Prisma.DateTimeNullableFilter<"Task"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Task"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Task"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    moodEntry?: Prisma.XOR<Prisma.MoodEntryNullableScalarRelationFilter, Prisma.MoodEntryWhereInput> | null;
};
export type TaskOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    moodEntryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    category?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    languageCode?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    completedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    moodEntry?: Prisma.MoodEntryOrderByWithRelationInput;
};
export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.TaskWhereInput | Prisma.TaskWhereInput[];
    OR?: Prisma.TaskWhereInput[];
    NOT?: Prisma.TaskWhereInput | Prisma.TaskWhereInput[];
    userId?: Prisma.StringFilter<"Task"> | string;
    moodEntryId?: Prisma.StringNullableFilter<"Task"> | string | null;
    category?: Prisma.EnumTaskCategoryFilter<"Task"> | $Enums.TaskCategory;
    title?: Prisma.StringFilter<"Task"> | string;
    description?: Prisma.StringNullableFilter<"Task"> | string | null;
    status?: Prisma.EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus;
    languageCode?: Prisma.StringFilter<"Task"> | string;
    dueDate?: Prisma.DateTimeNullableFilter<"Task"> | Date | string | null;
    completedAt?: Prisma.DateTimeNullableFilter<"Task"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Task"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Task"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    moodEntry?: Prisma.XOR<Prisma.MoodEntryNullableScalarRelationFilter, Prisma.MoodEntryWhereInput> | null;
}, "id">;
export type TaskOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    moodEntryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    category?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    languageCode?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    completedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.TaskCountOrderByAggregateInput;
    _max?: Prisma.TaskMaxOrderByAggregateInput;
    _min?: Prisma.TaskMinOrderByAggregateInput;
};
export type TaskScalarWhereWithAggregatesInput = {
    AND?: Prisma.TaskScalarWhereWithAggregatesInput | Prisma.TaskScalarWhereWithAggregatesInput[];
    OR?: Prisma.TaskScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TaskScalarWhereWithAggregatesInput | Prisma.TaskScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Task"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"Task"> | string;
    moodEntryId?: Prisma.StringNullableWithAggregatesFilter<"Task"> | string | null;
    category?: Prisma.EnumTaskCategoryWithAggregatesFilter<"Task"> | $Enums.TaskCategory;
    title?: Prisma.StringWithAggregatesFilter<"Task"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Task"> | string | null;
    status?: Prisma.EnumTaskStatusWithAggregatesFilter<"Task"> | $Enums.TaskStatus;
    languageCode?: Prisma.StringWithAggregatesFilter<"Task"> | string;
    dueDate?: Prisma.DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null;
    completedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Task"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Task"> | Date | string;
};
export type TaskCreateInput = {
    id?: string;
    category: $Enums.TaskCategory;
    title: string;
    description?: string | null;
    status?: $Enums.TaskStatus;
    languageCode?: string;
    dueDate?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutTasksInput;
    moodEntry?: Prisma.MoodEntryCreateNestedOneWithoutTasksInput;
};
export type TaskUncheckedCreateInput = {
    id?: string;
    userId: string;
    moodEntryId?: string | null;
    category: $Enums.TaskCategory;
    title: string;
    description?: string | null;
    status?: $Enums.TaskStatus;
    languageCode?: string;
    dueDate?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TaskUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.EnumTaskCategoryFieldUpdateOperationsInput | $Enums.TaskCategory;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    languageCode?: Prisma.StringFieldUpdateOperationsInput | string;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutTasksNestedInput;
    moodEntry?: Prisma.MoodEntryUpdateOneWithoutTasksNestedInput;
};
export type TaskUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    moodEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.EnumTaskCategoryFieldUpdateOperationsInput | $Enums.TaskCategory;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    languageCode?: Prisma.StringFieldUpdateOperationsInput | string;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskCreateManyInput = {
    id?: string;
    userId: string;
    moodEntryId?: string | null;
    category: $Enums.TaskCategory;
    title: string;
    description?: string | null;
    status?: $Enums.TaskStatus;
    languageCode?: string;
    dueDate?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TaskUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.EnumTaskCategoryFieldUpdateOperationsInput | $Enums.TaskCategory;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    languageCode?: Prisma.StringFieldUpdateOperationsInput | string;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    moodEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.EnumTaskCategoryFieldUpdateOperationsInput | $Enums.TaskCategory;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    languageCode?: Prisma.StringFieldUpdateOperationsInput | string;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskListRelationFilter = {
    every?: Prisma.TaskWhereInput;
    some?: Prisma.TaskWhereInput;
    none?: Prisma.TaskWhereInput;
};
export type TaskOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TaskCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    moodEntryId?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    languageCode?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TaskMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    moodEntryId?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    languageCode?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TaskMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    moodEntryId?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    languageCode?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TaskCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutUserInput, Prisma.TaskUncheckedCreateWithoutUserInput> | Prisma.TaskCreateWithoutUserInput[] | Prisma.TaskUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutUserInput | Prisma.TaskCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.TaskCreateManyUserInputEnvelope;
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
};
export type TaskUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutUserInput, Prisma.TaskUncheckedCreateWithoutUserInput> | Prisma.TaskCreateWithoutUserInput[] | Prisma.TaskUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutUserInput | Prisma.TaskCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.TaskCreateManyUserInputEnvelope;
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
};
export type TaskUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutUserInput, Prisma.TaskUncheckedCreateWithoutUserInput> | Prisma.TaskCreateWithoutUserInput[] | Prisma.TaskUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutUserInput | Prisma.TaskCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.TaskUpsertWithWhereUniqueWithoutUserInput | Prisma.TaskUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.TaskCreateManyUserInputEnvelope;
    set?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    disconnect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    delete?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    update?: Prisma.TaskUpdateWithWhereUniqueWithoutUserInput | Prisma.TaskUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.TaskUpdateManyWithWhereWithoutUserInput | Prisma.TaskUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
};
export type TaskUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutUserInput, Prisma.TaskUncheckedCreateWithoutUserInput> | Prisma.TaskCreateWithoutUserInput[] | Prisma.TaskUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutUserInput | Prisma.TaskCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.TaskUpsertWithWhereUniqueWithoutUserInput | Prisma.TaskUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.TaskCreateManyUserInputEnvelope;
    set?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    disconnect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    delete?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    update?: Prisma.TaskUpdateWithWhereUniqueWithoutUserInput | Prisma.TaskUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.TaskUpdateManyWithWhereWithoutUserInput | Prisma.TaskUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
};
export type TaskCreateNestedManyWithoutMoodEntryInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutMoodEntryInput, Prisma.TaskUncheckedCreateWithoutMoodEntryInput> | Prisma.TaskCreateWithoutMoodEntryInput[] | Prisma.TaskUncheckedCreateWithoutMoodEntryInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutMoodEntryInput | Prisma.TaskCreateOrConnectWithoutMoodEntryInput[];
    createMany?: Prisma.TaskCreateManyMoodEntryInputEnvelope;
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
};
export type TaskUncheckedCreateNestedManyWithoutMoodEntryInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutMoodEntryInput, Prisma.TaskUncheckedCreateWithoutMoodEntryInput> | Prisma.TaskCreateWithoutMoodEntryInput[] | Prisma.TaskUncheckedCreateWithoutMoodEntryInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutMoodEntryInput | Prisma.TaskCreateOrConnectWithoutMoodEntryInput[];
    createMany?: Prisma.TaskCreateManyMoodEntryInputEnvelope;
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
};
export type TaskUpdateManyWithoutMoodEntryNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutMoodEntryInput, Prisma.TaskUncheckedCreateWithoutMoodEntryInput> | Prisma.TaskCreateWithoutMoodEntryInput[] | Prisma.TaskUncheckedCreateWithoutMoodEntryInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutMoodEntryInput | Prisma.TaskCreateOrConnectWithoutMoodEntryInput[];
    upsert?: Prisma.TaskUpsertWithWhereUniqueWithoutMoodEntryInput | Prisma.TaskUpsertWithWhereUniqueWithoutMoodEntryInput[];
    createMany?: Prisma.TaskCreateManyMoodEntryInputEnvelope;
    set?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    disconnect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    delete?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    update?: Prisma.TaskUpdateWithWhereUniqueWithoutMoodEntryInput | Prisma.TaskUpdateWithWhereUniqueWithoutMoodEntryInput[];
    updateMany?: Prisma.TaskUpdateManyWithWhereWithoutMoodEntryInput | Prisma.TaskUpdateManyWithWhereWithoutMoodEntryInput[];
    deleteMany?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
};
export type TaskUncheckedUpdateManyWithoutMoodEntryNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutMoodEntryInput, Prisma.TaskUncheckedCreateWithoutMoodEntryInput> | Prisma.TaskCreateWithoutMoodEntryInput[] | Prisma.TaskUncheckedCreateWithoutMoodEntryInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutMoodEntryInput | Prisma.TaskCreateOrConnectWithoutMoodEntryInput[];
    upsert?: Prisma.TaskUpsertWithWhereUniqueWithoutMoodEntryInput | Prisma.TaskUpsertWithWhereUniqueWithoutMoodEntryInput[];
    createMany?: Prisma.TaskCreateManyMoodEntryInputEnvelope;
    set?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    disconnect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    delete?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    update?: Prisma.TaskUpdateWithWhereUniqueWithoutMoodEntryInput | Prisma.TaskUpdateWithWhereUniqueWithoutMoodEntryInput[];
    updateMany?: Prisma.TaskUpdateManyWithWhereWithoutMoodEntryInput | Prisma.TaskUpdateManyWithWhereWithoutMoodEntryInput[];
    deleteMany?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
};
export type EnumTaskCategoryFieldUpdateOperationsInput = {
    set?: $Enums.TaskCategory;
};
export type EnumTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.TaskStatus;
};
export type TaskCreateWithoutUserInput = {
    id?: string;
    category: $Enums.TaskCategory;
    title: string;
    description?: string | null;
    status?: $Enums.TaskStatus;
    languageCode?: string;
    dueDate?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    moodEntry?: Prisma.MoodEntryCreateNestedOneWithoutTasksInput;
};
export type TaskUncheckedCreateWithoutUserInput = {
    id?: string;
    moodEntryId?: string | null;
    category: $Enums.TaskCategory;
    title: string;
    description?: string | null;
    status?: $Enums.TaskStatus;
    languageCode?: string;
    dueDate?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TaskCreateOrConnectWithoutUserInput = {
    where: Prisma.TaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskCreateWithoutUserInput, Prisma.TaskUncheckedCreateWithoutUserInput>;
};
export type TaskCreateManyUserInputEnvelope = {
    data: Prisma.TaskCreateManyUserInput | Prisma.TaskCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type TaskUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.TaskWhereUniqueInput;
    update: Prisma.XOR<Prisma.TaskUpdateWithoutUserInput, Prisma.TaskUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.TaskCreateWithoutUserInput, Prisma.TaskUncheckedCreateWithoutUserInput>;
};
export type TaskUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.TaskWhereUniqueInput;
    data: Prisma.XOR<Prisma.TaskUpdateWithoutUserInput, Prisma.TaskUncheckedUpdateWithoutUserInput>;
};
export type TaskUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.TaskScalarWhereInput;
    data: Prisma.XOR<Prisma.TaskUpdateManyMutationInput, Prisma.TaskUncheckedUpdateManyWithoutUserInput>;
};
export type TaskScalarWhereInput = {
    AND?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
    OR?: Prisma.TaskScalarWhereInput[];
    NOT?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
    id?: Prisma.StringFilter<"Task"> | string;
    userId?: Prisma.StringFilter<"Task"> | string;
    moodEntryId?: Prisma.StringNullableFilter<"Task"> | string | null;
    category?: Prisma.EnumTaskCategoryFilter<"Task"> | $Enums.TaskCategory;
    title?: Prisma.StringFilter<"Task"> | string;
    description?: Prisma.StringNullableFilter<"Task"> | string | null;
    status?: Prisma.EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus;
    languageCode?: Prisma.StringFilter<"Task"> | string;
    dueDate?: Prisma.DateTimeNullableFilter<"Task"> | Date | string | null;
    completedAt?: Prisma.DateTimeNullableFilter<"Task"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Task"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Task"> | Date | string;
};
export type TaskCreateWithoutMoodEntryInput = {
    id?: string;
    category: $Enums.TaskCategory;
    title: string;
    description?: string | null;
    status?: $Enums.TaskStatus;
    languageCode?: string;
    dueDate?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutTasksInput;
};
export type TaskUncheckedCreateWithoutMoodEntryInput = {
    id?: string;
    userId: string;
    category: $Enums.TaskCategory;
    title: string;
    description?: string | null;
    status?: $Enums.TaskStatus;
    languageCode?: string;
    dueDate?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TaskCreateOrConnectWithoutMoodEntryInput = {
    where: Prisma.TaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskCreateWithoutMoodEntryInput, Prisma.TaskUncheckedCreateWithoutMoodEntryInput>;
};
export type TaskCreateManyMoodEntryInputEnvelope = {
    data: Prisma.TaskCreateManyMoodEntryInput | Prisma.TaskCreateManyMoodEntryInput[];
    skipDuplicates?: boolean;
};
export type TaskUpsertWithWhereUniqueWithoutMoodEntryInput = {
    where: Prisma.TaskWhereUniqueInput;
    update: Prisma.XOR<Prisma.TaskUpdateWithoutMoodEntryInput, Prisma.TaskUncheckedUpdateWithoutMoodEntryInput>;
    create: Prisma.XOR<Prisma.TaskCreateWithoutMoodEntryInput, Prisma.TaskUncheckedCreateWithoutMoodEntryInput>;
};
export type TaskUpdateWithWhereUniqueWithoutMoodEntryInput = {
    where: Prisma.TaskWhereUniqueInput;
    data: Prisma.XOR<Prisma.TaskUpdateWithoutMoodEntryInput, Prisma.TaskUncheckedUpdateWithoutMoodEntryInput>;
};
export type TaskUpdateManyWithWhereWithoutMoodEntryInput = {
    where: Prisma.TaskScalarWhereInput;
    data: Prisma.XOR<Prisma.TaskUpdateManyMutationInput, Prisma.TaskUncheckedUpdateManyWithoutMoodEntryInput>;
};
export type TaskCreateManyUserInput = {
    id?: string;
    moodEntryId?: string | null;
    category: $Enums.TaskCategory;
    title: string;
    description?: string | null;
    status?: $Enums.TaskStatus;
    languageCode?: string;
    dueDate?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TaskUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.EnumTaskCategoryFieldUpdateOperationsInput | $Enums.TaskCategory;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    languageCode?: Prisma.StringFieldUpdateOperationsInput | string;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    moodEntry?: Prisma.MoodEntryUpdateOneWithoutTasksNestedInput;
};
export type TaskUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    moodEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.EnumTaskCategoryFieldUpdateOperationsInput | $Enums.TaskCategory;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    languageCode?: Prisma.StringFieldUpdateOperationsInput | string;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    moodEntryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.EnumTaskCategoryFieldUpdateOperationsInput | $Enums.TaskCategory;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    languageCode?: Prisma.StringFieldUpdateOperationsInput | string;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskCreateManyMoodEntryInput = {
    id?: string;
    userId: string;
    category: $Enums.TaskCategory;
    title: string;
    description?: string | null;
    status?: $Enums.TaskStatus;
    languageCode?: string;
    dueDate?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TaskUpdateWithoutMoodEntryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.EnumTaskCategoryFieldUpdateOperationsInput | $Enums.TaskCategory;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    languageCode?: Prisma.StringFieldUpdateOperationsInput | string;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutTasksNestedInput;
};
export type TaskUncheckedUpdateWithoutMoodEntryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.EnumTaskCategoryFieldUpdateOperationsInput | $Enums.TaskCategory;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    languageCode?: Prisma.StringFieldUpdateOperationsInput | string;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskUncheckedUpdateManyWithoutMoodEntryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.EnumTaskCategoryFieldUpdateOperationsInput | $Enums.TaskCategory;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    languageCode?: Prisma.StringFieldUpdateOperationsInput | string;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    moodEntryId?: boolean;
    category?: boolean;
    title?: boolean;
    description?: boolean;
    status?: boolean;
    languageCode?: boolean;
    dueDate?: boolean;
    completedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    moodEntry?: boolean | Prisma.Task$moodEntryArgs<ExtArgs>;
}, ExtArgs["result"]["task"]>;
export type TaskSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    moodEntryId?: boolean;
    category?: boolean;
    title?: boolean;
    description?: boolean;
    status?: boolean;
    languageCode?: boolean;
    dueDate?: boolean;
    completedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    moodEntry?: boolean | Prisma.Task$moodEntryArgs<ExtArgs>;
}, ExtArgs["result"]["task"]>;
export type TaskSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    moodEntryId?: boolean;
    category?: boolean;
    title?: boolean;
    description?: boolean;
    status?: boolean;
    languageCode?: boolean;
    dueDate?: boolean;
    completedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    moodEntry?: boolean | Prisma.Task$moodEntryArgs<ExtArgs>;
}, ExtArgs["result"]["task"]>;
export type TaskSelectScalar = {
    id?: boolean;
    userId?: boolean;
    moodEntryId?: boolean;
    category?: boolean;
    title?: boolean;
    description?: boolean;
    status?: boolean;
    languageCode?: boolean;
    dueDate?: boolean;
    completedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type TaskOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "moodEntryId" | "category" | "title" | "description" | "status" | "languageCode" | "dueDate" | "completedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["task"]>;
export type TaskInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    moodEntry?: boolean | Prisma.Task$moodEntryArgs<ExtArgs>;
};
export type TaskIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    moodEntry?: boolean | Prisma.Task$moodEntryArgs<ExtArgs>;
};
export type TaskIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    moodEntry?: boolean | Prisma.Task$moodEntryArgs<ExtArgs>;
};
export type $TaskPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Task";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        moodEntry: Prisma.$MoodEntryPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        moodEntryId: string | null;
        category: $Enums.TaskCategory;
        title: string;
        description: string | null;
        status: $Enums.TaskStatus;
        languageCode: string;
        dueDate: Date | null;
        completedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["task"]>;
    composites: {};
};
export type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TaskPayload, S>;
export type TaskCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TaskCountAggregateInputType | true;
};
export interface TaskDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Task'];
        meta: {
            name: 'Task';
        };
    };
    findUnique<T extends TaskFindUniqueArgs>(args: Prisma.SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TaskFindFirstArgs>(args?: Prisma.SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TaskFindManyArgs>(args?: Prisma.SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TaskCreateArgs>(args: Prisma.SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TaskCreateManyArgs>(args?: Prisma.SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TaskDeleteArgs>(args: Prisma.SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TaskUpdateArgs>(args: Prisma.SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TaskDeleteManyArgs>(args?: Prisma.SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TaskUpdateManyArgs>(args: Prisma.SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TaskUpsertArgs>(args: Prisma.SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TaskCountArgs>(args?: Prisma.Subset<T, TaskCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TaskCountAggregateOutputType> : number>;
    aggregate<T extends TaskAggregateArgs>(args: Prisma.Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>;
    groupBy<T extends TaskGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TaskGroupByArgs['orderBy'];
    } : {
        orderBy?: TaskGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TaskFieldRefs;
}
export interface Prisma__TaskClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    moodEntry<T extends Prisma.Task$moodEntryArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Task$moodEntryArgs<ExtArgs>>): Prisma.Prisma__MoodEntryClient<runtime.Types.Result.GetResult<Prisma.$MoodEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TaskFieldRefs {
    readonly id: Prisma.FieldRef<"Task", 'String'>;
    readonly userId: Prisma.FieldRef<"Task", 'String'>;
    readonly moodEntryId: Prisma.FieldRef<"Task", 'String'>;
    readonly category: Prisma.FieldRef<"Task", 'TaskCategory'>;
    readonly title: Prisma.FieldRef<"Task", 'String'>;
    readonly description: Prisma.FieldRef<"Task", 'String'>;
    readonly status: Prisma.FieldRef<"Task", 'TaskStatus'>;
    readonly languageCode: Prisma.FieldRef<"Task", 'String'>;
    readonly dueDate: Prisma.FieldRef<"Task", 'DateTime'>;
    readonly completedAt: Prisma.FieldRef<"Task", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Task", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Task", 'DateTime'>;
}
export type TaskFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where: Prisma.TaskWhereUniqueInput;
};
export type TaskFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where: Prisma.TaskWhereUniqueInput;
};
export type TaskFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TaskFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TaskFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TaskCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaskCreateInput, Prisma.TaskUncheckedCreateInput>;
};
export type TaskCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TaskCreateManyInput | Prisma.TaskCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TaskCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    data: Prisma.TaskCreateManyInput | Prisma.TaskCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TaskIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TaskUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaskUpdateInput, Prisma.TaskUncheckedUpdateInput>;
    where: Prisma.TaskWhereUniqueInput;
};
export type TaskUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TaskUpdateManyMutationInput, Prisma.TaskUncheckedUpdateManyInput>;
    where?: Prisma.TaskWhereInput;
    limit?: number;
};
export type TaskUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaskUpdateManyMutationInput, Prisma.TaskUncheckedUpdateManyInput>;
    where?: Prisma.TaskWhereInput;
    limit?: number;
    include?: Prisma.TaskIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TaskUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where: Prisma.TaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskCreateInput, Prisma.TaskUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TaskUpdateInput, Prisma.TaskUncheckedUpdateInput>;
};
export type TaskDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where: Prisma.TaskWhereUniqueInput;
};
export type TaskDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskWhereInput;
    limit?: number;
};
export type Task$moodEntryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MoodEntrySelect<ExtArgs> | null;
    omit?: Prisma.MoodEntryOmit<ExtArgs> | null;
    include?: Prisma.MoodEntryInclude<ExtArgs> | null;
    where?: Prisma.MoodEntryWhereInput;
};
export type TaskDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
};
export {};
