import { Field, InputType } from "@nestjs/graphql";
import { HeaderRemessaInput } from "./header-remessa.input";
import { DetalheRemessaInput } from "./detalhe-remessa.input";
import { TrailerArquivoRemessaInput } from "./trailer-arquivo-remessa.input";
import { BancoRemessaInput } from "./banco-remessa.input";

@InputType()
export class FileLayoutInput{
  @Field(() => HeaderRemessaInput)
  headerRemessaInput: HeaderRemessaInput;
  
  @Field(() => DetalheRemessaInput)
  detalheRemessaInput: DetalheRemessaInput;

  @Field(() => TrailerArquivoRemessaInput)
  trailerArquivoRemessaInput: TrailerArquivoRemessaInput;
  
  @Field(() => BancoRemessaInput)
  bancoRemessaInput: BancoRemessaInput;
}