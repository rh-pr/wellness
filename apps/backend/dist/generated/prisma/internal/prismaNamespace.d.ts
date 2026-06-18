import * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Metrics = runtime.Metrics;
export type Metric<T> = runtime.Metric<T>;
export type MetricHistogram = runtime.MetricHistogram;
export type MetricHistogramBucket = runtime.MetricHistogramBucket;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.AnyNull);
};
export declare const DbNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const JsonNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const AnyNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly User: "User";
    readonly Settings: "Settings";
    readonly Session: "Session";
    readonly AnonymousSession: "AnonymousSession";
    readonly OauthAccount: "OauthAccount";
    readonly WebAuthnCredential: "WebAuthnCredential";
    readonly WebAuthnChallenge: "WebAuthnChallenge";
    readonly MoodEntry: "MoodEntry";
    readonly GeneratedContent: "GeneratedContent";
    readonly Task: "Task";
    readonly Favorite: "Favorite";
    readonly ChatSession: "ChatSession";
    readonly ChatMessage: "ChatMessage";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "user" | "settings" | "session" | "anonymousSession" | "oauthAccount" | "webAuthnCredential" | "webAuthnChallenge" | "moodEntry" | "generatedContent" | "task" | "favorite" | "chatSession" | "chatMessage";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        Settings: {
            payload: Prisma.$SettingsPayload<ExtArgs>;
            fields: Prisma.SettingsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SettingsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SettingsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SettingsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SettingsPayload>;
                };
                findFirst: {
                    args: Prisma.SettingsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SettingsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SettingsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SettingsPayload>;
                };
                findMany: {
                    args: Prisma.SettingsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SettingsPayload>[];
                };
                create: {
                    args: Prisma.SettingsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SettingsPayload>;
                };
                createMany: {
                    args: Prisma.SettingsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SettingsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SettingsPayload>[];
                };
                delete: {
                    args: Prisma.SettingsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SettingsPayload>;
                };
                update: {
                    args: Prisma.SettingsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SettingsPayload>;
                };
                deleteMany: {
                    args: Prisma.SettingsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SettingsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SettingsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SettingsPayload>[];
                };
                upsert: {
                    args: Prisma.SettingsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SettingsPayload>;
                };
                aggregate: {
                    args: Prisma.SettingsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSettings>;
                };
                groupBy: {
                    args: Prisma.SettingsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SettingsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SettingsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SettingsCountAggregateOutputType> | number;
                };
            };
        };
        Session: {
            payload: Prisma.$SessionPayload<ExtArgs>;
            fields: Prisma.SessionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SessionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                findFirst: {
                    args: Prisma.SessionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                findMany: {
                    args: Prisma.SessionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>[];
                };
                create: {
                    args: Prisma.SessionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                createMany: {
                    args: Prisma.SessionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>[];
                };
                delete: {
                    args: Prisma.SessionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                update: {
                    args: Prisma.SessionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                deleteMany: {
                    args: Prisma.SessionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SessionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>[];
                };
                upsert: {
                    args: Prisma.SessionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                aggregate: {
                    args: Prisma.SessionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSession>;
                };
                groupBy: {
                    args: Prisma.SessionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SessionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SessionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SessionCountAggregateOutputType> | number;
                };
            };
        };
        AnonymousSession: {
            payload: Prisma.$AnonymousSessionPayload<ExtArgs>;
            fields: Prisma.AnonymousSessionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AnonymousSessionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnonymousSessionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AnonymousSessionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnonymousSessionPayload>;
                };
                findFirst: {
                    args: Prisma.AnonymousSessionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnonymousSessionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AnonymousSessionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnonymousSessionPayload>;
                };
                findMany: {
                    args: Prisma.AnonymousSessionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnonymousSessionPayload>[];
                };
                create: {
                    args: Prisma.AnonymousSessionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnonymousSessionPayload>;
                };
                createMany: {
                    args: Prisma.AnonymousSessionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AnonymousSessionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnonymousSessionPayload>[];
                };
                delete: {
                    args: Prisma.AnonymousSessionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnonymousSessionPayload>;
                };
                update: {
                    args: Prisma.AnonymousSessionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnonymousSessionPayload>;
                };
                deleteMany: {
                    args: Prisma.AnonymousSessionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AnonymousSessionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AnonymousSessionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnonymousSessionPayload>[];
                };
                upsert: {
                    args: Prisma.AnonymousSessionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnonymousSessionPayload>;
                };
                aggregate: {
                    args: Prisma.AnonymousSessionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAnonymousSession>;
                };
                groupBy: {
                    args: Prisma.AnonymousSessionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AnonymousSessionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AnonymousSessionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AnonymousSessionCountAggregateOutputType> | number;
                };
            };
        };
        OauthAccount: {
            payload: Prisma.$OauthAccountPayload<ExtArgs>;
            fields: Prisma.OauthAccountFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OauthAccountFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OauthAccountPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OauthAccountFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OauthAccountPayload>;
                };
                findFirst: {
                    args: Prisma.OauthAccountFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OauthAccountPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OauthAccountFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OauthAccountPayload>;
                };
                findMany: {
                    args: Prisma.OauthAccountFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OauthAccountPayload>[];
                };
                create: {
                    args: Prisma.OauthAccountCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OauthAccountPayload>;
                };
                createMany: {
                    args: Prisma.OauthAccountCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OauthAccountCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OauthAccountPayload>[];
                };
                delete: {
                    args: Prisma.OauthAccountDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OauthAccountPayload>;
                };
                update: {
                    args: Prisma.OauthAccountUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OauthAccountPayload>;
                };
                deleteMany: {
                    args: Prisma.OauthAccountDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OauthAccountUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OauthAccountUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OauthAccountPayload>[];
                };
                upsert: {
                    args: Prisma.OauthAccountUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OauthAccountPayload>;
                };
                aggregate: {
                    args: Prisma.OauthAccountAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOauthAccount>;
                };
                groupBy: {
                    args: Prisma.OauthAccountGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OauthAccountGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OauthAccountCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OauthAccountCountAggregateOutputType> | number;
                };
            };
        };
        WebAuthnCredential: {
            payload: Prisma.$WebAuthnCredentialPayload<ExtArgs>;
            fields: Prisma.WebAuthnCredentialFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.WebAuthnCredentialFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WebAuthnCredentialPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.WebAuthnCredentialFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WebAuthnCredentialPayload>;
                };
                findFirst: {
                    args: Prisma.WebAuthnCredentialFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WebAuthnCredentialPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.WebAuthnCredentialFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WebAuthnCredentialPayload>;
                };
                findMany: {
                    args: Prisma.WebAuthnCredentialFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WebAuthnCredentialPayload>[];
                };
                create: {
                    args: Prisma.WebAuthnCredentialCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WebAuthnCredentialPayload>;
                };
                createMany: {
                    args: Prisma.WebAuthnCredentialCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.WebAuthnCredentialCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WebAuthnCredentialPayload>[];
                };
                delete: {
                    args: Prisma.WebAuthnCredentialDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WebAuthnCredentialPayload>;
                };
                update: {
                    args: Prisma.WebAuthnCredentialUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WebAuthnCredentialPayload>;
                };
                deleteMany: {
                    args: Prisma.WebAuthnCredentialDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.WebAuthnCredentialUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.WebAuthnCredentialUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WebAuthnCredentialPayload>[];
                };
                upsert: {
                    args: Prisma.WebAuthnCredentialUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WebAuthnCredentialPayload>;
                };
                aggregate: {
                    args: Prisma.WebAuthnCredentialAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateWebAuthnCredential>;
                };
                groupBy: {
                    args: Prisma.WebAuthnCredentialGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.WebAuthnCredentialGroupByOutputType>[];
                };
                count: {
                    args: Prisma.WebAuthnCredentialCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.WebAuthnCredentialCountAggregateOutputType> | number;
                };
            };
        };
        WebAuthnChallenge: {
            payload: Prisma.$WebAuthnChallengePayload<ExtArgs>;
            fields: Prisma.WebAuthnChallengeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.WebAuthnChallengeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WebAuthnChallengePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.WebAuthnChallengeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WebAuthnChallengePayload>;
                };
                findFirst: {
                    args: Prisma.WebAuthnChallengeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WebAuthnChallengePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.WebAuthnChallengeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WebAuthnChallengePayload>;
                };
                findMany: {
                    args: Prisma.WebAuthnChallengeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WebAuthnChallengePayload>[];
                };
                create: {
                    args: Prisma.WebAuthnChallengeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WebAuthnChallengePayload>;
                };
                createMany: {
                    args: Prisma.WebAuthnChallengeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.WebAuthnChallengeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WebAuthnChallengePayload>[];
                };
                delete: {
                    args: Prisma.WebAuthnChallengeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WebAuthnChallengePayload>;
                };
                update: {
                    args: Prisma.WebAuthnChallengeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WebAuthnChallengePayload>;
                };
                deleteMany: {
                    args: Prisma.WebAuthnChallengeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.WebAuthnChallengeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.WebAuthnChallengeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WebAuthnChallengePayload>[];
                };
                upsert: {
                    args: Prisma.WebAuthnChallengeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WebAuthnChallengePayload>;
                };
                aggregate: {
                    args: Prisma.WebAuthnChallengeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateWebAuthnChallenge>;
                };
                groupBy: {
                    args: Prisma.WebAuthnChallengeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.WebAuthnChallengeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.WebAuthnChallengeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.WebAuthnChallengeCountAggregateOutputType> | number;
                };
            };
        };
        MoodEntry: {
            payload: Prisma.$MoodEntryPayload<ExtArgs>;
            fields: Prisma.MoodEntryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MoodEntryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MoodEntryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MoodEntryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MoodEntryPayload>;
                };
                findFirst: {
                    args: Prisma.MoodEntryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MoodEntryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MoodEntryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MoodEntryPayload>;
                };
                findMany: {
                    args: Prisma.MoodEntryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MoodEntryPayload>[];
                };
                create: {
                    args: Prisma.MoodEntryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MoodEntryPayload>;
                };
                createMany: {
                    args: Prisma.MoodEntryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MoodEntryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MoodEntryPayload>[];
                };
                delete: {
                    args: Prisma.MoodEntryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MoodEntryPayload>;
                };
                update: {
                    args: Prisma.MoodEntryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MoodEntryPayload>;
                };
                deleteMany: {
                    args: Prisma.MoodEntryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MoodEntryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MoodEntryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MoodEntryPayload>[];
                };
                upsert: {
                    args: Prisma.MoodEntryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MoodEntryPayload>;
                };
                aggregate: {
                    args: Prisma.MoodEntryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMoodEntry>;
                };
                groupBy: {
                    args: Prisma.MoodEntryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MoodEntryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MoodEntryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MoodEntryCountAggregateOutputType> | number;
                };
            };
        };
        GeneratedContent: {
            payload: Prisma.$GeneratedContentPayload<ExtArgs>;
            fields: Prisma.GeneratedContentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.GeneratedContentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeneratedContentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.GeneratedContentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeneratedContentPayload>;
                };
                findFirst: {
                    args: Prisma.GeneratedContentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeneratedContentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.GeneratedContentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeneratedContentPayload>;
                };
                findMany: {
                    args: Prisma.GeneratedContentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeneratedContentPayload>[];
                };
                create: {
                    args: Prisma.GeneratedContentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeneratedContentPayload>;
                };
                createMany: {
                    args: Prisma.GeneratedContentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.GeneratedContentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeneratedContentPayload>[];
                };
                delete: {
                    args: Prisma.GeneratedContentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeneratedContentPayload>;
                };
                update: {
                    args: Prisma.GeneratedContentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeneratedContentPayload>;
                };
                deleteMany: {
                    args: Prisma.GeneratedContentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.GeneratedContentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.GeneratedContentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeneratedContentPayload>[];
                };
                upsert: {
                    args: Prisma.GeneratedContentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GeneratedContentPayload>;
                };
                aggregate: {
                    args: Prisma.GeneratedContentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateGeneratedContent>;
                };
                groupBy: {
                    args: Prisma.GeneratedContentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GeneratedContentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.GeneratedContentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GeneratedContentCountAggregateOutputType> | number;
                };
            };
        };
        Task: {
            payload: Prisma.$TaskPayload<ExtArgs>;
            fields: Prisma.TaskFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TaskFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TaskPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TaskPayload>;
                };
                findFirst: {
                    args: Prisma.TaskFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TaskPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TaskPayload>;
                };
                findMany: {
                    args: Prisma.TaskFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TaskPayload>[];
                };
                create: {
                    args: Prisma.TaskCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TaskPayload>;
                };
                createMany: {
                    args: Prisma.TaskCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TaskPayload>[];
                };
                delete: {
                    args: Prisma.TaskDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TaskPayload>;
                };
                update: {
                    args: Prisma.TaskUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TaskPayload>;
                };
                deleteMany: {
                    args: Prisma.TaskDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TaskUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TaskPayload>[];
                };
                upsert: {
                    args: Prisma.TaskUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TaskPayload>;
                };
                aggregate: {
                    args: Prisma.TaskAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTask>;
                };
                groupBy: {
                    args: Prisma.TaskGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TaskGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TaskCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TaskCountAggregateOutputType> | number;
                };
            };
        };
        Favorite: {
            payload: Prisma.$FavoritePayload<ExtArgs>;
            fields: Prisma.FavoriteFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FavoriteFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FavoritePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FavoriteFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FavoritePayload>;
                };
                findFirst: {
                    args: Prisma.FavoriteFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FavoritePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FavoriteFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FavoritePayload>;
                };
                findMany: {
                    args: Prisma.FavoriteFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FavoritePayload>[];
                };
                create: {
                    args: Prisma.FavoriteCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FavoritePayload>;
                };
                createMany: {
                    args: Prisma.FavoriteCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FavoriteCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FavoritePayload>[];
                };
                delete: {
                    args: Prisma.FavoriteDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FavoritePayload>;
                };
                update: {
                    args: Prisma.FavoriteUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FavoritePayload>;
                };
                deleteMany: {
                    args: Prisma.FavoriteDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FavoriteUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FavoriteUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FavoritePayload>[];
                };
                upsert: {
                    args: Prisma.FavoriteUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FavoritePayload>;
                };
                aggregate: {
                    args: Prisma.FavoriteAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFavorite>;
                };
                groupBy: {
                    args: Prisma.FavoriteGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FavoriteGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FavoriteCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FavoriteCountAggregateOutputType> | number;
                };
            };
        };
        ChatSession: {
            payload: Prisma.$ChatSessionPayload<ExtArgs>;
            fields: Prisma.ChatSessionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ChatSessionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatSessionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ChatSessionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatSessionPayload>;
                };
                findFirst: {
                    args: Prisma.ChatSessionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatSessionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ChatSessionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatSessionPayload>;
                };
                findMany: {
                    args: Prisma.ChatSessionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatSessionPayload>[];
                };
                create: {
                    args: Prisma.ChatSessionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatSessionPayload>;
                };
                createMany: {
                    args: Prisma.ChatSessionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ChatSessionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatSessionPayload>[];
                };
                delete: {
                    args: Prisma.ChatSessionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatSessionPayload>;
                };
                update: {
                    args: Prisma.ChatSessionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatSessionPayload>;
                };
                deleteMany: {
                    args: Prisma.ChatSessionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ChatSessionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ChatSessionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatSessionPayload>[];
                };
                upsert: {
                    args: Prisma.ChatSessionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatSessionPayload>;
                };
                aggregate: {
                    args: Prisma.ChatSessionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateChatSession>;
                };
                groupBy: {
                    args: Prisma.ChatSessionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ChatSessionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ChatSessionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ChatSessionCountAggregateOutputType> | number;
                };
            };
        };
        ChatMessage: {
            payload: Prisma.$ChatMessagePayload<ExtArgs>;
            fields: Prisma.ChatMessageFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ChatMessageFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ChatMessageFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatMessagePayload>;
                };
                findFirst: {
                    args: Prisma.ChatMessageFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ChatMessageFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatMessagePayload>;
                };
                findMany: {
                    args: Prisma.ChatMessageFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatMessagePayload>[];
                };
                create: {
                    args: Prisma.ChatMessageCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatMessagePayload>;
                };
                createMany: {
                    args: Prisma.ChatMessageCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ChatMessageCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatMessagePayload>[];
                };
                delete: {
                    args: Prisma.ChatMessageDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatMessagePayload>;
                };
                update: {
                    args: Prisma.ChatMessageUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatMessagePayload>;
                };
                deleteMany: {
                    args: Prisma.ChatMessageDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ChatMessageUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ChatMessageUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatMessagePayload>[];
                };
                upsert: {
                    args: Prisma.ChatMessageUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChatMessagePayload>;
                };
                aggregate: {
                    args: Prisma.ChatMessageAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateChatMessage>;
                };
                groupBy: {
                    args: Prisma.ChatMessageGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ChatMessageGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ChatMessageCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ChatMessageCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly username: "username";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly email: "email";
    readonly emailVerified: "emailVerified";
    readonly passwordHash: "passwordHash";
    readonly avatarUrl: "avatarUrl";
    readonly phoneNumber: "phoneNumber";
    readonly role: "role";
    readonly onboardingShownAt: "onboardingShownAt";
    readonly lastSeenAt: "lastSeenAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const SettingsScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly theme: "theme";
    readonly language: "language";
    readonly assistantId: "assistantId";
    readonly location: "location";
    readonly notificationsEnabled: "notificationsEnabled";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SettingsScalarFieldEnum = (typeof SettingsScalarFieldEnum)[keyof typeof SettingsScalarFieldEnum];
export declare const SessionScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly refreshTokenHash: "refreshTokenHash";
    readonly deviceInfo: "deviceInfo";
    readonly ipAddress: "ipAddress";
    readonly revoked: "revoked";
    readonly createdAt: "createdAt";
    readonly lastSeenAt: "lastSeenAt";
    readonly expireAt: "expireAt";
};
export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum];
export declare const AnonymousSessionScalarFieldEnum: {
    readonly id: "id";
    readonly deviceId: "deviceId";
    readonly userId: "userId";
    readonly popupDismissedAt: "popupDismissedAt";
    readonly popupNextShowAt: "popupNextShowAt";
    readonly createdAt: "createdAt";
    readonly lastSeenAt: "lastSeenAt";
    readonly expireAt: "expireAt";
};
export type AnonymousSessionScalarFieldEnum = (typeof AnonymousSessionScalarFieldEnum)[keyof typeof AnonymousSessionScalarFieldEnum];
export declare const OauthAccountScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly provider: "provider";
    readonly providerAccountId: "providerAccountId";
    readonly accessToken: "accessToken";
    readonly refreshToken: "refreshToken";
    readonly expiresAt: "expiresAt";
    readonly tokenType: "tokenType";
};
export type OauthAccountScalarFieldEnum = (typeof OauthAccountScalarFieldEnum)[keyof typeof OauthAccountScalarFieldEnum];
export declare const WebAuthnCredentialScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly credentialId: "credentialId";
    readonly publicKey: "publicKey";
    readonly signCount: "signCount";
    readonly createdAt: "createdAt";
    readonly lastUsedAt: "lastUsedAt";
};
export type WebAuthnCredentialScalarFieldEnum = (typeof WebAuthnCredentialScalarFieldEnum)[keyof typeof WebAuthnCredentialScalarFieldEnum];
export declare const WebAuthnChallengeScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly type: "type";
    readonly challenge: "challenge";
    readonly createdAt: "createdAt";
    readonly expireAt: "expireAt";
};
export type WebAuthnChallengeScalarFieldEnum = (typeof WebAuthnChallengeScalarFieldEnum)[keyof typeof WebAuthnChallengeScalarFieldEnum];
export declare const MoodEntryScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly mood: "mood";
    readonly intensity: "intensity";
    readonly emoji: "emoji";
    readonly note: "note";
    readonly createdAt: "createdAt";
};
export type MoodEntryScalarFieldEnum = (typeof MoodEntryScalarFieldEnum)[keyof typeof MoodEntryScalarFieldEnum];
export declare const GeneratedContentScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly moodEntryId: "moodEntryId";
    readonly type: "type";
    readonly content: "content";
    readonly languageCode: "languageCode";
    readonly providerId: "providerId";
    readonly createdAt: "createdAt";
};
export type GeneratedContentScalarFieldEnum = (typeof GeneratedContentScalarFieldEnum)[keyof typeof GeneratedContentScalarFieldEnum];
export declare const TaskScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly moodEntryId: "moodEntryId";
    readonly category: "category";
    readonly title: "title";
    readonly description: "description";
    readonly status: "status";
    readonly languageCode: "languageCode";
    readonly dueDate: "dueDate";
    readonly completedAt: "completedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum];
