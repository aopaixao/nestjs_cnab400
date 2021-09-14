import { Injectable } from '@nestjs/common';
import { generateRemessaCnab } from '@banco-br/nodejs-cnab';

@Injectable()
export class CnabService {
    async generateCnab400(): Promise <String>{
        const fileLayout = {
            header_arquivo: {
              tipo_registro: '0',
              tipo_operacao: '1',
              literal_remessa: 'REMESSA',
              codigo_servico: '1',
              literal_servico: 'COBRANCA',
              codigo_cedente: '12562475000132',
              razao_social: 'FOO BAR LTDA',
              codigo_banco: '237',
              nome_banco: 'Bradesco',
              data_geracao: '',
              brancos01: '',
              numero_aviso_bancario: 'MX',
              sequencial_remessa: '1',
              brancos02: '',
              numero_sequencial: '1'
            },
            detalhe: {
              tipo_registro: '1',
              dados_conta_pagador: '0000000000000000000',
              zeros01: '0',
              numero_carteira: '000',
              agencia: '05633',
              conta: '45889785',
              conta_dv: '0',
              uso_empresa: 'EMPRESA LTDA             ',
              zeros02: '000',
              multa: '0',
              valor_multa: '0000',
              nosso_numero: '00000000000',
              digito_nosso_numero: '0',
              desconto_por_dia: '0000000000',
              condicao_emissao: '2',
              emissao_para_debito: 'N',
              brancos01: '           ',
              zeros03: '0',
              brancos02: '  ',
              codigo_ocorrencia: '01',
              numero_documento: '          ',
              vencimento: '000000',
              valor_titulo: '0000000000000',
              codigo_banco: '237',
              agencia_cobradora: '00000',
              especie: '01',
              aceite: 'N',
              data_emissao: '000000',
              instrucao1: '  ',
              instrucao2: '  ',
              juros_um_dia: '0000000000000',
              desconto_ate: '000000',
              valor_desconto: '0000000000000',
              valor_iof: '0000000000000',
              abatimento: '0000000000000',
              sacado_codigo_inscricao: '00',
              sacado_numero_inscricao: '00000000000000',
              nome: '                                        ',
              logradouro: '                                        ',
              brancos03: '            ',
              cep: '00000000',
              sacador: '                                                            ',
              numero_sequencial: '000001'
            },
            trailer_arquivo: { tipo_registro: '9', brancos01: '', numero_sequencial: '1' }
          };
          const bankCode = '033';
          const cnabCode = 400;
          const finalresult = generateRemessaCnab(fileLayout, cnabCode, bankCode);
          // finalResult tem uma string com o conteúdo do arquivo remessa, que pode ser salvo num arquivo.rem por exemplo
          // fs.writeFileSync('./cobranca.rem', finalresult, 'UTF8');
          console.log(fileLayout);
          console.log(cnabCode);
          console.log(bankCode);
          console.log(finalresult);

          return finalresult;
    }
}
