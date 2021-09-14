import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn } from "typeorm"


@ObjectType()
@Index()
@Entity()
export class HeaderRemessa{

    @PrimaryGeneratedColumn()
    @Column({length: 1})
    @Field(() => ID)
    codigo_registro: string = "0";

    @Column({length: 1})
    @Field()
    codigo_remessa: string = "1";

    @Column({length: 7})
    @Field()
    literal_remessa: string = "REMESSA";

    @Column({length: 1})
    @Field()
    codigo_servico: string = "1";

    @Column({length: 15})
    @Field()
    literal_servico: string = "COBRANCA";

    @Column({ length: 4})
    @Field()
    codigo_agencia: string = "0001";

    @Column({ length: 7})
    @Field()
    codigo_beneficiario: string = "3001108";

    @Column({length: 9, default: ''})
    @Field()
    brancos: string;

    @Column({length: 30})
    @Field()
    nome_empresa: string = "ENERGISA MATO GROSSO - DISTRIB";

    @Column({ length: 3})
    @Field()
    codigo_banco: string = "104";

    @Column({ length: 15})
    @Field()
    nome_banco: string = "CAIXA ECONOMICA";

    @Column({ length: 9})
    @Field()
    @CreateDateColumn()
    data_geracao: Date;

    @Column({length: 3})
    @Field()
    versao_layout: string = "007";

    @Column({length: 286, default: ''})
    @Field()
    brancos2: string;

    @Column({ length: 5})
    @Field()
    sequencial_a: string = "00001";

    @Column({length: 6})
    @Field()
    sequencial_b: string = "000001";
}