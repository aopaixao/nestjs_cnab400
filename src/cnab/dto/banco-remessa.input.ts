import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class BancoRemessaInput{

  @Field(() => String)
  bankCode: string;
  
  @Field(() => Number)
  cnabCode: number;
  
}