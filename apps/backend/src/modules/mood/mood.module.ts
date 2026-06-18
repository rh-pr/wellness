import { Module } from '@nestjs/common';
import { MoodService } from './mood.service';
import { MoodResolver } from './mood.resolver';

@Module({
  providers: [MoodResolver, MoodService],
})
export class MoodModule {}
