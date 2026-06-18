import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { TaskCategory, TaskStatus } from 'generated/prisma/client';

registerEnumType(TaskCategory, {
  name: 'TaskCategory',
});

registerEnumType(TaskStatus, {
  name: 'TaskStatus',
});

@ObjectType()
export class Task {
  @Field()
  id!: string;

  @Field()
  userId!: string;

  @Field({ nullable: true })
  moodEntryId?: string;

  @Field(() => TaskCategory)
  category!: TaskCategory;

  @Field()
  title!: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => TaskStatus)
  status!: TaskStatus;

  @Field()
  languageCode!: string;

  @Field(() => Date, { nullable: true })
  dueDate?: Date;

  @Field(() => Date, { nullable: true })
  completedAt?: Date;

  @Field(() => Date)
  createdAt!: Date;

  @Field(() => Date)
  updatedAt!: Date;
}
