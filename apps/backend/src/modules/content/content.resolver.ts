import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ContentService } from './content.service';
import { CreateContentInput } from './dto/create-content.input';
import { UpdateContentInput } from './dto/update-content.input';
import { GeneratedContent } from './entities/generated-content.entity';

@Resolver(() => GeneratedContent)
export class ContentResolver {
  constructor(private readonly contentService: ContentService) {}

  @Mutation(() => GeneratedContent)
  createContent(@Args('createContentInput') createContentInput: CreateContentInput) {
    return this.contentService.create(createContentInput);
  }

  @Query(() => [GeneratedContent], { name: 'content' })
  findAll() {
    return this.contentService.findAll();
  }

  @Query(() => GeneratedContent, { name: 'content' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.contentService.findOne(id);
  }

  @Mutation(() => GeneratedContent)
  updateContent(@Args('updateContentInput') updateContentInput: UpdateContentInput) {
    return this.contentService.update(updateContentInput.id, updateContentInput);
  }

  @Mutation(() => GeneratedContent)
  removeContent(@Args('id', { type: () => Int }) id: number) {
    return this.contentService.remove(id);
  }
}
