import { ObjectType, Field, registerEnumType } from '@nestjs/graphql';
import { UserRole } from 'generated/prisma/client';
import { Settings } from './settings.entity';
import { Session } from '../../auth/entities/session.entity';
import { OauthAccount } from 'src/modules/auth/entities/auth-account.entity';
import { WebAuthnCredential } from 'src/modules/auth/entities/web-authn-credential.entity';
import { Mood } from 'src/modules/mood/entities/mood.entity';
import { GeneratedContent } from 'src/modules/content/entities/generated-content.entity';
import { Task } from 'src/modules/task/entities/task.entity';
import { ChatSession } from 'src/modules/chat/entities/chat-session.entity';

registerEnumType(UserRole, {
  name: 'UserRole',
});

@ObjectType()
export class User {
  @Field()
  id!: string;

  @Field()
  username!: string;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field()
  email!: string;

  @Field(() => Boolean)
  emailVerified!: boolean

  @Field({ nullable: true })
  avatarUrl?: string;

  @Field({ nullable: true })
  phoneNumber?: string;

  @Field()
  role!: UserRole;

  @Field(() => Date)
  onboardingShownAt?: Date;

  @Field(() => Date, { nullable: true })
  lastSeenAt?: Date

  @Field(() => Date)
  createdAt!: Date

  @Field(() => Date)
  updatedAt!: Date;

  @Field(() => Settings)
  settings!: Settings;

  @Field(() => Session)
  sessions!: Session[];

  @Field(() => OauthAccount)
  oauthAccounts!: OauthAccount[];

  @Field(() => WebAuthnCredential)
  webAuthnCredentials!: WebAuthnCredential[];

  @Field(() => Mood)
  moodEntries!: Mood[]

  @Field(() => GeneratedContent)
  generatedContents!: GeneratedContent[]

  @Field(() => Task)
  tasks!: Mood[]

  @Field(() => ChatSession)
  chats!: ChatSession[];

}




