// Aguarda o HTML ser totalmente carregado antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

    // --- SEU BANCO DE DADOS DE PATRIMÔNIO (96 ITENS) ---
    // ATENÇÃO: Adicione 'date: "Julho/2025",' em TODOS os itens!
    const patrimonioData = [
       
        {
            img: 'Página1_Images/582776.FOTO PATRIMÔNIO.165425.jpg',
            nPatrimonio: '582776',
            date: "Julho/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'GAVETEIRO',
            usuario: 'Operador Wyntech',
            observacao: ''
        },
        {
            img: 'Página1_Images/100000282.FOTO PATRIMÔNIO.165604.jpg',
            nPatrimonio: '100000282',
            date: "Julho/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'CADEIRA',
            usuario: 'Operador Wyntech',
            observacao: ''
        },
        {
            img: 'Página1_Images/454384.FOTO PATRIMÔNIO.165645.jpg',
            nPatrimonio: '454384',
            date: "Julho/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'MESA',
            usuario: 'Operador Wyntech',
            observacao: ''
        },
        {
            img: 'Página1_Images/580070.FOTO PATRIMÔNIO.165659.jpg',
            nPatrimonio: '580070',
            date: "Julho/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'MONITOR',
            usuario: 'Operador Wyntech',
            observacao: ''
        },
        {
            img: 'Página1_Images/99931486.FOTO PATRIMÔNIO.165730.jpg',
            nPatrimonio: '99931486',
            date: "Julho/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'NOTEBOOK',
            usuario: 'Operador Wyntech',
            observacao: ''
        },
        {
            img: 'Página1_Images/351784.FOTO PATRIMÔNIO.165749.jpg',
            nPatrimonio: '351784',
            date: "Julho/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'TELEFONE',
            usuario: 'Operador Wyntech',
            observacao: ''
        },
        {
            img: 'Página1_Images/100000452.FOTO PATRIMÔNIO.165904.jpg',
            nPatrimonio: '100000452',
            date: "Julho/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'CADEIRA',
            usuario: 'Bruno',
            observacao: ''
        },
        {
            img: 'Página1_Images/66751691.FOTO PATRIMÔNIO.165930.jpg',
            nPatrimonio: '66751691',
            date: "Julho/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'TELEFONE',
            usuario: 'Bruno',
            observacao: ''
        },
        {
            img: 'Página1_Images/632068.FOTO PATRIMÔNIO.165944.jpg',
            nPatrimonio: '632068',
            date: "Julho/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'MONITOR',
            usuario: 'Bruno',
            observacao: ''
        },
        {
            img: 'Página1_Images/580476.FOTO PATRIMÔNIO.165959.jpg',
            nPatrimonio: '580476',
            date: "Julho/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'MONITOR',
            usuario: 'Bruno',
            observacao: ''
        },
        {
            img: 'Página1_Images/522348.FOTO PATRIMÔNIO.170025.jpg',
            nPatrimonio: '522348',
            date: "Julho/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'MESA',
            usuario: 'Bruno',
            observacao: ''
        },
        {
            img: 'Página1_Images/481522.FOTO PATRIMÔNIO.170041.jpg',
            nPatrimonio: '481522',
            date: "Julho/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'GAVETEIRO',
            usuario: 'Bruno',
            observacao: ''
        },
        {
            img: 'Página1_Images/99934175.FOTO PATRIMÔNIO.170110.jpg',
            nPatrimonio: '99934175',
            date: "Julho/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'NOTEBOOK',
            usuario: 'Bruno',
            observacao: ''
        },
        {
            img: 'Página1_Images/582775.FOTO PATRIMÔNIO.170322.jpg',
            nPatrimonio: '582775',
            date: "Julho/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'GAVETEIRO',
            usuario: 'Wanderson',
            observacao: ''
        },
        {
            img: 'Página1_Images/128620765.FOTO PATRIMÔNIO.170439.jpg',
            nPatrimonio: '128620765',
            date: "Julho/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'VENTILADOR',
            usuario: 'Do lado do Wanderson',
            observacao: ''
        },
        {
            img: 'Página1_Images/100000231.FOTO PATRIMÔNIO.170634.jpg',
            nPatrimonio: '100000231',
            date: "Julho/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'CADEIRA',
            usuario: 'Wanderson',
            observacao: ''
        },
        {
            img: 'Página1_Images/66752981.FOTO PATRIMÔNIO.170717.jpg',
            nPatrimonio: '66752981',
            date: "Julho/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'TELEFONE',
            usuario: 'Wanderson',
            observacao: ''
        },
        {
            img: 'Página1_Images/580459.FOTO PATRIMÔNIO.170748.jpg',
            nPatrimonio: '580459',
            date: "Julho/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'MONITOR',
            usuario: 'Wanderson',
            observacao: ''
        },
        {
            img: 'Página1_Images/99934531.FOTO PATRIMÔNIO.170824.jpg',
            nPatrimonio: '99934531',
            date: "Julho/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'NOTEBOOK',
            usuario: 'Wanderson',
            observacao: ''
        },
        {
            img: 'Página1_Images/441793.FOTO PATRIMÔNIO.170906.jpg',
            nPatrimonio: '441793',
            date: "Julho/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'MESA',
            usuario: 'Wanderson',
            observacao: ''
        },
        {
            img: 'Página1_Images/64764010.FOTO PATRIMÔNIO.171728.jpg',
            nPatrimonio: '64764010',
            date: "Julho/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'NOBREAK',
            usuario: 'No break do lado Bruno',
            observacao: ''
        },
        {
            img: 'Página1_Images/100000339.FOTO PATRIMÔNIO.200823.jpg',
            nPatrimonio: '100000339',
            date: "Julho/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'CADEIRA',
            usuario: 'Gabriel Wyntech',
            observacao: ''
        },
        {
            img: 'Página1_Images/580638.FOTO PATRIMÔNIO.200855.jpg',
            nPatrimonio: '580638',
            date: "Julho/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'MONITOR',
            usuario: 'Gabriel Wyntech',
            observacao: ''
        },
        {
            img: 'Página1_Images/350640.FOTO PATRIMÔNIO.200931.jpg',
            nPatrimonio: '350640',
            date: "Julho/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'TELEFONE',
            usuario: 'Gabriel Wyntech',
            observacao: ''
        },
        {
            img: 'Página1_Images/584530.FOTO PATRIMÔNIO.201019.jpg',
            nPatrimonio: '584530',
            date: "Julho/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'GAVETEIRO',
            usuario: 'Gabriel Wyntech',
            observacao: ''
        },
        {
            img: 'Página1_Images/545541.FOTO PATRIMÔNIO.201046.jpg',
            nPatrimonio: '545541',
            date: "Julho/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'MESA',
            usuario: 'Gabriel Wyntech',
            observacao: ''
        },
        {
            img: 'Página1_Images/99934590.FOTO PATRIMÔNIO.201121.jpg',
            nPatrimonio: '99934590',
            date: "Julho/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'NOTEBOOK',
            usuario: 'Gabriel Wyntech',
            observacao: ''
        },
        {
            img: 'Página1_Images/481516.FOTO PATRIMÔNIO.203503.jpg',
            nPatrimonio: '481516',
            date: "Julho/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'GAVETEIRO',
            usuario: 'Willian',
            observacao: ''
        },
        {
            img: 'Página1_Images/637700.FOTO PATRIMÔNIO.203653.jpg',
            nPatrimonio: '637700',
            date: "Julho/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'MESA',
            usuario: 'Willian',
            observacao: ''
        },
        {
            img: 'Página1_Images/100000401.FOTO PATRIMÔNIO.203818.jpg',
            nPatrimonio: '100000401',
            date: "Julho/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'CADEIRA',
            usuario: 'Willian',
            observacao: ''
        },
        {
            img: 'Página1_Images/99935074.FOTO PATRIMÔNIO.204038.jpg',
            nPatrimonio: '99935074',
            date: "Julho/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'NOTEBOOK',
            usuario: 'Willian',
            observacao: ''
        },
        {
            img: 'Página1_Images/580040.FOTO PATRIMÔNIO.204121.jpg',
            nPatrimonio: '580040',
            date: "Julho/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'MONITOR',
            usuario: 'Willian',
            observacao: ''
        },
        {
            img: 'Página1_Images/349937.FOTO PATRIMÔNIO.204213.jpg',
            nPatrimonio: '349937',
            date: "Julho/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'TELEFONE',
            usuario: 'Willian',
            observacao: ''
        },
        {
            img: 'Página1_Images/637640.FOTO PATRIMÔNIO.211107.jpg',
            nPatrimonio: '637640',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'MESA',
            usuario: 'Sem Usuário',
            observacao: 'Mesa atrás do Celso'
        },
        {
            img: 'Página1_Images/75627035.FOTO PATRIMÔNIO.211152.jpg',
            nPatrimonio: '75627035',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'MONITOR',
            usuario: 'Celso',
            observacao: ''
        },
        {
            img: 'Página1_Images/99931010.FOTO PATRIMÔNIO.211438.jpg',
            nPatrimonio: '99931010',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'NOTEBOOK',
            usuario: 'Celso',
            observacao: ''
        },
        {
            img: 'Página1_Images/75303507.FOTO PATRIMÔNIO.211523.jpg',
            nPatrimonio: '75303507',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'MESA',
            usuario: 'Celso',
            observacao: ''
        },
        {
            img: 'Página1_Images/100000215.FOTO PATRIMÔNIO.211611.jpg',
            nPatrimonio: '100000215',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'CADEIRA',
            usuario: 'Celso',
            observacao: ''
        },
        {
            img: 'Página1_Images/84280549.FOTO PATRIMÔNIO.211743.jpg',
            nPatrimonio: '84280549',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'VENTILADOR',
            usuario: 'Sem Usuário',
            observacao: ''
        },
        {
            img: 'Página1_Images/582772.FOTO PATRIMÔNIO.211854.jpg',
            nPatrimonio: '582772',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'GAVETEIRO',
            usuario: 'Nayara',
            observacao: ''
        },
        {
            img: 'Página1_Images/351787.FOTO PATRIMÔNIO.211946.jpg',
            nPatrimonio: '351787',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'TELEFONE',
            usuario: 'Nayara',
            observacao: ''
        },
        {
            img: 'Página1_Images/83534474.FOTO PATRIMÔNIO.212016.jpg',
            nPatrimonio: '83534474',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'MONITOR',
            usuario: 'Nayara',
            observacao: ''
        },
        {
            img: 'Página1_Images/67021298.FOTO PATRIMÔNIO.212047.jpg',
            nPatrimonio: '67021298',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'MONITOR',
            usuario: 'Nayara',
            observacao: ''
        },
        {
            img: 'Página1_Images/637642.FOTO PATRIMÔNIO.212208.jpg',
            nPatrimonio: '637642',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'MESA',
            usuario: 'Nayara',
            observacao: ''
        },
        {
            img: 'Página1_Images/562413.FOTO PATRIMÔNIO.212401.jpg',
            nPatrimonio: '562413',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'CADEIRA',
            usuario: 'Nayara',
            observacao: ''
        },
        {
            img: 'Página1_Images/99930765.FOTO PATRIMÔNIO.212502.jpg',
            nPatrimonio: '99930765',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'NOTEBOOK',
            usuario: 'Nayara',
            observacao: ''
        },
        {
            img: 'Página1_Images/75847264.FOTO PATRIMÔNIO.213538.jpg',
            nPatrimonio: '75847264',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'GAVETEIRO',
            usuario: 'Guilherme',
            observacao: ''
        },
        {
            img: 'Página1_Images/637639.FOTO PATRIMÔNIO.213734.jpg',
            nPatrimonio: '637639',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'MESA',
            usuario: 'Guilherme',
            observacao: ''
        },
        {
            img: 'Página1_Images/83187928.FOTO PATRIMÔNIO.214002.jpg',
            nPatrimonio: '83187928',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'MONITOR',
            usuario: 'Guilherme',
            observacao: ''
        },
        {
            img: 'Página1_Images/75881187.FOTO PATRIMÔNIO.214029.jpg',
            nPatrimonio: '75881187',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'MONITOR',
            usuario: 'Guilherme',
            observacao: ''
        },
        {
            img: 'Página1_Images/349502.FOTO PATRIMÔNIO.214115.jpg',
            nPatrimonio: '349502',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'TELEFONE',
            usuario: 'Guilherme',
            observacao: ''
        },
        {
            img: 'Página1_Images/99931052.FOTO PATRIMÔNIO.214222.jpg',
            nPatrimonio: '99931052',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'NOTEBOOK',
            usuario: 'Guilherme',
            observacao: ''
        },
        {
            img: 'Página1_Images/99913950.FOTO PATRIMÔNIO.214655.jpg',
            nPatrimonio: '99913950',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'CADEIRA',
            usuario: 'Guilherme',
            observacao: ''
        },
        {
            img: 'Página1_Images/585420.FOTO PATRIMÔNIO.214923.jpg',
            nPatrimonio: '585420',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'ARMÁRIO',
            usuario: 'Sem Usuário',
            observacao: ''
        },
        {
            img: 'Página1_Images/610940.FOTO PATRIMÔNIO.215113.jpg',
            nPatrimonio: '610940',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'GAVETEIRO',
            usuario: 'Sérgio',
            observacao: ''
        },
        {
            img: 'Página1_Images/637645.FOTO PATRIMÔNIO.215307.jpg',
            nPatrimonio: '637645',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'MESA',
            usuario: 'Sérgio',
            observacao: ''
        },
        {
            img: 'Página1_Images/580419.FOTO PATRIMÔNIO.215344.jpg',
            nPatrimonio: '580419',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'MONITOR',
            usuario: 'Sérgio',
            observacao: ''
        },
        {
            img: 'Página1_Images/351324.FOTO PATRIMÔNIO.215616.jpg',
            nPatrimonio: '351324',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'TELEFONE',
            usuario: 'Sérgio',
            observacao: ''
        },
        {
            img: 'Página1_Images/99931036.FOTO PATRIMÔNIO.215714.jpg',
            nPatrimonio: '99931036',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'NOTEBOOK',
            usuario: 'Sérgio',
            observacao: ''
        },
        {
            img: 'Página1_Images/75847272.FOTO PATRIMÔNIO.090244.jpg',
            nPatrimonio: '75847272',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'GAVETEIRO',
            usuario: 'Sem Usuário',
            observacao: 'Mesa perto da porta'
        },
        {
            img: 'Página1_Images/83350713.FOTO PATRIMÔNIO.090533.jpg',
            nPatrimonio: '83350713',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'CADEIRA',
            usuario: 'Sem Usuário',
            observacao: 'Mesa perto da porta'
        },
        {
            img: 'Página1_Images/83381244.FOTO PATRIMÔNIO.090804.jpg',
            nPatrimonio: '83381244',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'CADEIRA',
            usuario: 'Sem Usuário',
            observacao: 'Mesa perto da porta'
        },
        {
            img: 'Página1_Images/637680.FOTO PATRIMÔNIO.091008.jpg',
            nPatrimonio: '637680',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'MESA',
            usuario: 'Sem Usuário',
            observacao: 'Mesa perto da porta'
        },
        {
            img: 'Página1_Images/67560180.FOTO PATRIMÔNIO.091125.jpg',
            nPatrimonio: '67560180',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'MONITOR',
            usuario: 'Sem Usuário',
            observacao: 'Mesa perto da porta'
        },
        {
            img: 'Página1_Images/84281219.FOTO PATRIMÔNIO.091210.jpg',
            nPatrimonio: '84281219',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'VENTILADOR',
            usuario: 'Sem Usuário',
            observacao: ''
        },
        {
            img: 'Página1_Images/99931109.FOTO PATRIMÔNIO.091255.jpg',
            nPatrimonio: '99931109',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'NOTEBOOK',
            usuario: 'Sem Usuário',
            observacao: 'Mesa perto da porta'
        },
        {
            img: 'Página1_Images/611171.FOTO PATRIMÔNIO.091343.jpg',
            nPatrimonio: '611171',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'COMPUTADOR',
            usuario: 'Sem Usuário',
            observacao: 'Servidor'
        },
        {
            img: 'Página1_Images/611184.FOTO PATRIMÔNIO.091416.jpg',
            nPatrimonio: '611184',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'COMPUTADOR',
            usuario: 'Sem Usuário',
            observacao: 'Servidor'
        },
        {
            img: 'Página1_Images/527996.FOTO PATRIMÔNIO.091456.jpg',
            nPatrimonio: '527996',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'MONITOR',
            usuario: 'Abel',
            observacao: ''
        },
        {
            img: 'Página1_Images/75847256.FOTO PATRIMÔNIO.091517.jpg',
            nPatrimonio: '75847256',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'GAVETEIRO',
            usuario: 'Abel',
            observacao: ''
        },
        {
            img: 'Página1_Images/75247704.FOTO PATRIMÔNIO.091616.jpg',
            nPatrimonio: '75247704',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'CADEIRA',
            usuario: 'Abel',
            observacao: ''
        },
        {
            img: 'Página1_Images/637683.FOTO PATRIMÔNIO.091716.jpg',
            nPatrimonio: '637683',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'MESA',
            usuario: 'Abel',
            observacao: ''
        },
        {
            img: 'Página1_Images/99930773.FOTO PATRIMÔNIO.091845.jpg',
            nPatrimonio: '99930773',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'NOTEBOOK',
            usuario: 'Abel',
            observacao: ''
        },
        {
            img: 'Página1_Images/99913968.FOTO PATRIMÔNIO.092041.jpg',
            nPatrimonio: '99913968',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'CADEIRA',
            usuario: 'Daniely',
            observacao: ''
        },
        {
            img: 'Página1_Images/99998580.FOTO PATRIMÔNIO.092251.jpg',
            nPatrimonio: '99998580',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'MESA',
            usuario: 'Daniely',
            observacao: ''
        },
        {
            img: 'Página1_Images/517218.FOTO PATRIMÔNIO.092330.jpg',
            nPatrimonio: '517218',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'GAVETEIRO',
            usuario: 'Daniely',
            observacao: ''
        },
        {
            img: 'Página1_Images/83523197.FOTO PATRIMÔNIO.092411.jpg',
            nPatrimonio: '83523197',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'MONITOR',
            usuario: 'Daniely',
            observacao: ''
        },
        {
            img: 'Página1_Images/83516875.FOTO PATRIMÔNIO.092441.jpg',
            nPatrimonio: '83516875',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'MONITOR',
            usuario: 'Daniely',
            observacao: ''
        },
        {
            img: 'Página1_Images/99931044.FOTO PATRIMÔNIO.092603.jpg',
            nPatrimonio: '99931044',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'NOTEBOOK',
            usuario: 'Daniely',
            observacao: ''
        },
        {
            img: 'Página1_Images/100479715.FOTO PATRIMÔNIO.092732.jpg',
            nPatrimonio: '100479715',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'MESA',
            usuario: 'Sem Usuário',
            observacao: 'Mesa em frente ao Márcio'
        },
        {
            img: 'Página1_Images/99930790.FOTO PATRIMÔNIO.092927.jpg',
            nPatrimonio: '99930790',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'NOTEBOOK',
            usuario: 'Sem Usuário',
            observacao: 'Mesa em frente ao Márcio'
        },
        {
            img: 'Página1_Images/627156.FOTO PATRIMÔNIO.093024.jpg',
            nPatrimonio: '627156',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'MONITOR',
            usuario: 'Márcio',
            observacao: ''
        },
        {
            img: 'Página1_Images/637648.FOTO PATRIMÔNIO.093134.jpg',
            nPatrimonio: '637648',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'MESA',
            usuario: 'Márcio',
            observacao: ''
        },
        {
            img: 'Página1_Images/75847248.FOTO PATRIMÔNIO.093210.jpg',
            nPatrimonio: '75847248',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'GAVETEIRO',
            usuario: 'Márcio',
            observacao: ''
        },
        {
            img: 'Página1_Images/560233.FOTO PATRIMÔNIO.093318.jpg',
            nPatrimonio: '560233',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'VENTILADOR',
            usuario: 'Sem Usuário',
            observacao: ''
        },
        {
            img: 'Página1_Images/99930803.FOTO PATRIMÔNIO.093654.jpg',
            nPatrimonio: '99930803',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'NOTEBOOK',
            usuario: 'Sem Usuário',
            observacao: 'Mesinha ao lado do Márcio'
        },
        {
            img: 'Página1_Images/519204.FOTO PATRIMÔNIO.093823.jpg',
            nPatrimonio: '519204',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'MESA',
            usuario: 'Sem Usuário',
            observacao: 'Mesinha ao lado do Márcio'
        },
        {
            img: 'Página1_Images/100000355.FOTO PATRIMÔNIO.093932.jpg',
            nPatrimonio: '100000355',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'CADEIRA',
            usuario: 'Márcio',
            observacao: ''
        },
        {
            img: 'Página1_Images/582773.FOTO PATRIMÔNIO.094150.jpg',
            nPatrimonio: '582773',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'GAVETEIRO',
            usuario: 'Pollyana',
            observacao: ''
        },
        {
            img: 'Página1_Images/580338.FOTO PATRIMÔNIO.094230.jpg',
            nPatrimonio: '580338',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'MONITOR',
            usuario: 'Pollyana',
            observacao: ''
        },
        {
            img: 'Página1_Images/99931060.FOTO PATRIMÔNIO.094329.jpg',
            nPatrimonio: '99931060',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'NOTEBOOK',
            usuario: 'Pollyana',
            observacao: ''
        },
        {
            img: 'Página1_Images/637637.FOTO PATRIMÔNIO.094453.jpg',
            nPatrimonio: '637637',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'MESA',
            usuario: 'Pollyana',
            observacao: ''
        },
        {
            img: 'Página1_Images/100000304.FOTO PATRIMÔNIO.094545.jpg',
            nPatrimonio: '100000304',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'CADEIRA',
            usuario: 'Pollyana',
            observacao: ''
        },
        {
            img: 'Página1_Images/0199.FOTO PATRIMÔNIO.110652.jpg',
            nPatrimonio: '0199',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'MONITOR',
            usuario: 'Celso',
            observacao: 'Monitor HP'
        },
        {
            img: 'Página1_Images/24HQLED161511221453.FOTO PATRIMÔNIO.110819.jpg',
            nPatrimonio: '24HQLED161511221453',
            date: "Julho/2025",
            local: 'WYNTECH SALA',
            categoria: 'MONITOR',
            usuario: 'Sérgio',
            observacao: 'Monitor HQ'
        },
        {
            img: 'Página2_Images/580476.FOTO PATRIMÔNIO.114321.jpg',
            nPatrimonio: '580476',
            date: "Novembro/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'MONITOR',
            usuario: 'Bruno',
            observacao: ''
        },
        {
            img: 'Página2_Images/580638.FOTO PATRIMÔNIO.104649.jpg',
            nPatrimonio: '580638',
            date: "Novembro/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'MONITOR',
            usuario: 'Gabriel Alvarenga',
            observacao: ''
        },
        {
            img: 'Página2_Images/99934590.FOTO PATRIMÔNIO.104808.jpg',
            nPatrimonio: '99934590',
            date: "Novembro/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'NOTEBOOK',
            usuario: 'Gabriel Alvarenga',
            observacao: ''
        },
        {
            img: 'Página2_Images/350640.FOTO PATRIMÔNIO.104837.jpg',
            nPatrimonio: '350640',
            date: "Novembro/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'TELEFONE',
            usuario: 'Gabriel Alvarenga',
            observacao: ''
        },
        {
            img: 'Página2_Images/545541.FOTO PATRIMÔNIO.104905.jpg',
            nPatrimonio: '545541',
            date: "Novembro/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'MESA',
            usuario: 'Gabriel Alvarenga',
            observacao: ''
        },
        {
            img: 'Página2_Images/584530.FOTO PATRIMÔNIO.104930.jpg',
            nPatrimonio: '584530',
            date: "Novembro/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'GAVETEIRO',
            usuario: 'Gabriel Alvarenga',
            observacao: ''
        },
        {
            img: 'Página2_Images/100052851.FOTO PATRIMÔNIO.105049.jpg',
            nPatrimonio: '100052851',
            date: "Novembro/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'CADEIRA',
            usuario: 'Gabriel Alvarenga',
            observacao: ''
        },
        {
            img: 'Página2_Images/481516.FOTO PATRIMÔNIO.105132.jpg',
            nPatrimonio: '481516',
            date: "Novembro/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'GAVETEIRO',
            usuario: 'Willian',
            observacao: ''
        },
        {
            img: 'Página2_Images/637700.FOTO PATRIMÔNIO.105207.jpg',
            nPatrimonio: '637700',
            date: "Novembro/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'MESA',
            usuario: 'Willian',
            observacao: ''
        },
        {
            img: 'Página2_Images/100000401.FOTO PATRIMÔNIO.105240.jpg',
            nPatrimonio: '100000401',
            date: "Novembro/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'CADEIRA',
            usuario: 'Willian',
            observacao: ''
        },
        {
            img: 'Página2_Images/582775.FOTO PATRIMÔNIO.105256.jpg',
            nPatrimonio: '582775',
            date: "Novembro/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'GAVETEIRO',
            usuario: 'Wanderson',
            observacao: ''
        },
        {
            img: 'Página2_Images/441793.FOTO PATRIMÔNIO.105324.jpg',
            nPatrimonio: '441793',
            date: "Novembro/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'MESA',
            usuario: 'Wanderson',
            observacao: ''
        },
        {
            img: 'Página2_Images/99935074.FOTO PATRIMÔNIO.105326.jpg',
            nPatrimonio: '99935074',
            date: "Novembro/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'NOTEBOOK',
            usuario: 'Willian',
            observacao: ''
        },
        {
            img: 'Página2_Images/580040.FOTO PATRIMÔNIO.105400.jpg',
            nPatrimonio: '580040',
            date: "Novembro/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'MONITOR',
            usuario: 'Willian',
            observacao: ''
        },
        {
            img: 'Página2_Images/100000231.FOTO PATRIMÔNIO.105413.jpg',
            nPatrimonio: '100000231',
            date: "Novembro/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'CADEIRA',
            usuario: 'Wanderson',
            observacao: ''
        },
        {
            img: 'Página2_Images/465719.FOTO PATRIMÔNIO.105445.jpg',
            nPatrimonio: '465719',
            date: "Novembro/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'TELEFONE',
            usuario: 'Wanderson',
            observacao: ''
        },
        {
            img: 'Página2_Images/349937.FOTO PATRIMÔNIO.105449.jpg',
            nPatrimonio: '349937',
            date: "Novembro/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'TELEFONE',
            usuario: 'Willian',
            observacao: ''
        },
        {
            img: 'Página2_Images/580459.FOTO PATRIMÔNIO.105508.jpg',
            nPatrimonio: '580459',
            date: "Novembro/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'MONITOR',
            usuario: 'Wanderson',
            observacao: ''
        },
        {
            img: 'Página2_Images/99934531.FOTO PATRIMÔNIO.105544.jpg',
            nPatrimonio: '99934531',
            date: "Novembro/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'NOTEBOOK',
            usuario: 'Wanderson',
            observacao: ''
        },
        {
            img: 'Página2_Images/351784.FOTO PATRIMÔNIO.105621.jpg',
            nPatrimonio: '351784',
            date: "Novembro/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'TELEFONE',
            usuario: 'Ana',
            observacao: ''
        },
        {
            img: 'Página2_Images/75545942.FOTO PATRIMÔNIO.105642.jpg',
            nPatrimonio: '75545942',
            date: "Novembro/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'MONITOR',
            usuario: 'Ana',
            observacao: ''
        },
        {
            img: 'Página2_Images/632068.FOTO PATRIMÔNIO.105700.jpg',
            nPatrimonio: '632068',
            date: "Novembro/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'MONITOR',
            usuario: 'Bruno',
            observacao: ''
        },
        {
            img: 'Página2_Images/582776.FOTO PATRIMÔNIO.105702.jpg',
            nPatrimonio: '582776',
            date: "Novembro/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'GAVETEIRO',
            usuario: 'Ana',
            observacao: ''
        },
        {
            img: 'Página2_Images/465578.FOTO PATRIMÔNIO.105722.jpg',
            nPatrimonio: '465578',
            date: "Novembro/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'TELEFONE',
            usuario: 'Bruno',
            observacao: ''
        },
        {
            img: 'Página2_Images/128675888.FOTO PATRIMÔNIO.105734.jpg',
            nPatrimonio: '128675888',
            date: "Novembro/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'CADEIRA',
            usuario: 'Ana',
            observacao: ''
        },
        {
            img: 'Página2_Images/99934175.FOTO PATRIMÔNIO.105800.jpg',
            nPatrimonio: '99934175',
            date: "Novembro/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'NOTEBOOK',
            usuario: 'Bruno',
            observacao: ''
        },
        {
            img: 'Página2_Images/100170501.FOTO PATRIMÔNIO.105814.jpg',
            nPatrimonio: '100170501',
            date: "Novembro/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'NOTEBOOK',
            usuario: 'Ana',
            observacao: ''
        },
        {
            img: 'Página2_Images/454384.FOTO PATRIMÔNIO.105840.jpg',
            nPatrimonio: '454384',
            date: "Novembro/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'MESA',
            usuario: 'Ana',
            observacao: ''
        },
        {
            img: 'Página2_Images/522348.FOTO PATRIMÔNIO.105849.jpg',
            nPatrimonio: '522348',
            date: "Novembro/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'MESA',
            usuario: 'Bruno',
            observacao: ''
        },
        {
            img: 'Página2_Images/84220170.FOTO PATRIMÔNIO.110008.jpg',
            nPatrimonio: '84220170',
            date: "Novembro/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'VENTILADOR',
            usuario: 'Atrás do Felipe',
            observacao: ''
        },
        {
            img: 'Página2_Images/128762098.FOTO PATRIMÔNIO.110035.jpg',
            nPatrimonio: '128762098',
            date: "Novembro/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'VENTILADOR',
            usuario: 'Do lado do Wanderson',
            observacao: ''
        },
        {
            img: 'Página2_Images/597253.FOTO PATRIMÔNIO.110042.jpg',
            nPatrimonio: '597253',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'COMPUTADOR',
            usuario: 'Teste coope',
            observacao: ''
        },
        {
            img: 'Página2_Images/577006.FOTO PATRIMÔNIO.110108.jpg',
            nPatrimonio: '577006',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'MONITOR',
            usuario: 'Teste coope',
            observacao: ''
        },
        {
            img: 'Página2_Images/640989.FOTO PATRIMÔNIO.110212.jpg',
            nPatrimonio: '640989',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'MESA',
            usuario: 'Teste coope',
            observacao: ''
        },
        {
            img: 'Página2_Images/83164308.FOTO PATRIMÔNIO.110236.jpg',
            nPatrimonio: '83164308',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'COMPUTADOR',
            usuario: 'Teste coope',
            observacao: ''
        },
        {
            img: 'Página2_Images/429230.FOTO PATRIMÔNIO.110309.jpg',
            nPatrimonio: '429230',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'CADEIRA',
            usuario: 'Teste coope',
            observacao: ''
        },
        {
            img: 'Página2_Images/593074.FOTO PATRIMÔNIO.110432.jpg',
            nPatrimonio: '593074',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'NOTEBOOK',
            usuario: 'Felipão',
            observacao: ''
        },
        {
            img: 'Página2_Images/517233.FOTO PATRIMÔNIO.110454.jpg',
            nPatrimonio: '517233',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'GAVETEIRO',
            usuario: 'Felipão',
            observacao: ''
        },
        {
            img: 'Página2_Images/001500341.FOTO PATRIMÔNIO.110604.jpg',
            nPatrimonio: '001500341',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'MESA',
            usuario: 'Felipão',
            observacao: ''
        },
        {
            img: 'Página2_Images/99932059.FOTO PATRIMÔNIO.110708.jpg',
            nPatrimonio: '99932059',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'NOTEBOOK',
            usuario: 'Felipão',
            observacao: ''
        },
        {
            img: 'Página2_Images/479503.FOTO PATRIMÔNIO.110751.jpg',
            nPatrimonio: '479503',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'CADEIRA',
            usuario: 'Felipão',
            observacao: ''
        },
        {
            img: 'Página2_Images/543304.FOTO PATRIMÔNIO.110836.jpg',
            nPatrimonio: '543304',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'MONITOR',
            usuario: 'Coworking 4',
            observacao: ''
        },
        {
            img: 'Página2_Images/465595.FOTO PATRIMÔNIO.110912.jpg',
            nPatrimonio: '465595',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'TELEFONE',
            usuario: 'Coworking 4',
            observacao: ''
        },
        {
            img: 'Página2_Images/128620765.FOTO PATRIMÔNIO.110912.jpg',
            nPatrimonio: '128620765',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'VENTILADOR',
            usuario: 'Ventilador proximo ao paulinho',
            observacao: ''
        },
        {
            img: 'Página2_Images/100370632.FOTO PATRIMÔNIO.110936.jpg',
            nPatrimonio: '100370632',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'NOTEBOOK',
            usuario: 'Ventilador próximo Paulinho',
            observacao: ''
        },
        {
            img: 'Página2_Images/99954184.FOTO PATRIMÔNIO.110944.jpg',
            nPatrimonio: '99954184',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'NOTEBOOK',
            usuario: 'Coworking 4',
            observacao: ''
        },
        {
            img: 'Página2_Images/481518.FOTO PATRIMÔNIO.111001.jpg',
            nPatrimonio: '481518',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'GAVETEIRO',
            usuario: 'Coworking 4',
            observacao: ''
        },
        {
            img: 'Página2_Images/129593869.FOTO PATRIMÔNIO.111008.jpg',
            nPatrimonio: '129593869',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'VENTILADOR',
            usuario: 'Ventilador próximo Roger',
            observacao: ''
        },
        {
            img: 'Página2_Images/522350.FOTO PATRIMÔNIO.111019.jpg',
            nPatrimonio: '522350',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'MESA',
            usuario: 'Coworking 4',
            observacao: ''
        },
        {
            img: 'Página2_Images/555124.FOTO PATRIMÔNIO.111051.jpg',
            nPatrimonio: '555124',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'GAVETEIRO',
            usuario: 'Érika',
            observacao: ''
        },
        {
            img: 'Página2_Images/637644.FOTO PATRIMÔNIO.111111.jpg',
            nPatrimonio: '637644',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'MESA',
            usuario: 'Érika',
            observacao: ''
        },
        {
            img: 'Página2_Images/576584.FOTO PATRIMÔNIO.111129.jpg',
            nPatrimonio: '576584',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'MONITOR',
            usuario: 'Érika',
            observacao: ''
        },
        {
            img: 'Página2_Images/100000339.FOTO PATRIMÔNIO.111134.jpg',
            nPatrimonio: '100000339',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'CADEIRA',
            usuario: 'Coworking 4',
            observacao: ''
        },
        {
            img: 'Página2_Images/99931982.FOTO PATRIMÔNIO.111157.jpg',
            nPatrimonio: '99931982',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'NOTEBOOK',
            usuario: 'Érika',
            observacao: ''
        },
        {
            img: 'Página2_Images/591873.FOTO PATRIMÔNIO.111214.jpg',
            nPatrimonio: '591873',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'MONITOR',
            usuario: 'Coworking 3',
            observacao: ''
        },
        {
            img: 'Página2_Images/99913976.FOTO PATRIMÔNIO.111230.jpg',
            nPatrimonio: '99913976',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'CADEIRA',
            usuario: 'Erika',
            observacao: ''
        },
        {
            img: 'Página2_Images/99954087.FOTO PATRIMÔNIO.111304.jpg',
            nPatrimonio: '99954087',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'NOTEBOOK',
            usuario: 'Coworking 3',
            observacao: ''
        },
        {
            img: 'Página2_Images/99808234.FOTO PATRIMÔNIO.111322.jpg',
            nPatrimonio: '99808234',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'GAVETEIRO',
            usuario: 'Rodnei',
            observacao: ''
        },
        {
            img: 'Página2_Images/408328.FOTO PATRIMÔNIO.111346.jpg',
            nPatrimonio: '408328',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'MESA',
            usuario: 'Rodinei',
            observacao: ''
        },
        {
            img: 'Página2_Images/434723.FOTO PATRIMÔNIO.111418.jpg',
            nPatrimonio: '434723',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'GAVETEIRO',
            usuario: 'Coworking 3',
            observacao: ''
        },
        {
            img: 'Página2_Images/128538589.FOTO PATRIMÔNIO.111427.jpg',
            nPatrimonio: '128538589',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'CADEIRA',
            usuario: 'Rodnei',
            observacao: ''
        },
        {
            img: 'Página2_Images/83006311.FOTO PATRIMÔNIO.111448.jpg',
            nPatrimonio: '83006311',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'MONITOR',
            usuario: 'Rodnei',
            observacao: ''
        },
        {
            img: 'Página2_Images/637686.FOTO PATRIMÔNIO.111458.jpg',
            nPatrimonio: '637686',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'MESA',
            usuario: 'Coworking 3',
            observacao: ''
        },
        {
            img: 'Página2_Images/83350730.FOTO PATRIMÔNIO.111531.jpg',
            nPatrimonio: '83350730',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'CADEIRA',
            usuario: 'Coworking 3',
            observacao: ''
        },
        {
            img: 'Página2_Images/99932067.FOTO PATRIMÔNIO.111531.jpg',
            nPatrimonio: '99932067',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'NOTEBOOK',
            usuario: 'Rodnei',
            observacao: ''
        },
        {
            img: 'Página2_Images/481510.FOTO PATRIMÔNIO.111611.jpg',
            nPatrimonio: '481510',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'GAVETEIRO',
            usuario: 'Coworking 2',
            observacao: ''
        },
        {
            img: 'Página2_Images/99955881.FOTO PATRIMÔNIO.111632.jpg',
            nPatrimonio: '99955881',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'NOTEBOOK',
            usuario: 'Coworking',
            observacao: ''
        },
        {
            img: 'Página2_Images/75846705.FOTO PATRIMÔNIO.111635.jpg',
            nPatrimonio: '75846705',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'MESA',
            usuario: 'Coworking 2',
            observacao: ''
        },
        {
            img: 'Página2_Images/67540341.FOTO PATRIMÔNIO.111701.jpg',
            nPatrimonio: '67540341',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'MONITOR',
            usuario: 'Coworking',
            observacao: ''
        },
        {
            img: 'Página2_Images/84467401.FOTO PATRIMÔNIO.111724.jpg',
            nPatrimonio: '84467401',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'GAVETEIRO',
            usuario: 'Coworking',
            observacao: ''
        },
        {
            img: 'Página2_Images/100000509.FOTO PATRIMÔNIO.111725.jpg',
            nPatrimonio: '100000509',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'CADEIRA',
            usuario: 'Coworking 2',
            observacao: ''
        },
        {
            img: 'Página2_Images/580514.FOTO PATRIMÔNIO.111746.jpg',
            nPatrimonio: '580514',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'MONITOR',
            usuario: 'Coworking 2',
            observacao: ''
        },
        {
            img: 'Página2_Images/637703.FOTO PATRIMÔNIO.111748.jpg',
            nPatrimonio: '637703',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'MESA',
            usuario: 'Coworking',
            observacao: ''
        },
        {
            img: 'Página2_Images/99956047.FOTO PATRIMÔNIO.111815.jpg',
            nPatrimonio: '99956047',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'NOTEBOOK',
            usuario: 'Coworking 2',
            observacao: ''
        },
        {
            img: 'Página2_Images/100000363.FOTO PATRIMÔNIO.111845.jpg',
            nPatrimonio: '100000363',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'CADEIRA',
            usuario: 'Coworking',
            observacao: ''
        },
        {
            img: 'Página2_Images/100000452.FOTO PATrimônio.111924.jpg',
            nPatrimonio: '100000452',
            date: "Novembro/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'CADEIRA',
            usuario: 'Bruno',
            observacao: ''
        },
        {
            img: 'Página2_Images/481522.FOTO PATRIMÔNIO.114041.jpg',
            nPatrimonio: '481522',
            date: "Novembro/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'GAVETEIRO',
            usuario: 'Bruno',
            observacao: ''
        },
        {
            img: 'Página2_Images/64764010.FOTO PATRIMÔNİO.114441.jpg',
            nPatrimonio: '64764010',
            date: "Novembro/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'NOBREAK',
            usuario: 'Embaixo mesa',
            observacao: ''
        },
        
    ];

    // --- VARIÁVEIS DE ESTADO DA PAGINAÇÃO ---
    const itemsPerPage = 10;
    let currentPage = 1;
    let currentFilteredItems = [...patrimonioData];

    // --- REFERÊNCIAS DO DOM ---
    const tableBody = document.getElementById('tableBody');
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = document.getElementById("modalClose");
    const tableBodyForModal = document.getElementById("tableBody");
    const searchInput = document.getElementById('searchInput');
    const localSelect = document.getElementById('local');
    const categoriaSelect = document.getElementById('categoria');
    const clearFiltersButton = document.getElementById('clearFiltersButton');
    const searchButton = document.getElementById('searchButton');
    const paginationControls = document.getElementById('paginationControls');


    // --- LÓGICA PARA RENDERIZAR A TABELA (ATUALIZADA) ---
    function renderTable(data) {
        tableBody.innerHTML = '';

        if (data.length === 0) {
            // Atualizado de 6 para 7 colunas
            tableBody.innerHTML = '<tr><td colspan="7" style="text-align:center;">Nenhum item encontrado.</td></tr>';
            return;
        }

        data.forEach(item => {
            const row = document.createElement('tr');
            const obsText = item.observacao ? item.observacao : 'N/A';
            
            // Adicionada a célula da data
            row.innerHTML = `
                <td><img src="${item.img}" alt="Imagem do item" class="item-img" onerror="this.style.display='none'"></td>
                <td>${item.nPatrimonio}</td>
                <td>${item.date ? item.date : 'N/A'}</td> <td>${item.local}</td>
                <td>${item.categoria}</td>
                <td>${item.usuario}</td>
                <td>${obsText}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    // --- FUNÇÃO DE FILTRAGEM (ATUALIZADA) ---
    function applyFilters() {
        const searchTerm = searchInput.value.toLowerCase();
        const localValue = localSelect.value;
        const categoriaValue = categoriaSelect.value;

        let filteredData = patrimonioData.filter(item => {
            // Adicionado "item.date" à busca
            const searchTermMatch = (
                item.nPatrimonio.toLowerCase().includes(searchTerm) ||
                (item.date && item.date.toLowerCase().includes(searchTerm)) || // BUSCA PELA DATA
                item.local.toLowerCase().includes(searchTerm) ||
                item.usuario.toLowerCase().includes(searchTerm) ||
                item.categoria.toLowerCase().includes(searchTerm) ||
                item.observacao.toLowerCase().includes(searchTerm)
            );
            const localMatch = localValue ? item.local === localValue : true;
            const categoriaMatch = categoriaValue ? item.categoria === categoriaValue : true;
            
            return searchTermMatch && localMatch && categoriaMatch;
        });

        currentFilteredItems = filteredData;
        currentPage = 1;
        updatePaginationUI();
        displayCurrentPage();
    }

    // --- FUNÇÕES DE PAGINAÇÃO ---
    function displayCurrentPage() {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const paginatedItems = currentFilteredItems.slice(startIndex, endIndex);
        renderTable(paginatedItems);
    }

    function updatePaginationUI() {
        paginationControls.innerHTML = '';
        const totalPages = Math.ceil(currentFilteredItems.length / itemsPerPage);
        if (totalPages <= 1) return; 

        const prevButton = document.createElement('button');
        prevButton.innerHTML = '&laquo; Anterior';
        prevButton.dataset.page = 'prev';
        if (currentPage === 1) prevButton.disabled = true;
        paginationControls.appendChild(prevButton);

        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.innerText = i;
            pageButton.dataset.page = i;
            if (i === currentPage) pageButton.classList.add('active');
            paginationControls.appendChild(pageButton);
        }

        const nextButton = document.createElement('button');
        nextButton.innerHTML = 'Próximo &raquo;';
        nextButton.dataset.page = 'next';
        if (currentPage === totalPages) nextButton.disabled = true;
        paginationControls.appendChild(nextButton);
    }

    // --- EVENT LISTENERS ---
    searchInput.addEventListener('input', applyFilters);
    searchButton.addEventListener('click', applyFilters);
    localSelect.addEventListener('change', applyFilters);
    categoriaSelect.addEventListener('change', applyFilters);

    clearFiltersButton.addEventListener('click', () => {
        searchInput.value = '';
        localSelect.value = '';
        categoriaSelect.value = '';
        applyFilters();
    });

    paginationControls.addEventListener('click', (event) => {
        const target = event.target;
        if (target.tagName !== 'BUTTON') return;
        const page = target.dataset.page;
        const totalPages = Math.ceil(currentFilteredItems.length / itemsPerPage);

        if (page === 'prev') {
            if (currentPage > 1) currentPage--;
        } else if (page === 'next') {
            if (currentPage < totalPages) currentPage++;
        } else {
            currentPage = parseInt(page, 10);
        }
        updatePaginationUI();
        displayCurrentPage();
    });

    // --- LÓGICA DO MODAL (Com correção de 'flex') ---
    tableBodyForModal.addEventListener('click', (event) => {
        if (event.target.classList.contains('item-img')) {
            modal.style.display = "flex"; // Garantindo que está 'flex'
            modalImg.src = event.target.src;
        }
    });

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
    
    // --- INICIALIZAÇÃO ---
    // Chama as funções para mostrar os dados na primeira carga
    updatePaginationUI();
    displayCurrentPage();

}); // Fim do 'DOMContentLoaded'