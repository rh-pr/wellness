"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonNullValueFilter = exports.NullsOrder = exports.QueryMode = exports.JsonNullValueInput = exports.NullableJsonNullValueInput = exports.SortOrder = exports.ChatMessageScalarFieldEnum = exports.ChatSessionScalarFieldEnum = exports.FavoriteScalarFieldEnum = exports.TaskScalarFieldEnum = exports.GeneratedContentScalarFieldEnum = exports.MoodEntryScalarFieldEnum = exports.WebAuthnChallengeScalarFieldEnum = exports.WebAuthnCredentialScalarFieldEnum = exports.OauthAccountScalarFieldEnum = exports.AnonymousSessionScalarFieldEnum = exports.SessionScalarFieldEnum = exports.SettingsScalarFieldEnum = exports.UserScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = __importStar(require("@prisma/client/runtime/index-browser"));
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.objectEnumValues.classes.DbNull,
    JsonNull: runtime.objectEnumValues.classes.JsonNull,
    AnyNull: runtime.objectEnumValues.classes.AnyNull,
};
exports.DbNull = runtime.objectEnumValues.instances.DbNull;
exports.JsonNull = runtime.objectEnumValues.instances.JsonNull;
exports.AnyNull = runtime.objectEnumValues.instances.AnyNull;
exports.ModelName = {
    User: 'User',
    Settings: 'Settings',
    Session: 'Session',
    AnonymousSession: 'AnonymousSession',
    OauthAccount: 'OauthAccount',
    WebAuthnCredential: 'WebAuthnCredential',
    WebAuthnChallenge: 'WebAuthnChallenge',
    MoodEntry: 'MoodEntry',
    GeneratedContent: 'GeneratedContent',
    Task: 'Task',
    Favorite: 'Favorite',
    ChatSession: 'ChatSession',
    ChatMessage: 'ChatMessage'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.UserScalarFieldEnum = {
    id: 'id',
    username: 'username',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    emailVerified: 'emailVerified',
    passwordHash: 'passwordHash',
    avatarUrl: 'avatarUrl',
    phoneNumber: 'phoneNumber',
    role: 'role',
    onboardingShownAt: 'onboardingShownAt',
    lastSeenAt: 'lastSeenAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.SettingsScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    theme: 'theme',
    language: 'language',
    assistantId: 'assistantId',
    location: 'location',
    notificationsEnabled: 'notificationsEnabled',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.SessionScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    refreshTokenHash: 'refreshTokenHash',
    deviceInfo: 'deviceInfo',
    ipAddress: 'ipAddress',
    revoked: 'revoked',
    createdAt: 'createdAt',
    lastSeenAt: 'lastSeenAt',
    expireAt: 'expireAt'
};
exports.AnonymousSessionScalarFieldEnum = {
    id: 'id',
    deviceId: 'deviceId',
    userId: 'userId',
    popupDismissedAt: 'popupDismissedAt',
    popupNextShowAt: 'popupNextShowAt',
    createdAt: 'createdAt',
    lastSeenAt: 'lastSeenAt',
    expireAt: 'expireAt'
};
exports.OauthAccountScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    expiresAt: 'expiresAt',
    tokenType: 'tokenType'
};
exports.WebAuthnCredentialScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    credentialId: 'credentialId',
    publicKey: 'publicKey',
    signCount: 'signCount',
    createdAt: 'createdAt',
    lastUsedAt: 'lastUsedAt'
};
exports.WebAuthnChallengeScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    type: 'type',
    challenge: 'challenge',
    createdAt: 'createdAt',
    expireAt: 'expireAt'
};
exports.MoodEntryScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    mood: 'mood',
    intensity: 'intensity',
    emoji: 'emoji',
    note: 'note',
    createdAt: 'createdAt'
};
exports.GeneratedContentScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    moodEntryId: 'moodEntryId',
    type: 'type',
    content: 'content',
    languageCode: 'languageCode',
    providerId: 'providerId',
    createdAt: 'createdAt'
};
exports.TaskScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    moodEntryId: 'moodEntryId',
    category: 'category',
    title: 'title',
    description: 'description',
    status: 'status',
    languageCode: 'languageCode',
    dueDate: 'dueDate',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.FavoriteScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    contentId: 'contentId',
    createdAt: 'createdAt'
};
exports.ChatSessionScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    providerId: 'providerId',
    title: 'title',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ChatMessageScalarFieldEnum = {
    id: 'id',
    chatSessionId: 'chatSessionId',
    role: 'role',
    content: 'content',
    metadata: 'metadata',
    createdAt: 'createdAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.NullableJsonNullValueInput = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull
};
exports.JsonNullValueInput = {
    JsonNull: exports.JsonNull
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.JsonNullValueFilter = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull,
    AnyNull: exports.AnyNull
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map