export declare const FavoriteScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly contentId: "contentId";
    readonly createdAt: "createdAt";
};
export type FavoriteScalarFieldEnum = (typeof FavoriteScalarFieldEnum)[keyof typeof FavoriteScalarFieldEnum];
export declare const ChatSessionScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly providerId: "providerId";
    readonly title: "title";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ChatSessionScalarFieldEnum = (typeof ChatSessionScalarFieldEnum)[keyof typeof ChatSessionScalarFieldEnum];
export declare const ChatMessageScalarFieldEnum: {
    readonly id: "id";
    readonly chatSessionId: "chatSessionId";
    readonly role: "role";
    readonly content: "content";
    readonly metadata: "metadata";
    readonly createdAt: "createdAt";
};
export type ChatMessageScalarFieldEnum = (typeof ChatMessageScalarFieldEnum)[keyof typeof ChatMessageScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
    readonly JsonNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const JsonNullValueInput: {
    readonly JsonNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
    readonly JsonNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
    readonly AnyNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>;
export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type EnumAssistantProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssistantProvider'>;
export type ListEnumAssistantProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssistantProvider[]'>;
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type EnumMoodTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MoodType'>;
export type ListEnumMoodTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MoodType[]'>;
export type EnumContentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContentType'>;
export type ListEnumContentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContentType[]'>;
export type EnumTaskCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskCategory'>;
export type ListEnumTaskCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskCategory[]'>;
export type EnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus'>;
export type ListEnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus[]'>;
export type EnumMessageRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageRole'>;
export type ListEnumMessageRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageRole[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export type Datasource = {
    url?: string;
};
export type Datasources = {
    db?: Datasource;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export interface PrismaClientOptions {
    datasources?: Datasources;
    datasourceUrl?: string;
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    adapter?: runtime.SqlDriverAdapterFactory | null;
    omit?: GlobalOmitConfig;
}
export type GlobalOmitConfig = {
    user?: Prisma.UserOmit;
    settings?: Prisma.SettingsOmit;
    session?: Prisma.SessionOmit;
    anonymousSession?: Prisma.AnonymousSessionOmit;
    oauthAccount?: Prisma.OauthAccountOmit;
    webAuthnCredential?: Prisma.WebAuthnCredentialOmit;
    webAuthnChallenge?: Prisma.WebAuthnChallengeOmit;
    moodEntry?: Prisma.MoodEntryOmit;
    generatedContent?: Prisma.GeneratedContentOmit;
    task?: Prisma.TaskOmit;
    favorite?: Prisma.FavoriteOmit;
    chatSession?: Prisma.ChatSessionOmit;
    chatMessage?: Prisma.ChatMessageOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
