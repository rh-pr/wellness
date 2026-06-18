import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { CreateAuthInput } from './dto/create-auth.input';
import { UpdateAuthInput } from './dto/update-auth.input';
import { Session } from './entities/session.entity';

@Resolver(() => Session)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => Session)
  createAuth(@Args('createAuthInput') createAuthInput: CreateAuthInput) {
    return this.authService.create(createAuthInput);
  }

  @Query(() => [Session], { name: 'auth' })
  findAll() {
    return this.authService.findAll();
  }

  @Query(() => Session, { name: 'auth' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.authService.findOne(id);
  }

}
