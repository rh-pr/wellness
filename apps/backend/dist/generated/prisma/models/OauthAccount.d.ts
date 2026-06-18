import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type OauthAccountModel = runtime.Types.Result.DefaultSelection<Prisma.$OauthAccountPayload>;
export type AggregateOauthAccount = {
    _count: OauthAccountCountAggregateOutputType | null;
    _avg: OauthAccountAvgAggregateOutputType | null;
    _sum: OauthAccountSumAggregateOutputType | null;
    _min: OauthAccountMinAggregateOutputType | null;
    _max: OauthAccountMaxAggregateOutputType | null;
};
export type OauthAccountAvgAggregateOutputType = {
    expiresAt: number | null;
};
export type OauthAccountSumAggregateOutputType = {
    expiresAt: number | null;
};
export type OauthAccountMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    provider: string | null;
    providerAccountId: string | null;
    accessToken: string | null;
    refreshToken: string | null;
    expiresAt: number | null;
    tokenType: string | null;
};
export type OauthAccountMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    provider: string | null;
    providerAccountId: string | null;
    accessToken: string | null;
    refreshToken: string | null;
    expiresAt: number | null;
    tokenType: string | null;
};
export type OauthAccountCountAggregateOutputType = {
    id: number;
    userId: number;
    provider: number;
    providerAccountId: number;
    accessToken: number;
    refreshToken: number;
    expiresAt: number;
    tokenType: number;
    _all: number;
};
export type OauthAccountAvgAggregateInputType = {
    expiresAt?: true;
};
export type OauthAccountSumAggregateInputType = {
    expiresAt?: true;
};
export type OauthAccountMinAggregateInputType = {
    id?: true;
    userId?: true;
    provider?: true;
    providerAccountId?: true;
    accessToken?: true;
    refreshToken?: true;
    expiresAt?: true;
    tokenType?: true;
};
export type OauthAccountMaxAggregateInputType = {
    id?: true;
    userId?: true;
    provider?: true;
    providerAccountId?: true;
    accessToken?: true;
    refreshToken?: true;
    expiresAt?: true;
    tokenType?: true;
};
export type OauthAccountCountAggregateInputType = {
    id?: true;
    userId?: true;
    provider?: true;
    providerAccountId?: true;
    accessToken?: true;
    refreshToken?: true;
    expiresAt?: true;
    tokenType?: true;
    _all?: true;
};
export type OauthAccountAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OauthAccountWhereInput;
    orderBy?: Prisma.OauthAccountOrderByWithRelationInput | Prisma.OauthAccountOrderByWithRelationInput[];
    cursor?: Prisma.OauthAccountWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OauthAccountCountAggregateInputType;
    _avg?: OauthAccountAvgAggregateInputType;
    _sum?: OauthAccountSumAggregateInputType;
    _min?: OauthAccountMinAggregateInputType;
    _max?: OauthAccountMaxAggregateInputType;
};
export type GetOauthAccountAggregateType<T extends OauthAccountAggregateArgs> = {
    [P in keyof T & keyof AggregateOauthAccount]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOauthAccount[P]> : Prisma.GetScalarType<T[P], AggregateOauthAccount[P]>;
};
export type OauthAccountGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OauthAccountWhereInput;
    orderBy?: Prisma.OauthAccountOrderByWithAggregationInput | Prisma.OauthAccountOrderByWithAggregationInput[];
    by: Prisma.OauthAccountScalarFieldEnum[] | Prisma.OauthAccountScalarFieldEnum;
    having?: Prisma.OauthAccountScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OauthAccountCountAggregateInputType | true;
    _avg?: OauthAccountAvgAggregateInputType;
    _sum?: OauthAccountSumAggregateInputType;
    _min?: OauthAccountMinAggregateInputType;
    _max?: OauthAccountMaxAggregateInputType;
};
export type OauthAccountGroupByOutputType = {
    id: string;
    userId: string;
    provider: string;
    providerAccountId: string;
    accessToken: string | null;
    refreshToken: string | null;
    expiresAt: number | null;
    tokenType: string | null;
    _count: OauthAccountCountAggregateOutputType | null;
    _avg: OauthAccountAvgAggregateOutputType | null;
    _sum: OauthAccountSumAggregateOutputType | null;
    _min: OauthAccountMinAggregateOutputType | null;
    _max: OauthAccountMaxAggregateOutputType | null;
};
type GetOauthAccountGroupByPayload<T extends OauthAccountGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OauthAccountGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OauthAccountGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OauthAccountGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OauthAccountGroupByOutputType[P]>;
}>>;
export type OauthAccountWhereInput = {
    AND?: Prisma.OauthAccountWhereInput | Prisma.OauthAccountWhereInput[];
    OR?: Prisma.OauthAccountWhereInput[];
    NOT?: Prisma.OauthAccountWhereInput | Prisma.OauthAccountWhereInput[];
    id?: Prisma.StringFilter<"OauthAccount"> | string;
    userId?: Prisma.StringFilter<"OauthAccount"> | string;
    provider?: Prisma.StringFilter<"OauthAccount"> | string;
    providerAccountId?: Prisma.StringFilter<"OauthAccount"> | string;
    accessToken?: Prisma.StringNullableFilter<"OauthAccount"> | string | null;
    refreshToken?: Prisma.StringNullableFilter<"OauthAccount"> | string | null;
    expiresAt?: Prisma.IntNullableFilter<"OauthAccount"> | number | null;
    tokenType?: Prisma.StringNullableFilter<"OauthAccount"> | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type OauthAccountOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    providerAccountId?: Prisma.SortOrder;
    accessToken?: Prisma.SortOrderInput | Prisma.SortOrder;
    refreshToken?: Prisma.SortOrderInput | Prisma.SortOrder;
    expiresAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    tokenType?: Prisma.SortOrderInput | Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type OauthAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    provider_providerAccountId?: Prisma.OauthAccountProviderProviderAccountIdCompoundUniqueInput;
    userId_provider?: Prisma.OauthAccountUserIdProviderCompoundUniqueInput;
    AND?: Prisma.OauthAccountWhereInput | Prisma.OauthAccountWhereInput[];
    OR?: Prisma.OauthAccountWhereInput[];
    NOT?: Prisma.OauthAccountWhereInput | Prisma.OauthAccountWhereInput[];
    userId?: Prisma.StringFilter<"OauthAccount"> | string;
    provider?: Prisma.StringFilter<"OauthAccount"> | string;
    providerAccountId?: Prisma.StringFilter<"OauthAccount"> | string;
    accessToken?: Prisma.StringNullableFilter<"OauthAccount"> | string | null;
    refreshToken?: Prisma.StringNullableFilter<"OauthAccount"> | string | null;
    expiresAt?: Prisma.IntNullableFilter<"OauthAccount"> | number | null;
    tokenType?: Prisma.StringNullableFilter<"OauthAccount"> | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "provider_providerAccountId" | "userId_provider">;
export type OauthAccountOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    providerAccountId?: Prisma.SortOrder;
    accessToken?: Prisma.SortOrderInput | Prisma.SortOrder;
    refreshToken?: Prisma.SortOrderInput | Prisma.SortOrder;
    expiresAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    tokenType?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.OauthAccountCountOrderByAggregateInput;
    _avg?: Prisma.OauthAccountAvgOrderByAggregateInput;
    _max?: Prisma.OauthAccountMaxOrderByAggregateInput;
    _min?: Prisma.OauthAccountMinOrderByAggregateInput;
    _sum?: Prisma.OauthAccountSumOrderByAggregateInput;
};
export type OauthAccountScalarWhereWithAggregatesInput = {
    AND?: Prisma.OauthAccountScalarWhereWithAggregatesInput | Prisma.OauthAccountScalarWhereWithAggregatesInput[];
    OR?: Prisma.OauthAccountScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OauthAccountScalarWhereWithAggregatesInput | Prisma.OauthAccountScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"OauthAccount"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"OauthAccount"> | string;
    provider?: Prisma.StringWithAggregatesFilter<"OauthAccount"> | string;
    providerAccountId?: Prisma.StringWithAggregatesFilter<"OauthAccount"> | string;
    accessToken?: Prisma.StringNullableWithAggregatesFilter<"OauthAccount"> | string | null;
    refreshToken?: Prisma.StringNullableWithAggregatesFilter<"OauthAccount"> | string | null;
    expiresAt?: Prisma.IntNullableWithAggregatesFilter<"OauthAccount"> | number | null;
    tokenType?: Prisma.StringNullableWithAggregatesFilter<"OauthAccount"> | string | null;
};
export type OauthAccountCreateInput = {
    id?: string;
    provider: string;
    providerAccountId: string;
    accessToken?: string | null;
    refreshToken?: string | null;
    expiresAt?: number | null;
    tokenType?: string | null;
    user: Prisma.UserCreateNestedOneWithoutOauthAccountsInput;
};
export type OauthAccountUncheckedCreateInput = {
    id?: string;
    userId: string;
    provider: string;
    providerAccountId: string;
    accessToken?: string | null;
    refreshToken?: string | null;
    expiresAt?: number | null;
    tokenType?: string | null;
};
export type OauthAccountUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    providerAccountId?: Prisma.StringFieldUpdateOperationsInput | string;
    accessToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refreshToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expiresAt?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tokenType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutOauthAccountsNestedInput;
};
export type OauthAccountUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    providerAccountId?: Prisma.StringFieldUpdateOperationsInput | string;
    accessToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refreshToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expiresAt?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tokenType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type OauthAccountCreateManyInput = {
    id?: string;
    userId: string;
    provider: string;
    providerAccountId: string;
    accessToken?: string | null;
    refreshToken?: string | null;
    expiresAt?: number | null;
    tokenType?: string | null;
};
export type OauthAccountUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    providerAccountId?: Prisma.StringFieldUpdateOperationsInput | string;
    accessToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refreshToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expiresAt?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tokenType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type OauthAccountUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    providerAccountId?: Prisma.StringFieldUpdateOperationsInput | string;
    accessToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refreshToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expiresAt?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tokenType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type OauthAccountListRelationFilter = {
    every?: Prisma.OauthAccountWhereInput;
    some?: Prisma.OauthAccountWhereInput;
    none?: Prisma.OauthAccountWhereInput;
};
export type OauthAccountOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type OauthAccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string;
    providerAccountId: string;
};
export type OauthAccountUserIdProviderCompoundUniqueInput = {
    userId: string;
    provider: string;
};
export type OauthAccountCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    providerAccountId?: Prisma.SortOrder;
    accessToken?: Prisma.SortOrder;
    refreshToken?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    tokenType?: Prisma.SortOrder;
};
export type OauthAccountAvgOrderByAggregateInput = {
    expiresAt?: Prisma.SortOrder;
};
export type OauthAccountMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    providerAccountId?: Prisma.SortOrder;
    accessToken?: Prisma.SortOrder;
    refreshToken?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    tokenType?: Prisma.SortOrder;
};
export type OauthAccountMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    provider?: Prisma.SortOrder;
    providerAccountId?: Prisma.SortOrder;
    accessToken?: Prisma.SortOrder;
    refreshToken?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    tokenType?: Prisma.SortOrder;
};
export type OauthAccountSumOrderByAggregateInput = {
    expiresAt?: Prisma.SortOrder;
};
export type OauthAccountCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.OauthAccountCreateWithoutUserInput, Prisma.OauthAccountUncheckedCreateWithoutUserInput> | Prisma.OauthAccountCreateWithoutUserInput[] | Prisma.OauthAccountUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.OauthAccountCreateOrConnectWithoutUserInput | Prisma.OauthAccountCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.OauthAccountCreateManyUserInputEnvelope;
    connect?: Prisma.OauthAccountWhereUniqueInput | Prisma.OauthAccountWhereUniqueInput[];
};
export type OauthAccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.OauthAccountCreateWithoutUserInput, Prisma.OauthAccountUncheckedCreateWithoutUserInput> | Prisma.OauthAccountCreateWithoutUserInput[] | Prisma.OauthAccountUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.OauthAccountCreateOrConnectWithoutUserInput | Prisma.OauthAccountCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.OauthAccountCreateManyUserInputEnvelope;
    connect?: Prisma.OauthAccountWhereUniqueInput | Prisma.OauthAccountWhereUniqueInput[];
};
export type OauthAccountUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.OauthAccountCreateWithoutUserInput, Prisma.OauthAccountUncheckedCreateWithoutUserInput> | Prisma.OauthAccountCreateWithoutUserInput[] | Prisma.OauthAccountUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.OauthAccountCreateOrConnectWithoutUserInput | Prisma.OauthAccountCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.OauthAccountUpsertWithWhereUniqueWithoutUserInput | Prisma.OauthAccountUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.OauthAccountCreateManyUserInputEnvelope;
    set?: Prisma.OauthAccountWhereUniqueInput | Prisma.OauthAccountWhereUniqueInput[];
    disconnect?: Prisma.OauthAccountWhereUniqueInput | Prisma.OauthAccountWhereUniqueInput[];
    delete?: Prisma.OauthAccountWhereUniqueInput | Prisma.OauthAccountWhereUniqueInput[];
    connect?: Prisma.OauthAccountWhereUniqueInput | Prisma.OauthAccountWhereUniqueInput[];
    update?: Prisma.OauthAccountUpdateWithWhereUniqueWithoutUserInput | Prisma.OauthAccountUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.OauthAccountUpdateManyWithWhereWithoutUserInput | Prisma.OauthAccountUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.OauthAccountScalarWhereInput | Prisma.OauthAccountScalarWhereInput[];
};
export type OauthAccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.OauthAccountCreateWithoutUserInput, Prisma.OauthAccountUncheckedCreateWithoutUserInput> | Prisma.OauthAccountCreateWithoutUserInput[] | Prisma.OauthAccountUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.OauthAccountCreateOrConnectWithoutUserInput | Prisma.OauthAccountCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.OauthAccountUpsertWithWhereUniqueWithoutUserInput | Prisma.OauthAccountUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.OauthAccountCreateManyUserInputEnvelope;
    set?: Prisma.OauthAccountWhereUniqueInput | Prisma.OauthAccountWhereUniqueInput[];
    disconnect?: Prisma.OauthAccountWhereUniqueInput | Prisma.OauthAccountWhereUniqueInput[];
    delete?: Prisma.OauthAccountWhereUniqueInput | Prisma.OauthAccountWhereUniqueInput[];
    connect?: Prisma.OauthAccountWhereUniqueInput | Prisma.OauthAccountWhereUniqueInput[];
    update?: Prisma.OauthAccountUpdateWithWhereUniqueWithoutUserInput | Prisma.OauthAccountUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.OauthAccountUpdateManyWithWhereWithoutUserInput | Prisma.OauthAccountUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.OauthAccountScalarWhereInput | Prisma.OauthAccountScalarWhereInput[];
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type OauthAccountCreateWithoutUserInput = {
    id?: string;
    provider: string;
    providerAccountId: string;
    accessToken?: string | null;
    refreshToken?: string | null;
    expiresAt?: number | null;
    tokenType?: string | null;
};
export type OauthAccountUncheckedCreateWithoutUserInput = {
    id?: string;
    provider: string;
    providerAccountId: string;
    accessToken?: string | null;
    refreshToken?: string | null;
    expiresAt?: number | null;
    tokenType?: string | null;
};
export type OauthAccountCreateOrConnectWithoutUserInput = {
    where: Prisma.OauthAccountWhereUniqueInput;
    create: Prisma.XOR<Prisma.OauthAccountCreateWithoutUserInput, Prisma.OauthAccountUncheckedCreateWithoutUserInput>;
};
export type OauthAccountCreateManyUserInputEnvelope = {
    data: Prisma.OauthAccountCreateManyUserInput | Prisma.OauthAccountCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type OauthAccountUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.OauthAccountWhereUniqueInput;
    update: Prisma.XOR<Prisma.OauthAccountUpdateWithoutUserInput, Prisma.OauthAccountUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.OauthAccountCreateWithoutUserInput, Prisma.OauthAccountUncheckedCreateWithoutUserInput>;
};
export type OauthAccountUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.OauthAccountWhereUniqueInput;
    data: Prisma.XOR<Prisma.OauthAccountUpdateWithoutUserInput, Prisma.OauthAccountUncheckedUpdateWithoutUserInput>;
};
export type OauthAccountUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.OauthAccountScalarWhereInput;
    data: Prisma.XOR<Prisma.OauthAccountUpdateManyMutationInput, Prisma.OauthAccountUncheckedUpdateManyWithoutUserInput>;
};
export type OauthAccountScalarWhereInput = {
    AND?: Prisma.OauthAccountScalarWhereInput | Prisma.OauthAccountScalarWhereInput[];
    OR?: Prisma.OauthAccountScalarWhereInput[];
    NOT?: Prisma.OauthAccountScalarWhereInput | Prisma.OauthAccountScalarWhereInput[];
    id?: Prisma.StringFilter<"OauthAccount"> | string;
    userId?: Prisma.StringFilter<"OauthAccount"> | string;
    provider?: Prisma.StringFilter<"OauthAccount"> | string;
    providerAccountId?: Prisma.StringFilter<"OauthAccount"> | string;
    accessToken?: Prisma.StringNullableFilter<"OauthAccount"> | string | null;
    refreshToken?: Prisma.StringNullableFilter<"OauthAccount"> | string | null;
    expiresAt?: Prisma.IntNullableFilter<"OauthAccount"> | number | null;
    tokenType?: Prisma.StringNullableFilter<"OauthAccount"> | string | null;
};
export type OauthAccountCreateManyUserInput = {
    id?: string;
    provider: string;
    providerAccountId: string;
    accessToken?: string | null;
    refreshToken?: string | null;
    expiresAt?: number | null;
    tokenType?: string | null;
};
export type OauthAccountUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    providerAccountId?: Prisma.StringFieldUpdateOperationsInput | string;
    accessToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refreshToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expiresAt?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tokenType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type OauthAccountUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    providerAccountId?: Prisma.StringFieldUpdateOperationsInput | string;
    accessToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refreshToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expiresAt?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tokenType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type OauthAccountUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    provider?: Prisma.StringFieldUpdateOperationsInput | string;
    providerAccountId?: Prisma.StringFieldUpdateOperationsInput | string;
    accessToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refreshToken?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expiresAt?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tokenType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type OauthAccountSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    provider?: boolean;
    providerAccountId?: boolean;
    accessToken?: boolean;
    refreshToken?: boolean;
    expiresAt?: boolean;
    tokenType?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["oauthAccount"]>;
