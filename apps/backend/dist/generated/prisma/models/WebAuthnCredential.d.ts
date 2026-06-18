import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type WebAuthnCredentialModel = runtime.Types.Result.DefaultSelection<Prisma.$WebAuthnCredentialPayload>;
export type AggregateWebAuthnCredential = {
    _count: WebAuthnCredentialCountAggregateOutputType | null;
    _avg: WebAuthnCredentialAvgAggregateOutputType | null;
    _sum: WebAuthnCredentialSumAggregateOutputType | null;
    _min: WebAuthnCredentialMinAggregateOutputType | null;
    _max: WebAuthnCredentialMaxAggregateOutputType | null;
};
export type WebAuthnCredentialAvgAggregateOutputType = {
    signCount: number | null;
};
export type WebAuthnCredentialSumAggregateOutputType = {
    signCount: number | null;
};
export type WebAuthnCredentialMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    credentialId: string | null;
    publicKey: string | null;
    signCount: number | null;
    createdAt: Date | null;
    lastUsedAt: Date | null;
};
export type WebAuthnCredentialMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    credentialId: string | null;
    publicKey: string | null;
    signCount: number | null;
    createdAt: Date | null;
    lastUsedAt: Date | null;
};
export type WebAuthnCredentialCountAggregateOutputType = {
    id: number;
    userId: number;
    credentialId: number;
    publicKey: number;
    signCount: number;
    createdAt: number;
    lastUsedAt: number;
    _all: number;
};
export type WebAuthnCredentialAvgAggregateInputType = {
    signCount?: true;
};
export type WebAuthnCredentialSumAggregateInputType = {
    signCount?: true;
};
export type WebAuthnCredentialMinAggregateInputType = {
    id?: true;
    userId?: true;
    credentialId?: true;
    publicKey?: true;
    signCount?: true;
    createdAt?: true;
    lastUsedAt?: true;
};
export type WebAuthnCredentialMaxAggregateInputType = {
    id?: true;
    userId?: true;
    credentialId?: true;
    publicKey?: true;
    signCount?: true;
    createdAt?: true;
    lastUsedAt?: true;
};
export type WebAuthnCredentialCountAggregateInputType = {
    id?: true;
    userId?: true;
    credentialId?: true;
    publicKey?: true;
    signCount?: true;
    createdAt?: true;
    lastUsedAt?: true;
    _all?: true;
};
export type WebAuthnCredentialAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WebAuthnCredentialWhereInput;
    orderBy?: Prisma.WebAuthnCredentialOrderByWithRelationInput | Prisma.WebAuthnCredentialOrderByWithRelationInput[];
    cursor?: Prisma.WebAuthnCredentialWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | WebAuthnCredentialCountAggregateInputType;
    _avg?: WebAuthnCredentialAvgAggregateInputType;
    _sum?: WebAuthnCredentialSumAggregateInputType;
    _min?: WebAuthnCredentialMinAggregateInputType;
    _max?: WebAuthnCredentialMaxAggregateInputType;
};
export type GetWebAuthnCredentialAggregateType<T extends WebAuthnCredentialAggregateArgs> = {
    [P in keyof T & keyof AggregateWebAuthnCredential]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWebAuthnCredential[P]> : Prisma.GetScalarType<T[P], AggregateWebAuthnCredential[P]>;
};
export type WebAuthnCredentialGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WebAuthnCredentialWhereInput;
    orderBy?: Prisma.WebAuthnCredentialOrderByWithAggregationInput | Prisma.WebAuthnCredentialOrderByWithAggregationInput[];
    by: Prisma.WebAuthnCredentialScalarFieldEnum[] | Prisma.WebAuthnCredentialScalarFieldEnum;
    having?: Prisma.WebAuthnCredentialScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WebAuthnCredentialCountAggregateInputType | true;
    _avg?: WebAuthnCredentialAvgAggregateInputType;
    _sum?: WebAuthnCredentialSumAggregateInputType;
    _min?: WebAuthnCredentialMinAggregateInputType;
    _max?: WebAuthnCredentialMaxAggregateInputType;
};
export type WebAuthnCredentialGroupByOutputType = {
    id: string;
    userId: string;
    credentialId: string;
    publicKey: string;
    signCount: number;
    createdAt: Date;
    lastUsedAt: Date;
    _count: WebAuthnCredentialCountAggregateOutputType | null;
    _avg: WebAuthnCredentialAvgAggregateOutputType | null;
    _sum: WebAuthnCredentialSumAggregateOutputType | null;
    _min: WebAuthnCredentialMinAggregateOutputType | null;
    _max: WebAuthnCredentialMaxAggregateOutputType | null;
};
type GetWebAuthnCredentialGroupByPayload<T extends WebAuthnCredentialGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WebAuthnCredentialGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WebAuthnCredentialGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WebAuthnCredentialGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WebAuthnCredentialGroupByOutputType[P]>;
}>>;
export type WebAuthnCredentialWhereInput = {
    AND?: Prisma.WebAuthnCredentialWhereInput | Prisma.WebAuthnCredentialWhereInput[];
    OR?: Prisma.WebAuthnCredentialWhereInput[];
    NOT?: Prisma.WebAuthnCredentialWhereInput | Prisma.WebAuthnCredentialWhereInput[];
    id?: Prisma.StringFilter<"WebAuthnCredential"> | string;
    userId?: Prisma.StringFilter<"WebAuthnCredential"> | string;
    credentialId?: Prisma.StringFilter<"WebAuthnCredential"> | string;
    publicKey?: Prisma.StringFilter<"WebAuthnCredential"> | string;
    signCount?: Prisma.IntFilter<"WebAuthnCredential"> | number;
    createdAt?: Prisma.DateTimeFilter<"WebAuthnCredential"> | Date | string;
    lastUsedAt?: Prisma.DateTimeFilter<"WebAuthnCredential"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type WebAuthnCredentialOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    credentialId?: Prisma.SortOrder;
    publicKey?: Prisma.SortOrder;
    signCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    lastUsedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type WebAuthnCredentialWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    credentialId?: string;
    AND?: Prisma.WebAuthnCredentialWhereInput | Prisma.WebAuthnCredentialWhereInput[];
    OR?: Prisma.WebAuthnCredentialWhereInput[];
    NOT?: Prisma.WebAuthnCredentialWhereInput | Prisma.WebAuthnCredentialWhereInput[];
    userId?: Prisma.StringFilter<"WebAuthnCredential"> | string;
    publicKey?: Prisma.StringFilter<"WebAuthnCredential"> | string;
    signCount?: Prisma.IntFilter<"WebAuthnCredential"> | number;
    createdAt?: Prisma.DateTimeFilter<"WebAuthnCredential"> | Date | string;
    lastUsedAt?: Prisma.DateTimeFilter<"WebAuthnCredential"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "credentialId">;
export type WebAuthnCredentialOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    credentialId?: Prisma.SortOrder;
    publicKey?: Prisma.SortOrder;
    signCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    lastUsedAt?: Prisma.SortOrder;
    _count?: Prisma.WebAuthnCredentialCountOrderByAggregateInput;
    _avg?: Prisma.WebAuthnCredentialAvgOrderByAggregateInput;
    _max?: Prisma.WebAuthnCredentialMaxOrderByAggregateInput;
    _min?: Prisma.WebAuthnCredentialMinOrderByAggregateInput;
    _sum?: Prisma.WebAuthnCredentialSumOrderByAggregateInput;
};
export type WebAuthnCredentialScalarWhereWithAggregatesInput = {
    AND?: Prisma.WebAuthnCredentialScalarWhereWithAggregatesInput | Prisma.WebAuthnCredentialScalarWhereWithAggregatesInput[];
    OR?: Prisma.WebAuthnCredentialScalarWhereWithAggregatesInput[];
    NOT?: Prisma.WebAuthnCredentialScalarWhereWithAggregatesInput | Prisma.WebAuthnCredentialScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"WebAuthnCredential"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"WebAuthnCredential"> | string;
    credentialId?: Prisma.StringWithAggregatesFilter<"WebAuthnCredential"> | string;
    publicKey?: Prisma.StringWithAggregatesFilter<"WebAuthnCredential"> | string;
    signCount?: Prisma.IntWithAggregatesFilter<"WebAuthnCredential"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"WebAuthnCredential"> | Date | string;
    lastUsedAt?: Prisma.DateTimeWithAggregatesFilter<"WebAuthnCredential"> | Date | string;
};
export type WebAuthnCredentialCreateInput = {
    id?: string;
    credentialId: string;
    publicKey: string;
    signCount?: number;
    createdAt?: Date | string;
    lastUsedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutWebAuthnCredentialsInput;
};
export type WebAuthnCredentialUncheckedCreateInput = {
    id?: string;
    userId: string;
    credentialId: string;
    publicKey: string;
    signCount?: number;
    createdAt?: Date | string;
    lastUsedAt?: Date | string;
};
export type WebAuthnCredentialUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    credentialId?: Prisma.StringFieldUpdateOperationsInput | string;
    publicKey?: Prisma.StringFieldUpdateOperationsInput | string;
    signCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastUsedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutWebAuthnCredentialsNestedInput;
};
export type WebAuthnCredentialUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    credentialId?: Prisma.StringFieldUpdateOperationsInput | string;
    publicKey?: Prisma.StringFieldUpdateOperationsInput | string;
    signCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastUsedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WebAuthnCredentialCreateManyInput = {
    id?: string;
    userId: string;
    credentialId: string;
    publicKey: string;
    signCount?: number;
    createdAt?: Date | string;
    lastUsedAt?: Date | string;
};
export type WebAuthnCredentialUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    credentialId?: Prisma.StringFieldUpdateOperationsInput | string;
    publicKey?: Prisma.StringFieldUpdateOperationsInput | string;
    signCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastUsedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WebAuthnCredentialUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    credentialId?: Prisma.StringFieldUpdateOperationsInput | string;
    publicKey?: Prisma.StringFieldUpdateOperationsInput | string;
    signCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastUsedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WebAuthnCredentialListRelationFilter = {
    every?: Prisma.WebAuthnCredentialWhereInput;
    some?: Prisma.WebAuthnCredentialWhereInput;
    none?: Prisma.WebAuthnCredentialWhereInput;
};
export type WebAuthnCredentialOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type WebAuthnCredentialCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    credentialId?: Prisma.SortOrder;
    publicKey?: Prisma.SortOrder;
    signCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    lastUsedAt?: Prisma.SortOrder;
};
export type WebAuthnCredentialAvgOrderByAggregateInput = {
    signCount?: Prisma.SortOrder;
};
export type WebAuthnCredentialMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    credentialId?: Prisma.SortOrder;
    publicKey?: Prisma.SortOrder;
    signCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    lastUsedAt?: Prisma.SortOrder;
};
export type WebAuthnCredentialMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    credentialId?: Prisma.SortOrder;
    publicKey?: Prisma.SortOrder;
    signCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    lastUsedAt?: Prisma.SortOrder;
};
export type WebAuthnCredentialSumOrderByAggregateInput = {
    signCount?: Prisma.SortOrder;
};
export type WebAuthnCredentialCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.WebAuthnCredentialCreateWithoutUserInput, Prisma.WebAuthnCredentialUncheckedCreateWithoutUserInput> | Prisma.WebAuthnCredentialCreateWithoutUserInput[] | Prisma.WebAuthnCredentialUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.WebAuthnCredentialCreateOrConnectWithoutUserInput | Prisma.WebAuthnCredentialCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.WebAuthnCredentialCreateManyUserInputEnvelope;
    connect?: Prisma.WebAuthnCredentialWhereUniqueInput | Prisma.WebAuthnCredentialWhereUniqueInput[];
};
export type WebAuthnCredentialUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.WebAuthnCredentialCreateWithoutUserInput, Prisma.WebAuthnCredentialUncheckedCreateWithoutUserInput> | Prisma.WebAuthnCredentialCreateWithoutUserInput[] | Prisma.WebAuthnCredentialUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.WebAuthnCredentialCreateOrConnectWithoutUserInput | Prisma.WebAuthnCredentialCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.WebAuthnCredentialCreateManyUserInputEnvelope;
    connect?: Prisma.WebAuthnCredentialWhereUniqueInput | Prisma.WebAuthnCredentialWhereUniqueInput[];
};
export type WebAuthnCredentialUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.WebAuthnCredentialCreateWithoutUserInput, Prisma.WebAuthnCredentialUncheckedCreateWithoutUserInput> | Prisma.WebAuthnCredentialCreateWithoutUserInput[] | Prisma.WebAuthnCredentialUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.WebAuthnCredentialCreateOrConnectWithoutUserInput | Prisma.WebAuthnCredentialCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.WebAuthnCredentialUpsertWithWhereUniqueWithoutUserInput | Prisma.WebAuthnCredentialUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.WebAuthnCredentialCreateManyUserInputEnvelope;
    set?: Prisma.WebAuthnCredentialWhereUniqueInput | Prisma.WebAuthnCredentialWhereUniqueInput[];
    disconnect?: Prisma.WebAuthnCredentialWhereUniqueInput | Prisma.WebAuthnCredentialWhereUniqueInput[];
    delete?: Prisma.WebAuthnCredentialWhereUniqueInput | Prisma.WebAuthnCredentialWhereUniqueInput[];
    connect?: Prisma.WebAuthnCredentialWhereUniqueInput | Prisma.WebAuthnCredentialWhereUniqueInput[];
    update?: Prisma.WebAuthnCredentialUpdateWithWhereUniqueWithoutUserInput | Prisma.WebAuthnCredentialUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.WebAuthnCredentialUpdateManyWithWhereWithoutUserInput | Prisma.WebAuthnCredentialUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.WebAuthnCredentialScalarWhereInput | Prisma.WebAuthnCredentialScalarWhereInput[];
};
export type WebAuthnCredentialUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.WebAuthnCredentialCreateWithoutUserInput, Prisma.WebAuthnCredentialUncheckedCreateWithoutUserInput> | Prisma.WebAuthnCredentialCreateWithoutUserInput[] | Prisma.WebAuthnCredentialUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.WebAuthnCredentialCreateOrConnectWithoutUserInput | Prisma.WebAuthnCredentialCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.WebAuthnCredentialUpsertWithWhereUniqueWithoutUserInput | Prisma.WebAuthnCredentialUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.WebAuthnCredentialCreateManyUserInputEnvelope;
    set?: Prisma.WebAuthnCredentialWhereUniqueInput | Prisma.WebAuthnCredentialWhereUniqueInput[];
    disconnect?: Prisma.WebAuthnCredentialWhereUniqueInput | Prisma.WebAuthnCredentialWhereUniqueInput[];
    delete?: Prisma.WebAuthnCredentialWhereUniqueInput | Prisma.WebAuthnCredentialWhereUniqueInput[];
    connect?: Prisma.WebAuthnCredentialWhereUniqueInput | Prisma.WebAuthnCredentialWhereUniqueInput[];
    update?: Prisma.WebAuthnCredentialUpdateWithWhereUniqueWithoutUserInput | Prisma.WebAuthnCredentialUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.WebAuthnCredentialUpdateManyWithWhereWithoutUserInput | Prisma.WebAuthnCredentialUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.WebAuthnCredentialScalarWhereInput | Prisma.WebAuthnCredentialScalarWhereInput[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type WebAuthnCredentialCreateWithoutUserInput = {
    id?: string;
    credentialId: string;
    publicKey: string;
    signCount?: number;
    createdAt?: Date | string;
    lastUsedAt?: Date | string;
};
export type WebAuthnCredentialUncheckedCreateWithoutUserInput = {
    id?: string;
    credentialId: string;
    publicKey: string;
    signCount?: number;
    createdAt?: Date | string;
    lastUsedAt?: Date | string;
};
export type WebAuthnCredentialCreateOrConnectWithoutUserInput = {
    where: Prisma.WebAuthnCredentialWhereUniqueInput;
    create: Prisma.XOR<Prisma.WebAuthnCredentialCreateWithoutUserInput, Prisma.WebAuthnCredentialUncheckedCreateWithoutUserInput>;
};
export type WebAuthnCredentialCreateManyUserInputEnvelope = {
    data: Prisma.WebAuthnCredentialCreateManyUserInput | Prisma.WebAuthnCredentialCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type WebAuthnCredentialUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.WebAuthnCredentialWhereUniqueInput;
    update: Prisma.XOR<Prisma.WebAuthnCredentialUpdateWithoutUserInput, Prisma.WebAuthnCredentialUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.WebAuthnCredentialCreateWithoutUserInput, Prisma.WebAuthnCredentialUncheckedCreateWithoutUserInput>;
};
export type WebAuthnCredentialUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.WebAuthnCredentialWhereUniqueInput;
    data: Prisma.XOR<Prisma.WebAuthnCredentialUpdateWithoutUserInput, Prisma.WebAuthnCredentialUncheckedUpdateWithoutUserInput>;
};
export type WebAuthnCredentialUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.WebAuthnCredentialScalarWhereInput;
    data: Prisma.XOR<Prisma.WebAuthnCredentialUpdateManyMutationInput, Prisma.WebAuthnCredentialUncheckedUpdateManyWithoutUserInput>;
};
export type WebAuthnCredentialScalarWhereInput = {
    AND?: Prisma.WebAuthnCredentialScalarWhereInput | Prisma.WebAuthnCredentialScalarWhereInput[];
    OR?: Prisma.WebAuthnCredentialScalarWhereInput[];
    NOT?: Prisma.WebAuthnCredentialScalarWhereInput | Prisma.WebAuthnCredentialScalarWhereInput[];
    id?: Prisma.StringFilter<"WebAuthnCredential"> | string;
    userId?: Prisma.StringFilter<"WebAuthnCredential"> | string;
    credentialId?: Prisma.StringFilter<"WebAuthnCredential"> | string;
    publicKey?: Prisma.StringFilter<"WebAuthnCredential"> | string;
    signCount?: Prisma.IntFilter<"WebAuthnCredential"> | number;
    createdAt?: Prisma.DateTimeFilter<"WebAuthnCredential"> | Date | string;
    lastUsedAt?: Prisma.DateTimeFilter<"WebAuthnCredential"> | Date | string;
};
export type WebAuthnCredentialCreateManyUserInput = {
    id?: string;
    credentialId: string;
    publicKey: string;
    signCount?: number;
    createdAt?: Date | string;
    lastUsedAt?: Date | string;
};
export type WebAuthnCredentialUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    credentialId?: Prisma.StringFieldUpdateOperationsInput | string;
    publicKey?: Prisma.StringFieldUpdateOperationsInput | string;
    signCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastUsedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WebAuthnCredentialUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    credentialId?: Prisma.StringFieldUpdateOperationsInput | string;
    publicKey?: Prisma.StringFieldUpdateOperationsInput | string;
    signCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastUsedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WebAuthnCredentialUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    credentialId?: Prisma.StringFieldUpdateOperationsInput | string;
    publicKey?: Prisma.StringFieldUpdateOperationsInput | string;
    signCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lastUsedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WebAuthnCredentialSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    credentialId?: boolean;
    publicKey?: boolean;
    signCount?: boolean;
    createdAt?: boolean;
    lastUsedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["webAuthnCredential"]>;
