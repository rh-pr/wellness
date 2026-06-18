import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type WebAuthnChallengeModel = runtime.Types.Result.DefaultSelection<Prisma.$WebAuthnChallengePayload>;
export type AggregateWebAuthnChallenge = {
    _count: WebAuthnChallengeCountAggregateOutputType | null;
    _min: WebAuthnChallengeMinAggregateOutputType | null;
    _max: WebAuthnChallengeMaxAggregateOutputType | null;
};
export type WebAuthnChallengeMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    type: string | null;
    challenge: string | null;
    createdAt: Date | null;
    expireAt: Date | null;
};
export type WebAuthnChallengeMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    type: string | null;
    challenge: string | null;
    createdAt: Date | null;
    expireAt: Date | null;
};
export type WebAuthnChallengeCountAggregateOutputType = {
    id: number;
    userId: number;
    type: number;
    challenge: number;
    createdAt: number;
    expireAt: number;
    _all: number;
};
export type WebAuthnChallengeMinAggregateInputType = {
    id?: true;
    userId?: true;
    type?: true;
    challenge?: true;
    createdAt?: true;
    expireAt?: true;
};
export type WebAuthnChallengeMaxAggregateInputType = {
    id?: true;
    userId?: true;
    type?: true;
    challenge?: true;
    createdAt?: true;
    expireAt?: true;
};
export type WebAuthnChallengeCountAggregateInputType = {
    id?: true;
    userId?: true;
    type?: true;
    challenge?: true;
    createdAt?: true;
    expireAt?: true;
    _all?: true;
};
export type WebAuthnChallengeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WebAuthnChallengeWhereInput;
    orderBy?: Prisma.WebAuthnChallengeOrderByWithRelationInput | Prisma.WebAuthnChallengeOrderByWithRelationInput[];
    cursor?: Prisma.WebAuthnChallengeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | WebAuthnChallengeCountAggregateInputType;
    _min?: WebAuthnChallengeMinAggregateInputType;
    _max?: WebAuthnChallengeMaxAggregateInputType;
};
export type GetWebAuthnChallengeAggregateType<T extends WebAuthnChallengeAggregateArgs> = {
    [P in keyof T & keyof AggregateWebAuthnChallenge]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWebAuthnChallenge[P]> : Prisma.GetScalarType<T[P], AggregateWebAuthnChallenge[P]>;
};
export type WebAuthnChallengeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WebAuthnChallengeWhereInput;
    orderBy?: Prisma.WebAuthnChallengeOrderByWithAggregationInput | Prisma.WebAuthnChallengeOrderByWithAggregationInput[];
    by: Prisma.WebAuthnChallengeScalarFieldEnum[] | Prisma.WebAuthnChallengeScalarFieldEnum;
    having?: Prisma.WebAuthnChallengeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WebAuthnChallengeCountAggregateInputType | true;
    _min?: WebAuthnChallengeMinAggregateInputType;
    _max?: WebAuthnChallengeMaxAggregateInputType;
};
export type WebAuthnChallengeGroupByOutputType = {
    id: string;
    userId: string;
    type: string;
    challenge: string;
    createdAt: Date;
    expireAt: Date;
    _count: WebAuthnChallengeCountAggregateOutputType | null;
    _min: WebAuthnChallengeMinAggregateOutputType | null;
    _max: WebAuthnChallengeMaxAggregateOutputType | null;
};
type GetWebAuthnChallengeGroupByPayload<T extends WebAuthnChallengeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WebAuthnChallengeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WebAuthnChallengeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WebAuthnChallengeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WebAuthnChallengeGroupByOutputType[P]>;
}>>;
export type WebAuthnChallengeWhereInput = {
    AND?: Prisma.WebAuthnChallengeWhereInput | Prisma.WebAuthnChallengeWhereInput[];
    OR?: Prisma.WebAuthnChallengeWhereInput[];
    NOT?: Prisma.WebAuthnChallengeWhereInput | Prisma.WebAuthnChallengeWhereInput[];
    id?: Prisma.StringFilter<"WebAuthnChallenge"> | string;
    userId?: Prisma.StringFilter<"WebAuthnChallenge"> | string;
    type?: Prisma.StringFilter<"WebAuthnChallenge"> | string;
    challenge?: Prisma.StringFilter<"WebAuthnChallenge"> | string;
    createdAt?: Prisma.DateTimeFilter<"WebAuthnChallenge"> | Date | string;
    expireAt?: Prisma.DateTimeFilter<"WebAuthnChallenge"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type WebAuthnChallengeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    challenge?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    expireAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type WebAuthnChallengeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.WebAuthnChallengeWhereInput | Prisma.WebAuthnChallengeWhereInput[];
    OR?: Prisma.WebAuthnChallengeWhereInput[];
    NOT?: Prisma.WebAuthnChallengeWhereInput | Prisma.WebAuthnChallengeWhereInput[];
    userId?: Prisma.StringFilter<"WebAuthnChallenge"> | string;
    type?: Prisma.StringFilter<"WebAuthnChallenge"> | string;
    challenge?: Prisma.StringFilter<"WebAuthnChallenge"> | string;
    createdAt?: Prisma.DateTimeFilter<"WebAuthnChallenge"> | Date | string;
    expireAt?: Prisma.DateTimeFilter<"WebAuthnChallenge"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type WebAuthnChallengeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    challenge?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    expireAt?: Prisma.SortOrder;
    _count?: Prisma.WebAuthnChallengeCountOrderByAggregateInput;
    _max?: Prisma.WebAuthnChallengeMaxOrderByAggregateInput;
    _min?: Prisma.WebAuthnChallengeMinOrderByAggregateInput;
};
export type WebAuthnChallengeScalarWhereWithAggregatesInput = {
    AND?: Prisma.WebAuthnChallengeScalarWhereWithAggregatesInput | Prisma.WebAuthnChallengeScalarWhereWithAggregatesInput[];
    OR?: Prisma.WebAuthnChallengeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.WebAuthnChallengeScalarWhereWithAggregatesInput | Prisma.WebAuthnChallengeScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"WebAuthnChallenge"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"WebAuthnChallenge"> | string;
    type?: Prisma.StringWithAggregatesFilter<"WebAuthnChallenge"> | string;
    challenge?: Prisma.StringWithAggregatesFilter<"WebAuthnChallenge"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"WebAuthnChallenge"> | Date | string;
    expireAt?: Prisma.DateTimeWithAggregatesFilter<"WebAuthnChallenge"> | Date | string;
};
export type WebAuthnChallengeCreateInput = {
    id?: string;
    type: string;
    challenge: string;
    createdAt?: Date | string;
    expireAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutWebAuthnChallengesInput;
};
export type WebAuthnChallengeUncheckedCreateInput = {
    id?: string;
    userId: string;
    type: string;
    challenge: string;
    createdAt?: Date | string;
    expireAt?: Date | string;
};
export type WebAuthnChallengeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    challenge?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expireAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutWebAuthnChallengesNestedInput;
};
export type WebAuthnChallengeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    challenge?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expireAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WebAuthnChallengeCreateManyInput = {
    id?: string;
    userId: string;
    type: string;
    challenge: string;
    createdAt?: Date | string;
    expireAt?: Date | string;
};
export type WebAuthnChallengeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    challenge?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expireAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WebAuthnChallengeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    challenge?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expireAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WebAuthnChallengeListRelationFilter = {
    every?: Prisma.WebAuthnChallengeWhereInput;
    some?: Prisma.WebAuthnChallengeWhereInput;
    none?: Prisma.WebAuthnChallengeWhereInput;
};
export type WebAuthnChallengeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type WebAuthnChallengeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    challenge?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    expireAt?: Prisma.SortOrder;
};
export type WebAuthnChallengeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    challenge?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    expireAt?: Prisma.SortOrder;
};
export type WebAuthnChallengeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    challenge?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    expireAt?: Prisma.SortOrder;
};
export type WebAuthnChallengeCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.WebAuthnChallengeCreateWithoutUserInput, Prisma.WebAuthnChallengeUncheckedCreateWithoutUserInput> | Prisma.WebAuthnChallengeCreateWithoutUserInput[] | Prisma.WebAuthnChallengeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.WebAuthnChallengeCreateOrConnectWithoutUserInput | Prisma.WebAuthnChallengeCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.WebAuthnChallengeCreateManyUserInputEnvelope;
    connect?: Prisma.WebAuthnChallengeWhereUniqueInput | Prisma.WebAuthnChallengeWhereUniqueInput[];
};
export type WebAuthnChallengeUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.WebAuthnChallengeCreateWithoutUserInput, Prisma.WebAuthnChallengeUncheckedCreateWithoutUserInput> | Prisma.WebAuthnChallengeCreateWithoutUserInput[] | Prisma.WebAuthnChallengeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.WebAuthnChallengeCreateOrConnectWithoutUserInput | Prisma.WebAuthnChallengeCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.WebAuthnChallengeCreateManyUserInputEnvelope;
    connect?: Prisma.WebAuthnChallengeWhereUniqueInput | Prisma.WebAuthnChallengeWhereUniqueInput[];
};
export type WebAuthnChallengeUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.WebAuthnChallengeCreateWithoutUserInput, Prisma.WebAuthnChallengeUncheckedCreateWithoutUserInput> | Prisma.WebAuthnChallengeCreateWithoutUserInput[] | Prisma.WebAuthnChallengeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.WebAuthnChallengeCreateOrConnectWithoutUserInput | Prisma.WebAuthnChallengeCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.WebAuthnChallengeUpsertWithWhereUniqueWithoutUserInput | Prisma.WebAuthnChallengeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.WebAuthnChallengeCreateManyUserInputEnvelope;
    set?: Prisma.WebAuthnChallengeWhereUniqueInput | Prisma.WebAuthnChallengeWhereUniqueInput[];
    disconnect?: Prisma.WebAuthnChallengeWhereUniqueInput | Prisma.WebAuthnChallengeWhereUniqueInput[];
    delete?: Prisma.WebAuthnChallengeWhereUniqueInput | Prisma.WebAuthnChallengeWhereUniqueInput[];
    connect?: Prisma.WebAuthnChallengeWhereUniqueInput | Prisma.WebAuthnChallengeWhereUniqueInput[];
    update?: Prisma.WebAuthnChallengeUpdateWithWhereUniqueWithoutUserInput | Prisma.WebAuthnChallengeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.WebAuthnChallengeUpdateManyWithWhereWithoutUserInput | Prisma.WebAuthnChallengeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.WebAuthnChallengeScalarWhereInput | Prisma.WebAuthnChallengeScalarWhereInput[];
};
export type WebAuthnChallengeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.WebAuthnChallengeCreateWithoutUserInput, Prisma.WebAuthnChallengeUncheckedCreateWithoutUserInput> | Prisma.WebAuthnChallengeCreateWithoutUserInput[] | Prisma.WebAuthnChallengeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.WebAuthnChallengeCreateOrConnectWithoutUserInput | Prisma.WebAuthnChallengeCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.WebAuthnChallengeUpsertWithWhereUniqueWithoutUserInput | Prisma.WebAuthnChallengeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.WebAuthnChallengeCreateManyUserInputEnvelope;
    set?: Prisma.WebAuthnChallengeWhereUniqueInput | Prisma.WebAuthnChallengeWhereUniqueInput[];
    disconnect?: Prisma.WebAuthnChallengeWhereUniqueInput | Prisma.WebAuthnChallengeWhereUniqueInput[];
    delete?: Prisma.WebAuthnChallengeWhereUniqueInput | Prisma.WebAuthnChallengeWhereUniqueInput[];
    connect?: Prisma.WebAuthnChallengeWhereUniqueInput | Prisma.WebAuthnChallengeWhereUniqueInput[];
    update?: Prisma.WebAuthnChallengeUpdateWithWhereUniqueWithoutUserInput | Prisma.WebAuthnChallengeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.WebAuthnChallengeUpdateManyWithWhereWithoutUserInput | Prisma.WebAuthnChallengeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.WebAuthnChallengeScalarWhereInput | Prisma.WebAuthnChallengeScalarWhereInput[];
};
export type WebAuthnChallengeCreateWithoutUserInput = {
    id?: string;
    type: string;
    challenge: string;
    createdAt?: Date | string;
    expireAt?: Date | string;
};
export type WebAuthnChallengeUncheckedCreateWithoutUserInput = {
    id?: string;
    type: string;
    challenge: string;
    createdAt?: Date | string;
    expireAt?: Date | string;
};
export type WebAuthnChallengeCreateOrConnectWithoutUserInput = {
    where: Prisma.WebAuthnChallengeWhereUniqueInput;
    create: Prisma.XOR<Prisma.WebAuthnChallengeCreateWithoutUserInput, Prisma.WebAuthnChallengeUncheckedCreateWithoutUserInput>;
};
export type WebAuthnChallengeCreateManyUserInputEnvelope = {
    data: Prisma.WebAuthnChallengeCreateManyUserInput | Prisma.WebAuthnChallengeCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type WebAuthnChallengeUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.WebAuthnChallengeWhereUniqueInput;
    update: Prisma.XOR<Prisma.WebAuthnChallengeUpdateWithoutUserInput, Prisma.WebAuthnChallengeUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.WebAuthnChallengeCreateWithoutUserInput, Prisma.WebAuthnChallengeUncheckedCreateWithoutUserInput>;
};
export type WebAuthnChallengeUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.WebAuthnChallengeWhereUniqueInput;
    data: Prisma.XOR<Prisma.WebAuthnChallengeUpdateWithoutUserInput, Prisma.WebAuthnChallengeUncheckedUpdateWithoutUserInput>;
};
export type WebAuthnChallengeUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.WebAuthnChallengeScalarWhereInput;
    data: Prisma.XOR<Prisma.WebAuthnChallengeUpdateManyMutationInput, Prisma.WebAuthnChallengeUncheckedUpdateManyWithoutUserInput>;
};
export type WebAuthnChallengeScalarWhereInput = {
    AND?: Prisma.WebAuthnChallengeScalarWhereInput | Prisma.WebAuthnChallengeScalarWhereInput[];
    OR?: Prisma.WebAuthnChallengeScalarWhereInput[];
    NOT?: Prisma.WebAuthnChallengeScalarWhereInput | Prisma.WebAuthnChallengeScalarWhereInput[];
    id?: Prisma.StringFilter<"WebAuthnChallenge"> | string;
    userId?: Prisma.StringFilter<"WebAuthnChallenge"> | string;
    type?: Prisma.StringFilter<"WebAuthnChallenge"> | string;
    challenge?: Prisma.StringFilter<"WebAuthnChallenge"> | string;
    createdAt?: Prisma.DateTimeFilter<"WebAuthnChallenge"> | Date | string;
    expireAt?: Prisma.DateTimeFilter<"WebAuthnChallenge"> | Date | string;
};
export type WebAuthnChallengeCreateManyUserInput = {
    id?: string;
    type: string;
    challenge: string;
    createdAt?: Date | string;
    expireAt?: Date | string;
};
export type WebAuthnChallengeUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    challenge?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expireAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WebAuthnChallengeUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    challenge?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expireAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WebAuthnChallengeUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    challenge?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expireAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WebAuthnChallengeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    type?: boolean;
    challenge?: boolean;
    createdAt?: boolean;
    expireAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["webAuthnChallenge"]>;
