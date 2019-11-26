const formConfig = [
  {
    type: 'radio',
    label: 'Quem esta criando essa PV?',
    name: 'quem',
    options: {
      choices: false
    },
    validation: 'required'
  },
  {
    type: 'text',
    label: 'Nome da Empresa',
    name: 'empresa',
    options: {
      attrs: {
        placeholder: 'Nome da Empresa'
      }
    },
    validation: 'required'
  },
  {
    type: 'text',
    label: 'Onde sera realizado o serviço?',
    name: 'localtrabalho',
    options: {
      attrs: {
        placeholder: 'Onde sera realizado o serviço?'
      }
    },
    validation: 'required'
  },
  {
    type: 'date',
    label: 'Data de Ida e Vinda',
    name: 'idaVolta',
    options: {
      attrs: {
        placeholder: ''
      }
    },
    validation: 'required'
  },
  {
    type: 'select',
    label: 'Selecione os profissionais',
    name: 'funcionarioNome',
    options: {
      choices: ''
    },
    validation: 'required'
  },
  {
    type: 'text',
    label: 'Total de horas normais',
    name: 'horasTrabalho',
    options: {
      attrs: {
        placeholder: 'Horas normais'
      }
    },
    validation: 'required|numeric'
  },
  {
    type: 'radio',
    label: 'Terá horas em outros periodos?',
    name: 'horasExtras',
    options: {
      choices: ['Sim', 'Não']
    },
    validation: 'required'
  },
  {
    type: 'radio',
    label: 'Será necessario visita técnica e/ou integração?',
    name: 'visitaTec',
    options: {
      choices: ['Sim', 'Não']
    },
    validation: 'required'
  },
  {
    type: 'radio',
    label: 'Será preciso viagem longa e hospedagem?',
    name: 'viagem',
    options: {
      choices: ['Sim', 'Não']
    },
    validation: 'required'
  },
  {
    type: 'check',
    label: 'Qual / Quais meios de locomoção serão utilizados?',
    name: 'veiculos',
    options: {
      choices: [
        'Veiculo Leve',
        'Caminhão',
        'Passagem Aérea',
        'locação de Veiculo / Táxi',
        'Frete / Transportadora'
      ]
    },
    validation: 'required'
  },
  {
    type: 'radio',
    label: 'Será Necessario trabalho e/ou equipamento de terceiros?',
    name: 'terceiros',
    options: {
      choices: ['Sim', 'Não']
    },
    validation: 'required'
  },
  {
    type: 'text',
    label: 'Função do serviço terceirizado',
    name: 'funcaoTerc',
    options: {
      attrs: {
        placeholder: 'Função do serviço terceirizado'
      }
    }
  },
  {
    type: 'text',
    label: 'Custo do CREA',
    name: 'crea',
    options: {
      attrs: {
        placeholder: 'Custo do CREA'
      }
    },
    validation: 'required|numeric'
  }
];

export default formConfig;
