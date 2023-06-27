export default {
  type: "Categorization",
  elements: [
    {
      type: "Category",
      label: "Formulário",
      elements: [
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/lote"
            },
            {
              type: "Control",
              scope: "#/properties/descricaoLote"
            },
            {
              type: "Control",
              scope: "#/properties/design"
            }
          ]
        },
        {
          type: "VerticalLayout",
          elements: [
            {
              type: "VerticalLayout",
              elements: [
                {
                  type: "Control",
                  scope: "#/properties/2via"
                },
                {
                  type: "Control",
                  label: "Diplomas",
                  scope: "#/properties/diplomas",
                  options:{
                    showSortButtons: true,
                    detail: {
                      type: "VerticalLayout",
                      elements: [
                        {
                          type: "VerticalLayout",
                          elements: [
                            {
                              type: "Control",
                              scope: "#/properties/IDDIPLOMADO",
                              label: "ID do Diplomado"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/NOMEDIPLOMADO",
                              label: "Nome do Diplomado"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/NOME_SOCIAL_DIPLOMADO",
                              label: "Nome Social do Diplomado"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/SEXODIPLOMADO",
                              label: "Sexo do Diplomado"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/NACIONALIDADEDIPLOMADO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/CODIGOMUNICIPIONATURALIDADE"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/NOMEMUNICIPIONATURALIDADE"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/UFNATURALIDADE"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/NOME_MUNICIPIO_ESTRANGEIRO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/TIPO_DOC_OUTRO_DOC_IDENTIFICACAO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/IDENTIFICADOR_OUTRO_DOC_IDENTIFICACAO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/CPFNATURALIDADE"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/NUMERORG"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/ORGAOEXPEDIDORRG"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/DATANASCIMENTORG"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/NOMECURSODADOSCURSO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/CODIGOCURSOEMECDADOSCURSO"
                            },
                            {
                              type: "Control",
                              label: "Habilitação dados Curso",
                              scope: "#/properties/HABILITACAO_DADOS_CURSO",
                              options:{
                                showSortButtons: true,
                                detail: {
                                  type: "VerticalLayout",
                                  elements: [
                                    {
                                      type: "Control",
                                      scope: "#/properties/NOMEHABILITACAO",
                                      label: "Nome Habilitação"
                                    },
                                    {
                                      type: "Control",
                                      scope: "#/properties/DATAHABILITACAO",
                                      label: "Data Habilitação"
                                    }
                                  ]
                                }
                              }
                            },
                            {
                              type: "Control",
                              scope: "#/properties/MODALIDADEDADOSCURSO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/TITULOCONFERIDODADOSCURSO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/GRAUCONFERIDODADOSCURSO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/LOGRADOUROENDERECOCURSO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/COMPLEMENTOENDERECOCURSO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/BAIRROENDERECOCURSO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/NUMEROENDERECOCURSO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/CODIGOMUNICIPIOENDERECOCURSO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/NOMEMUNICIPIOENDERECOCURSO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/UFENDERECOCURSO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/CEPENDERECOCURSO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/TIPOAUTORIZACAO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/NUMEROAUTORIZACAO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/DATAAUTORIZACAO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/VEICULO_PUB_AUTORIZACAO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/DATA_PUB_AUTORIZACAO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/SECAO_PUB_AUTORIZACAO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/PAGINA_PUB_AUTORIZACAO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/NUM_DOU_AUTORIZACAO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/TIPORECONHECIMENTO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/NUMERORECONHECIMENTO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/DATARECONHECIMENTO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/DATAPUBRECONHECIMENTO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/VEICULO_PUB_RECONHECIMENTO"
                            },
                            {
                              type: "HorizontalLayout",
                              elements: [
                                {
                                  type: "Control",
                                  scope: "#/properties/NUM_DOU_RECONHECIMENTO"
                                },
                                {
                                  type: "Control",
                                  scope: "#/properties/NUM_PROCESSO_TRAMITACAO_EMEC_RECONHECIMENTO"
                                },
                                {
                                  type: "Control",
                                  scope: "#/properties/DATA_CADASTRO_TRAMITACAO_EMEC_RECONHECIMENTO"
                                },
                                {
                                  type: "Control",
                                  scope: "#/properties/DATA_PROTOCOLO_TRAMITACAO_EMEC_RECONHECIMENTO"
                                },
                                {
                                  type: "Control",
                                  scope: "#/properties/TIPO_RENOVACAO_RECONHECIMENTO"
                                },
                                {
                                  type: "Control",
                                  scope: "#/properties/NUM_RENOVACAO_RECONHECIMENTO"
                                },
                                {
                                  type: "Control",
                                  scope: "#/properties/DATA_RENOVACAO_RECONHECIMENTO"
                                }
                              ]
                            },
                            {
                              type: "Control",
                              scope: "#/properties/VEICULO_PUB_RENOVACAO_RECONHECIMENTO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/DATA_PUB_RENOVACAO_RECONHECIMENTO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/SECAO_PUB_RENOVACAO_RECONHECIMENTO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/PAG_PUB_RENOVACAO_RECONHECIMENTO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/NUM_DOU_RENOVACAO_RECONHECIMENTO"
                            },{
                              type: "Control",
                              scope: "#/properties/NOMEIESEMISSORA"
                            },{
                              type: "Control",
                              scope: "#/properties/CODIGOMECIESEMISSORA"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/CNPJIESEMISSORA"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/LOGRADOUROENDERECO"
                            },{
                              type: "Control",
                              scope: "#/properties/NUMEROENDERECO"
                            },{
                              type: "Control",
                              scope: "#/properties/BAIRROENDERECO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/CODIGOMUNICIPIOENDERECO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/NOMEMUNICIPIOENDERECO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/UFENDERECO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/CEPENDERECO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/TIPOCREDENCIAMENTO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/NUMCREDENCIAMENTO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/DATACREDENCIAMENTO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/DATAPUBCREDENCIAMENTO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/SECAOPUBCREDENCIAMENTO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/PAGINAPUBCREDENCIAMENTO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/VEICULO_PUB_CREDENCIAMENTO_IESEMISSORA"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/NUM_DOU_CREDENCIAMENTO_IESEMISSORA"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/TIPORECREDENCIAMENTO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/NUMRECREDENCIAMENTO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/DATARECREDENCIAMENTO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/DATAPUBRECREDENCIAMENTO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/SECAOPUBRECREDENCIAMENTO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/PAGINAPUBRECREDENCIAMENTO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/VEICULO_PUB_RECREDENCIAMENTO_IESEMISSORA"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/RAZAOSOCIALMANTENEDORA"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/CNPJMANTENEDORA"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/LOGRADOUROENDMANTENEDORA"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/NUMEROENDMANTENEDORA"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/BAIRROENDMANTENEDORA"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/CODIGOMUNICIPENDMANTENEDORA"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/NOMEMUNICIPIOENDMANTENEDORA"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/UFENDMANTENEDORA"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/CEPENDMANTENEDORA"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/NOMEIESREGISTRADORA"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/CODIGOMECIESREGISTRADORA"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/CNPJIESREGISTRADORA"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/LOGRADOURENDIESREGISTRADORA"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/NUMEROENDIESREGISTRADORA"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/BAIRROENDIESREGISTRADORA"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/CODMUNENDIESREGISTRADORA"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/NOMEMUNENDIESREGISTRADORA"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/UFENDIESREGISTRADORA"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/CEPENDIESREGISTRADORA"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/TIPOCREDENCIAMENTOEND"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/DATACREDENCIAMENTOEND"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/DATAPUBCREDENCIAMENTOEND"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/SECAOPUBCREDENCIAMENTOEND"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/PAGINAPUBCREDENCIAMENTOEND"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/VEICULO_PUB_CREDENCIAMENTO_IESREGISTRADORA"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/NUM_DOU_CREDENCIAMENTO_IESREGISTRADORA"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/TIPORECREDENCIAMENTOCRED"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/NUMRECREDENCIACREDENCIAMENTO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/DATARECREDENCIACRED"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/DATAPUBRECREDENCIACRED"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/SECAOPUBRECREDENCIACRED"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/PAGINAPUBRECREDENCIACRED"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/VEICULO_PUB_RECREDENCIAMENTO_IESREGISTRADORA"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/NUM_DOU_RECREDENCIAMENTO_IESREGISTRADORA"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/RAZAOSOMANTRECREDENCIAMENTO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/CNPJMANTRECREDENCIAMENTO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/LOGRENDMANTRECREDENCIAMENTO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/NUMENDMANTRECREDENCIAMENTO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/BAIRENDMANTRECREDENCIAMENTO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/CODMUNENDMANTRECREDENCIAMENTO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/NOMEMURECRTIPO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/NOMEMUENDMANTRECREDENCIAMENTO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/UFENDMANTRECREDENCIAMENTO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/CEPENDMANTRECREDENCIAMENTO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/LIVROREGISTROLIVROREGISTRO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/NUMFOLHADIPLOMALIVROREGISTRO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/NUMSEQDIPLOMALIVROREGISTRO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/PROCESSODIPLOMALIVROREGISTRO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/DATACOLAGRAULIVROREGISTRO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/DATAEXPEDDIPLOMALIVROREGISTRO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/DATAREGDIPLOMALIVROREGISTRO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/NOMERESPONSAVELREGISTRO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/CPFRESPONSAVELREGISTRO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/NUMRARESPONSAVELREGISTRO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/EMAIL"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/CELULAR"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/DATACONCLUSAOCURSO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/LIVROREGISTROTERMOCOLACAO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/FOLHAREGISTROTERMOCOLACAO"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/NUMREGISTROTERMOCOLACAO",
                              label: "Número Registro Termo Locação"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/DATAREGISTROTERMOCOLACAO",
                              label: "Data Registro Termolocação"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/SECAORECONHECIMENTO",
                              label: "Seção reconhecimento"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/PAGINASECAORECONHECIMENTO",
                              label: "Página Reconhecimento"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/NOMEPOLO",
                              label: "Nome Polo"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/LOGRADOUROENDERECOPOLO",
                              label: "Logradouro do Polo"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/NUMEROENDERECOPOLO",
                              label: "N° Endereço do Polo"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/COMPLEMENTOENDERECOPOLO",
                              label: "Complemento Endereço do Polo"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/BAIRROENDERECOPOLO",
                              label: "Bairro do Polo"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/NOMEMUNICIPIOENDERECOPOLO",
                              label: "Município do Polo"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/UFENDERECOPOLO",
                              label: "UF do Polo"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/CEPENDERECOPOLO",
                              label: "CEP do Polo"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/CODIGOEMECPOLO",
                              label: "Código EMEC do Polo"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/CODIGOMUNICIPIOENDERECOPOLO",
                              label: "Código Múnicipio do Polo"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/VIA2",
                              label: "2ª VIA"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/OBSERVACOES_SEGUNDA_VIA",
                              label: "Obs 2ª VIA"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/TIPO_INSTITUICAO",
                              label: "Tipo Instituição"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/TEXTO_MANTENEDORA",
                              label: "Texto Mantenedora"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/TEXTO_APOSTILA",
                              label: "Texto Apostila"
                            },
                            {
                              type: "Group",
                              label: "DocumentacaoAcademica",
                              elements: [
                                {
                                  type: "Control",
                                  label: "Filiação",
                                  scope: "#/properties/DocumentacaoAcademica/properties/DadosPrivadosDiplomado/properties/Filiacao",
                                  options:{
                                    showSortButtons: true,
                                    detail: {
                                      type: "VerticalLayout",
                                      elements: [
                                        {
                                          type: "Control",
                                          scope: "#/properties/Nome",
                                          label: "Nome do Genitor"
                                        },
                                        {
                                          type: "Control",
                                          scope: "#/properties/NomeSocial",
                                          label: "Nome Social do Genitor"
                                        },
                                        {
                                          type: "Control",
                                          scope: "#/properties/Sexo",
                                          label: "Sexo do Genitor"
                                        }
                                      ]
                                    }
                                  }
                                },
                                {
                                  type: "Group",
                                  label: "HistoricoEscolar",
                                  elements: [
                                    {
                                      type: "Control",
                                      scope: "#/properties/DocumentacaoAcademica/properties/DadosPrivadosDiplomado/properties/HistoricoEscolar/properties/CodigoCurrilo"
                                    },
                                    {
                                      type: "Control",
                                      label: "Elementos do Histórico",
                                      scope: "#/properties/DocumentacaoAcademica/properties/DadosPrivadosDiplomado/properties/HistoricoEscolar/properties/ElementosHistorico",
                                      options:{
                                        showSortButtons: true,
                                        detail: {
                                          type: "VerticalLayout",
                                          elements: [
                                            {
                                              type: "Group",
                                              label: "Disciplina",
                                              elements: [
                                                {
                                                  type: "Control",
                                                  scope: "#/properties/Disciplina/properties/CodigoDisciplina",
                                                  label: "Código Disciplina"
                                                },
                                                {
                                                  type: "Control",
                                                  scope: "#/properties/Disciplina/properties/NomeDisciplina",
                                                  label: "Nome Disciplina"
                                                },
                                                {
                                                  type: "Control",
                                                  scope: "#/properties/Disciplina/properties/PeriodoLetivo",
                                                  label: "Período Letivo"
                                                },
                                                {
                                                  type: "Control",
                                                  label: "Carga Horária",
                                                  scope: "#/properties/Disciplina/properties/CargaHoraria",
                                                  options:{
                                                    showSortButtons: true,
                                                    detail: {
                                                      type: "VerticalLayout",
                                                      elements: [
                                                        {
                                                          type: "Control",
                                                          scope: "#/properties/HoraAula",
                                                          label: "Hora aula"
                                                        },
                                                        {
                                                          type: "Control",
                                                          scope: "#/properties/HoraRelogio",
                                                          label: "Hora Relógio"
                                                        },
                                                        {
                                                          type: "Control",
                                                          scope: "#/properties/Etiqueta",
                                                          label: "Etiqueta"
                                                        }
                                                      ]
                                                    }
                                                  }
                                                },
                                                {
                                                  type: "Control",
                                                  scope: "#/properties/Disciplina/properties/Nota",
                                                  label: "Nota"
                                                },
                                                {
                                                  type: "Group",
                                                  label: "Aprovado",
                                                  scope: "#/properties/Disciplina/properties/Aprovado",
                                                  elements: [
                                                    {
                                                      type: "Control",
                                                      scope: "#/properties/Disciplina/properties/Aprovado/properties/FormaIntegralizacao",
                                                      label: "Forma Integralizacao"
                                                    }
                                                  ]
                                                },
                                                {
                                                  type: "Control",
                                                  label: "Docentes",
                                                  scope: "#/properties/Disciplina/properties/Docentes",
                                                  options:{
                                                    showSortButtons: true,
                                                    detail: {
                                                      type: "VerticalLayout",
                                                      elements: [
                                                        {
                                                          type: "Control",
                                                          scope: "#/properties/Docente/properties/Nome",
                                                          label: "Nome"
                                                        },
                                                        {
                                                          type: "Control",
                                                          scope: "#/properties/Docente/properties/Titulacao",
                                                          label: "Titulacao"
                                                        },
                                                        {
                                                          type: "Control",
                                                          scope: "#/properties/Docente/properties/Lattes",
                                                          label: "Lattes"
                                                        },
                                                        {
                                                          type: "Control",
                                                          scope: "#/properties/Docente/properties/CPF",
                                                          label: "CPF"
                                                        }
                                                      ]
                                                    }
                                                  }
                                                },
                                              ]
                                            },
                                            {
                                              type: "Group",
                                              label: "Atividade Complementar",
                                              elements: [
                                                {
                                                  type: "Control",
                                                  scope: "#/properties/AtividadeComplementar/properties/CodigoAtividadeComplementar",
                                                  label: "Código atividade complementar"
                                                },
                                                {
                                                  type: "Control",
                                                  scope: "#/properties/AtividadeComplementar/properties/DataInicio",
                                                  label: "Data Inicio"
                                                },
                                                {
                                                  type: "Control",
                                                  scope: "#/properties/AtividadeComplementar/properties/DataFim",
                                                  label: "Data Fim"
                                                },
                                                {
                                                  type: "Control",
                                                  scope: "#/properties/AtividadeComplementar/properties/DataRegistro",
                                                  label: "Data Registro"
                                                },
                                                {
                                                  type: "Control",
                                                  scope: "#/properties/AtividadeComplementar/properties/TipoAtividadeComplementar",
                                                  label: "Tipo Atividade Complementar"
                                                },
                                                {
                                                  type: "Control",
                                                  scope: "#/properties/AtividadeComplementar/properties/Descricao",
                                                  label: "Descrição"
                                                },
                                                {
                                                  type: "Control",
                                                  label: "Carga horaria em hora relogio",
                                                  scope: "#/properties/AtividadeComplementar/properties/CargaHorariaEmHoraRelogio",
                                                  options:{
                                                    showSortButtons: true,
                                                    detail: {
                                                      type: "VerticalLayout",
                                                      elements: [
                                                        {
                                                          type: "Control",
                                                          scope: "#/properties/HoraRelogio",
                                                          label: "Hora Relógio"
                                                        },
                                                        {
                                                          type: "Control",
                                                          scope: "#/properties/Etiqueta",
                                                          label: "Etiqueta"
                                                        }
                                                      ]
                                                    }
                                                  }
                                                },
                                                {
                                                  type: "Group",
                                                  label: "Docentes responsáveis pela validação",
                                                  elements: [
                                                    {
                                                      type: "Control",
                                                      scope: "#/properties/AtividadeComplementar/properties/DocentesResponsaveisPelaValidacao/properties/Docente",
                                                      options:{
                                                        showSortButtons: true,
                                                        detail: {
                                                          type: "VerticalLayout",
                                                          elements: [
                                                            {
                                                              type: "Control",
                                                              scope: "#/properties/Nome",
                                                              label: "Nome Docente"
                                                            },
                                                            {
                                                              type: "Control",
                                                              scope: "#/properties/Titulacao",
                                                              label: "Titulaçao"
                                                            },
                                                            {
                                                              type: "Control",
                                                              scope: "#/properties/Lattes",
                                                              label: "Lattes"
                                                            },
                                                            {
                                                              type: "Control",
                                                              scope: "#/properties/CPF",
                                                              label: "CPF"
                                                            }
                                                          ]
                                                        }
                                                      }
                                                    }
                                                  ]
                                                }
                                              ]
                                            }
                                          ]
                                        }
                                      }
                                    },
                                    {
                                      type: "Control",
                                      scope: "#/properties/DocumentacaoAcademica/properties/DadosPrivadosDiplomado/properties/HistoricoEscolar/properties/DataEmissaoHistorico",
                                      label: "Data emissão histórico"
                                    },
                                    {
                                      type: "Control",
                                      scope: "#/properties/DocumentacaoAcademica/properties/DadosPrivadosDiplomado/properties/HistoricoEscolar/properties/SituacaoAluno",
                                      label: "Situação do aluno"
                                    },
                                    {
                                      type: "Group",
                                      label: "Situação discente",
                                      scope: "#/properties/DocumentacaoAcademica/properties/DadosPrivadosDiplomado/properties/HistoricoEscolar/properties/SituacaoAtualDiscente",
                                      elements: [
                                        {
                                          type: "Control",
                                          scope: "#/properties/DocumentacaoAcademica/properties/DadosPrivadosDiplomado/properties/HistoricoEscolar/properties/SituacaoAtualDiscente/properties/PeriodoLetivo",
                                          label: "Periodo letivo"
                                        },
                                        {
                                          type: "Group",
                                          label: "Formado",
                                          scope: "#/properties/DocumentacaoAcademica/properties/DadosPrivadosDiplomado/properties/HistoricoEscolar/properties/SituacaoAtualDiscente/properties/Formado",
                                          elements: [
                                            {
                                              type: "Control",
                                              scope: "#/properties/DocumentacaoAcademica/properties/DadosPrivadosDiplomado/properties/HistoricoEscolar/properties/SituacaoAtualDiscente/properties/Formado/properties/DataColacaoGrau",
                                              label: "Data Colação Grau"
                                            },
                                            {
                                              type: "Control",
                                              scope: "#/properties/DocumentacaoAcademica/properties/DadosPrivadosDiplomado/properties/HistoricoEscolar/properties/SituacaoAtualDiscente/properties/Formado/properties/DataConclusaoCurso",
                                              label: "Data Conclusão do Curso"
                                            },
                                            {
                                              type: "Control",
                                              scope: "#/properties/DocumentacaoAcademica/properties/DadosPrivadosDiplomado/properties/HistoricoEscolar/properties/SituacaoAtualDiscente/properties/Formado/properties/DataExpedicaoDiploma",
                                              label: "Data Expedição Diploma"
                                            },
                                          ]
                                        }
                                      ]
                                    },
                                    {
                                      type: "Control",
                                      label: "ENADE",
                                      scope: "#/properties/DocumentacaoAcademica/properties/DadosPrivadosDiplomado/properties/HistoricoEscolar/properties/ENADE",
                                      options:{
                                        showSortButtons: true,
                                        detail: {
                                          type: "VerticalLayout",
                                          elements: [
                                            {
                                              type: "Control",
                                              scope: "#/properties/NaoHabilitado/properties/Condicao",
                                              label: "Condição"
                                            },
                                            {
                                              type: "Control",
                                              scope: "#/properties/NaoHabilitado/properties/Edicao",
                                              label: "Edição"
                                            },
                                            {
                                              type: "Control",
                                              scope: "#/properties/NaoHabilitado/properties/OutroMotivo",
                                              label: "Outro Motivo"
                                            }
                                          ]
                                        }
                                      }
                                    },
                                    {
                                      type: "Control",
                                      scope: "#/properties/DocumentacaoAcademica/properties/DadosPrivadosDiplomado/properties/HistoricoEscolar/properties/DataProvaEnade",
                                      label: "Data prova Enade"
                                    },
                                    {
                                      type: "Group",
                                      label: "Carga Horaria Curso Integralizada",
                                      scope: "#/properties/DocumentacaoAcademica/properties/DadosPrivadosDiplomado/properties/HistoricoEscolar/properties/CargaHorariaCursoIntegralizada",
                                      elements: [
                                        {
                                          type: "Control",
                                          scope: "#/properties/DocumentacaoAcademica/properties/DadosPrivadosDiplomado/properties/HistoricoEscolar/properties/CargaHorariaCursoIntegralizada/properties/HoraAula",
                                          label: "Hora Aula"
                                        },
                                        {
                                          type: "Control",
                                          scope: "#/properties/DocumentacaoAcademica/properties/DadosPrivadosDiplomado/properties/HistoricoEscolar/properties/CargaHorariaCursoIntegralizada/properties/HoraRelogio",
                                          label: "Hora Relógio"
                                        }
                                      ]
                                    },
                                    {
                                      type: "Group",
                                      label: "Carga Horaria Curso",
                                      scope: "#/properties/DocumentacaoAcademica/properties/DadosPrivadosDiplomado/properties/HistoricoEscolar/properties/CargaHorariaCurso",
                                      elements: [
                                        {
                                          type: "Control",
                                          scope: "#/properties/DocumentacaoAcademica/properties/DadosPrivadosDiplomado/properties/HistoricoEscolar/properties/CargaHorariaCurso/properties/HoraAula",
                                          label: "Hora Aula"
                                        },
                                        {
                                          type: "Control",
                                          scope: "#/properties/DocumentacaoAcademica/properties/DadosPrivadosDiplomado/properties/HistoricoEscolar/properties/CargaHorariaCurso/properties/HoraRelogio",
                                          label: "Hora Relógio"
                                        }
                                      ]
                                    },
                                    {
                                      type: "Group",
                                      label: "Carga Horaria Curso",
                                      scope: "#/properties/DocumentacaoAcademica/properties/DadosPrivadosDiplomado/properties/HistoricoEscolar/properties/IngressoCurso",
                                      elements: [
                                        {
                                          type: "Control",
                                          scope: "#/properties/DocumentacaoAcademica/properties/DadosPrivadosDiplomado/properties/HistoricoEscolar/properties/IngressoCurso/properties/Data",
                                          label: "Data"
                                        },
                                        {
                                          type: "Control",
                                          scope: "#/properties/DocumentacaoAcademica/properties/DadosPrivadosDiplomado/properties/HistoricoEscolar/properties/IngressoCurso/properties/FormaIngresso",
                                          label: "Forma Ingresso"
                                        },
                                        {
                                          type: "Control",
                                          scope: "#/properties/DocumentacaoAcademica/properties/DadosPrivadosDiplomado/properties/HistoricoEscolar/properties/IngressoCurso/properties/DataConclusao",
                                          label: "Data Conclusão"
                                        }
                                      ]
                                    },
                                    {
                                      type: "Group",
                                      label: "TermoResponsabilidadeEmissora",
                                      scope: "#/properties/DocumentacaoAcademica/properties/TermoResponsabilidadeEmissora",
                                      elements: [
                                        {
                                          type: "Control",
                                          scope: "#/properties/DocumentacaoAcademica/properties/TermoResponsabilidadeEmissora/properties/Nome",
                                          label: "Nome"
                                        },
                                        {
                                          type: "Control",
                                          scope: "#/properties/DocumentacaoAcademica/properties/TermoResponsabilidadeEmissora/properties/CPF",
                                          label: "CPF"
                                        },
                                        {
                                          type: "Control",
                                          scope: "#/properties/DocumentacaoAcademica/properties/TermoResponsabilidadeEmissora/properties/Cargo",
                                          label: "Cargo"
                                        },
                                        {
                                          type: "Control",
                                          scope: "#/properties/DocumentacaoAcademica/properties/TermoResponsabilidadeEmissora/properties/AtoDesignacao",
                                          label: "Ato Designacao"
                                        }
                                      ]
                                    },
                                    {
                                      type: "Control",
                                      label: "Documentacao Comprobatoria",
                                      scope: "#/properties/DocumentacaoAcademica/properties/DocumentacaoComprobatoria",
                                      options:{
                                        showSortButtons: true,
                                        detail: {
                                          type: "VerticalLayout",
                                          elements: [
                                            {
                                              type: "Control",
                                              scope: "#/properties/Documento/properties/tipo",
                                              label: "Tipo"
                                            },
                                            {
                                              type: "Control",
                                              scope: "#/properties/Documento/properties/observacoes",
                                              label: "Observações"
                                            },
                                            {
                                              type: "Control",
                                              scope: "#/properties/Documento/properties/base64",
                                              label: "Base 64"
                                            }
                                          ]
                                        }
                                      }
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              type: 'Group',
                              label: 'Historico Escolar',
                              elements: [
                                {
                                  type: 'Group',
                                  label: 'Aluno',
                                  elements: [
                                    {
                                      type: "Control",
                                      scope: "#/properties/HistoricoEscolar/properties/Aluno/properties/ID",
                                      label: "ID"
                                    },
                                    {
                                      type: "Control",
                                      scope: "#/properties/HistoricoEscolar/properties/Aluno/properties/Nome",
                                      label: "Nome"
                                    },
                                    {
                                      type: "Control",
                                      scope: "#/properties/HistoricoEscolar/properties/Aluno/properties/NomeSocial",
                                      label: "Nome Social"
                                    },
                                    {
                                      type: "Control",
                                      scope: "#/properties/HistoricoEscolar/properties/Aluno/properties/Sexo",
                                      label: "Sexo"
                                    },
                                    {
                                      type: "Control",
                                      scope: "#/properties/HistoricoEscolar/properties/Aluno/properties/Nacionalidade",
                                      label: "Nacionalidade"
                                    },
                                    {
                                      type: "Group",
                                      label: "Naturalidade",
                                      elements: [
                                        {
                                          type: "Control",
                                          scope: "#/properties/HistoricoEscolar/properties/Aluno/properties/Naturalidade/properties/CodigoMunicipio",
                                          label: "Código Município"
                                        },
                                        {
                                          type: "Control",
                                          scope: "#/properties/HistoricoEscolar/properties/Aluno/properties/Naturalidade/properties/NomeMunicipio",
                                          label: "Nome Município"
                                        },
                                        {
                                          type: "Control",
                                          scope: "#/properties/HistoricoEscolar/properties/Aluno/properties/Naturalidade/properties/UF",
                                          label: "UF"
                                        }
                                      ]
                                    },
                                    {
                                      type: "Control",
                                      scope: "#/properties/HistoricoEscolar/properties/Aluno/properties/CPF",
                                      label: "CPF"
                                    },
                                    {
                                      type: "Group",
                                      label: "RG",
                                      elements: [
                                        {
                                          type: "Control",
                                          scope: "#/properties/HistoricoEscolar/properties/Aluno/properties/RG/properties/Numero",
                                          label: "Número"
                                        },
                                        {
                                          type: "Control",
                                          scope: "#/properties/HistoricoEscolar/properties/Aluno/properties/RG/properties/UF",
                                          label: "UF"
                                        },
                                        {
                                          type: "Control",
                                          scope: "#/properties/HistoricoEscolar/properties/Aluno/properties/RG/properties/OrgaoExpedidor",
                                          label: "Orgão Expedidor"
                                        }
                                      ]
                                    },
                                    {
                                      type: "Control",
                                      scope: "#/properties/HistoricoEscolar/properties/Aluno/properties/DataNascimento",
                                      label: "Data Nascimento"
                                    }
                                  ]
                                },
                                {
                                  type: 'Group',
                                  label: 'Dados do Curso',
                                  elements: [
                                    {
                                      type: "Control",
                                      scope: "#/properties/HistoricoEscolar/properties/DadosCurso/properties/NomeCurso",
                                      label: "Nome curso"
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
  
