import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MoodService } from './mood.service';
import { Mood } from './entities/mood.entity';
import { CreateMoodInput } from './dto/create-mood.input';
import { UpdateMoodInput } from './dto/update-mood.input';

@Resolver(() => Mood)
export class MoodResolver {
  constructor(private readonly moodService: MoodService) {}

  @Mutation(() => Mood)
  createMood(@Args('createMoodInput') createMoodInput: CreateMoodInput) {
    return this.moodService.create(createMoodInput);
  }

  @Query(() => [Mood], { name: 'mood' })
  findAll() {
    return this.moodService.findAll();
  }

  @Query(() => Mood, { name: 'mood' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.moodService.findOne(id);
  }

  @Mutation(() => Mood)
  updateMood(@Args('updateMoodInput') updateMoodInput: UpdateMoodInput) {
    return this.moodService.update(updateMoodInput.id, updateMoodInput);
  }

  @Mutation(() => Mood)
  removeMood(@Args('id', { type: () => Int }) id: number) {
    return this.moodService.remove(id);
  }
}
