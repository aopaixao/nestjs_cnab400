import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { CnabService} from './cnab.service';

@Resolver()
export class CnabResolver {
  
  constructor(
    private readonly cnabService: CnabService,
  ) {}

  @Query(() => String)
  generateCnab400(): Promise<String> {
      return this.cnabService.generateCnab400();
  }

}
