import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { CnabService} from './cnab.service';
import { FileLayoutInput } from './dto/file-layout.input';

@Resolver()
export class CnabResolver {
  
  constructor(
    private readonly cnabService: CnabService,
  ) {}

  @Query(() => String)
  helloWorld(): String {
    return "Hello World";
  }

  @Mutation(() => String)
  generateCnab400(@Args({ name: 'fileLayoutInput', type: () => FileLayoutInput }) fileLayoutInput: FileLayoutInput): Promise<String> {
    return this.cnabService.generateCnab400(fileLayoutInput);
  }

}
