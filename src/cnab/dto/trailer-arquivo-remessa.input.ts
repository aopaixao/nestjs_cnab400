import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class TrailerArquivoRemessaInput{

  @Field(() => String)
  tipoRegistro: string;
  
  @Field(() => String)
  brancos01: string;
  
  @Field(() => String)
  numeroSequencial: string;
  
}