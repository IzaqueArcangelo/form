export default {
    definitions: {
      historico: {
        type: "object",
        properties: {
          "lote": {
            type: "string",
            label: "LOTE"
          },
          "descricaoLote": {
            type: "string",
            label: "DESCRIÇÃO LOTE"
          },
          "design": {
            type: "string",
            label: "Desing"
          },
          "2via": {
            type: "boolean",
            label: "2º VIA"
          },
          "diplomas": {
            type: "array",
            items: {
              type: "object",
              properties: {
                "IDDIPLOMADO": {
                  type: "string",
                  label: "ID DO DIPLOMADO"
                },
                "NOMEDIPLOMADO": {
                  type: "string",
                  label: "NOME DO DIPLOMADO"
                },
                "NOME_SOCIAL_DIPLOMADO": {
                  type: "string"
                },
                "SEXODIPLOMADO": {
                  "enum": ["", "M", "F"],
                  label: "SEXO DO DIPLOMADO"
                },
                "NACIONALIDADEDIPLOMADO": {
                  type: "string"
                },
                "CODIGOMUNICIPIONATURALIDADE": {
                  type: "string"
                },
                "NOMEMUNICIPIONATURALIDADE": {
                  type: "string"
                },
                "UFNATURALIDADE": {
                  type: "string"
                },
                "NOME_MUNICIPIO_ESTRANGEIRO": {
                  type: "string"
                },
                "TIPO_DOC_OUTRO_DOC_IDENTIFICACAO": {
                  type: "string"
                },
                "IDENTIFICADOR_OUTRO_DOC_IDENTIFICACAO": {
                  type: "string"
                },
                "CPFNATURALIDADE": {
                  type: "string"
                },
                "NUMERORG": {
                  type: "string"
                },
                "UFRG": {
                  type: "string"
                },
                "ORGAOEXPEDIDORRG": {
                  type: "string"
                },
                "DATANASCIMENTORG": {
                  type: "string",
                  format: "date"
                },
                "NOMECURSODADOSCURSO": {
                  type: "string"
                },
                "CODIGOCURSOEMECDADOSCURSO": {
                  type: "string"
                },
                "HABILITACAO_DADOS_CURSO": {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      "NOMEHABILITACAO": { type: "string"},
                      "DATAHABILITACAO": { type: "string", format: "date" }
                    }
                  }
                },
                "MODALIDADEDADOSCURSO": {
                  type: "string"
                },
                "TITULOCONFERIDODADOSCURSO": {
                  type: "string"
                },
                "GRAUCONFERIDODADOSCURSO": {
                  type: "string"
                },
                "LOGRADOUROENDERECOCURSO": {
                  type: "string"
                },
                "COMPLEMENTOENDERECOCURSO": {
                  type: "string"
                },
                "BAIRROENDERECOCURSO": {
                  type: "string"
                },
                "NUMEROENDERECOCURSO": {
                  type: "string"
                },
                "CODIGOMUNICIPIOENDERECOCURSO": {
                  type: "string"
                },
                "NOMEMUNICIPIOENDERECOCURSO": {
                  type: "string"
                },
                "UFENDERECOCURSO": {
                  type: "string"
                },
                "CEPENDERECOCURSO": {
                  type: "string"
                },
                "TIPOAUTORIZACAO": {
                  type: "string"
                },
                "NUMEROAUTORIZACAO": {
                  type: "string"
                },
                "DATAAUTORIZACAO": {
                  type: "string",
                  format: "date"
                },
                "VEICULO_PUB_AUTORIZACAO": {
                  type: "string"
                },
                "DATA_PUB_AUTORIZACAO": {
                  type: "string",
                  format: "date"
                },
                "SECAO_PUB_AUTORIZACAO": {
                  type: "string"
                },
                "PAGINA_PUB_AUTORIZACAO": {
                  type: "string"
                },
                "NUM_DOU_AUTORIZACAO": {
                  type: "string"
                },
                "TIPORECONHECIMENTO": {
                  type: "string"
                },
                "NUMERORECONHECIMENTO": {
                  type: "string"
                },
                "DATARECONHECIMENTO": {
                  type: "string",
                  format: "date"
                },
                "DATAPUBRECONHECIMENTO": {
                  type: "string",
                  format: "date"
                },
                "VEICULO_PUB_RECONHECIMENTO": {
                  type: "string"
                },
                "NUM_DOU_RECONHECIMENTO": {
                  type: "string"
                },
                "NUM_PROCESSO_TRAMITACAO_EMEC_RECONHECIMENTO": {
                  type: "string"
                },
                "TIPO_PROCESSO_TRAMITACAO_EMEC_RECONHECIMENTO": {
                  type: "string"
                },
                "DATA_CADASTRO_TRAMITACAO_EMEC_RECONHECIMENTO": {
                  type: "string",
                  format: "date"
                },
                "DATA_PROTOCOLO_TRAMITACAO_EMEC_RECONHECIMENTO": {
                  type: "string",
                  format: "date"
                },
                "TIPO_RENOVACAO_RECONHECIMENTO": {
                  type: "string"
                },
                "NUM_RENOVACAO_RECONHECIMENTO": {
                  type: "string"
                },
                "DATA_RENOVACAO_RECONHECIMENTO": {
                  type: "string",
                  format: "date"
                },
                "VEICULO_PUB_RENOVACAO_RECONHECIMENTO": {
                  type: "string"
                },
                "DATA_PUB_RENOVACAO_RECONHECIMENTO": {
                  type: "string",
                  format: "date"
                },
                "SECAO_PUB_RENOVACAO_RECONHECIMENTO": {
                  type: "string"
                },
                "PAG_PUB_RENOVACAO_RECONHECIMENTO": {
                  type: "string"
                },
                "NUM_DOU_RENOVACAO_RECONHECIMENTO": {
                  type: "string"
                },
                "NOMEIESEMISSORA": {
                  type: "string"
                },
                "CODIGOMECIESEMISSORA": {
                  type: "string"
                },
                "CNPJIESEMISSORA": {
                  type: "string"
                },
                "LOGRADOUROENDERECO": {
                  type: "string"
                },
                "NUMEROENDERECO": {
                  type: "string"
                },
                "BAIRROENDERECO": {
                  type: "string"
                },
                "CODIGOMUNICIPIOENDERECO": {
                  type: "string"
                },
                "NOMEMUNICIPIOENDERECO": {
                  type: "string"
                },
                "UFENDERECO": {
                  type: "string"
                },
                "CEPENDERECO": {
                  type: "string"
                },
                "TIPOCREDENCIAMENTO": {
                  type: "string"
                },
                "NUMCREDENCIAMENTO": {
                  type: "string"
                },
                "DATACREDENCIAMENTO": {
                  type: "string",
                  format: "date"
                },
                "DATAPUBCREDENCIAMENTO": {
                  type: "string",
                  format: "date"
                },
                "SECAOPUBCREDENCIAMENTO": {
                  type: "string"
                },
                "PAGINAPUBCREDENCIAMENTO": {
                  type: "string"
                },
                "VEICULO_PUB_CREDENCIAMENTO_IESEMISSORA": {
                  type: "string"
                },
                "NUM_DOU_CREDENCIAMENTO_IESEMISSORA": {
                  type: "string"
                },
                "TIPORECREDENCIAMENTO": {
                  type: "string"
                },
                "NUMRECREDENCIAMENTO": {
                  type: "string"
                },
                "DATARECREDENCIAMENTO": {
                  type: "string",
                  format: "date"
                },
                "DATAPUBRECREDENCIAMENTO": {
                  type: "string",
                  format: "date"
                },
                "SECAOPUBRECREDENCIAMENTO": {
                  type: "string"
                },
                "PAGINAPUBRECREDENCIAMENTO": {
                  type: "string"
                },
                "VEICULO_PUB_RECREDENCIAMENTO_IESEMISSORA": {
                  type: "string"
                },
                "RAZAOSOCIALMANTENEDORA": {
                  type: "string"
                },
                "CNPJMANTENEDORA": {
                  type: "string"
                },
                "LOGRADOUROENDMANTENEDORA": {
                  type: "string"
                },
                "NUMEROENDMANTENEDORA": {
                  type: "string"
                },
                "BAIRROENDMANTENEDORA": {
                  type: "string"
                },
                "CODIGOMUNICIPENDMANTENEDORA": {
                  type: "string"
                },
                "NOMEMUNICIPIOENDMANTENEDORA": {
                  type: "string"
                },
                "UFENDMANTENEDORA": {
                  type: "string"
                },
                "CEPENDMANTENEDORA": {
                  type: "string"
                },
                "NOMEIESREGISTRADORA": {
                  type: "string"
                },
                "CODIGOMECIESREGISTRADORA": {
                  type: "string"
                },
                "CNPJIESREGISTRADORA": {
                  type: "string"
                },
                "LOGRADOURENDIESREGISTRADORA": {
                  type: "string"
                },
                "NUMEROENDIESREGISTRADORA": {
                  type: "string"
                },
                "BAIRROENDIESREGISTRADORA": {
                  type: "string"
                },
                "CODMUNENDIESREGISTRADORA": {
                  type: "string"
                },
                "NOMEMUNENDIESREGISTRADORA": {
                  type: "string"
                },
                "UFENDIESREGISTRADORA": {
                  type: "string"
                },
                "CEPENDIESREGISTRADORA": {
                  type: "string"
                },
                "TIPOCREDENCIAMENTOEND": {
                  type: "string"
                },
                "NUMCREDENCIAMENTOENDERECO": {
                  type: "string"
                },
                "DATACREDENCIAMENTOEND": {
                  type: "string",
                  format: "date"
                },
                "DATAPUBCREDENCIAMENTOEND": {
                  type: "string",
                  format: "date"
                },
                "SECAOPUBCREDENCIAMENTOEND": {
                  type: "string"
                },
                "PAGINAPUBCREDENCIAMENTOEND": {
                  type: "string"
                },
                "VEICULO_PUB_CREDENCIAMENTO_IESREGISTRADORA": {
                  type: "string"
                },
                "NUM_DOU_CREDENCIAMENTO_IESREGISTRADORA": {
                  type: "string"
                },
                "TIPORECREDENCIAMENTOCRED": {
                  type: "string"
                },
                "NUMRECREDENCIACREDENCIAMENTO": {
                  type: "string"
                },
                "DATARECREDENCIACRED": {
                  type: "string",
                  format: "date"
                },
                "DATAPUBRECREDENCIACRED": {
                  type: "string",
                  format: "date"
                },
                "SECAOPUBRECREDENCIACRED": {
                  type: "string"
                },
                "PAGINAPUBRECREDENCIACRED": {
                  type: "string"
                },
                "VEICULO_PUB_RECREDENCIAMENTO_IESREGISTRADORA": {
                  type: "string"
                },
                "NUM_DOU_RECREDENCIAMENTO_IESREGISTRADORA": {
                  type: "string"
                },
                "RAZAOSOMANTRECREDENCIAMENTO": {
                  type: "string"
                },
                "CNPJMANTRECREDENCIAMENTO": {
                  type: "string"
                },
                "LOGRENDMANTRECREDENCIAMENTO": {
                  type: "string"
                },
                "NUMENDMANTRECREDENCIAMENTO": {
                  type: "string"
                },
                "BAIRENDMANTRECREDENCIAMENTO": {
                  type: "string"
                },
                "CODMUNENDMANTRECREDENCIAMENTO": {
                  type: "string"
                },
                "NOMEMURECRTIPO": {
                  type: "string"
                },
                "NOMEMUENDMANTRECREDENCIAMENTO": {
                  type: "string"
                },
                "UFENDMANTRECREDENCIAMENTO": {
                  type: "string"
                },
                "CEPENDMANTRECREDENCIAMENTO": {
                  type: "string"
                },
                "LIVROREGISTROLIVROREGISTRO": {
                  type: "string"
                },
                "NUMFOLHADIPLOMALIVROREGISTRO": {
                  type: "string"
                },
                "NUMSEQDIPLOMALIVROREGISTRO": {
                  type: "string"
                },
                "PROCESSODIPLOMALIVROREGISTRO": {
                  type: "string"
                },
                "DATACOLAGRAULIVROREGISTRO": {
                  type: "string",
                  format: "date"
                },
                "DATAEXPEDDIPLOMALIVROREGISTRO": {
                  type: "string",
                  format: "date"
                },
                "DATAREGDIPLOMALIVROREGISTRO": {
                  type: "string",
                  format: "date"
                },
                "NOMERESPONSAVELREGISTRO": {
                  type: "string"
                },
                "CPFRESPONSAVELREGISTRO": {
                  type: "string"
                },
                "NUMRARESPONSAVELREGISTRO": {
                  type: "string"
                },
                "EMAIL": {
                  type: "string",
                  format: "email"
                },
                "CELULAR": {
                  type: "string"
                },
                "DATACONCLUSAOCURSO": {
                  type: "string",
                  format: "date"
                },
                "LIVROREGISTROTERMOCOLACAO": {
                  type: "string"
                },
                "FOLHAREGISTROTERMOCOLACAO": {
                  type: "string"
                },
                "NUMREGISTROTERMOCOLACAO": {
                  type: "string"
                },
                "DATAREGISTROTERMOCOLACAO": {
                  type: "string",
                  format: "date"
                },
                "SECAORECONHECIMENTO": {
                  type: "string"
                },
                "PAGINASECAORECONHECIMENTO": {
                  type: "string"
                },
                "NOMEPOLO": {
                  type: "string"
                },
                "LOGRADOUROENDERECOPOLO": {
                  type: "string"
                },
                "NUMEROENDERECOPOLO": {
                  type: "string"
                },
                "COMPLEMENTOENDERECOPOLO": {
                  type: "string"
                },
                "BAIRROENDERECOPOLO": {
                  type: "string"
                },
                "NOMEMUNICIPIOENDERECOPOLO": {
                  type: "string"
                },
                "UFENDERECOPOLO": {
                  type: "string"
                },
                "CEPENDERECOPOLO": {
                  type: "string"
                },
                "CODIGOEMECPOLO": {
                  type: "string"
                },
                "CODIGOMUNICIPIOENDERECOPOLO": {
                  type: "string"
                },
                "VIA2": {
                  type: "string"
                },
                "OBSERVACOES_SEGUNDA_VIA": {
                  type: "string"
                },
                "TIPO_INSTITUICAO": {
                  type: "string"
                },
                "FUNCAO_RESPONSAVEL": {
                  type: "string"
                },
                "TEXTO_MANTENEDORA": {
                  type: "string"
                },
                "TEXTO_APOSTILA": {
                  type: "string"
                },
                "DocumentacaoAcademica": {
                  type: "object",
                  properties: {
                    "DadosPrivadosDiplomado": { 
                      type: "object",
                      properties:{
                        "Filiacao": {
                          type: "array",
                          items: {
                            type: "object",
                            properties: {
                              "Nome": { type: "string"},
                              "NomeSocial": { type: "string" },
                              "Sexo": { "enum": ["", "M", "F"] }
                            }
                          }
                        },
                        "HistoricoEscolar": {
                          type: "object",
                          properties: {
                            "CodigoCurrilo": { type: "string" }
                          }
                        }
                      }
                    },
                    "TermoResponsabilidadeEmissora": { 
                      type: "object",
                      properties:{
  
                      }
                    },
                    "DocumentacaoComprobatoria": { 
                      type: "object",
                      properties:{
  
                      }
                    }
                  }
                },
                "HistoricoEscolar": {
                  type: "object",
                  properties: {
                    "Aluno": { 
                      type: "object",
                      properties:{
  
                      }
                    },
                    "DadosCurso": { 
                      type: "object",
                      properties:{
  
                      }
                    },
                    "lesEmissora": { 
                      type: "object",
                      properties:{
  
                      }
                    },
                    "HistoricoEscolar": { 
                      type: "object",
                      properties:{
  
                      }
                    },
                    "Urlhistorico": { type: "string" }
                  }
                }
              }
            }
          }
        }
      }
    },
    type: "object",
    /* properties: {
      historico: {
        $ref: '#/definitions/historico',
      }
    }, */
    properties: {
      "lote": {
        type: "string",
        label: "LOTE"
      },
      "descricaoLote": {
        type: "string",
        label: "DESCRIÇÃO LOTE"
      },
      "design": {
        type: "string",
        label: "Desing"
      },
      "2via": {
        type: "boolean",
        label: "2º VIA"
      },
      "diplomas": {
        type: "array",
        items: {
          type: "object",
          properties: {
            "IDDIPLOMADO": {
              type: "string",
              label: "ID DO DIPLOMADO"
            },
            "NOMEDIPLOMADO": {
              type: "string",
              label: "NOME DO DIPLOMADO"
            },
            "NOME_SOCIAL_DIPLOMADO": {
              type: "string"
            },
            "SEXODIPLOMADO": {
              "enum": ["", "M", "F"],
              label: "SEXO DO DIPLOMADO"
            },
            "NACIONALIDADEDIPLOMADO": {
              type: "string"
            },
            "CODIGOMUNICIPIONATURALIDADE": {
              type: "string"
            },
            "NOMEMUNICIPIONATURALIDADE": {
              type: "string"
            },
            "UFNATURALIDADE": {
              type: "string"
            },
            "NOME_MUNICIPIO_ESTRANGEIRO": {
              type: "string"
            },
            "TIPO_DOC_OUTRO_DOC_IDENTIFICACAO": {
              type: "string"
            },
            "IDENTIFICADOR_OUTRO_DOC_IDENTIFICACAO": {
              type: "string"
            },
            "CPFNATURALIDADE": {
              type: "string"
            },
            "NUMERORG": {
              type: "string"
            },
            "UFRG": {
              type: "string"
            },
            "ORGAOEXPEDIDORRG": {
              type: "string"
            },
            "DATANASCIMENTORG": {
              type: "string",
              format: "date"
            },
            "NOMECURSODADOSCURSO": {
              type: "string"
            },
            "CODIGOCURSOEMECDADOSCURSO": {
              type: "string"
            },
            "HABILITACAO_DADOS_CURSO": {
              type: "array",
              items: {
                type: "object",
                properties: {
                  "NOMEHABILITACAO": { type: "string"},
                  "DATAHABILITACAO": { type: "string", format: "date" }
                }
              }
            },
            "MODALIDADEDADOSCURSO": {
              type: "string"
            },
            "TITULOCONFERIDODADOSCURSO": {
              type: "string"
            },
            "GRAUCONFERIDODADOSCURSO": {
              type: "string"
            },
            "LOGRADOUROENDERECOCURSO": {
              type: "string"
            },
            "COMPLEMENTOENDERECOCURSO": {
              type: "string"
            },
            "BAIRROENDERECOCURSO": {
              type: "string"
            },
            "NUMEROENDERECOCURSO": {
              type: "string"
            },
            "CODIGOMUNICIPIOENDERECOCURSO": {
              type: "string"
            },
            "NOMEMUNICIPIOENDERECOCURSO": {
              type: "string"
            },
            "UFENDERECOCURSO": {
              type: "string"
            },
            "CEPENDERECOCURSO": {
              type: "string"
            },
            "TIPOAUTORIZACAO": {
              type: "string"
            },
            "NUMEROAUTORIZACAO": {
              type: "string"
            },
            "DATAAUTORIZACAO": {
              type: "string",
              format: "date"
            },
            "VEICULO_PUB_AUTORIZACAO": {
              type: "string"
            },
            "DATA_PUB_AUTORIZACAO": {
              type: "string",
              format: "date"
            },
            "SECAO_PUB_AUTORIZACAO": {
              type: "string"
            },
            "PAGINA_PUB_AUTORIZACAO": {
              type: "string"
            },
            "NUM_DOU_AUTORIZACAO": {
              type: "string"
            },
            "TIPORECONHECIMENTO": {
              type: "string"
            },
            "NUMERORECONHECIMENTO": {
              type: "string"
            },
            "DATARECONHECIMENTO": {
              type: "string",
              format: "date"
            },
            "DATAPUBRECONHECIMENTO": {
              type: "string",
              format: "date"
            },
            "VEICULO_PUB_RECONHECIMENTO": {
              type: "string"
            },
            "NUM_DOU_RECONHECIMENTO": {
              type: "string"
            },
            "NUM_PROCESSO_TRAMITACAO_EMEC_RECONHECIMENTO": {
              type: "string"
            },
            "TIPO_PROCESSO_TRAMITACAO_EMEC_RECONHECIMENTO": {
              type: "string"
            },
            "DATA_CADASTRO_TRAMITACAO_EMEC_RECONHECIMENTO": {
              type: "string",
              format: "date"
            },
            "DATA_PROTOCOLO_TRAMITACAO_EMEC_RECONHECIMENTO": {
              type: "string",
              format: "date"
            },
            "TIPO_RENOVACAO_RECONHECIMENTO": {
              type: "string"
            },
            "NUM_RENOVACAO_RECONHECIMENTO": {
              type: "string"
            },
            "DATA_RENOVACAO_RECONHECIMENTO": {
              type: "string",
              format: "date"
            },
            "VEICULO_PUB_RENOVACAO_RECONHECIMENTO": {
              type: "string"
            },
            "DATA_PUB_RENOVACAO_RECONHECIMENTO": {
              type: "string",
              format: "date"
            },
            "SECAO_PUB_RENOVACAO_RECONHECIMENTO": {
              type: "string"
            },
            "PAG_PUB_RENOVACAO_RECONHECIMENTO": {
              type: "string"
            },
            "NUM_DOU_RENOVACAO_RECONHECIMENTO": {
              type: "string"
            },
            "NOMEIESEMISSORA": {
              type: "string"
            },
            "CODIGOMECIESEMISSORA": {
              type: "string"
            },
            "CNPJIESEMISSORA": {
              type: "string"
            },
            "LOGRADOUROENDERECO": {
              type: "string"
            },
            "NUMEROENDERECO": {
              type: "string"
            },
            "BAIRROENDERECO": {
              type: "string"
            },
            "CODIGOMUNICIPIOENDERECO": {
              type: "string"
            },
            "NOMEMUNICIPIOENDERECO": {
              type: "string"
            },
            "UFENDERECO": {
              type: "string"
            },
            "CEPENDERECO": {
              type: "string"
            },
            "TIPOCREDENCIAMENTO": {
              type: "string"
            },
            "NUMCREDENCIAMENTO": {
              type: "string"
            },
            "DATACREDENCIAMENTO": {
              type: "string",
              format: "date"
            },
            "DATAPUBCREDENCIAMENTO": {
              type: "string",
              format: "date"
            },
            "SECAOPUBCREDENCIAMENTO": {
              type: "string"
            },
            "PAGINAPUBCREDENCIAMENTO": {
              type: "string"
            },
            "VEICULO_PUB_CREDENCIAMENTO_IESEMISSORA": {
              type: "string"
            },
            "NUM_DOU_CREDENCIAMENTO_IESEMISSORA": {
              type: "string"
            },
            "TIPORECREDENCIAMENTO": {
              type: "string"
            },
            "NUMRECREDENCIAMENTO": {
              type: "string"
            },
            "DATARECREDENCIAMENTO": {
              type: "string",
              format: "date"
            },
            "DATAPUBRECREDENCIAMENTO": {
              type: "string",
              format: "date"
            },
            "SECAOPUBRECREDENCIAMENTO": {
              type: "string"
            },
            "PAGINAPUBRECREDENCIAMENTO": {
              type: "string"
            },
            "VEICULO_PUB_RECREDENCIAMENTO_IESEMISSORA": {
              type: "string"
            },
            "RAZAOSOCIALMANTENEDORA": {
              type: "string"
            },
            "CNPJMANTENEDORA": {
              type: "string"
            },
            "LOGRADOUROENDMANTENEDORA": {
              type: "string"
            },
            "NUMEROENDMANTENEDORA": {
              type: "string"
            },
            "BAIRROENDMANTENEDORA": {
              type: "string"
            },
            "CODIGOMUNICIPENDMANTENEDORA": {
              type: "string"
            },
            "NOMEMUNICIPIOENDMANTENEDORA": {
              type: "string"
            },
            "UFENDMANTENEDORA": {
              type: "string"
            },
            "CEPENDMANTENEDORA": {
              type: "string"
            },
            "NOMEIESREGISTRADORA": {
              type: "string"
            },
            "CODIGOMECIESREGISTRADORA": {
              type: "string"
            },
            "CNPJIESREGISTRADORA": {
              type: "string"
            },
            "LOGRADOURENDIESREGISTRADORA": {
              type: "string"
            },
            "NUMEROENDIESREGISTRADORA": {
              type: "string"
            },
            "BAIRROENDIESREGISTRADORA": {
              type: "string"
            },
            "CODMUNENDIESREGISTRADORA": {
              type: "string"
            },
            "NOMEMUNENDIESREGISTRADORA": {
              type: "string"
            },
            "UFENDIESREGISTRADORA": {
              type: "string"
            },
            "CEPENDIESREGISTRADORA": {
              type: "string"
            },
            "TIPOCREDENCIAMENTOEND": {
              type: "string"
            },
            "NUMCREDENCIAMENTOENDERECO": {
              type: "string"
            },
            "DATACREDENCIAMENTOEND": {
              type: "string",
              format: "date"
            },
            "DATAPUBCREDENCIAMENTOEND": {
              type: "string",
              format: "date"
            },
            "SECAOPUBCREDENCIAMENTOEND": {
              type: "string"
            },
            "PAGINAPUBCREDENCIAMENTOEND": {
              type: "string"
            },
            "VEICULO_PUB_CREDENCIAMENTO_IESREGISTRADORA": {
              type: "string"
            },
            "NUM_DOU_CREDENCIAMENTO_IESREGISTRADORA": {
              type: "string"
            },
            "TIPORECREDENCIAMENTOCRED": {
              type: "string"
            },
            "NUMRECREDENCIACREDENCIAMENTO": {
              type: "string"
            },
            "DATARECREDENCIACRED": {
              type: "string",
              format: "date"
            },
            "DATAPUBRECREDENCIACRED": {
              type: "string",
              format: "date"
            },
            "SECAOPUBRECREDENCIACRED": {
              type: "string"
            },
            "PAGINAPUBRECREDENCIACRED": {
              type: "string"
            },
            "VEICULO_PUB_RECREDENCIAMENTO_IESREGISTRADORA": {
              type: "string"
            },
            "NUM_DOU_RECREDENCIAMENTO_IESREGISTRADORA": {
              type: "string"
            },
            "RAZAOSOMANTRECREDENCIAMENTO": {
              type: "string"
            },
            "CNPJMANTRECREDENCIAMENTO": {
              type: "string"
            },
            "LOGRENDMANTRECREDENCIAMENTO": {
              type: "string"
            },
            "NUMENDMANTRECREDENCIAMENTO": {
              type: "string"
            },
            "BAIRENDMANTRECREDENCIAMENTO": {
              type: "string"
            },
            "CODMUNENDMANTRECREDENCIAMENTO": {
              type: "string"
            },
            "NOMEMURECRTIPO": {
              type: "string"
            },
            "NOMEMUENDMANTRECREDENCIAMENTO": {
              type: "string"
            },
            "UFENDMANTRECREDENCIAMENTO": {
              type: "string"
            },
            "CEPENDMANTRECREDENCIAMENTO": {
              type: "string"
            },
            "LIVROREGISTROLIVROREGISTRO": {
              type: "string"
            },
            "NUMFOLHADIPLOMALIVROREGISTRO": {
              type: "string"
            },
            "NUMSEQDIPLOMALIVROREGISTRO": {
              type: "string"
            },
            "PROCESSODIPLOMALIVROREGISTRO": {
              type: "string"
            },
            "DATACOLAGRAULIVROREGISTRO": {
              type: "string",
              format: "date"
            },
            "DATAEXPEDDIPLOMALIVROREGISTRO": {
              type: "string",
              format: "date"
            },
            "DATAREGDIPLOMALIVROREGISTRO": {
              type: "string",
              format: "date"
            },
            "NOMERESPONSAVELREGISTRO": {
              type: "string"
            },
            "CPFRESPONSAVELREGISTRO": {
              type: "string"
            },
            "NUMRARESPONSAVELREGISTRO": {
              type: "string"
            },
            "EMAIL": {
              type: "string",
              format: "email"
            },
            "CELULAR": {
              type: "string"
            },
            "DATACONCLUSAOCURSO": {
              type: "string",
              format: "date"
            },
            "LIVROREGISTROTERMOCOLACAO": {
              type: "string"
            },
            "FOLHAREGISTROTERMOCOLACAO": {
              type: "string"
            },
            "NUMREGISTROTERMOCOLACAO": {
              type: "string"
            },
            "DATAREGISTROTERMOCOLACAO": {
              type: "string",
              format: "date"
            },
            "SECAORECONHECIMENTO": {
              type: "string"
            },
            "PAGINASECAORECONHECIMENTO": {
              type: "string"
            },
            "NOMEPOLO": {
              type: "string"
            },
            "LOGRADOUROENDERECOPOLO": {
              type: "string"
            },
            "NUMEROENDERECOPOLO": {
              type: "string"
            },
            "COMPLEMENTOENDERECOPOLO": {
              type: "string"
            },
            "BAIRROENDERECOPOLO": {
              type: "string"
            },
            "NOMEMUNICIPIOENDERECOPOLO": {
              type: "string"
            },
            "UFENDERECOPOLO": {
              type: "string"
            },
            "CEPENDERECOPOLO": {
              type: "string"
            },
            "CODIGOEMECPOLO": {
              type: "string"
            },
            "CODIGOMUNICIPIOENDERECOPOLO": {
              type: "string"
            },
            "VIA2": {
              type: "string"
            },
            "OBSERVACOES_SEGUNDA_VIA": {
              type: "string"
            },
            "TIPO_INSTITUICAO": {
              type: "string"
            },
            "FUNCAO_RESPONSAVEL": {
              type: "string"
            },
            "TEXTO_MANTENEDORA": {
              type: "string"
            },
            "TEXTO_APOSTILA": {
              type: "string"
            },
            "DocumentacaoAcademica": {
              type: "object",
              properties: {
                "DadosPrivadosDiplomado": { 
                  type: "object",
                  properties:{
                    "Filiacao": {
                      type: "array",
                      items: {
                        type: "object",
                        properties: {
                          "Nome": { type: "string"},
                          "NomeSocial": { type: "string" },
                          "Sexo": { "enum": ["", "M", "F"] }
                        }
                      }
                    },
                    "HistoricoEscolar": {
                      type: "object",
                      properties: {
                        "CodigoCurrilo": { type: "string" },
                        "ElementosHistorico": {
                          type: "array",
                          items: {
                            type: "object",
                            properties: {
                              "Disciplina": { 
                                type: "object",
                                properties:{
                                  "CodigoDisciplina": { type: "string"},
                                  "NomeDisciplina": { type: "string"},
                                  "PeriodoLetivo": { type: "string"},
                                  "CargaHoraria": {
                                    type: "array",
                                    items: {
                                      type: "object",
                                      properties: {
                                        "HoraAula": { type: "string"},
                                        "HoraRelogio": { type: "string" },
                                        "Etiqueta": { type: "string" }
                                      }
                                    }
                                  },
                                  "Nota": { type: "string"},
                                  "Aprovado": { 
                                    type: "object",
                                    properties:{
                                      "FormaIntegralizacao": { type: "string"}
                                    }
                                  },
                                  "Docentes": {
                                    type: "array",
                                    items: {
                                      type: "object",
                                      properties: {
                                        "Docente": { 
                                          type: "object",
                                          properties:{
                                            "Nome": { type: "string"},
                                            "Titulacao": { type: "string" },
                                            "Lattes": { type: "string" },
                                            "CPF": { type: "string" }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "AtividadeComplementar" : {
                                type: "object",
                                properties:{
                                  "CodigoAtividadeComplementar": { type: "string"},
                                  "DataInicio": { type: "string" , format: "date" },
                                  "DataFim": { type: "string" , format: "date" },
                                  "DataRegistro": { type: "string" , format: "date" },
                                  "TipoAtividadeComplementar": { type: "string"},
                                  "Descricao": { type: "string"},
                                  "CargaHorariaEmHoraRelogio" : {
                                    type: "array",
                                    items: {
                                      type: "object",
                                      properties: {
                                        "HoraRelogio": { type: "string"},
                                        "Etiqueta": { type: "string" }
                                      }
                                    }
                                  },
                                  "DocentesResponsaveisPelaValidacao" : {
                                    type: "object",
                                    properties: {
                                      "Docente" : {
                                        type: "array",
                                        items: {
                                          type: "object",
                                          properties: {
                                            "Nome": { type: "string"},
                                            "Titulacao": { type: "string" },
                                            "Lattes": { type: "string" },
                                            "CPF": { type: "string" }
                                          }
                                        }
                                      }
                                    }
                                  },
                                }
                              }
                            }
                          }
                        },
                        "DataEmissaoHistorico": { type: "string", format: "date" },
                        "SituacaoAluno": { type: "string" },
                        "SituacaoAtualDiscente" : {
                          type: "object",
                          properties: {
                            "PeriodoLetivo": { type: "string" },
                            "Formado" : {
                              type: "object",
                              properties: {
                                "DataColacaoGrau": { type: "string" , format: "date" },
                                "DataConclusaoCurso": { type: "string", format: "date" },
                                "DataExpedicaoDiploma": { type: "string",  format: "date" },
                              }
                            }
                          }
                        },
                        "ENADE" : {
                          type: "array",
                          items: {
                            type: "object",
                            properties: {
                              "NaoHabilitado" : {
                                type: "object",
                                properties: {
                                  "Condicao": { type: "string" },
                                  "Edicao": { type: "string" },
                                  "OutroMotivo": { type: "string" }
                                }
                              }
                            }
                          }
                        },
                        "DataProvaEnade": { type: "string" , format: "date" },
                        "CargaHorariaCursoIntegralizada" : {
                          type: "object",
                          properties: {
                            "HoraAula": { type: "string" },
                            "HoraRelogio": { type: "string" },
                          }
                        }
                      }
                    }
                  }
                },
                "TermoResponsabilidadeEmissora": { 
                  type: "object",
                  properties:{

                  }
                },
                "DocumentacaoComprobatoria": { 
                  type: "object",
                  properties:{

                  }
                }
              }
            },
            "HistoricoEscolar": {
              type: "object",
              properties: {
                "Aluno": { 
                  type: "object",
                  properties:{

                  }
                },
                "DadosCurso": { 
                  type: "object",
                  properties:{

                  }
                },
                "lesEmissora": { 
                  type: "object",
                  properties:{

                  }
                },
                "HistoricoEscolar": { 
                  type: "object",
                  properties:{

                  }
                },
                "Urlhistorico": { type: "string" }
              }
            }
          }
        }
      }
    },
    required: ["title"]
  };