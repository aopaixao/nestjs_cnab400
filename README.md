## Descrição

Projeto utilizando Node.js + NesteJs para geração de arquivo de conciliação CNAB400

## Instalação

```bash
$ npm install
```

## Executando a aplicação

```bash
# development com modo watch
$ npm run start:dev
```

## Acessando a API para geração do Código CNAB400 (GraphQL Playground)

<code>
mutation generateCnab400($fileLayoutInput: FileLayoutInput!) {
  generateCnab400(fileLayoutInput: $fileLayoutInput) 
}
</code>

# Query Variables

<code>
{
  "fileLayoutInput": {
    "headerRemessaInput":{
      "tipoRegistro": "0",
      "tipoOperacao": "1",
      "literalRemessa": "REMESSA",
      "codigoServico": "1",
      "literalServico": "COBRANCA",
      "codigoCedente": "12562475000132",
      "razaoSocial": "FOO BAR LTDA",
      "codigoBanco": "237",
      "nomeBanco": "Bradesco",
      "dataGeracao": "",
      "brancos01": "",
      "numeroAvisoBancario": "MX",
      "sequencialRemessa": "1",
      "brancos02": "",
      "numeroSequencial": "1"	
    },
    "detalheRemessaInput":{
      "tipoRegistro": "1",
      "dadosContaPagador": "0000000000000000000",
      "zeros01": "0",
      "numeroCarteira": "000",
      "agencia": "05633",
      "conta": "45889785",
      "contaDv": "0",
      "usoEmpresa": "EMPRESA LTDA             ",
      "zeros02": "000",
      "multa": "0",
      "valorMulta": "0000",
      "nossoNumero": "00000000000",
      "digitoNossoNumero": "0",
      "descontoPorDia": "0000000000",
      "condicaoEmissao": "2",
      "emissaoParaDebito": "N",
      "brancos01": "           ",
      "zeros03": "0",
      "brancos02": "  ",
      "codigoOcorrencia": "01",
      "numeroDocumento": "          ",
      "vencimento": "000000",
      "valorTitulo": "0000000000000",
      "codigoBanco": "237",
      "agenciaCobradora": "00000",
      "especie": "01",
      "aceite": "N",
      "dataEmissao": "000000",
      "instrucao1": "  ",
      "instrucao2": "  ",
      "jurosUmDia": "0000000000000",
      "descontoAte": "000000",
      "valorDesconto": "0000000000000",
      "valorIof": "0000000000000",
      "abatimento": "0000000000000",
      "sacadoCodigoInscricao": "00",
      "sacadoNumeroInscricao": "00000000000000",
      "nome": "                                        ",
      "logradouro": "                                        ",
      "brancos03": "            ",
      "cep": "00000000",
      "sacador": "                                                            ",
      "numeroSequencial": "000001"	
    },
    "trailerArquivoRemessaInput":{
      "tipoRegistro": "9", 
      "brancos01": "", 
      "numeroSequencial": "1"
    },
    "bancoRemessaInput":{
      "bankCode": "033",
      "cnabCode": 400
    }
  }
}
</code>


## Sobre

- Author - [Alexandre Paixão]

## Licença

GNU GPL
