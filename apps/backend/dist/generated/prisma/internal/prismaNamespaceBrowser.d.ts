import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
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