export type WebAuthnChallengeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    type?: boolean;
    challenge?: boolean;
    createdAt?: boolean;
    expireAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["webAuthnChallenge"]>;
export type WebAuthnChallengeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    type?: boolean;
    challenge?: boolean;
    createdAt?: boolean;
    expireAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["webAuthnChallenge"]>;
export type WebAuthnChallengeSelectScalar = {
    id?: boolean;
    userId?: boolean;
    type?: boolean;
    challenge?: boolean;
    createdAt?: boolean;
    expireAt?: boolean;
};
export type WebAuthnChallengeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "type" | "challenge" | "createdAt" | "expireAt", ExtArgs["result"]["webAuthnChallenge"]>;
export type WebAuthnChallengeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type WebAuthnChallengeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type WebAuthnChallengeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $WebAuthnChallengePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "WebAuthnChallenge";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        type: string;
        challenge: string;
        createdAt: Date;
        expireAt: Date;
    }, ExtArgs["result"]["webAuthnChallenge"]>;
    composites: {};
};
export type WebAuthnChallengeGetPayload<S extends boolean | null | undefined | WebAuthnChallengeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$WebAuthnChallengePayload, S>;
export type WebAuthnChallengeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<WebAuthnChallengeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WebAuthnChallengeCountAggregateInputType | true;
};
export interface WebAuthnChallengeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['WebAuthnChallenge'];
        meta: {
            name: 'WebAuthnChallenge';
        };
    };
    findUnique<T extends WebAuthnChallengeFindUniqueArgs>(args: Prisma.SelectSubset<T, WebAuthnChallengeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__WebAuthnChallengeClient<runtime.Types.Result.GetResult<Prisma.$WebAuthnChallengePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends WebAuthnChallengeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, WebAuthnChallengeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__WebAuthnChallengeClient<runtime.Types.Result.GetResult<Prisma.$WebAuthnChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends WebAuthnChallengeFindFirstArgs>(args?: Prisma.SelectSubset<T, WebAuthnChallengeFindFirstArgs<ExtArgs>>): Prisma.Prisma__WebAuthnChallengeClient<runtime.Types.Result.GetResult<Prisma.$WebAuthnChallengePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends WebAuthnChallengeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, WebAuthnChallengeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__WebAuthnChallengeClient<runtime.Types.Result.GetResult<Prisma.$WebAuthnChallengePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends WebAuthnChallengeFindManyArgs>(args?: Prisma.SelectSubset<T, WebAuthnChallengeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WebAuthnChallengePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends WebAuthnChallengeCreateArgs>(args: Prisma.SelectSubset<T, WebAuthnChallengeCreateArgs<ExtArgs>>): Prisma.Prisma__WebAuthnChallengeClient<runtime.Types.Result.GetResult<Prisma.$WebAuthnChallengePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends WebAuthnChallengeCreateManyArgs>(args?: Prisma.SelectSubset<T, WebAuthnChallengeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends WebAuthnChallengeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, WebAuthnChallengeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WebAuthnChallengePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends WebAuthnChallengeDeleteArgs>(args: Prisma.SelectSubset<T, WebAuthnChallengeDeleteArgs<ExtArgs>>): Prisma.Prisma__WebAuthnChallengeClient<runtime.Types.Result.GetResult<Prisma.$WebAuthnChallengePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends WebAuthnChallengeUpdateArgs>(args: Prisma.SelectSubset<T, WebAuthnChallengeUpdateArgs<ExtArgs>>): Prisma.Prisma__WebAuthnChallengeClient<runtime.Types.Result.GetResult<Prisma.$WebAuthnChallengePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends WebAuthnChallengeDeleteManyArgs>(args?: Prisma.SelectSubset<T, WebAuthnChallengeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends WebAuthnChallengeUpdateManyArgs>(args: Prisma.SelectSubset<T, WebAuthnChallengeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends WebAuthnChallengeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, WebAuthnChallengeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WebAuthnChallengePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends WebAuthnChallengeUpsertArgs>(args: Prisma.SelectSubset<T, WebAuthnChallengeUpsertArgs<ExtArgs>>): Prisma.Prisma__WebAuthnChallengeClient<runtime.Types.Result.GetResult<Prisma.$WebAuthnChallengePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends WebAuthnChallengeCountArgs>(args?: Prisma.Subset<T, WebAuthnChallengeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WebAuthnChallengeCountAggregateOutputType> : number>;
    aggregate<T extends WebAuthnChallengeAggregateArgs>(args: Prisma.Subset<T, WebAuthnChallengeAggregateArgs>): Prisma.PrismaPromise<GetWebAuthnChallengeAggregateType<T>>;
    groupBy<T extends WebAuthnChallengeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: WebAuthnChallengeGroupByArgs['orderBy'];
    } : {
        orderBy?: WebAuthnChallengeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, WebAuthnChallengeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebAuthnChallengeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: WebAuthnChallengeFieldRefs;
}
export interface Prisma__WebAuthnChallengeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface WebAuthnChallengeFieldRefs {
    readonly id: Prisma.FieldRef<"WebAuthnChallenge", 'String'>;
    readonly userId: Prisma.FieldRef<"WebAuthnChallenge", 'String'>;
    readonly type: Prisma.FieldRef<"WebAuthnChallenge", 'String'>;
    readonly challenge: Prisma.FieldRef<"WebAuthnChallenge", 'String'>;
    readonly createdAt: Prisma.FieldRef<"WebAuthnChallenge", 'DateTime'>;
    readonly expireAt: Prisma.FieldRef<"WebAuthnChallenge", 'DateTime'>;
}
export type WebAuthnChallengeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WebAuthnChallengeSelect<ExtArgs> | null;
    omit?: Prisma.WebAuthnChallengeOmit<ExtArgs> | null;
    include?: Prisma.WebAuthnChallengeInclude<ExtArgs> | null;
    where: Prisma.WebAuthnChallengeWhereUniqueInput;
};
export type WebAuthnChallengeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WebAuthnChallengeSelect<ExtArgs> | null;
    omit?: Prisma.WebAuthnChallengeOmit<ExtArgs> | null;
    include?: Prisma.WebAuthnChallengeInclude<ExtArgs> | null;
    where: Prisma.WebAuthnChallengeWhereUniqueInput;
};
export type WebAuthnChallengeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WebAuthnChallengeSelect<ExtArgs> | null;
    omit?: Prisma.WebAuthnChallengeOmit<ExtArgs> | null;
    include?: Prisma.WebAuthnChallengeInclude<ExtArgs> | null;
    where?: Prisma.WebAuthnChallengeWhereInput;
    orderBy?: Prisma.WebAuthnChallengeOrderByWithRelationInput | Prisma.WebAuthnChallengeOrderByWithRelationInput[];
    cursor?: Prisma.WebAuthnChallengeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WebAuthnChallengeScalarFieldEnum | Prisma.WebAuthnChallengeScalarFieldEnum[];
};
export type WebAuthnChallengeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WebAuthnChallengeSelect<ExtArgs> | null;
    omit?: Prisma.WebAuthnChallengeOmit<ExtArgs> | null;
    include?: Prisma.WebAuthnChallengeInclude<ExtArgs> | null;
    where?: Prisma.WebAuthnChallengeWhereInput;
    orderBy?: Prisma.WebAuthnChallengeOrderByWithRelationInput | Prisma.WebAuthnChallengeOrderByWithRelationInput[];
    cursor?: Prisma.WebAuthnChallengeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WebAuthnChallengeScalarFieldEnum | Prisma.WebAuthnChallengeScalarFieldEnum[];
};
export type WebAuthnChallengeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WebAuthnChallengeSelect<ExtArgs> | null;
    omit?: Prisma.WebAuthnChallengeOmit<ExtArgs> | null;
    include?: Prisma.WebAuthnChallengeInclude<ExtArgs> | null;
    where?: Prisma.WebAuthnChallengeWhereInput;
    orderBy?: Prisma.WebAuthnChallengeOrderByWithRelationInput | Prisma.WebAuthnChallengeOrderByWithRelationInput[];
    cursor?: Prisma.WebAuthnChallengeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WebAuthnChallengeScalarFieldEnum | Prisma.WebAuthnChallengeScalarFieldEnum[];
};
export type WebAuthnChallengeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WebAuthnChallengeSelect<ExtArgs> | null;
    omit?: Prisma.WebAuthnChallengeOmit<ExtArgs> | null;
    include?: Prisma.WebAuthnChallengeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WebAuthnChallengeCreateInput, Prisma.WebAuthnChallengeUncheckedCreateInput>;
};
export type WebAuthnChallengeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.WebAuthnChallengeCreateManyInput | Prisma.WebAuthnChallengeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type WebAuthnChallengeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WebAuthnChallengeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WebAuthnChallengeOmit<ExtArgs> | null;
    data: Prisma.WebAuthnChallengeCreateManyInput | Prisma.WebAuthnChallengeCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.WebAuthnChallengeIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type WebAuthnChallengeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WebAuthnChallengeSelect<ExtArgs> | null;
    omit?: Prisma.WebAuthnChallengeOmit<ExtArgs> | null;
    include?: Prisma.WebAuthnChallengeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WebAuthnChallengeUpdateInput, Prisma.WebAuthnChallengeUncheckedUpdateInput>;
    where: Prisma.WebAuthnChallengeWhereUniqueInput;
};
export type WebAuthnChallengeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.WebAuthnChallengeUpdateManyMutationInput, Prisma.WebAuthnChallengeUncheckedUpdateManyInput>;
    where?: Prisma.WebAuthnChallengeWhereInput;
    limit?: number;
};
export type WebAuthnChallengeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WebAuthnChallengeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WebAuthnChallengeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WebAuthnChallengeUpdateManyMutationInput, Prisma.WebAuthnChallengeUncheckedUpdateManyInput>;
    where?: Prisma.WebAuthnChallengeWhereInput;
    limit?: number;
    include?: Prisma.WebAuthnChallengeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type WebAuthnChallengeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WebAuthnChallengeSelect<ExtArgs> | null;
    omit?: Prisma.WebAuthnChallengeOmit<ExtArgs> | null;
    include?: Prisma.WebAuthnChallengeInclude<ExtArgs> | null;
    where: Prisma.WebAuthnChallengeWhereUniqueInput;
    create: Prisma.XOR<Prisma.WebAuthnChallengeCreateInput, Prisma.WebAuthnChallengeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.WebAuthnChallengeUpdateInput, Prisma.WebAuthnChallengeUncheckedUpdateInput>;
};
export type WebAuthnChallengeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WebAuthnChallengeSelect<ExtArgs> | null;
    omit?: Prisma.WebAuthnChallengeOmit<ExtArgs> | null;
    include?: Prisma.WebAuthnChallengeInclude<ExtArgs> | null;
    where: Prisma.WebAuthnChallengeWhereUniqueInput;
};
export type WebAuthnChallengeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WebAuthnChallengeWhereInput;
    limit?: number;
};
export type WebAuthnChallengeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WebAuthnChallengeSelect<ExtArgs> | null;
    omit?: Prisma.WebAuthnChallengeOmit<ExtArgs> | null;
    include?: Prisma.WebAuthnChallengeInclude<ExtArgs> | null;
};
export {};
