import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";


@ObjectType()
@Index()
@Entity()
export class DetalheRemessa{

    @Column({length: 1})
    @PrimaryGeneratedColumn()
    @Field()
    codigo_registro: string = "1";

    

}