export type WebAuthnCredentialSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    credentialId?: boolean;
    publicKey?: boolean;
    signCount?: boolean;
    createdAt?: boolean;
    lastUsedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["webAuthnCredential"]>;
export type WebAuthnCredentialSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    credentialId?: boolean;
    publicKey?: boolean;
    signCount?: boolean;
    createdAt?: boolean;
    lastUsedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["webAuthnCredential"]>;
export type WebAuthnCredentialSelectScalar = {
    id?: boolean;
    userId?: boolean;
    credentialId?: boolean;
    publicKey?: boolean;
    signCount?: boolean;
    createdAt?: boolean;
    lastUsedAt?: boolean;
};
export type WebAuthnCredentialOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "credentialId" | "publicKey" | "signCount" | "createdAt" | "lastUsedAt", ExtArgs["result"]["webAuthnCredential"]>;
export type WebAuthnCredentialInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type WebAuthnCredentialIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type WebAuthnCredentialIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $WebAuthnCredentialPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "WebAuthnCredential";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        credentialId: string;
        publicKey: string;
        signCount: number;
        createdAt: Date;
        lastUsedAt: Date;
    }, ExtArgs["result"]["webAuthnCredential"]>;
    composites: {};
};
export type WebAuthnCredentialGetPayload<S extends boolean | null | undefined | WebAuthnCredentialDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$WebAuthnCredentialPayload, S>;
export type WebAuthnCredentialCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<WebAuthnCredentialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WebAuthnCredentialCountAggregateInputType | true;
};
export interface WebAuthnCredentialDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['WebAuthnCredential'];
        meta: {
            name: 'WebAuthnCredential';
        };
    };
    findUnique<T extends WebAuthnCredentialFindUniqueArgs>(args: Prisma.SelectSubset<T, WebAuthnCredentialFindUniqueArgs<ExtArgs>>): Prisma.Prisma__WebAuthnCredentialClient<runtime.Types.Result.GetResult<Prisma.$WebAuthnCredentialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends WebAuthnCredentialFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, WebAuthnCredentialFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__WebAuthnCredentialClient<runtime.Types.Result.GetResult<Prisma.$WebAuthnCredentialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends WebAuthnCredentialFindFirstArgs>(args?: Prisma.SelectSubset<T, WebAuthnCredentialFindFirstArgs<ExtArgs>>): Prisma.Prisma__WebAuthnCredentialClient<runtime.Types.Result.GetResult<Prisma.$WebAuthnCredentialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends WebAuthnCredentialFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, WebAuthnCredentialFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__WebAuthnCredentialClient<runtime.Types.Result.GetResult<Prisma.$WebAuthnCredentialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends WebAuthnCredentialFindManyArgs>(args?: Prisma.SelectSubset<T, WebAuthnCredentialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WebAuthnCredentialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends WebAuthnCredentialCreateArgs>(args: Prisma.SelectSubset<T, WebAuthnCredentialCreateArgs<ExtArgs>>): Prisma.Prisma__WebAuthnCredentialClient<runtime.Types.Result.GetResult<Prisma.$WebAuthnCredentialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends WebAuthnCredentialCreateManyArgs>(args?: Prisma.SelectSubset<T, WebAuthnCredentialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends WebAuthnCredentialCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, WebAuthnCredentialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WebAuthnCredentialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends WebAuthnCredentialDeleteArgs>(args: Prisma.SelectSubset<T, WebAuthnCredentialDeleteArgs<ExtArgs>>): Prisma.Prisma__WebAuthnCredentialClient<runtime.Types.Result.GetResult<Prisma.$WebAuthnCredentialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends WebAuthnCredentialUpdateArgs>(args: Prisma.SelectSubset<T, WebAuthnCredentialUpdateArgs<ExtArgs>>): Prisma.Prisma__WebAuthnCredentialClient<runtime.Types.Result.GetResult<Prisma.$WebAuthnCredentialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends WebAuthnCredentialDeleteManyArgs>(args?: Prisma.SelectSubset<T, WebAuthnCredentialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends WebAuthnCredentialUpdateManyArgs>(args: Prisma.SelectSubset<T, WebAuthnCredentialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends WebAuthnCredentialUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, WebAuthnCredentialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WebAuthnCredentialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends WebAuthnCredentialUpsertArgs>(args: Prisma.SelectSubset<T, WebAuthnCredentialUpsertArgs<ExtArgs>>): Prisma.Prisma__WebAuthnCredentialClient<runtime.Types.Result.GetResult<Prisma.$WebAuthnCredentialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends WebAuthnCredentialCountArgs>(args?: Prisma.Subset<T, WebAuthnCredentialCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WebAuthnCredentialCountAggregateOutputType> : number>;
    aggregate<T extends WebAuthnCredentialAggregateArgs>(args: Prisma.Subset<T, WebAuthnCredentialAggregateArgs>): Prisma.PrismaPromise<GetWebAuthnCredentialAggregateType<T>>;
    groupBy<T extends WebAuthnCredentialGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: WebAuthnCredentialGroupByArgs['orderBy'];
    } : {
        orderBy?: WebAuthnCredentialGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, WebAuthnCredentialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebAuthnCredentialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: WebAuthnCredentialFieldRefs;
}
export interface Prisma__WebAuthnCredentialClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface WebAuthnCredentialFieldRefs {
    readonly id: Prisma.FieldRef<"WebAuthnCredential", 'String'>;
    readonly userId: Prisma.FieldRef<"WebAuthnCredential", 'String'>;
    readonly credentialId: Prisma.FieldRef<"WebAuthnCredential", 'String'>;
    readonly publicKey: Prisma.FieldRef<"WebAuthnCredential", 'String'>;
    readonly signCount: Prisma.FieldRef<"WebAuthnCredential", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"WebAuthnCredential", 'DateTime'>;
    readonly lastUsedAt: Prisma.FieldRef<"WebAuthnCredential", 'DateTime'>;
}
export type WebAuthnCredentialFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WebAuthnCredentialSelect<ExtArgs> | null;
    omit?: Prisma.WebAuthnCredentialOmit<ExtArgs> | null;
    include?: Prisma.WebAuthnCredentialInclude<ExtArgs> | null;
    where: Prisma.WebAuthnCredentialWhereUniqueInput;
};
export type WebAuthnCredentialFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WebAuthnCredentialSelect<ExtArgs> | null;
    omit?: Prisma.WebAuthnCredentialOmit<ExtArgs> | null;
    include?: Prisma.WebAuthnCredentialInclude<ExtArgs> | null;
    where: Prisma.WebAuthnCredentialWhereUniqueInput;
};
export type WebAuthnCredentialFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WebAuthnCredentialSelect<ExtArgs> | null;
    omit?: Prisma.WebAuthnCredentialOmit<ExtArgs> | null;
    include?: Prisma.WebAuthnCredentialInclude<ExtArgs> | null;
    where?: Prisma.WebAuthnCredentialWhereInput;
    orderBy?: Prisma.WebAuthnCredentialOrderByWithRelationInput | Prisma.WebAuthnCredentialOrderByWithRelationInput[];
    cursor?: Prisma.WebAuthnCredentialWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WebAuthnCredentialScalarFieldEnum | Prisma.WebAuthnCredentialScalarFieldEnum[];
};
export type WebAuthnCredentialFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WebAuthnCredentialSelect<ExtArgs> | null;
    omit?: Prisma.WebAuthnCredentialOmit<ExtArgs> | null;
    include?: Prisma.WebAuthnCredentialInclude<ExtArgs> | null;
    where?: Prisma.WebAuthnCredentialWhereInput;
    orderBy?: Prisma.WebAuthnCredentialOrderByWithRelationInput | Prisma.WebAuthnCredentialOrderByWithRelationInput[];
    cursor?: Prisma.WebAuthnCredentialWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WebAuthnCredentialScalarFieldEnum | Prisma.WebAuthnCredentialScalarFieldEnum[];
};
export type WebAuthnCredentialFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WebAuthnCredentialSelect<ExtArgs> | null;
    omit?: Prisma.WebAuthnCredentialOmit<ExtArgs> | null;
    include?: Prisma.WebAuthnCredentialInclude<ExtArgs> | null;
    where?: Prisma.WebAuthnCredentialWhereInput;
    orderBy?: Prisma.WebAuthnCredentialOrderByWithRelationInput | Prisma.WebAuthnCredentialOrderByWithRelationInput[];
    cursor?: Prisma.WebAuthnCredentialWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WebAuthnCredentialScalarFieldEnum | Prisma.WebAuthnCredentialScalarFieldEnum[];
};
export type WebAuthnCredentialCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WebAuthnCredentialSelect<ExtArgs> | null;
    omit?: Prisma.WebAuthnCredentialOmit<ExtArgs> | null;
    include?: Prisma.WebAuthnCredentialInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WebAuthnCredentialCreateInput, Prisma.WebAuthnCredentialUncheckedCreateInput>;
};
export type WebAuthnCredentialCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.WebAuthnCredentialCreateManyInput | Prisma.WebAuthnCredentialCreateManyInput[];
    skipDuplicates?: boolean;
};
export type WebAuthnCredentialCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WebAuthnCredentialSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WebAuthnCredentialOmit<ExtArgs> | null;
    data: Prisma.WebAuthnCredentialCreateManyInput | Prisma.WebAuthnCredentialCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.WebAuthnCredentialIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type WebAuthnCredentialUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WebAuthnCredentialSelect<ExtArgs> | null;
    omit?: Prisma.WebAuthnCredentialOmit<ExtArgs> | null;
    include?: Prisma.WebAuthnCredentialInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WebAuthnCredentialUpdateInput, Prisma.WebAuthnCredentialUncheckedUpdateInput>;
    where: Prisma.WebAuthnCredentialWhereUniqueInput;
};
export type WebAuthnCredentialUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.WebAuthnCredentialUpdateManyMutationInput, Prisma.WebAuthnCredentialUncheckedUpdateManyInput>;
    where?: Prisma.WebAuthnCredentialWhereInput;
    limit?: number;
};
export type WebAuthnCredentialUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WebAuthnCredentialSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WebAuthnCredentialOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WebAuthnCredentialUpdateManyMutationInput, Prisma.WebAuthnCredentialUncheckedUpdateManyInput>;
    where?: Prisma.WebAuthnCredentialWhereInput;
    limit?: number;
    include?: Prisma.WebAuthnCredentialIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type WebAuthnCredentialUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WebAuthnCredentialSelect<ExtArgs> | null;
    omit?: Prisma.WebAuthnCredentialOmit<ExtArgs> | null;
    include?: Prisma.WebAuthnCredentialInclude<ExtArgs> | null;
    where: Prisma.WebAuthnCredentialWhereUniqueInput;
    create: Prisma.XOR<Prisma.WebAuthnCredentialCreateInput, Prisma.WebAuthnCredentialUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.WebAuthnCredentialUpdateInput, Prisma.WebAuthnCredentialUncheckedUpdateInput>;
};
export type WebAuthnCredentialDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WebAuthnCredentialSelect<ExtArgs> | null;
    omit?: Prisma.WebAuthnCredentialOmit<ExtArgs> | null;
    include?: Prisma.WebAuthnCredentialInclude<ExtArgs> | null;
    where: Prisma.WebAuthnCredentialWhereUniqueInput;
};
export type WebAuthnCredentialDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WebAuthnCredentialWhereInput;
    limit?: number;
};
export type WebAuthnCredentialDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WebAuthnCredentialSelect<ExtArgs> | null;
    omit?: Prisma.WebAuthnCredentialOmit<ExtArgs> | null;
    include?: Prisma.WebAuthnCredentialInclude<ExtArgs> | null;
};
export {};
