import { Test, TestingModule } from '@nestjs/testing';
import { MoodResolver } from './mood.resolver';
import { MoodService } from './mood.service';

describe('MoodResolver', () => {
  let resolver: MoodResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoodResolver, MoodService],
    }).compile();

    resolver = module.get<MoodResolver>(MoodResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
