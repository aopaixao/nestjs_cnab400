import { Injectable } from '@nestjs/common';
import { generateRemessaCnab } from '@banco-br/nodejs-cnab';
import { FileLayoutInput } from './dto/file-layout.input';

@Injectable()
export class CnabService {
    async generateCnab400(fileLayoutInput : FileLayoutInput): Promise <String>{
        const fileLayout = {
            header_arquivo: {
              tipo_registro: fileLayoutInput.headerRemessaInput.tipoRegistro,
              tipo_operacao: fileLayoutInput.headerRemessaInput.tipoOperacao,
              literal_remessa: fileLayoutInput.headerRemessaInput.literalRemessa,
              codigo_servico: fileLayoutInput.headerRemessaInput.codigoServico,
              literal_servico: fileLayoutInput.headerRemessaInput.literalServico,
              codigo_cedente: fileLayoutInput.headerRemessaInput.codigoCedente,
              razao_social: fileLayoutInput.headerRemessaInput.razaoSocial,
              codigo_banco: fileLayoutInput.headerRemessaInput.codigoBanco,
              nome_banco: fileLayoutInput.headerRemessaInput.nomeBanco,
              data_geracao: fileLayoutInput.headerRemessaInput.dataGeracao,
              brancos01: fileLayoutInput.headerRemessaInput.brancos01,
              numero_aviso_bancario: fileLayoutInput.headerRemessaInput.numeroAvisoBancario,
              sequencial_remessa: fileLayoutInput.headerRemessaInput.sequencialRemessa,
              brancos02: fileLayoutInput.headerRemessaInput.brancos02,
              numero_sequencial: fileLayoutInput.headerRemessaInput.numeroSequencial
            },
            detalhe: {
              tipo_registro: fileLayoutInput.detalheRemessaInput.tipoRegistro,
              dados_conta_pagador: fileLayoutInput.detalheRemessaInput.dadosContaPagador,
              zeros01: fileLayoutInput.detalheRemessaInput.zeros01,
              numero_carteira: fileLayoutInput.detalheRemessaInput.numeroCarteira,
              agencia: fileLayoutInput.detalheRemessaInput.agencia,
              conta: fileLayoutInput.detalheRemessaInput.conta,
              conta_dv: fileLayoutInput.detalheRemessaInput.contaDv,
              uso_empresa: fileLayoutInput.detalheRemessaInput.usoEmpresa,
              zeros02: fileLayoutInput.detalheRemessaInput.zeros02,
              multa: fileLayoutInput.detalheRemessaInput.multa,
              valor_multa: fileLayoutInput.detalheRemessaInput.valorMulta,
              nosso_numero: fileLayoutInput.detalheRemessaInput.nossoNumero,
              digito_nosso_numero: fileLayoutInput.detalheRemessaInput.digitoNossoNumero,
              desconto_por_dia: fileLayoutInput.detalheRemessaInput.descontoPorDia,
              condicao_emissao: fileLayoutInput.detalheRemessaInput.condicaoEmissao,
              emissao_para_debito: fileLayoutInput.detalheRemessaInput.emissaoParaDebito,
              brancos01: fileLayoutInput.detalheRemessaInput.brancos01,
              zeros03: fileLayoutInput.detalheRemessaInput.zeros03,
              brancos02: fileLayoutInput.detalheRemessaInput.brancos02,
              codigo_ocorrencia: fileLayoutInput.detalheRemessaInput.codigoOcorrencia,
              numero_documento: fileLayoutInput.detalheRemessaInput.numeroDocumento,
              vencimento: fileLayoutInput.detalheRemessaInput.vencimento,
              valor_titulo: fileLayoutInput.detalheRemessaInput.valorTitulo,
              codigo_banco: fileLayoutInput.detalheRemessaInput.codigoBanco,
              agencia_cobradora: fileLayoutInput.detalheRemessaInput.agenciaCobradora,
              especie: fileLayoutInput.detalheRemessaInput.especie,
              aceite: fileLayoutInput.detalheRemessaInput.aceite,
              data_emissao: fileLayoutInput.detalheRemessaInput.dataEmissao,
              instrucao1: fileLayoutInput.detalheRemessaInput.instrucao1,
              instrucao2: fileLayoutInput.detalheRemessaInput.instrucao2,
              juros_um_dia: fileLayoutInput.detalheRemessaInput.jurosUmDia,
              desconto_ate: fileLayoutInput.detalheRemessaInput.descontoAte,
              valor_desconto: fileLayoutInput.detalheRemessaInput.valorDesconto,
              valor_iof: fileLayoutInput.detalheRemessaInput.valorIof,
              abatimento: fileLayoutInput.detalheRemessaInput.abatimento,
              sacado_codigo_inscricao: fileLayoutInput.detalheRemessaInput.sacadoCodigoInscricao,
              sacado_numero_inscricao: fileLayoutInput.detalheRemessaInput.sacadoNumeroInscricao,
              nome: fileLayoutInput.detalheRemessaInput.nome,
              logradouro: fileLayoutInput.detalheRemessaInput.logradouro,
              brancos03: fileLayoutInput.detalheRemessaInput.brancos03,
              cep: fileLayoutInput.detalheRemessaInput.cep,
              sacador: fileLayoutInput.detalheRemessaInput.sacador,
              numero_sequencial: fileLayoutInput.detalheRemessaInput.numeroSequencial
            },
            trailer_arquivo: { 
              tipo_registro: fileLayoutInput.trailerArquivoRemessaInput.tipoRegistro, 
              brancos01: fileLayoutInput.trailerArquivoRemessaInput.brancos01, 
              numero_sequencial: fileLayoutInput.trailerArquivoRemessaInput.numeroSequencial 
            }
          };
          const bankCode = fileLayoutInput.bancoRemessaInput.bankCode;
          const cnabCode = fileLayoutInput.bancoRemessaInput.cnabCode;
          
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
