import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class DetalheRemessaInput{
  
  @Field(() => String)
  tipoRegistro: string;
  
  @Field(() => String)
  dadosContaPagador: string;
  
  @Field(() => String)
  zeros01: string;
  
  @Field(() => String)
  numeroCarteira: string;
  
  @Field(() => String)
  agencia: string;
  
  @Field(() => String)
  conta: string;
  
  @Field(() => String)
  contaDv: string;
  
  @Field(() => String)
  usoEmpresa: string;
  
  @Field(() => String)
  zeros02: string;
  
  @Field(() => String)
  multa: string;
  
  @Field(() => String)
  valorMulta: string;
  
  @Field(() => String)
  nossoNumero: string;
  
  @Field(() => String)
  digitoNossoNumero: string;
  
  @Field(() => String)
  descontoPorDia: string;
  
  @Field(() => String)
  condicaoEmissao: string;
  
  @Field(() => String)
  emissaoParaDebito: string;
  
  @Field(() => String)
  brancos01: string;
  
  @Field(() => String)
  zeros03: string;
  
  @Field(() => String)
  brancos02: string;
  
  @Field(() => String)
  codigoOcorrencia: string;
  
  @Field(() => String)
  numeroDocumento: string;
  
  @Field(() => String)
  vencimento: string;
  
  @Field(() => String)
  valorTitulo: string;
  
  @Field(() => String)
  codigoBanco: string;
  
  @Field(() => String)
  agenciaCobradora: string;
  
  @Field(() => String)
  especie: string;
  
  @Field(() => String)
  aceite: string;
  
  @Field(() => String)
  dataEmissao: string;
  
  @Field(() => String)
  instrucao1: string;
  
  @Field(() => String)
  instrucao2: string;
  
  @Field(() => String)
  jurosUmDia: string;
  
  @Field(() => String)
  descontoAte: string;
  
  @Field(() => String)
  valorDesconto: string;
  
  @Field(() => String)
  valorIof: string;
  
  @Field(() => String)
  abatimento: string;
  
  @Field(() => String)
  sacadoCodigoInscricao: string;
  
  @Field(() => String)
  sacadoNumeroInscricao: string;
  
  @Field(() => String)
  nome: string;
  
  @Field(() => String)
  logradouro: string;
  
  @Field(() => String)
  brancos03: string;
  
  @Field(() => String)
  cep: string;
  
  @Field(() => String)
  sacador: string;                                                            
  
  @Field(() => String)
  numeroSequencial: string;

}