export type OauthAccountSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    provider?: boolean;
    providerAccountId?: boolean;
    accessToken?: boolean;
    refreshToken?: boolean;
    expiresAt?: boolean;
    tokenType?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["oauthAccount"]>;
export type OauthAccountSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    provider?: boolean;
    providerAccountId?: boolean;
    accessToken?: boolean;
    refreshToken?: boolean;
    expiresAt?: boolean;
    tokenType?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["oauthAccount"]>;
export type OauthAccountSelectScalar = {
    id?: boolean;
    userId?: boolean;
    provider?: boolean;
    providerAccountId?: boolean;
    accessToken?: boolean;
    refreshToken?: boolean;
    expiresAt?: boolean;
    tokenType?: boolean;
};
export type OauthAccountOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "provider" | "providerAccountId" | "accessToken" | "refreshToken" | "expiresAt" | "tokenType", ExtArgs["result"]["oauthAccount"]>;
export type OauthAccountInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type OauthAccountIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type OauthAccountIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $OauthAccountPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "OauthAccount";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        provider: string;
        providerAccountId: string;
        accessToken: string | null;
        refreshToken: string | null;
        expiresAt: number | null;
        tokenType: string | null;
    }, ExtArgs["result"]["oauthAccount"]>;
    composites: {};
};
export type OauthAccountGetPayload<S extends boolean | null | undefined | OauthAccountDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OauthAccountPayload, S>;
export type OauthAccountCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OauthAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OauthAccountCountAggregateInputType | true;
};
export interface OauthAccountDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['OauthAccount'];
        meta: {
            name: 'OauthAccount';
        };
    };
    findUnique<T extends OauthAccountFindUniqueArgs>(args: Prisma.SelectSubset<T, OauthAccountFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OauthAccountClient<runtime.Types.Result.GetResult<Prisma.$OauthAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OauthAccountFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OauthAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OauthAccountClient<runtime.Types.Result.GetResult<Prisma.$OauthAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OauthAccountFindFirstArgs>(args?: Prisma.SelectSubset<T, OauthAccountFindFirstArgs<ExtArgs>>): Prisma.Prisma__OauthAccountClient<runtime.Types.Result.GetResult<Prisma.$OauthAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OauthAccountFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OauthAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OauthAccountClient<runtime.Types.Result.GetResult<Prisma.$OauthAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OauthAccountFindManyArgs>(args?: Prisma.SelectSubset<T, OauthAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OauthAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OauthAccountCreateArgs>(args: Prisma.SelectSubset<T, OauthAccountCreateArgs<ExtArgs>>): Prisma.Prisma__OauthAccountClient<runtime.Types.Result.GetResult<Prisma.$OauthAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OauthAccountCreateManyArgs>(args?: Prisma.SelectSubset<T, OauthAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OauthAccountCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OauthAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OauthAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OauthAccountDeleteArgs>(args: Prisma.SelectSubset<T, OauthAccountDeleteArgs<ExtArgs>>): Prisma.Prisma__OauthAccountClient<runtime.Types.Result.GetResult<Prisma.$OauthAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OauthAccountUpdateArgs>(args: Prisma.SelectSubset<T, OauthAccountUpdateArgs<ExtArgs>>): Prisma.Prisma__OauthAccountClient<runtime.Types.Result.GetResult<Prisma.$OauthAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OauthAccountDeleteManyArgs>(args?: Prisma.SelectSubset<T, OauthAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OauthAccountUpdateManyArgs>(args: Prisma.SelectSubset<T, OauthAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OauthAccountUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OauthAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OauthAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OauthAccountUpsertArgs>(args: Prisma.SelectSubset<T, OauthAccountUpsertArgs<ExtArgs>>): Prisma.Prisma__OauthAccountClient<runtime.Types.Result.GetResult<Prisma.$OauthAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OauthAccountCountArgs>(args?: Prisma.Subset<T, OauthAccountCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OauthAccountCountAggregateOutputType> : number>;
    aggregate<T extends OauthAccountAggregateArgs>(args: Prisma.Subset<T, OauthAccountAggregateArgs>): Prisma.PrismaPromise<GetOauthAccountAggregateType<T>>;
    groupBy<T extends OauthAccountGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OauthAccountGroupByArgs['orderBy'];
    } : {
        orderBy?: OauthAccountGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OauthAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOauthAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OauthAccountFieldRefs;
}
export interface Prisma__OauthAccountClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OauthAccountFieldRefs {
    readonly id: Prisma.FieldRef<"OauthAccount", 'String'>;
    readonly userId: Prisma.FieldRef<"OauthAccount", 'String'>;
    readonly provider: Prisma.FieldRef<"OauthAccount", 'String'>;
    readonly providerAccountId: Prisma.FieldRef<"OauthAccount", 'String'>;
    readonly accessToken: Prisma.FieldRef<"OauthAccount", 'String'>;
    readonly refreshToken: Prisma.FieldRef<"OauthAccount", 'String'>;
    readonly expiresAt: Prisma.FieldRef<"OauthAccount", 'Int'>;
    readonly tokenType: Prisma.FieldRef<"OauthAccount", 'String'>;
}
export type OauthAccountFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OauthAccountSelect<ExtArgs> | null;
    omit?: Prisma.OauthAccountOmit<ExtArgs> | null;
    include?: Prisma.OauthAccountInclude<ExtArgs> | null;
    where: Prisma.OauthAccountWhereUniqueInput;
};
export type OauthAccountFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OauthAccountSelect<ExtArgs> | null;
    omit?: Prisma.OauthAccountOmit<ExtArgs> | null;
    include?: Prisma.OauthAccountInclude<ExtArgs> | null;
    where: Prisma.OauthAccountWhereUniqueInput;
};
export type OauthAccountFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OauthAccountSelect<ExtArgs> | null;
    omit?: Prisma.OauthAccountOmit<ExtArgs> | null;
    include?: Prisma.OauthAccountInclude<ExtArgs> | null;
    where?: Prisma.OauthAccountWhereInput;
    orderBy?: Prisma.OauthAccountOrderByWithRelationInput | Prisma.OauthAccountOrderByWithRelationInput[];
    cursor?: Prisma.OauthAccountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OauthAccountScalarFieldEnum | Prisma.OauthAccountScalarFieldEnum[];
};
export type OauthAccountFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OauthAccountSelect<ExtArgs> | null;
    omit?: Prisma.OauthAccountOmit<ExtArgs> | null;
    include?: Prisma.OauthAccountInclude<ExtArgs> | null;
    where?: Prisma.OauthAccountWhereInput;
    orderBy?: Prisma.OauthAccountOrderByWithRelationInput | Prisma.OauthAccountOrderByWithRelationInput[];
    cursor?: Prisma.OauthAccountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OauthAccountScalarFieldEnum | Prisma.OauthAccountScalarFieldEnum[];
};
export type OauthAccountFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OauthAccountSelect<ExtArgs> | null;
    omit?: Prisma.OauthAccountOmit<ExtArgs> | null;
    include?: Prisma.OauthAccountInclude<ExtArgs> | null;
    where?: Prisma.OauthAccountWhereInput;
    orderBy?: Prisma.OauthAccountOrderByWithRelationInput | Prisma.OauthAccountOrderByWithRelationInput[];
    cursor?: Prisma.OauthAccountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OauthAccountScalarFieldEnum | Prisma.OauthAccountScalarFieldEnum[];
};
export type OauthAccountCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OauthAccountSelect<ExtArgs> | null;
    omit?: Prisma.OauthAccountOmit<ExtArgs> | null;
    include?: Prisma.OauthAccountInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OauthAccountCreateInput, Prisma.OauthAccountUncheckedCreateInput>;
};
export type OauthAccountCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OauthAccountCreateManyInput | Prisma.OauthAccountCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OauthAccountCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OauthAccountSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OauthAccountOmit<ExtArgs> | null;
    data: Prisma.OauthAccountCreateManyInput | Prisma.OauthAccountCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.OauthAccountIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type OauthAccountUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OauthAccountSelect<ExtArgs> | null;
    omit?: Prisma.OauthAccountOmit<ExtArgs> | null;
    include?: Prisma.OauthAccountInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OauthAccountUpdateInput, Prisma.OauthAccountUncheckedUpdateInput>;
    where: Prisma.OauthAccountWhereUniqueInput;
};
export type OauthAccountUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OauthAccountUpdateManyMutationInput, Prisma.OauthAccountUncheckedUpdateManyInput>;
    where?: Prisma.OauthAccountWhereInput;
    limit?: number;
};
export type OauthAccountUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OauthAccountSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OauthAccountOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OauthAccountUpdateManyMutationInput, Prisma.OauthAccountUncheckedUpdateManyInput>;
    where?: Prisma.OauthAccountWhereInput;
    limit?: number;
    include?: Prisma.OauthAccountIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type OauthAccountUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OauthAccountSelect<ExtArgs> | null;
    omit?: Prisma.OauthAccountOmit<ExtArgs> | null;
    include?: Prisma.OauthAccountInclude<ExtArgs> | null;
    where: Prisma.OauthAccountWhereUniqueInput;
    create: Prisma.XOR<Prisma.OauthAccountCreateInput, Prisma.OauthAccountUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OauthAccountUpdateInput, Prisma.OauthAccountUncheckedUpdateInput>;
};
export type OauthAccountDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OauthAccountSelect<ExtArgs> | null;
    omit?: Prisma.OauthAccountOmit<ExtArgs> | null;
    include?: Prisma.OauthAccountInclude<ExtArgs> | null;
    where: Prisma.OauthAccountWhereUniqueInput;
};
export type OauthAccountDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OauthAccountWhereInput;
    limit?: number;
};
export type OauthAccountDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OauthAccountSelect<ExtArgs> | null;
    omit?: Prisma.OauthAccountOmit<ExtArgs> | null;
    include?: Prisma.OauthAccountInclude<ExtArgs> | null;
};
export {};
