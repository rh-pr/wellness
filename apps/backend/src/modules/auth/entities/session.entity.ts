import { ObjectType, Field } from "@nestjs/graphql";


@ObjectType()
export class DeviceInfo {
  @Field({ nullable: true })
  userAgent?: string;

  @Field({ nullable: true })
  os?: string;

  @Field({ nullable: true })
  browser?: string;

  @Field({ nullable: true })
  device?: string;
}

@ObjectType()
export class Session {
    @Field()
    id!: string;

    @Field()
    userId!: string;

    @Field(() => DeviceInfo, { nullable: true })
    deviceInfo!: DeviceInfo;

    @Field({ nullable: true })
    ipAddress?: string;

    @Field({ nullable: true })
    revoked!: boolean;

    @Field(() => Date)
    createdAt!: Date;

    @Field(() => Date)
    lastSeenAt!: Date;

    @Field(() => Date)
    expireAt!: Date;
}