import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ChatMessageModel = runtime.Types.Result.DefaultSelection<Prisma.$ChatMessagePayload>;
export type AggregateChatMessage = {
    _count: ChatMessageCountAggregateOutputType | null;
    _min: ChatMessageMinAggregateOutputType | null;
    _max: ChatMessageMaxAggregateOutputType | null;
};
export type ChatMessageMinAggregateOutputType = {
    id: string | null;
    chatSessionId: string | null;
    role: $Enums.MessageRole | null;
    content: string | null;
    createdAt: Date | null;
};
export type ChatMessageMaxAggregateOutputType = {
    id: string | null;
    chatSessionId: string | null;
    role: $Enums.MessageRole | null;
    content: string | null;
    createdAt: Date | null;
};
export type ChatMessageCountAggregateOutputType = {
    id: number;
    chatSessionId: number;
    role: number;
    content: number;
    metadata: number;
    createdAt: number;
    _all: number;
};
export type ChatMessageMinAggregateInputType = {
    id?: true;
    chatSessionId?: true;
    role?: true;
    content?: true;
    createdAt?: true;
};
export type ChatMessageMaxAggregateInputType = {
    id?: true;
    chatSessionId?: true;
    role?: true;
    content?: true;
    createdAt?: true;
};
export type ChatMessageCountAggregateInputType = {
    id?: true;
    chatSessionId?: true;
    role?: true;
    content?: true;
    metadata?: true;
    createdAt?: true;
    _all?: true;
};
export type ChatMessageAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChatMessageWhereInput;
    orderBy?: Prisma.ChatMessageOrderByWithRelationInput | Prisma.ChatMessageOrderByWithRelationInput[];
    cursor?: Prisma.ChatMessageWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ChatMessageCountAggregateInputType;
    _min?: ChatMessageMinAggregateInputType;
    _max?: ChatMessageMaxAggregateInputType;
};
export type GetChatMessageAggregateType<T extends ChatMessageAggregateArgs> = {
    [P in keyof T & keyof AggregateChatMessage]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateChatMessage[P]> : Prisma.GetScalarType<T[P], AggregateChatMessage[P]>;
};
export type ChatMessageGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChatMessageWhereInput;
    orderBy?: Prisma.ChatMessageOrderByWithAggregationInput | Prisma.ChatMessageOrderByWithAggregationInput[];
    by: Prisma.ChatMessageScalarFieldEnum[] | Prisma.ChatMessageScalarFieldEnum;
    having?: Prisma.ChatMessageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ChatMessageCountAggregateInputType | true;
    _min?: ChatMessageMinAggregateInputType;
    _max?: ChatMessageMaxAggregateInputType;
};
export type ChatMessageGroupByOutputType = {
    id: string;
    chatSessionId: string;
    role: $Enums.MessageRole;
    content: string;
    metadata: runtime.JsonValue | null;
    createdAt: Date;
    _count: ChatMessageCountAggregateOutputType | null;
    _min: ChatMessageMinAggregateOutputType | null;
    _max: ChatMessageMaxAggregateOutputType | null;
};
type GetChatMessageGroupByPayload<T extends ChatMessageGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ChatMessageGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ChatMessageGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ChatMessageGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ChatMessageGroupByOutputType[P]>;
}>>;
export type ChatMessageWhereInput = {
    AND?: Prisma.ChatMessageWhereInput | Prisma.ChatMessageWhereInput[];
    OR?: Prisma.ChatMessageWhereInput[];
    NOT?: Prisma.ChatMessageWhereInput | Prisma.ChatMessageWhereInput[];
    id?: Prisma.StringFilter<"ChatMessage"> | string;
    chatSessionId?: Prisma.StringFilter<"ChatMessage"> | string;
    role?: Prisma.EnumMessageRoleFilter<"ChatMessage"> | $Enums.MessageRole;
    content?: Prisma.StringFilter<"ChatMessage"> | string;
    metadata?: Prisma.JsonNullableFilter<"ChatMessage">;
    createdAt?: Prisma.DateTimeFilter<"ChatMessage"> | Date | string;
    chatSession?: Prisma.XOR<Prisma.ChatSessionScalarRelationFilter, Prisma.ChatSessionWhereInput>;
};
export type ChatMessageOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    chatSessionId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    chatSession?: Prisma.ChatSessionOrderByWithRelationInput;
};
export type ChatMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ChatMessageWhereInput | Prisma.ChatMessageWhereInput[];
    OR?: Prisma.ChatMessageWhereInput[];
    NOT?: Prisma.ChatMessageWhereInput | Prisma.ChatMessageWhereInput[];
    chatSessionId?: Prisma.StringFilter<"ChatMessage"> | string;
    role?: Prisma.EnumMessageRoleFilter<"ChatMessage"> | $Enums.MessageRole;
    content?: Prisma.StringFilter<"ChatMessage"> | string;
    metadata?: Prisma.JsonNullableFilter<"ChatMessage">;
    createdAt?: Prisma.DateTimeFilter<"ChatMessage"> | Date | string;
    chatSession?: Prisma.XOR<Prisma.ChatSessionScalarRelationFilter, Prisma.ChatSessionWhereInput>;
}, "id">;
export type ChatMessageOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    chatSessionId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ChatMessageCountOrderByAggregateInput;
    _max?: Prisma.ChatMessageMaxOrderByAggregateInput;
    _min?: Prisma.ChatMessageMinOrderByAggregateInput;
};
export type ChatMessageScalarWhereWithAggregatesInput = {
    AND?: Prisma.ChatMessageScalarWhereWithAggregatesInput | Prisma.ChatMessageScalarWhereWithAggregatesInput[];
    OR?: Prisma.ChatMessageScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ChatMessageScalarWhereWithAggregatesInput | Prisma.ChatMessageScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ChatMessage"> | string;
    chatSessionId?: Prisma.StringWithAggregatesFilter<"ChatMessage"> | string;
    role?: Prisma.EnumMessageRoleWithAggregatesFilter<"ChatMessage"> | $Enums.MessageRole;
    content?: Prisma.StringWithAggregatesFilter<"ChatMessage"> | string;
    metadata?: Prisma.JsonNullableWithAggregatesFilter<"ChatMessage">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string;
};
export type ChatMessageCreateInput = {
    id?: string;
    role: $Enums.MessageRole;
    content: string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    chatSession: Prisma.ChatSessionCreateNestedOneWithoutMessagesInput;
};
export type ChatMessageUncheckedCreateInput = {
    id?: string;
    chatSessionId: string;
    role: $Enums.MessageRole;
    content: string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type ChatMessageUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    chatSession?: Prisma.ChatSessionUpdateOneRequiredWithoutMessagesNestedInput;
};
export type ChatMessageUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    chatSessionId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ChatMessageCreateManyInput = {
    id?: string;
    chatSessionId: string;
    role: $Enums.MessageRole;
    content: string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type ChatMessageUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ChatMessageUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    chatSessionId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ChatMessageListRelationFilter = {
    every?: Prisma.ChatMessageWhereInput;
    some?: Prisma.ChatMessageWhereInput;
    none?: Prisma.ChatMessageWhereInput;
};
export type ChatMessageOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ChatMessageCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    chatSessionId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    metadata?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ChatMessageMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    chatSessionId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ChatMessageMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    chatSessionId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ChatMessageCreateNestedManyWithoutChatSessionInput = {
    create?: Prisma.XOR<Prisma.ChatMessageCreateWithoutChatSessionInput, Prisma.ChatMessageUncheckedCreateWithoutChatSessionInput> | Prisma.ChatMessageCreateWithoutChatSessionInput[] | Prisma.ChatMessageUncheckedCreateWithoutChatSessionInput[];
    connectOrCreate?: Prisma.ChatMessageCreateOrConnectWithoutChatSessionInput | Prisma.ChatMessageCreateOrConnectWithoutChatSessionInput[];
    createMany?: Prisma.ChatMessageCreateManyChatSessionInputEnvelope;
    connect?: Prisma.ChatMessageWhereUniqueInput | Prisma.ChatMessageWhereUniqueInput[];
};
export type ChatMessageUncheckedCreateNestedManyWithoutChatSessionInput = {
    create?: Prisma.XOR<Prisma.ChatMessageCreateWithoutChatSessionInput, Prisma.ChatMessageUncheckedCreateWithoutChatSessionInput> | Prisma.ChatMessageCreateWithoutChatSessionInput[] | Prisma.ChatMessageUncheckedCreateWithoutChatSessionInput[];
    connectOrCreate?: Prisma.ChatMessageCreateOrConnectWithoutChatSessionInput | Prisma.ChatMessageCreateOrConnectWithoutChatSessionInput[];
    createMany?: Prisma.ChatMessageCreateManyChatSessionInputEnvelope;
    connect?: Prisma.ChatMessageWhereUniqueInput | Prisma.ChatMessageWhereUniqueInput[];
};
export type ChatMessageUpdateManyWithoutChatSessionNestedInput = {
    create?: Prisma.XOR<Prisma.ChatMessageCreateWithoutChatSessionInput, Prisma.ChatMessageUncheckedCreateWithoutChatSessionInput> | Prisma.ChatMessageCreateWithoutChatSessionInput[] | Prisma.ChatMessageUncheckedCreateWithoutChatSessionInput[];
    connectOrCreate?: Prisma.ChatMessageCreateOrConnectWithoutChatSessionInput | Prisma.ChatMessageCreateOrConnectWithoutChatSessionInput[];
    upsert?: Prisma.ChatMessageUpsertWithWhereUniqueWithoutChatSessionInput | Prisma.ChatMessageUpsertWithWhereUniqueWithoutChatSessionInput[];
    createMany?: Prisma.ChatMessageCreateManyChatSessionInputEnvelope;
    set?: Prisma.ChatMessageWhereUniqueInput | Prisma.ChatMessageWhereUniqueInput[];
    disconnect?: Prisma.ChatMessageWhereUniqueInput | Prisma.ChatMessageWhereUniqueInput[];
    delete?: Prisma.ChatMessageWhereUniqueInput | Prisma.ChatMessageWhereUniqueInput[];
    connect?: Prisma.ChatMessageWhereUniqueInput | Prisma.ChatMessageWhereUniqueInput[];
    update?: Prisma.ChatMessageUpdateWithWhereUniqueWithoutChatSessionInput | Prisma.ChatMessageUpdateWithWhereUniqueWithoutChatSessionInput[];
    updateMany?: Prisma.ChatMessageUpdateManyWithWhereWithoutChatSessionInput | Prisma.ChatMessageUpdateManyWithWhereWithoutChatSessionInput[];
    deleteMany?: Prisma.ChatMessageScalarWhereInput | Prisma.ChatMessageScalarWhereInput[];
};
export type ChatMessageUncheckedUpdateManyWithoutChatSessionNestedInput = {
    create?: Prisma.XOR<Prisma.ChatMessageCreateWithoutChatSessionInput, Prisma.ChatMessageUncheckedCreateWithoutChatSessionInput> | Prisma.ChatMessageCreateWithoutChatSessionInput[] | Prisma.ChatMessageUncheckedCreateWithoutChatSessionInput[];
    connectOrCreate?: Prisma.ChatMessageCreateOrConnectWithoutChatSessionInput | Prisma.ChatMessageCreateOrConnectWithoutChatSessionInput[];
    upsert?: Prisma.ChatMessageUpsertWithWhereUniqueWithoutChatSessionInput | Prisma.ChatMessageUpsertWithWhereUniqueWithoutChatSessionInput[];
    createMany?: Prisma.ChatMessageCreateManyChatSessionInputEnvelope;
    set?: Prisma.ChatMessageWhereUniqueInput | Prisma.ChatMessageWhereUniqueInput[];
    disconnect?: Prisma.ChatMessageWhereUniqueInput | Prisma.ChatMessageWhereUniqueInput[];
    delete?: Prisma.ChatMessageWhereUniqueInput | Prisma.ChatMessageWhereUniqueInput[];
    connect?: Prisma.ChatMessageWhereUniqueInput | Prisma.ChatMessageWhereUniqueInput[];
    update?: Prisma.ChatMessageUpdateWithWhereUniqueWithoutChatSessionInput | Prisma.ChatMessageUpdateWithWhereUniqueWithoutChatSessionInput[];
    updateMany?: Prisma.ChatMessageUpdateManyWithWhereWithoutChatSessionInput | Prisma.ChatMessageUpdateManyWithWhereWithoutChatSessionInput[];
    deleteMany?: Prisma.ChatMessageScalarWhereInput | Prisma.ChatMessageScalarWhereInput[];
};
export type EnumMessageRoleFieldUpdateOperationsInput = {
    set?: $Enums.MessageRole;
};
export type ChatMessageCreateWithoutChatSessionInput = {
    id?: string;
    role: $Enums.MessageRole;
    content: string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type ChatMessageUncheckedCreateWithoutChatSessionInput = {
    id?: string;
    role: $Enums.MessageRole;
    content: string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type ChatMessageCreateOrConnectWithoutChatSessionInput = {
    where: Prisma.ChatMessageWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChatMessageCreateWithoutChatSessionInput, Prisma.ChatMessageUncheckedCreateWithoutChatSessionInput>;
};
export type ChatMessageCreateManyChatSessionInputEnvelope = {
    data: Prisma.ChatMessageCreateManyChatSessionInput | Prisma.ChatMessageCreateManyChatSessionInput[];
    skipDuplicates?: boolean;
};
export type ChatMessageUpsertWithWhereUniqueWithoutChatSessionInput = {
    where: Prisma.ChatMessageWhereUniqueInput;
    update: Prisma.XOR<Prisma.ChatMessageUpdateWithoutChatSessionInput, Prisma.ChatMessageUncheckedUpdateWithoutChatSessionInput>;
    create: Prisma.XOR<Prisma.ChatMessageCreateWithoutChatSessionInput, Prisma.ChatMessageUncheckedCreateWithoutChatSessionInput>;
};
export type ChatMessageUpdateWithWhereUniqueWithoutChatSessionInput = {
    where: Prisma.ChatMessageWhereUniqueInput;
    data: Prisma.XOR<Prisma.ChatMessageUpdateWithoutChatSessionInput, Prisma.ChatMessageUncheckedUpdateWithoutChatSessionInput>;
};
export type ChatMessageUpdateManyWithWhereWithoutChatSessionInput = {
    where: Prisma.ChatMessageScalarWhereInput;
    data: Prisma.XOR<Prisma.ChatMessageUpdateManyMutationInput, Prisma.ChatMessageUncheckedUpdateManyWithoutChatSessionInput>;
};
export type ChatMessageScalarWhereInput = {
    AND?: Prisma.ChatMessageScalarWhereInput | Prisma.ChatMessageScalarWhereInput[];
    OR?: Prisma.ChatMessageScalarWhereInput[];
    NOT?: Prisma.ChatMessageScalarWhereInput | Prisma.ChatMessageScalarWhereInput[];
    id?: Prisma.StringFilter<"ChatMessage"> | string;
    chatSessionId?: Prisma.StringFilter<"ChatMessage"> | string;
    role?: Prisma.EnumMessageRoleFilter<"ChatMessage"> | $Enums.MessageRole;
    content?: Prisma.StringFilter<"ChatMessage"> | string;
    metadata?: Prisma.JsonNullableFilter<"ChatMessage">;
    createdAt?: Prisma.DateTimeFilter<"ChatMessage"> | Date | string;
};
export type ChatMessageCreateManyChatSessionInput = {
    id?: string;
    role: $Enums.MessageRole;
    content: string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type ChatMessageUpdateWithoutChatSessionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ChatMessageUncheckedUpdateWithoutChatSessionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ChatMessageUncheckedUpdateManyWithoutChatSessionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumMessageRoleFieldUpdateOperationsInput | $Enums.MessageRole;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ChatMessageSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    chatSessionId?: boolean;
    role?: boolean;
    content?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    chatSession?: boolean | Prisma.ChatSessionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["chatMessage"]>;
export type ChatMessageSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    chatSessionId?: boolean;
    role?: boolean;
    content?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    chatSession?: boolean | Prisma.ChatSessionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["chatMessage"]>;
export type ChatMessageSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    chatSessionId?: boolean;
    role?: boolean;
    content?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    chatSession?: boolean | Prisma.ChatSessionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["chatMessage"]>;
export type ChatMessageSelectScalar = {
    id?: boolean;
    chatSessionId?: boolean;
    role?: boolean;
    content?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
};
export type ChatMessageOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "chatSessionId" | "role" | "content" | "metadata" | "createdAt", ExtArgs["result"]["chatMessage"]>;
export type ChatMessageInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    chatSession?: boolean | Prisma.ChatSessionDefaultArgs<ExtArgs>;
};
export type ChatMessageIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    chatSession?: boolean | Prisma.ChatSessionDefaultArgs<ExtArgs>;
};
export type ChatMessageIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    chatSession?: boolean | Prisma.ChatSessionDefaultArgs<ExtArgs>;
};
export type $ChatMessagePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ChatMessage";
    objects: {
        chatSession: Prisma.$ChatSessionPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        chatSessionId: string;
        role: $Enums.MessageRole;
        content: string;
        metadata: runtime.JsonValue | null;
        createdAt: Date;
    }, ExtArgs["result"]["chatMessage"]>;
    composites: {};
};
export type ChatMessageGetPayload<S extends boolean | null | undefined | ChatMessageDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ChatMessagePayload, S>;
export type ChatMessageCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ChatMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ChatMessageCountAggregateInputType | true;
};
export interface ChatMessageDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ChatMessage'];
        meta: {
            name: 'ChatMessage';
        };
    };
    findUnique<T extends ChatMessageFindUniqueArgs>(args: Prisma.SelectSubset<T, ChatMessageFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ChatMessageClient<runtime.Types.Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ChatMessageFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ChatMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ChatMessageClient<runtime.Types.Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ChatMessageFindFirstArgs>(args?: Prisma.SelectSubset<T, ChatMessageFindFirstArgs<ExtArgs>>): Prisma.Prisma__ChatMessageClient<runtime.Types.Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ChatMessageFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ChatMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ChatMessageClient<runtime.Types.Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ChatMessageFindManyArgs>(args?: Prisma.SelectSubset<T, ChatMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ChatMessageCreateArgs>(args: Prisma.SelectSubset<T, ChatMessageCreateArgs<ExtArgs>>): Prisma.Prisma__ChatMessageClient<runtime.Types.Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ChatMessageCreateManyArgs>(args?: Prisma.SelectSubset<T, ChatMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ChatMessageCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ChatMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ChatMessageDeleteArgs>(args: Prisma.SelectSubset<T, ChatMessageDeleteArgs<ExtArgs>>): Prisma.Prisma__ChatMessageClient<runtime.Types.Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ChatMessageUpdateArgs>(args: Prisma.SelectSubset<T, ChatMessageUpdateArgs<ExtArgs>>): Prisma.Prisma__ChatMessageClient<runtime.Types.Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ChatMessageDeleteManyArgs>(args?: Prisma.SelectSubset<T, ChatMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ChatMessageUpdateManyArgs>(args: Prisma.SelectSubset<T, ChatMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ChatMessageUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ChatMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ChatMessageUpsertArgs>(args: Prisma.SelectSubset<T, ChatMessageUpsertArgs<ExtArgs>>): Prisma.Prisma__ChatMessageClient<runtime.Types.Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ChatMessageCountArgs>(args?: Prisma.Subset<T, ChatMessageCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ChatMessageCountAggregateOutputType> : number>;
    aggregate<T extends ChatMessageAggregateArgs>(args: Prisma.Subset<T, ChatMessageAggregateArgs>): Prisma.PrismaPromise<GetChatMessageAggregateType<T>>;
    groupBy<T extends ChatMessageGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ChatMessageGroupByArgs['orderBy'];
    } : {
        orderBy?: ChatMessageGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ChatMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ChatMessageFieldRefs;
}
export interface Prisma__ChatMessageClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    chatSession<T extends Prisma.ChatSessionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ChatSessionDefaultArgs<ExtArgs>>): Prisma.Prisma__ChatSessionClient<runtime.Types.Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ChatMessageFieldRefs {
    readonly id: Prisma.FieldRef<"ChatMessage", 'String'>;
    readonly chatSessionId: Prisma.FieldRef<"ChatMessage", 'String'>;
    readonly role: Prisma.FieldRef<"ChatMessage", 'MessageRole'>;
    readonly content: Prisma.FieldRef<"ChatMessage", 'String'>;
    readonly metadata: Prisma.FieldRef<"ChatMessage", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"ChatMessage", 'DateTime'>;
}
export type ChatMessageFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChatMessageSelect<ExtArgs> | null;
    omit?: Prisma.ChatMessageOmit<ExtArgs> | null;
    include?: Prisma.ChatMessageInclude<ExtArgs> | null;
    where: Prisma.ChatMessageWhereUniqueInput;
};
export type ChatMessageFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChatMessageSelect<ExtArgs> | null;
    omit?: Prisma.ChatMessageOmit<ExtArgs> | null;
    include?: Prisma.ChatMessageInclude<ExtArgs> | null;
    where: Prisma.ChatMessageWhereUniqueInput;
};
export type ChatMessageFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChatMessageSelect<ExtArgs> | null;
    omit?: Prisma.ChatMessageOmit<ExtArgs> | null;
    include?: Prisma.ChatMessageInclude<ExtArgs> | null;
    where?: Prisma.ChatMessageWhereInput;
    orderBy?: Prisma.ChatMessageOrderByWithRelationInput | Prisma.ChatMessageOrderByWithRelationInput[];
    cursor?: Prisma.ChatMessageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ChatMessageScalarFieldEnum | Prisma.ChatMessageScalarFieldEnum[];
};
export type ChatMessageFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChatMessageSelect<ExtArgs> | null;
    omit?: Prisma.ChatMessageOmit<ExtArgs> | null;
    include?: Prisma.ChatMessageInclude<ExtArgs> | null;
    where?: Prisma.ChatMessageWhereInput;
    orderBy?: Prisma.ChatMessageOrderByWithRelationInput | Prisma.ChatMessageOrderByWithRelationInput[];
    cursor?: Prisma.ChatMessageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ChatMessageScalarFieldEnum | Prisma.ChatMessageScalarFieldEnum[];
};
export type ChatMessageFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChatMessageSelect<ExtArgs> | null;
    omit?: Prisma.ChatMessageOmit<ExtArgs> | null;
    include?: Prisma.ChatMessageInclude<ExtArgs> | null;
    where?: Prisma.ChatMessageWhereInput;
    orderBy?: Prisma.ChatMessageOrderByWithRelationInput | Prisma.ChatMessageOrderByWithRelationInput[];
    cursor?: Prisma.ChatMessageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ChatMessageScalarFieldEnum | Prisma.ChatMessageScalarFieldEnum[];
};
export type ChatMessageCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChatMessageSelect<ExtArgs> | null;
    omit?: Prisma.ChatMessageOmit<ExtArgs> | null;
    include?: Prisma.ChatMessageInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ChatMessageCreateInput, Prisma.ChatMessageUncheckedCreateInput>;
};
export type ChatMessageCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ChatMessageCreateManyInput | Prisma.ChatMessageCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ChatMessageCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChatMessageSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ChatMessageOmit<ExtArgs> | null;
    data: Prisma.ChatMessageCreateManyInput | Prisma.ChatMessageCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ChatMessageIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ChatMessageUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChatMessageSelect<ExtArgs> | null;
    omit?: Prisma.ChatMessageOmit<ExtArgs> | null;
    include?: Prisma.ChatMessageInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ChatMessageUpdateInput, Prisma.ChatMessageUncheckedUpdateInput>;
    where: Prisma.ChatMessageWhereUniqueInput;
};
export type ChatMessageUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ChatMessageUpdateManyMutationInput, Prisma.ChatMessageUncheckedUpdateManyInput>;
    where?: Prisma.ChatMessageWhereInput;
    limit?: number;
};
export type ChatMessageUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChatMessageSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ChatMessageOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ChatMessageUpdateManyMutationInput, Prisma.ChatMessageUncheckedUpdateManyInput>;
    where?: Prisma.ChatMessageWhereInput;
    limit?: number;
    include?: Prisma.ChatMessageIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ChatMessageUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChatMessageSelect<ExtArgs> | null;
    omit?: Prisma.ChatMessageOmit<ExtArgs> | null;
    include?: Prisma.ChatMessageInclude<ExtArgs> | null;
    where: Prisma.ChatMessageWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChatMessageCreateInput, Prisma.ChatMessageUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ChatMessageUpdateInput, Prisma.ChatMessageUncheckedUpdateInput>;
};
export type ChatMessageDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChatMessageSelect<ExtArgs> | null;
    omit?: Prisma.ChatMessageOmit<ExtArgs> | null;
    include?: Prisma.ChatMessageInclude<ExtArgs> | null;
    where: Prisma.ChatMessageWhereUniqueInput;
};
export type ChatMessageDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChatMessageWhereInput;
    limit?: number;
};
export type ChatMessageDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChatMessageSelect<ExtArgs> | null;
    omit?: Prisma.ChatMessageOmit<ExtArgs> | null;
    include?: Prisma.ChatMessageInclude<ExtArgs> | null;
};
export {};
