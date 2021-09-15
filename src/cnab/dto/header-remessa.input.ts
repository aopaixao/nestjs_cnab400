import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class HeaderRemessaInput{

  @Field(() => String)
  tipoRegistro: string;
  
  @Field(() => String)
  tipoOperacao: string;
  
  @Field(() => String)
  literalRemessa: string;
  
  @Field(() => String)
  codigoServico: string;
  
  @Field(() => String)
  literalServico: string;
  
  @Field(() => String)
  codigoCedente: string;
  
  @Field(() => String)
  razaoSocial: string;
  
  @Field(() => String)
  codigoBanco: string;
  
  @Field(() => String)
  nomeBanco: string;
  
  @Field(() => String)
  
  @Field(() => String)
  dataGeracao: string;
  
  @Field(() => String)
  brancos01: string;
  
  @Field(() => String)
  numeroAvisoBancario: string;
  
  @Field(() => String)
  sequencialRemessa: string;
  
  @Field(() => String)
  brancos02: string;
  
  @Field(() => String)
  numeroSequencial: string;

}