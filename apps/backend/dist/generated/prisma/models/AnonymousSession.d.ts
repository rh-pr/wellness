import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AnonymousSessionModel = runtime.Types.Result.DefaultSelection<Prisma.$AnonymousSessionPayload>;
export type AggregateAnonymousSession = {
    _count: AnonymousSessionCountAggregateOutputType | null;
    _min: AnonymousSessionMinAggregateOutputType | null;
    _max: AnonymousSessionMaxAggregateOutputType | null;
};
export type AnonymousSessionMinAggregateOutputType = {
    id: string | null;
    deviceId: string | null;
    userId: string | null;
    popupDismissedAt: Date | null;
    popupNextShowAt: Date | null;
    createdAt: Date | null;
    lastSeenAt: Date | null;
    expireAt: Date | null;
};
export type AnonymousSessionMaxAggregateOutputType = {
    id: string | null;
    deviceId: string | null;
    userId: string | null;
    popupDismissedAt: Date | null;
    popupNextShowAt: Date | null;
    createdAt: Date | null;
    lastSeenAt: Date | null;
    expireAt: Date | null;
};
export type AnonymousSessionCountAggregateOutputType = {
    id: number;
    deviceId: number;
    userId: number;
    popupDismissedAt: number;
    popupNextShowAt: number;
    createdAt: number;
    lastSeenAt: number;
    expireAt: number;
    _all: number;
};
export type AnonymousSessionMinAggregateInputType = {
    id?: true;
    deviceId?: true;
    userId?: true;
    popupDismissedAt?: true;
    popupNextShowAt?: true;
    createdAt?: true;
    lastSeenAt?: true;
    expireAt?: true;
};
export type AnonymousSessionMaxAggregateInputType = {
    id?: true;
    deviceId?: true;
    userId?: true;
    popupDismissedAt?: true;
    popupNextShowAt?: true;
    createdAt?: true;
    lastSeenAt?: true;
    expireAt?: true;
};
export type AnonymousSessionCountAggregateInputType = {
    id?: true;
    deviceId?: true;
    userId?: true;
    popupDismissedAt?: true;
    popupNextShowAt?: true;
    createdAt?: true;
    lastSeenAt?: true;
    expireAt?: true;
    _all?: true;
};
export type AnonymousSessionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnonymousSessionWhereInput;
    orderBy?: Prisma.AnonymousSessionOrderByWithRelationInput | Prisma.AnonymousSessionOrderByWithRelationInput[];
    cursor?: Prisma.AnonymousSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AnonymousSessionCountAggregateInputType;
    _min?: AnonymousSessionMinAggregateInputType;
    _max?: AnonymousSessionMaxAggregateInputType;
};
export type GetAnonymousSessionAggregateType<T extends AnonymousSessionAggregateArgs> = {
    [P in keyof T & keyof AggregateAnonymousSession]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAnonymousSession[P]> : Prisma.GetScalarType<T[P], AggregateAnonymousSession[P]>;
};
export type AnonymousSessionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnonymousSessionWhereInput;
    orderBy?: Prisma.AnonymousSessionOrderByWithAggregationInput | Prisma.AnonymousSessionOrderByWithAggregationInput[];
    by: Prisma.AnonymousSessionScalarFieldEnum[] | Prisma.AnonymousSessionScalarFieldEnum;
    having?: Prisma.AnonymousSessionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AnonymousSessionCountAggregateInputType | true;
    _min?: AnonymousSessionMinAggregateInputType;
    _max?: AnonymousSessionMaxAggregateInputType;
};
export type AnonymousSessionGroupByOutputType = {
    id: string;
    deviceId: string;
    userId: string | null;
    popupDismissedAt: Date | null;
    popupNextShowAt: Date | null;
    createdAt: Date;
    lastSeenAt: Date;
    expireAt: Date;
    _count: AnonymousSessionCountAggregateOutputType | null;
    _min: AnonymousSessionMinAggregateOutputType | null;
    _max: AnonymousSessionMaxAggregateOutputType | null;
};
type GetAnonymousSessionGroupByPayload<T extends AnonymousSessionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AnonymousSessionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AnonymousSessionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AnonymousSessionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AnonymousSessionGroupByOutputType[P]>;
}>>;
export type AnonymousSessionWhereInput = {
    AND?: Prisma.AnonymousSessionWhereInput | Prisma.AnonymousSessionWhereInput[];
    OR?: Prisma.AnonymousSessionWhereInput[];
    NOT?: Prisma.AnonymousSessionWhereInput | Prisma.AnonymousSessionWhereInput[];
    id?: Prisma.StringFilter<"AnonymousSession"> | string;
    deviceId?: Prisma.StringFilter<"AnonymousSession"> | string;
    userId?: Prisma.StringNullableFilter<"AnonymousSession"> | string | null;
    popupDismissedAt?: Prisma.DateTimeNullableFilter<"AnonymousSession"> | Date | string | null;
    popupNextShowAt?: Prisma.DateTimeNullableFilter<"AnonymousSession"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"AnonymousSession"> | Date | string;
    lastSeenAt?: Prisma.DateTimeFilter<"AnonymousSession"> | Date | string;
    expireAt?: Prisma.DateTimeFilter<"AnonymousSession"> | Date | string;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
};
export type AnonymousSessionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    popupDismissedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    popupNextShowAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    lastSeenAt?: Prisma.SortOrder;
    expireAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type AnonymousSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    deviceId?: string;
    userId?: string;
    AND?: Prisma.AnonymousSessionWhereInput | Prisma.AnonymousSessionWhereInput[];
    OR?: Prisma.AnonymousSessionWhereInput[];
    NOT?: Prisma.AnonymousSessionWhereInput | Prisma.AnonymousSessionWhereInput[];
    popupDismissedAt?: Prisma.DateTimeNullableFilter<"AnonymousSession"> | Date | string | null;
    popupNextShowAt?: Prisma.DateTimeNullableFilter<"AnonymousSession"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"AnonymousSession"> | Date | string;
    lastSeenAt?: Prisma.DateTimeFilter<"AnonymousSession"> | Date | string;
    expireAt?: Prisma.DateTimeFilter<"AnonymousSession"> | Date | string;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
}, "id" | "deviceId" | "userId">;
export type AnonymousSessionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    popupDismissedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    popupNextShowAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    lastSeenAt?: Prisma.SortOrder;
    expireAt?: Prisma.SortOrder;
    _count?: Prisma.AnonymousSessionCountOrderByAggregateInput;
    _max?: Prisma.AnonymousSessionMaxOrderByAggregateInput;
    _min?: Prisma.AnonymousSessionMinOrderByAggregateInput;
};
export type AnonymousSessionScalarWhereWithAggregatesInput = {
    AND?: Prisma.AnonymousSessionScalarWhereWithAggregatesInput | Prisma.AnonymousSessionScalarWhereWithAggregatesInput[];
    OR?: Prisma.AnonymousSessionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AnonymousSessionScalarWhereWithAggregatesInput | Prisma.AnonymousSessionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"AnonymousSession"> | string;
    deviceId?: Prisma.StringWithAggregatesFilter<"AnonymousSession"> | string;
    userId?: Prisma.StringNullableWithAggregatesFilter<"AnonymousSession"> | string | null;
    popupDismissedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"AnonymousSession"> | Date | string | null;
    popupNextShowAt?: Prisma.DateTimeNullableWithAggregatesFilter<"AnonymousSession"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AnonymousSession"> | Date | string;
    lastSeenAt?: Prisma.DateTimeWithAggregatesFilter<"AnonymousSession"> | Date | string;
    expireAt?: Prisma.DateTimeWithAggregatesFilter<"AnonymousSession"> | Date | string;
};
export type AnonymousSessionCreateInput = {
    id?: string;
    deviceId: string;
    popupDismissedAt?: Date | string | null;
    popupNextShowAt?: Date | string | null;
    createdAt?: Date | string;
    lastSeenAt?: Date | string;
    expireAt?: Date | string;
    user?: Prisma.UserCreateNestedOneWithoutAnonymousSessionInput;
};
export type AnonymousSessionUncheckedCreateInput = {
    id?: string;
    deviceId: string;
    userId?: string | null;
    popupDismissedAt?: Date | string | null;
    popupNextShowAt?: Date | string | null;
    createdAt?: Date | string;
    lastSeenAt?: Date | string;
    expireAt?: Date | string;
};
export type AnonymousSessionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    popupDismissedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    popupNextShowAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expireAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneWithoutAnonymousSessionNestedInput;
};
export type AnonymousSessionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    popupDismissedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    popupNextShowAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expireAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnonymousSessionCreateManyInput = {
    id?: string;
    deviceId: string;
    userId?: string | null;
    popupDismissedAt?: Date | string | null;
    popupNextShowAt?: Date | string | null;
    createdAt?: Date | string;
    lastSeenAt?: Date | string;
    expireAt?: Date | string;
};
export type AnonymousSessionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    popupDismissedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    popupNextShowAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expireAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnonymousSessionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    popupDismissedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    popupNextShowAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expireAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnonymousSessionNullableScalarRelationFilter = {
    is?: Prisma.AnonymousSessionWhereInput | null;
    isNot?: Prisma.AnonymousSessionWhereInput | null;
};
export type AnonymousSessionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    popupDismissedAt?: Prisma.SortOrder;
    popupNextShowAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    lastSeenAt?: Prisma.SortOrder;
    expireAt?: Prisma.SortOrder;
};
export type AnonymousSessionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    popupDismissedAt?: Prisma.SortOrder;
    popupNextShowAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    lastSeenAt?: Prisma.SortOrder;
    expireAt?: Prisma.SortOrder;
};
export type AnonymousSessionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    deviceId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    popupDismissedAt?: Prisma.SortOrder;
    popupNextShowAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    lastSeenAt?: Prisma.SortOrder;
    expireAt?: Prisma.SortOrder;
};
export type AnonymousSessionCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.AnonymousSessionCreateWithoutUserInput, Prisma.AnonymousSessionUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.AnonymousSessionCreateOrConnectWithoutUserInput;
    connect?: Prisma.AnonymousSessionWhereUniqueInput;
};
export type AnonymousSessionUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.AnonymousSessionCreateWithoutUserInput, Prisma.AnonymousSessionUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.AnonymousSessionCreateOrConnectWithoutUserInput;
    connect?: Prisma.AnonymousSessionWhereUniqueInput;
};
export type AnonymousSessionUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.AnonymousSessionCreateWithoutUserInput, Prisma.AnonymousSessionUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.AnonymousSessionCreateOrConnectWithoutUserInput;
    upsert?: Prisma.AnonymousSessionUpsertWithoutUserInput;
    disconnect?: Prisma.AnonymousSessionWhereInput | boolean;
    delete?: Prisma.AnonymousSessionWhereInput | boolean;
    connect?: Prisma.AnonymousSessionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AnonymousSessionUpdateToOneWithWhereWithoutUserInput, Prisma.AnonymousSessionUpdateWithoutUserInput>, Prisma.AnonymousSessionUncheckedUpdateWithoutUserInput>;
};
export type AnonymousSessionUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.AnonymousSessionCreateWithoutUserInput, Prisma.AnonymousSessionUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.AnonymousSessionCreateOrConnectWithoutUserInput;
    upsert?: Prisma.AnonymousSessionUpsertWithoutUserInput;
    disconnect?: Prisma.AnonymousSessionWhereInput | boolean;
    delete?: Prisma.AnonymousSessionWhereInput | boolean;
    connect?: Prisma.AnonymousSessionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AnonymousSessionUpdateToOneWithWhereWithoutUserInput, Prisma.AnonymousSessionUpdateWithoutUserInput>, Prisma.AnonymousSessionUncheckedUpdateWithoutUserInput>;
};
export type AnonymousSessionCreateWithoutUserInput = {
    id?: string;
    deviceId: string;
    popupDismissedAt?: Date | string | null;
    popupNextShowAt?: Date | string | null;
    createdAt?: Date | string;
    lastSeenAt?: Date | string;
    expireAt?: Date | string;
};
export type AnonymousSessionUncheckedCreateWithoutUserInput = {
    id?: string;
    deviceId: string;
    popupDismissedAt?: Date | string | null;
    popupNextShowAt?: Date | string | null;
    createdAt?: Date | string;
    lastSeenAt?: Date | string;
    expireAt?: Date | string;
};
export type AnonymousSessionCreateOrConnectWithoutUserInput = {
    where: Prisma.AnonymousSessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnonymousSessionCreateWithoutUserInput, Prisma.AnonymousSessionUncheckedCreateWithoutUserInput>;
};
export type AnonymousSessionUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.AnonymousSessionUpdateWithoutUserInput, Prisma.AnonymousSessionUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.AnonymousSessionCreateWithoutUserInput, Prisma.AnonymousSessionUncheckedCreateWithoutUserInput>;
    where?: Prisma.AnonymousSessionWhereInput;
};
export type AnonymousSessionUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.AnonymousSessionWhereInput;
    data: Prisma.XOR<Prisma.AnonymousSessionUpdateWithoutUserInput, Prisma.AnonymousSessionUncheckedUpdateWithoutUserInput>;
};
export type AnonymousSessionUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    popupDismissedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    popupNextShowAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expireAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnonymousSessionUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    deviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    popupDismissedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    popupNextShowAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expireAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnonymousSessionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    deviceId?: boolean;
    userId?: boolean;
    popupDismissedAt?: boolean;
    popupNextShowAt?: boolean;
    createdAt?: boolean;
    lastSeenAt?: boolean;
    expireAt?: boolean;
    user?: boolean | Prisma.AnonymousSession$userArgs<ExtArgs>;
}, ExtArgs["result"]["anonymousSession"]>;
export type AnonymousSessionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    deviceId?: boolean;
    userId?: boolean;
    popupDismissedAt?: boolean;
    popupNextShowAt?: boolean;
    createdAt?: boolean;
    lastSeenAt?: boolean;
    expireAt?: boolean;
    user?: boolean | Prisma.AnonymousSession$userArgs<ExtArgs>;
}, ExtArgs["result"]["anonymousSession"]>;
export type AnonymousSessionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    deviceId?: boolean;
    userId?: boolean;
    popupDismissedAt?: boolean;
    popupNextShowAt?: boolean;
    createdAt?: boolean;
    lastSeenAt?: boolean;
    expireAt?: boolean;
    user?: boolean | Prisma.AnonymousSession$userArgs<ExtArgs>;
}, ExtArgs["result"]["anonymousSession"]>;
export type AnonymousSessionSelectScalar = {
    id?: boolean;
    deviceId?: boolean;
    userId?: boolean;
    popupDismissedAt?: boolean;
    popupNextShowAt?: boolean;
    createdAt?: boolean;
    lastSeenAt?: boolean;
    expireAt?: boolean;
};
export type AnonymousSessionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "deviceId" | "userId" | "popupDismissedAt" | "popupNextShowAt" | "createdAt" | "lastSeenAt" | "expireAt", ExtArgs["result"]["anonymousSession"]>;
export type AnonymousSessionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.AnonymousSession$userArgs<ExtArgs>;
};
export type AnonymousSessionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.AnonymousSession$userArgs<ExtArgs>;
};
export type AnonymousSessionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.AnonymousSession$userArgs<ExtArgs>;
};
export type $AnonymousSessionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AnonymousSession";
    objects: {
        user: Prisma.$UserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        deviceId: string;
        userId: string | null;
        popupDismissedAt: Date | null;
        popupNextShowAt: Date | null;
        createdAt: Date;
        lastSeenAt: Date;
        expireAt: Date;
    }, ExtArgs["result"]["anonymousSession"]>;
    composites: {};
};
export type AnonymousSessionGetPayload<S extends boolean | null | undefined | AnonymousSessionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AnonymousSessionPayload, S>;
export type AnonymousSessionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AnonymousSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AnonymousSessionCountAggregateInputType | true;
};
export interface AnonymousSessionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AnonymousSession'];
        meta: {
            name: 'AnonymousSession';
        };
    };
    findUnique<T extends AnonymousSessionFindUniqueArgs>(args: Prisma.SelectSubset<T, AnonymousSessionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AnonymousSessionClient<runtime.Types.Result.GetResult<Prisma.$AnonymousSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AnonymousSessionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AnonymousSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AnonymousSessionClient<runtime.Types.Result.GetResult<Prisma.$AnonymousSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AnonymousSessionFindFirstArgs>(args?: Prisma.SelectSubset<T, AnonymousSessionFindFirstArgs<ExtArgs>>): Prisma.Prisma__AnonymousSessionClient<runtime.Types.Result.GetResult<Prisma.$AnonymousSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AnonymousSessionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AnonymousSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AnonymousSessionClient<runtime.Types.Result.GetResult<Prisma.$AnonymousSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AnonymousSessionFindManyArgs>(args?: Prisma.SelectSubset<T, AnonymousSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnonymousSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AnonymousSessionCreateArgs>(args: Prisma.SelectSubset<T, AnonymousSessionCreateArgs<ExtArgs>>): Prisma.Prisma__AnonymousSessionClient<runtime.Types.Result.GetResult<Prisma.$AnonymousSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AnonymousSessionCreateManyArgs>(args?: Prisma.SelectSubset<T, AnonymousSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AnonymousSessionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AnonymousSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnonymousSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AnonymousSessionDeleteArgs>(args: Prisma.SelectSubset<T, AnonymousSessionDeleteArgs<ExtArgs>>): Prisma.Prisma__AnonymousSessionClient<runtime.Types.Result.GetResult<Prisma.$AnonymousSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AnonymousSessionUpdateArgs>(args: Prisma.SelectSubset<T, AnonymousSessionUpdateArgs<ExtArgs>>): Prisma.Prisma__AnonymousSessionClient<runtime.Types.Result.GetResult<Prisma.$AnonymousSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AnonymousSessionDeleteManyArgs>(args?: Prisma.SelectSubset<T, AnonymousSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AnonymousSessionUpdateManyArgs>(args: Prisma.SelectSubset<T, AnonymousSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AnonymousSessionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AnonymousSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnonymousSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AnonymousSessionUpsertArgs>(args: Prisma.SelectSubset<T, AnonymousSessionUpsertArgs<ExtArgs>>): Prisma.Prisma__AnonymousSessionClient<runtime.Types.Result.GetResult<Prisma.$AnonymousSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AnonymousSessionCountArgs>(args?: Prisma.Subset<T, AnonymousSessionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AnonymousSessionCountAggregateOutputType> : number>;
    aggregate<T extends AnonymousSessionAggregateArgs>(args: Prisma.Subset<T, AnonymousSessionAggregateArgs>): Prisma.PrismaPromise<GetAnonymousSessionAggregateType<T>>;
    groupBy<T extends AnonymousSessionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AnonymousSessionGroupByArgs['orderBy'];
    } : {
        orderBy?: AnonymousSessionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AnonymousSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnonymousSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AnonymousSessionFieldRefs;
}
export interface Prisma__AnonymousSessionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.AnonymousSession$userArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AnonymousSession$userArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AnonymousSessionFieldRefs {
    readonly id: Prisma.FieldRef<"AnonymousSession", 'String'>;
    readonly deviceId: Prisma.FieldRef<"AnonymousSession", 'String'>;
    readonly userId: Prisma.FieldRef<"AnonymousSession", 'String'>;
    readonly popupDismissedAt: Prisma.FieldRef<"AnonymousSession", 'DateTime'>;
    readonly popupNextShowAt: Prisma.FieldRef<"AnonymousSession", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"AnonymousSession", 'DateTime'>;
    readonly lastSeenAt: Prisma.FieldRef<"AnonymousSession", 'DateTime'>;
    readonly expireAt: Prisma.FieldRef<"AnonymousSession", 'DateTime'>;
}
export type AnonymousSessionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnonymousSessionSelect<ExtArgs> | null;
    omit?: Prisma.AnonymousSessionOmit<ExtArgs> | null;
    include?: Prisma.AnonymousSessionInclude<ExtArgs> | null;
    where: Prisma.AnonymousSessionWhereUniqueInput;
};
export type AnonymousSessionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnonymousSessionSelect<ExtArgs> | null;
    omit?: Prisma.AnonymousSessionOmit<ExtArgs> | null;
    include?: Prisma.AnonymousSessionInclude<ExtArgs> | null;
    where: Prisma.AnonymousSessionWhereUniqueInput;
};
export type AnonymousSessionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnonymousSessionSelect<ExtArgs> | null;
    omit?: Prisma.AnonymousSessionOmit<ExtArgs> | null;
    include?: Prisma.AnonymousSessionInclude<ExtArgs> | null;
    where?: Prisma.AnonymousSessionWhereInput;
    orderBy?: Prisma.AnonymousSessionOrderByWithRelationInput | Prisma.AnonymousSessionOrderByWithRelationInput[];
    cursor?: Prisma.AnonymousSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnonymousSessionScalarFieldEnum | Prisma.AnonymousSessionScalarFieldEnum[];
};
export type AnonymousSessionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnonymousSessionSelect<ExtArgs> | null;
    omit?: Prisma.AnonymousSessionOmit<ExtArgs> | null;
    include?: Prisma.AnonymousSessionInclude<ExtArgs> | null;
    where?: Prisma.AnonymousSessionWhereInput;
    orderBy?: Prisma.AnonymousSessionOrderByWithRelationInput | Prisma.AnonymousSessionOrderByWithRelationInput[];
    cursor?: Prisma.AnonymousSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnonymousSessionScalarFieldEnum | Prisma.AnonymousSessionScalarFieldEnum[];
};
export type AnonymousSessionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnonymousSessionSelect<ExtArgs> | null;
    omit?: Prisma.AnonymousSessionOmit<ExtArgs> | null;
    include?: Prisma.AnonymousSessionInclude<ExtArgs> | null;
    where?: Prisma.AnonymousSessionWhereInput;
    orderBy?: Prisma.AnonymousSessionOrderByWithRelationInput | Prisma.AnonymousSessionOrderByWithRelationInput[];
    cursor?: Prisma.AnonymousSessionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnonymousSessionScalarFieldEnum | Prisma.AnonymousSessionScalarFieldEnum[];
};
export type AnonymousSessionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnonymousSessionSelect<ExtArgs> | null;
    omit?: Prisma.AnonymousSessionOmit<ExtArgs> | null;
    include?: Prisma.AnonymousSessionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnonymousSessionCreateInput, Prisma.AnonymousSessionUncheckedCreateInput>;
};
export type AnonymousSessionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AnonymousSessionCreateManyInput | Prisma.AnonymousSessionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AnonymousSessionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnonymousSessionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AnonymousSessionOmit<ExtArgs> | null;
    data: Prisma.AnonymousSessionCreateManyInput | Prisma.AnonymousSessionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AnonymousSessionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AnonymousSessionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnonymousSessionSelect<ExtArgs> | null;
    omit?: Prisma.AnonymousSessionOmit<ExtArgs> | null;
    include?: Prisma.AnonymousSessionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnonymousSessionUpdateInput, Prisma.AnonymousSessionUncheckedUpdateInput>;
    where: Prisma.AnonymousSessionWhereUniqueInput;
};
export type AnonymousSessionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AnonymousSessionUpdateManyMutationInput, Prisma.AnonymousSessionUncheckedUpdateManyInput>;
    where?: Prisma.AnonymousSessionWhereInput;
    limit?: number;
};
export type AnonymousSessionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnonymousSessionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AnonymousSessionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnonymousSessionUpdateManyMutationInput, Prisma.AnonymousSessionUncheckedUpdateManyInput>;
    where?: Prisma.AnonymousSessionWhereInput;
    limit?: number;
    include?: Prisma.AnonymousSessionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AnonymousSessionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnonymousSessionSelect<ExtArgs> | null;
    omit?: Prisma.AnonymousSessionOmit<ExtArgs> | null;
    include?: Prisma.AnonymousSessionInclude<ExtArgs> | null;
    where: Prisma.AnonymousSessionWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnonymousSessionCreateInput, Prisma.AnonymousSessionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AnonymousSessionUpdateInput, Prisma.AnonymousSessionUncheckedUpdateInput>;
};
export type AnonymousSessionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnonymousSessionSelect<ExtArgs> | null;
    omit?: Prisma.AnonymousSessionOmit<ExtArgs> | null;
    include?: Prisma.AnonymousSessionInclude<ExtArgs> | null;
    where: Prisma.AnonymousSessionWhereUniqueInput;
};
export type AnonymousSessionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnonymousSessionWhereInput;
    limit?: number;
};
export type AnonymousSession$userArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type AnonymousSessionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnonymousSessionSelect<ExtArgs> | null;
    omit?: Prisma.AnonymousSessionOmit<ExtArgs> | null;
    include?: Prisma.AnonymousSessionInclude<ExtArgs> | null;
};
export {};
