
document.addEventListener('DOMContentLoaded', () => {


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
            img: 'Página2_Images/100000452.FOTO PATRIMÔNIO.111924.jpg',
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
            img: 'Página2_Images/100000452.FOTO PATRIMÔNIO.111924.jpg',
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
            img: 'Página2_Images/64764010.FOTO PATRIMÔNIO SIAD.114441.jpg',
            nPatrimonio: '64764010',
            date: "Novembro/2025",
            local: 'WYNTECH OPERADORES',
            categoria: 'NOBREAK',
            usuario: 'Embaixo mesa',
            observacao: ''
        },
        {
            img: 'Página2_Images/100000304.FOTO PATRIMÔNIO.161835.jpg',
            nPatrimonio: '100000304',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'CADEIRA',
            usuario: 'Pollyanna',
            observacao: ''
        },
        {
            img: 'Página2_Images/580338.FOTO PATRIMÔNIO.162007.jpg',
            nPatrimonio: '580338',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'MONITOR',
            usuario: 'Pollyanna',
            observacao: ''
        },
        {
            img: 'Página2_Images/582773.FOTO PATRIMÔNIO.162112.jpg',
            nPatrimonio: '582773',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'GAVETEIRO',
            usuario: 'Pollyanna',
            observacao: ''
        },
        {
            img: 'Página2_Images/637642.FOTO PATRIMÔNIO.162233.jpg',
            nPatrimonio: '637642',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'MESA',
            usuario: 'Pollyanna',
            observacao: ''
        },
        {
            img: 'Página2_Images/99931060.FOTO PATRIMÔNIO.162354.jpg',
            nPatrimonio: '99931060',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'NOTEBOOK',
            usuario: 'Pollyanna',
            observacao: ''
        },
        {
            img: 'Página2_Images/83534474.FOTO PATRIMÔNIO.162607.jpg',
            nPatrimonio: '83534474',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'MONITOR',
            usuario: 'Bárbara Augusta',
            observacao: ''
        },
        {
            img: 'Página2_Images/100000355.FOTO PATRIMÔNIO.162723.jpg',
            nPatrimonio: '100000355',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'MESA',
            usuario: 'Bárbara Augusta',
            observacao: ''
        },
        {
            img: 'Página2_Images/99998580.FOTO PATRIMÔNIO.162904.jpg',
            nPatrimonio: '99998580',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'MESA',
            usuario: 'Bárbara Augusta',
            observacao: ''
        },
        {
            img: 'Página2_Images/129617970.FOTO PATRIMÔNIO.162909.jpg',
            nPatrimonio: '129617970',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'GAVETEIRO',
            usuario: 'Central de serviços',
            observacao: ''
        },
        {
            img: 'Página2_Images/84187069.FOTO PATRIMÔNIO.162919.jpg',
            nPatrimonio: '84187069',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'GAVETEIRO',
            usuario: 'Central de serviços',
            observacao: ''
        },
        {
            img: 'Página2_Images/129621340.FOTO PATRIMÔNIO.163003.jpg',
            nPatrimonio: '129621340',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'MESA',
            usuario: 'Central de serviços',
            observacao: ''
        },
        {
            img: 'Página2_Images/522351.FOTO PATRIMÔNIO.163034.jpg',
            nPatrimonio: '522351',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'MESA',
            usuario: 'Central de serviços',
            observacao: ''
        },
        {
            img: 'Página2_Images/434684.FOTO PATRIMÔNIO.163053.jpg',
            nPatrimonio: '434684',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'GAVETEIRO',
            usuario: 'Central de serviços',
            observacao: ''
        },
        {
            img: 'Página2_Images/84579641.FOTO PATRIMÔNIO.163103.jpg',
            nPatrimonio: '84579641',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'MESA',
            usuario: 'Central de serviços',
            observacao: ''
        },
        {
            img: 'Página2_Images/453590.FOTO PATRIMÔNIO.163113.jpg',
            nPatrimonio: '453590',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'MESA',
            usuario: 'Central de serviços',
            observacao: ''
        },
        {
            img: 'Página2_Images/434688.FOTO PATRIMÔNIO.163125.jpg',
            nPatrimonio: '434688',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'GAVETEIRO',
            usuario: 'Central de serviços',
            observacao: ''
        },
        {
            img: 'Página2_Images/421607.FOTO PATRIMÔNIO.163150.jpg',
            nPatrimonio: '421607',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'CADEIRA',
            usuario: 'Central de serviços',
            observacao: ''
        },
        {
            img: 'Página2_Images/129648345.FOTO PATRIMÔNIO.163156.jpg',
            nPatrimonio: '129648345',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'CADEIRA',
            usuario: 'Central de serviços',
            observacao: ''
        },
        {
            img: 'Página2_Images/510018.FOTO PATRIMÔNIO.163225.jpg',
            nPatrimonio: '510018',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'GAVETEIRO',
            usuario: 'Central de serviços',
            observacao: ''
        },
        {
            img: 'Página2_Images/99930765.FOTO PATRIMÔNIO.163231.jpg',
            nPatrimonio: '99930765',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'NOTEBOOK',
            usuario: 'Bárbara Augusta',
            observacao: ''
        },
        {
            img: 'Página2_Images/369781.FOTO PATRIMÔNIO.163245.jpg',
            nPatrimonio: '369781',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'MESA',
            usuario: 'Central de serviços',
            observacao: ''
        },
        {
            img: 'Página2_Images/GDGBEJIHA.FOTO PATRIMÔNIO.163301.jpg',
            nPatrimonio: 'GDGBEJIHA',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'CADEIRA',
            usuario: 'Central de serviços',
            observacao: ''
        },
        {
            img: 'Página2_Images/66719798.FOTO PATRIMÔNIO.163344.jpg',
            nPatrimonio: '66719798',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'TELEFONE',
            usuario: 'Bárbara Augusta',
            observacao: ''
        },
        {
            img: 'Página2_Images/99932024.FOTO PATRIMÔNIO.171041.jpg',
            nPatrimonio: '99932024',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'NOTEBOOK',
            usuario: 'Eider Ribeiro',
            observacao: ''
        },
        {
            img: 'Página2_Images/99932008.FOTO PATRIMÔNIO.171111.jpg',
            nPatrimonio: '99932008',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'NOTEBOOK',
            usuario: 'Júlio César',
            observacao: ''
        },
        {
            img: 'Página2_Images/99931966.FOTO PATRIMÔNIO.171117.jpg',
            nPatrimonio: '99931966',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'NOTEBOOK',
            usuario: 'André Luiz',
            observacao: ''
        },
        {
            img: 'Página2_Images/63626926.FOTO PATRIMÔNIO.171147.jpg',
            nPatrimonio: '63626926',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'ARMÁRIO',
            usuario: 'Armário dos notebook',
            observacao: ''
        },
        {
            img: 'Página2_Images/99931958.FOTO PATRIMÔNIO.171152.jpg',
            nPatrimonio: '99931958',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'NOTEBOOK',
            usuario: 'Jeferson Alfaia',
            observacao: ''
        },
        {
            img: 'Página2_Images/516915.FOTO PATRIMÔNIO.171207.jpg',
            nPatrimonio: '516915',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'ARMÁRIO',
            usuario: 'Armário dos notebook',
            observacao: ''
        },
        {
            img: 'Página2_Images/84280530.FOTO PATRIMÔNIO.171235.jpg',
            nPatrimonio: '84280530',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'VENTILADOR',
            usuario: 'Ventilador próximo armários',
            observacao: ''
        },
        {
            img: 'Página2_Images/63605139.FOTO PATRIMÔNIO.171240.jpg',
            nPatrimonio: '63605139',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'ARMÁRIO',
            usuario: 'Armário do café',
            observacao: ''
        },
        {
            img: 'Página2_Images/75324300.FOTO PATRIMÔNIO.171308.jpg',
            nPatrimonio: '75324300',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'ARMÁRIO',
            usuario: 'Armário do café',
            observacao: ''
        },
        {
            img: 'Página2_Images/637661.FOTO PATRIMÔNIO.171322.jpg',
            nPatrimonio: '637661',
            date: "Novembro/2025",
            local: 'EPROC',
            categoria: 'MESA',
            usuario: 'EPROC 1',
            observacao: ''
        },
        {
            img: 'Página2_Images/481509.FOTO PATRIMÔNIO.171340.jpg',
            nPatrimonio: '481509',
            date: "Novembro/2025",
            local: 'EPROC',
            categoria: 'GAVETEIRO',
            usuario: 'EPROC 2',
            observacao: ''
        },
        {
            img: 'Página2_Images/556439.FOTO PATRIMÔNIO.171351.jpg',
            nPatrimonio: '556439',
            date: "Novembro/2025",
            local: 'EPROC',
            categoria: 'GAVETEIRO',
            usuario: 'EPROC 1',
            observacao: ''
        },
        {
            img: 'Página2_Images/66736021.FOTO PATRIMÔNIO.171401.jpg',
            nPatrimonio: '66736021',
            date: "Novembro/2025",
            local: 'EPROC',
            categoria: 'TELEFONE',
            usuario: 'EPROC 2',
            observacao: ''
        },
        {
            img: 'Página2_Images/465564.FOTO PATRIMÔNIO.171421.jpg',
            nPatrimonio: '465564',
            date: "Novembro/2025",
            local: 'EPROC',
            categoria: 'TELEFONE',
            usuario: 'EPROC 1',
            observacao: ''
        },
        {
            img: 'Página2_Images/67558240.FOTO PATRIMÔNIO.171423.jpg',
            nPatrimonio: '67558240',
            date: "Novembro/2025",
            local: 'EPROC',
            categoria: 'MONITOR',
            usuario: 'EPROC 2',
            observacao: ''
        },
        {
            img: 'Página2_Images/75025540.FOTO PATRIMÔNIO.171449.jpg',
            nPatrimonio: '75025540',
            date: "Novembro/2025",
            local: 'EPROC',
            categoria: 'CADEIRA',
            usuario: 'EPROC 1',
            observacao: ''
        },
        {
            img: 'Página2_Images/99934566.FOTO PATRIMÔNIO.171456.jpg',
            nPatrimonio: '99934566',
            date: "Novembro/2025",
            local: 'EPROC',
            categoria: 'NOTEBOOK',
            usuario: 'EPROC 2',
            observacao: ''
        },
        {
            img: 'Página2_Images/75679108.FOTO PATRIMÔNIO.171521.jpg',
            nPatrimonio: '75679108',
            date: "Novembro/2025",
            local: 'EPROC',
            categoria: 'MESA',
            usuario: 'EPROC 2',
            observacao: ''
        },
        {
            img: 'Página2_Images/75285045.FOTO PATRIMÔNIO.171523.jpg',
            nPatrimonio: '75285045',
            date: "Novembro/2025",
            local: 'EPROC',
            categoria: 'MONITOR',
            usuario: 'EPROC 1',
            observacao: ''
        },
        {
            img: 'Página2_Images/74741675.FOTO PATRIMÔNIO.171544.jpg',
            nPatrimonio: '74741675',
            date: "Novembro/2025",
            local: 'EPROC',
            categoria: 'MONITOR',
            usuario: 'EPROC 1',
            observacao: ''
        },
        {
            img: 'Página2_Images/75025531.FOTO PATRIMÔNIO.171615.jpg',
            nPatrimonio: '75025531',
            date: "Novembro/2025",
            local: 'EPROC',
            categoria: 'CADEIRA',
            usuario: 'EPROC 2',
            observacao: ''
        },
        {
            img: 'Página2_Images/510024.FOTO PATRIMÔNIO.171632.jpg',
            nPatrimonio: '510024',
            date: "Novembro/2025",
            local: 'EPROC',
            categoria: 'GAVETEIRO',
            usuario: 'EPROC 3',
            observacao: ''
        },
        {
            img: 'Página2_Images/481511.FOTO PATRIMÔNIO.171709.jpg',
            nPatrimonio: '481511',
            date: "Novembro/2025",
            local: 'EPROC',
            categoria: 'GAVETEIRO',
            usuario: 'EPROC 4',
            observacao: ''
        },
        {
            img: 'Página2_Images/66751764.FOTO PATRIMÔNIO.171731.jpg',
            nPatrimonio: '66751764',
            date: "Novembro/2025",
            local: 'EPROC',
            categoria: 'TELEFONE',
            usuario: 'EPROC 4',
            observacao: ''
        },
        {
            img: 'Página2_Images/99877600.FOTO PATRIMÔNIO.171757.jpg',
            nPatrimonio: '99877600',
            date: "Novembro/2025",
            local: 'EPROC',
            categoria: 'MONITOR',
            usuario: 'EPROC 4',
            observacao: ''
        },
        {
            img: 'Página2_Images/128538562.FOTO PATRIMÔNIO.171810.jpg',
            nPatrimonio: '128538562',
            date: "Novembro/2025",
            local: 'EPROC',
            categoria: 'CADEIRA',
            usuario: 'EPROC 3',
            observacao: ''
        },
        {
            img: 'Página2_Images/75678616.FOTO PATRIMÔNIO.171824.jpg',
            nPatrimonio: '75678616',
            date: "Novembro/2025",
            local: 'EPROC',
            categoria: 'MESA',
            usuario: 'EPROC 4',
            observacao: ''
        },
        {
            img: 'Página2_Images/999954230.FOTO PATRIMÔNIO.171853.jpg',
            nPatrimonio: '999954230',
            date: "Novembro/2025",
            local: 'EPROC',
            categoria: 'NOTEBOOK',
            usuario: 'EPROC 4',
            observacao: ''
        },
        {
            img: 'Página2_Images/99935090.FOTO PATRIMÔNIO.171852.jpg',
            nPatrimonio: '99935090',
            date: "Novembro/2025",
            local: 'EPROC',
            categoria: 'NOTEBOOK',
            usuario: 'EPROC 3',
            observacao: ''
        },
        {
            img: 'Página2_Images/75771713.FOTO PATRIMÔNIO.171921.jpg',
            nPatrimonio: '75771713',
            date: "Novembro/2025",
            local: 'EPROC',
            categoria: 'MONITOR',
            usuario: 'EPROC 3',
            observacao: ''
        },
        {
            img: 'Página2_Images/128538597.FOTO PATRIMÔNIO.171953.jpg',
            nPatrimonio: '128538597',
            date: "Novembro/2025",
            local: 'EPROC',
            categoria: 'CADEIRA',
            usuario: 'EPROC 4',
            observacao: ''
        },
        {
            img: 'Página2_Images/83005749.FOTO PATRIMÔNIO.171956.jpg',
            nPatrimonio: '83005749',
            date: "Novembro/2025",
            local: 'EPROC',
            categoria: 'MONITOR',
            usuario: 'EPROC 3',
            observacao: ''
        },
        {
            img: 'Página2_Images/465547.FOTO PATRIMÔNIO.172013.jpg',
            nPatrimonio: '465547',
            date: "Novembro/2025",
            local: 'EPROC',
            categoria: 'TELEFONE',
            usuario: 'EPROC 3',
            observacao: ''
        },
        {
            img: 'Página2_Images/637693.FOTO PATRIMÔNIO.172049.jpg',
            nPatrimonio: '637693',
            date: "Novembro/2025",
            local: 'EPROC',
            categoria: 'MESA',
            usuario: 'EPROC 3',
            observacao: ''
        },{
            img: 'Página2_Images/100000215.FOTO PATRIMÔNIO.212229.jpg',
            nPatrimonio: '100000215',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'CADEIRA',
            usuario: 'Celso',
            observacao: ''
        },
        {
            img: 'Página2_Images/75627035.FOTO PATRIMÔNIO.212431.jpg',
            nPatrimonio: '75627035',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'MONITOR',
            usuario: 'Celso',
            observacao: ''
        },
        {
            img: 'Página2_Images/W0199.FOTO PATRIMÔNIO.212551.jpg',
            nPatrimonio: 'W0199',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'MONITOR',
            usuario: 'Celso',
            observacao: 'Sobressalente'
        },
        {
            img: 'Página2_Images/75303507.FOTO PATRIMÔNIO.212920.jpg',
            nPatrimonio: '75303507',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'MESA',
            usuario: 'Celso',
            observacao: ''
        },
        {
            img: 'Página2_Images/99931010.FOTO PATRIMÔNIO.213311.jpg',
            nPatrimonio: '99931010',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'NOTEBOOK',
            usuario: 'Celso',
            observacao: ''
        },
        {
            img: 'Página2_Images/580131.FOTO PATRIMÔNIO.103758.jpg',
            nPatrimonio: '580131',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'MONITOR',
            usuario: 'Arthur',
            observacao: ''
        },
        {
            img: 'Página2_Images/66751640.FOTO PATRIMÔNIO.103819.jpg',
            nPatrimonio: '66751640',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'TELEFONE',
            usuario: 'Arthur',
            observacao: ''
        },
        {
            img: 'Página2_Images/580033.FOTO PATRIMÔNIO.103837.jpg',
            nPatrimonio: '580033',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'MONITOR',
            usuario: 'Arthur',
            observacao: ''
        },
        {
            img: 'Página2_Images/99931117.FOTO PATRIMÔNIO.103903.jpg',
            nPatrimonio: '99931117',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'NOTEBOOK',
            usuario: 'Arthur',
            observacao: ''
        },
        {
            img: 'Página2_Images/517237.FOTO PATRIMÔNIO.103920.jpg',
            nPatrimonio: '517237',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'GAVETEIRO',
            usuario: 'Arthur',
            observacao: ''
        },
        {
            img: 'Página2_Images/128543922.FOTO PATRIMÔNIO.103953.jpg',
            nPatrimonio: '128543922',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'CADEIRA',
            usuario: 'Arthur',
            observacao: ''
        },
        {
            img: 'Página2_Images/75958260.FOTO PATRIMÔNIO.104042.jpg',
            nPatrimonio: '75958260',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'MESA',
            usuario: 'Arthur',
            observacao: ''
        },
        {
            img: 'Página2_Images/556440.FOTO PATRIMÔNIO.104102.jpg',
            nPatrimonio: '556440',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'GAVETEIRO',
            usuario: 'Rafael',
            observacao: ''
        },
        {
            img: 'Página2_Images/465655.FOTO PATRIMÔNIO.104123.jpg',
            nPatrimonio: '465655',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'TELEFONE',
            usuario: 'Rafael',
            observacao: ''
        },
        {
            img: 'Página2_Images/580413.FOTO PATRIMÔNIO.104139.jpg',
            nPatrimonio: '580413',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'MONITOR',
            usuario: 'Rafael',
            observacao: ''
        },
        {
            img: 'Página2_Images/580063.FOTO PATRIMÔNIO.104158.jpg',
            nPatrimonio: '580063',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'MONITOR',
            usuario: 'Rafael',
            observacao: ''
        },
        {
            img: 'Página2_Images/7499591.FOTO PATRIMÔNIO.104218.jpg',
            nPatrimonio: '7499591',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'CADEIRA',
            usuario: 'Rafael',
            observacao: ''
        },
        {
            img: 'Página2_Images/637691.FOTO PATRIMÔNIO.104238.jpg',
            nPatrimonio: '637691',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'MESA',
            usuario: 'Rafael',
            observacao: ''
        },
        {
            img: 'Página2_Images/99931630.FOTO PATRIMÔNIO.104303.jpg',
            nPatrimonio: '99931630',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'NOTEBOOK',
            usuario: 'Rafael',
            observacao: ''
        },
        {
            img: 'Página2_Images/99932172.FOTO PATRIMÔNIO.104334.jpg',
            nPatrimonio: '99932172',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'NOTEBOOK',
            usuario: 'Gabriel',
            observacao: ''
        },
        {
            img: 'Página2_Images/580039.FOTO PATRIMÔNIO.104408.jpg',
            nPatrimonio: '580039',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'MONITOR',
            usuario: 'Gabriel',
            observacao: ''
        },
        {
            img: 'Página2_Images/580464.FOTO PATRIMÔNIO.104424.jpg',
            nPatrimonio: '580464',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'MONITOR',
            usuario: 'Gabriel',
            observacao: ''
        },
        {
            img: 'Página2_Images/637677.FOTO PATRIMÔNIO.104445.jpg',
            nPatrimonio: '637677',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'MESA',
            usuario: 'Gabriel',
            observacao: ''
        },
        {
            img: 'Página2_Images/572844.FOTO PATRIMÔNIO.104513.jpg',
            nPatrimonio: '572844',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'CADEIRA',
            usuario: 'Gabriel',
            observacao: ''
        },
        {
            img: 'Página2_Images/517212.FOTO PATRIMÔNIO.104529.jpg',
            nPatrimonio: '517212',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'GAVETEIRO',
            usuario: 'Gabriel',
            observacao: ''
        },
        {
            img: 'Página2_Images/66728932.FOTO PATRIMÔNIO.104606.jpg',
            nPatrimonio: '66728932',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'TELEFONE',
            usuario: 'Gabriel',
            observacao: ''
        },
        {
            img: 'Página2_Images/66745365.FOTO PATRIMÔNIO.104627.jpg',
            nPatrimonio: '66745365',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'TELEFONE',
            usuario: 'Felipe',
            observacao: ''
        },
        {
            img: 'Página2_Images/99931990.FOTO PATRIMÔNIO.104647.jpg',
            nPatrimonio: '99931990',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'NOTEBOOK',
            usuario: 'Felipe',
            observacao: ''
        },
        {
            img: 'Página2_Images/580639.FOTO PATRIMÔNIO.104704.jpg',
            nPatrimonio: '580639',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'MONITOR',
            usuario: 'Felipe',
            observacao: ''
        },
        {
            img: 'Página2_Images/556441.FOTO PATRIMÔNIO.104720.jpg',
            nPatrimonio: '556441',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'GAVETEIRO',
            usuario: 'Felipe',
            observacao: ''
        },
        {
            img: 'Página2_Images/580006.FOTO PATRIMÔNIO.104734.jpg',
            nPatrimonio: '580006',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'MONITOR',
            usuario: 'Felipe',
            observacao: ''
        },
        {
            img: 'Página2_Images/128538570.FOTO PATRIMÔNIO.104820.jpg',
            nPatrimonio: '128538570',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'CADEIRA',
            usuario: 'Felipe',
            observacao: ''
        },
        {
            img: 'Página2_Images/637704.FOTO PATRIMÔNIO.104843.jpg',
            nPatrimonio: '637704',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'MESA',
            usuario: 'Felipe',
            observacao: ''
        },
        {
            img: 'Página2_Images/83279709.FOTO PATRIMÔNIO.104925.jpg',
            nPatrimonio: '83279709',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'CADEIRA',
            usuario: 'Cadeira do lado da Milaine',
            observacao: ''
        },
        {
            img: 'Página2_Images/510038.FOTO PATRIMÔNIO.104936.jpg',
            nPatrimonio: '510038',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'GAVETEIRO',
            usuario: 'Mesas do lado Paulinho',
            observacao: ''
        },
        {
            img: 'Página2_Images/637673.FOTO PATRIMÔNIO.105002.jpg',
            nPatrimonio: '637673',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'MESA',
            usuario: 'Mesas do lado Paulinho',
            observacao: ''
        },
        {
            img: 'Página2_Images/99877562.FOTO PATRIMÔNIO.105025.jpg',
            nPatrimonio: '99877562',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'MONITOR',
            usuario: 'Mesas do lado Paulinho',
            observacao: ''
        },
        {
            img: 'Página2_Images/284184.FOTO PATRIMÔNIO.105031.jpg',
            nPatrimonio: '284184',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'MESA',
            usuario: 'Mesa do lado da milaine',
            observacao: 'Sem etiqueta'
        },
        {
            img: 'Página2_Images/83508597.FOTO PATRIMÔNIO.105101.jpg',
            nPatrimonio: '83508597',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'COMPUTADOR',
            usuario: 'Milaine',
            observacao: ''
        },
        {
            img: 'Página2_Images/100000312.FOTO PATRIMÔNIO.105108.jpg',
            nPatrimonio: '100000312',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'CADEIRA',
            usuario: 'Mesas do lado Paulinho',
            observacao: ''
        },
        {
            img: 'Página2_Images/75679086.FOTO PATRIMÔNIO.105121.jpg',
            nPatrimonio: '75679086',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'MESA',
            usuario: 'Milaine',
            observacao: ''
        },
        {
            img: 'Página2_Images/83481982.FOTO PATRIMÔNIO.105141.jpg',
            nPatrimonio: '83481982',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'MONITOR',
            usuario: 'Milaine',
            observacao: ''
        },
        {
            img: 'Página2_Images/350690.FOTO PATRIMÔNIO.105149.jpg',
            nPatrimonio: '350690',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'TELEFONE',
            usuario: 'Paulo',
            observacao: ''
        },
        {
            img: 'Página2_Images/75318717.FOTO PATRIMÔNIO.105201.jpg',
            nPatrimonio: '75318717',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'MONITOR',
            usuario: 'Milaine',
            observacao: ''
        },
        {
            img: 'Página2_Images/75775298.FOTO PATRIMÔNIO.105213.jpg',
            nPatrimonio: '75775298',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'MONITOR',
            usuario: 'Paulo',
            observacao: ''
        },
        {
            img: 'Página2_Images/66737494.FOTO PATRIMÔNIO.105222.jpg',
            nPatrimonio: '66737494',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'TELEFONE',
            usuario: 'Milaine',
            observacao: ''
        },
        {
            img: 'Página2_Images/83205675.FOTO PATRIMÔNIO.105231.jpg',
            nPatrimonio: '83205675',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'MONITOR',
            usuario: 'Paulo',
            observacao: ''
        },
        {
            img: 'Página2_Images/84467410.FOTO PATRIMÔNIO.105244.jpg',
            nPatrimonio: '84467410',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'GAVETEIRO',
            usuario: 'Milaine',
            observacao: ''
        },
        {
            img: 'Página2_Images/435170.FOTO PATRIMÔNIO.105259.jpg',
            nPatrimonio: '435170',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'GAVETEIRO',
            usuario: 'Paulo',
            observacao: ''
        },
        {
            img: 'Página2_Images/637666.FOTO PATRIMÔNIO.105323.jpg',
            nPatrimonio: '637666',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'MESA',
            usuario: 'Paulo',
            observacao: ''
        },
        {
            img: 'Página2_Images/99913879.FOTO PATRIMÔNIO.105341.jpg',
            nPatrimonio: '99913879',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'CADEIRA',
            usuario: 'Milaine',
            observacao: ''
        },
        {
            img: 'Página2_Images/99913933.FOTO PATRIMÔNIO.105355.jpg',
            nPatrimonio: '99913933',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'CADEIRA',
            usuario: 'Paulo',
            observacao: ''
        },
        {
            img: 'Página2_Images/99931591.FOTO PATRIMÔNIO.105449.jpg',
            nPatrimonio: '99931591',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'NOTEBOOK',
            usuario: 'Paulo',
            observacao: ''
        },
        {
            img: 'Página2_Images/128620757.FOTO PATRIMÔNIO.105526.jpg',
            nPatrimonio: '128620757',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'VENTILADOR',
            usuario: 'Perto da milaine',
            observacao: ''
        },
        {
            img: 'Página2_Images/99926644.FOTO PATRIMÔNIO.105537.jpg',
            nPatrimonio: '99926644',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'HUB',
            usuario: 'Paulo',
            observacao: ''
        },
        {
            img: 'Página2_Images/67542972.FOTO PATRIMÔNIO.105604.jpg',
            nPatrimonio: '67542972',
            date: "Novembro/2025",
            local: 'GOOGLE',
            categoria: 'MONITOR',
            usuario: 'Roger',
            observacao: ''
        },
        {
            img: 'Página2_Images/84434716.FOTO PATRIMÔNIO.105604.jpg',
            nPatrimonio: '84434716',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'NOBREAK',
            usuario: 'Perto da milaine',
            observacao: ''
        },
        {
            img: 'Página2_Images/629650.FOTO PATRIMÔNIO.105622.jpg',
            nPatrimonio: '629650',
            date: "Novembro/2025",
            local: 'GOOGLE',
            categoria: 'MONITOR',
            usuario: 'Roger',
            observacao: ''
        },
        {
            img: 'Página2_Images/351731.FOTO PATRIMÔNIO.105635.jpg',
            nPatrimonio: '351731',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'TELEFONE',
            usuario: 'Rodrigo Abras',
            observacao: ''
        },
        {
            img: 'Página2_Images/99954192.FOTO PATRIMÔNIO.105651.jpg',
            nPatrimonio: '99954192',
            date: "Novembro/2025",
            local: 'GOOGLE',
            categoria: 'NOTEBOOK',
            usuario: 'Roger',
            observacao: ''
        },
        {
            img: 'Página2_Images/JABECGFFA.FOTO PATRIMÔNIO.105653.jpg',
            nPatrimonio: 'JABECGFFA',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'COMPUTADOR',
            usuario: 'Rodrigo Abras',
            observacao: ''
        },
        {
            img: 'Página2_Images/465542.FOTO PATRIMÔNIO.105708.jpg',
            nPatrimonio: '465542',
            date: "Novembro/2025",
            local: 'GOOGLE',
            categoria: 'TELEFONE',
            usuario: 'Roger',
            observacao: ''
        },
        {
            img: 'Página2_Images/100395872.FOTO PATRIMÔNIO.105715.jpg',
            nPatrimonio: '100395872',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'MONITOR',
            usuario: 'Rodrigo Abras',
            observacao: ''
        },
        {
            img: 'Página2_Images/517236.FOTO PATRIMÔNIO.105726.jpg',
            nPatrimonio: '517236',
            date: "Novembro/2025",
            local: 'GOOGLE',
            categoria: 'GAVETEIRO',
            usuario: 'Roger',
            observacao: ''
        },
        {
            img: 'Página2_Images/580092.FOTO PATRIMÔNIO.105729.jpg',
            nPatrimonio: '580092',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'MONITOR',
            usuario: 'Rodrigo Abras',
            observacao: ''
        },
        {
            img: 'Página2_Images/637710.FOTO PATRIMÔNIO.105744.jpg',
            nPatrimonio: '637710',
            date: "Novembro/2025",
            local: 'GOOGLE',
            categoria: 'MESA',
            usuario: 'Roger',
            observacao: ''
        },
        {
            img: 'Página2_Images/99934108.FOTO PATRIMÔNIO.105754.jpg',
            nPatrimonio: '99934108',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'NOTEBOOK',
            usuario: 'Rodrigo Abras',
            observacao: ''
        },
        {
            img: 'Página2_Images/100000240.FOTO PATRIMÔNIO.105819.jpg',
            nPatrimonio: '100000240',
            date: "Novembro/2025",
            local: 'GOOGLE',
            categoria: 'CADEIRA',
            usuario: 'Roger',
            observacao: ''
        },
        {
            img: 'Página2_Images/84397276.FOTO PATRIMÔNIO.105828.jpg',
            nPatrimonio: '84397276',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'NOTEBOOK',
            usuario: 'Rodrigo Abras',
            observacao: ''
        },
        {
            img: 'Página2_Images/556442.FOTO PATRIMÔNIO.105846.jpg',
            nPatrimonio: '556442',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'GAVETEIRO',
            usuario: 'Rodrigo Abras',
            observacao: ''
        },
        {
            img: 'Página2_Images/84467380.FOTO PATRIMÔNIO.105901.jpg',
            nPatrimonio: '84467380',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'GAVETEIRO',
            usuario: 'Rodrigo Abras',
            observacao: ''
        },
        {
            img: 'Página2_Images/100000398.FOTO PATRIMÔNIO.105902.jpg',
            nPatrimonio: '100000398',
            date: "Novembro/2025",
            local: 'GOOGLE',
            categoria: 'CADEIRA',
            usuario: 'Marcelo',
            observacao: ''
        },
        {
            img: 'Página2_Images/75679329.FOTO PATRIMÔNIO.105916.jpg',
            nPatrimonio: '75679329',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'MESA',
            usuario: 'Rodrigo Abras',
            observacao: ''
        },
        {
            img: 'Página2_Images/74865803.FOTO PATRIMÔNIO.105923.jpg',
            nPatrimonio: '74865803',
            date: "Novembro/2025",
            local: 'GOOGLE',
            categoria: 'MONITOR',
            usuario: 'Marcelo',
            observacao: ''
        },
        {
            img: 'Página2_Images/67544304.FOTO PATRIMÔNIO.105941.jpg',
            nPatrimonio: '67544304',
            date: "Novembro/2025",
            local: 'GOOGLE',
            categoria: 'MONITOR',
            usuario: 'Marcelo',
            observacao: ''
        },
        {
            img: 'Página2_Images/99913852.FOTO PATRIMÔNIO.105950.jpg',
            nPatrimonio: '99913852',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'CADEIRA',
            usuario: 'Rodrigo Abras',
            observacao: ''
        },
        {
            img: 'Página2_Images/351781.FOTO PATRIMÔNIO.110006.jpg',
            nPatrimonio: '351781',
            date: "Novembro/2025",
            local: 'GOOGLE',
            categoria: 'TELEFONE',
            usuario: 'Marcelo',
            observacao: ''
        },
        {
            img: 'Página2_Images/84467398.FOTO PATRIMÔNIO.110026.jpg',
            nPatrimonio: '84467398',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'GAVETEIRO',
            usuario: 'Patrícia',
            observacao: ''
        },
        {
            img: 'Página2_Images/514576.FOTO PATRIMÔNIO.110025.jpg',
            nPatrimonio: '514576',
            date: "Novembro/2025",
            local: 'GOOGLE',
            categoria: 'GAVETEIRO',
            usuario: 'Marcelo',
            observacao: ''
        },
        {
            img: 'Página2_Images/637708.FOTO PATRIMÔNIO.110043.jpg',
            nPatrimonio: '637708',
            date: "Novembro/2025",
            local: 'GOOGLE',
            categoria: 'MESA',
            usuario: 'Marcelo',
            observacao: ''
        },
        {
            img: 'Página2_Images/99990733.FOTO PATRIMÔNIO.110049.jpg',
            nPatrimonio: '99990733',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'CADEIRA',
            usuario: 'Patrícia',
            observacao: ''
        },
        {
            img: 'Página2_Images/99955822.FOTO PATRIMÔNIO.110110.jpg',
            nPatrimonio: '99955822',
            date: "Novembro/2025",
            local: 'GOOGLE',
            categoria: 'NOTEBOOK',
            usuario: 'Marcelo',
            observacao: ''
        },
        {
            img: 'Página2_Images/75958295.FOTO PATRIMÔNIO.110121.jpg',
            nPatrimonio: '75958295',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'MESA',
            usuario: 'Patrícia',
            observacao: ''
        },
        {
            img: 'Página2_Images/83222618.FOTO PATRIMÔNIO.110139.jpg',
            nPatrimonio: '83222618',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'MONITOR',
            usuario: 'Patrícia',
            observacao: ''
        },
        {
            img: 'Página2_Images/99932601.FOTO PATRIMÔNIO.110140.jpg',
            nPatrimonio: '99932601',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'NOTEBOOK',
            usuario: 'Patricia',
            observacao: ''
        },
        {
            img: 'Página2_Images/351780.FOTO PATRIMÔNIO.110200.jpg',
            nPatrimonio: '351780',
            date: "Novembro/2025",
            local: 'COOPE',
            categoria: 'TELEFONE',
            usuario: 'Patricia',
            observacao: ''
        },
        {
            img: 'Página2_Images/99930790.FOTO PATRIMÔNIO.111239.jpg',
            nPatrimonio: '99930790',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'NOTEBOOK',
            usuario: 'Jaime',
            observacao: ''
        },
        {
            img: 'Página2_Images/84281219.FOTO PATRIMÔNIO.111256.jpg',
            nPatrimonio: '84281219',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'VENTILADOR',
            usuario: 'Perto da porta',
            observacao: ''
        },
        {
            img: 'Página2_Images/67560180.FOTO PATRIMÔNIO.111300.jpg',
            nPatrimonio: '67560180',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'MONITOR',
            usuario: 'Jaime',
            observacao: ''
        },
        {
            img: 'Página2_Images/75275910.FOTO PATRIMÔNIO.111317.jpg',
            nPatrimonio: '75275910',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'MONITOR',
            usuario: 'Jaime',
            observacao: ''
        },
        {
            img: 'Página2_Images/63605120.FOTO PATRIMÔNIO.111331.jpg',
            nPatrimonio: '63605120',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'ARMÁRIO',
            usuario: 'Sala Wyntech',
            observacao: ''
        },
        {
            img: 'Página2_Images/75847272.FOTO PATRIMÔNIO.111339.jpg',
            nPatrimonio: '75847272',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'GAVETEIRO',
            usuario: 'Jaime',
            observacao: ''
        },
        {
            img: 'Página2_Images/637680.FOTO PATRIMÔNIO.111358.jpg',
            nPatrimonio: '637680',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'MESA',
            usuario: 'Jaime',
            observacao: ''
        },
        {
            img: 'Página2_Images/610940.FOTO PATRIMÔNIO.111400.jpg',
            nPatrimonio: '610940',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'GAVETEIRO',
            usuario: 'Sergio',
            observacao: ''
        },
        {
            img: 'Página2_Images/75678683.FOTO PATRIMÔNIO.111423.jpg',
            nPatrimonio: '75678683',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'MESA',
            usuario: 'Sergio',
            observacao: ''
        },
        {
            img: 'Página2_Images/100000371.FOTO PATRIMÔNIO.111429.jpg',
            nPatrimonio: '100000371',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'CADEIRA',
            usuario: 'Jaime',
            observacao: ''
        },
        {
            img: 'Página2_Images/83187928.FOTO PATRIMÔNIO.111502.jpg',
            nPatrimonio: '83187928',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'MONITOR',
            usuario: 'Guilherme',
            observacao: ''
        },
        {
            img: 'Página2_Images/580419.FOTO PATRIMÔNIO.111518.jpg',
            nPatrimonio: '580419',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'MONITOR',
            usuario: 'Sergio',
            observacao: ''
        },
        {
            img: 'Página2_Images/75881187.FOTO PATRIMÔNIO.111518.jpg',
            nPatrimonio: '75881187',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'MONITOR',
            usuario: 'Guilherme',
            observacao: ''
        },
        {
            img: 'Página2_Images/66733383.FOTO PATRIMÔNIO.111540.jpg',
            nPatrimonio: '66733383',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'TELEFONE',
            usuario: 'Sergio',
            observacao: ''
        },
        {
            img: 'Página2_Images/349502.FOTO PATRIMÔNIO.111550.jpg',
            nPatrimonio: '349502',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'TELEFONE',
            usuario: 'Guilherme',
            observacao: ''
        },
        {
            img: 'Página2_Images/99913941.FOTO PATRIMÔNIO.111601.jpg',
            nPatrimonio: '99913941',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'CADEIRA',
            usuario: 'Sergio',
            observacao: ''
        },
        {
            img: 'Página2_Images/99931052.FOTO PATRIMÔNIO.111612.jpg',
            nPatrimonio: '99931052',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'NOTEBOOK',
            usuario: 'Guilherme',
            observacao: ''
        },
        {
            img: 'Página2_Images/75847264.FOTO PATRIMÔNIO.111630.jpg',
            nPatrimonio: '75847264',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'GAVETEIRO',
            usuario: 'Guilherme',
            observacao: ''
        },
        {
            img: 'Página2_Images/99931036.FOTO PATRIMÔNIO.111635.jpg',
            nPatrimonio: '99931036',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'NOTEBOOK',
            usuario: 'Sergio',
            observacao: ''
        },
        {
            img: 'Página2_Images/75679060.FOTO PATRIMÔNIO.111655.jpg',
            nPatrimonio: '75679060',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'MESA',
            usuario: 'Abel',
            observacao: ''
        },
        {
            img: 'Página2_Images/99913950.FOTO PATRIMÔNIO.111657.jpg',
            nPatrimonio: '99913950',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'CADEIRA',
            usuario: 'Guilherme',
            observacao: ''
        },
        {
            img: 'Página2_Images/75247704.FOTO PATRIMÔNIO.111713.jpg',
            nPatrimonio: '75247704',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'MESA',
            usuario: 'Abel',
            observacao: ''
        },
        {
            img: 'Página2_Images/637639.FOTO PATRIMÔNIO.111715.jpg',
            nPatrimonio: '637639',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'MESA',
            usuario: 'Guilherme',
            observacao: ''
        },
        {
            img: 'Página2_Images/75847256.FOTO PATRIMÔNIO.111734.jpg',
            nPatrimonio: '75847256',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'GAVETEIRO',
            usuario: 'Abel',
            observacao: ''
        },
        {
            img: 'Página2_Images/527996.FOTO PATRIMÔNIO.111750.jpg',
            nPatrimonio: '527996',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'MONITOR',
            usuario: 'Abel',
            observacao: ''
        },
        {
            img: 'Página2_Images/637648.FOTO PATRIMÔNIO.111752.jpg',
            nPatrimonio: '637648',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'MESA',
            usuario: 'Léo',
            observacao: ''
        },
        {
            img: 'Página2_Images/580070.FOTO PATRIMÔNIO.111810.jpg',
            nPatrimonio: '580070',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'MONITOR',
            usuario: 'Léo',
            observacao: ''
        },
        {
            img: 'Página2_Images/99930773.FOTO PATRIMÔNIO.111815.jpg',
            nPatrimonio: '99930773',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'NOTEBOOK',
            usuario: 'Abel',
            observacao: ''
        },
        {
            img: 'Página2_Images/99931109.FOTO PATRIMÔNIO.111843.jpg',
            nPatrimonio: '99931109',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'NOTEBOOK',
            usuario: 'Léo',
            observacao: ''
        },
        {
            img: 'Página2_Images/627156.FOTO PATRIMÔNIO.111844.jpg',
            nPatrimonio: '627156',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'MONITOR',
            usuario: 'Kaike',
            observacao: ''
        },
        {
            img: 'Página2_Images/99931486.FOTO PATRIMÔNIO.111901.jpg',
            nPatrimonio: '99931486',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'NOTEBOOK',
            usuario: 'Kaike',
            observacao: ''
        },
        {
            img: 'Página2_Images/83350713.FOTO PATRIMÔNIO.111913.jpg',
            nPatrimonio: '83350713',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'CADEIRA',
            usuario: 'Léo',
            observacao: ''
        },
        {
            img: 'Página2_Images/129607967.FOTO PATRIMÔNIO.111929.jpg',
            nPatrimonio: '129607967',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'CADEIRA',
            usuario: 'Kaike',
            observacao: ''
        },
        {
            img: 'Página2_Images/637637.FOTO PATRIMÔNIO.111953.jpg',
            nPatrimonio: '637637',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'MESA',
            usuario: 'Kaike',
            observacao: ''
        },
        {
            img: 'Página2_Images/75847248.FOTO PATRIMÔNIO.112013.jpg',
            nPatrimonio: '75847248',
            date: "Novembro/2Fevereiro/2025",
            local: 'WYNTECH SALA',
            categoria: 'GAVETEIRO',
            usuario: 'Kaike',
            observacao: ''
        },
        {
            img: 'Página2_Images/84280549.FOTO PATRIMÔNIO.112030.jpg',
            nPatrimonio: '84280549',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'VENTILADOR',
            usuario: 'Ventilador sala wyntech',
            observacao: ''
        },
        {
            img: 'Página2_Images/67021298.FOTO PATRIMÔNIO.112035.jpg',
            nPatrimonio: '67021298',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'MONITOR',
            usuario: 'Laisla',
            observacao: ''
        },
        {
            img: 'Página2_Images/582772.FOTO PATRIMÔNIO.112051.jpg',
            nPatrimonio: '582772',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'GAVETEIRO',
            usuario: 'Laisla',
            observacao: ''
        },
        {
            img: 'Página2_Images/100170285.FOTO PATRIMÔNIO.112102.jpg',
            nPatrimonio: '100170285',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'NOTEBOOK',
            usuario: 'Notebook redes',
            observacao: ''
        },
        {
            img: 'Página2_Images/100479715.FOTO PATRIMÔNIO.112107.jpg',
            nPatrimonio: '100479715',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'MESA',
            usuario: 'Laisla',
            observacao: ''
        },
        {
            img: 'Página2_Images/65598880.FOTO PATRIMÔNIO.112134.jpg',
            nPatrimonio: '65598880',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'CADEIRA',
            usuario: 'Laisla',
            observacao: ''
        },
        {
            img: 'Página2_Images/99930803.FOTO PATRIMÔNIO.112144.jpg',
            nPatrimonio: '99930803',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'NOTEBOOK',
            usuario: 'Wyntech sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/519204.FOTO PATRIMÔNIO.112224.jpg',
            nPatrimonio: '519204',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'MESA',
            usuario: 'Mesa notebook redes wyntech',
            observacao: ''
        },
        {
            img: 'Página2_Images/83381244.FOTO PATRIMÔNIO.112313.jpg',
            nPatrimonio: '83381244',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'CADEIRA',
            usuario: 'Dani',
            observacao: ''
        },
        {
            img: 'Página2_Images/99913968.FOTO PATRIMÔNIO.112324.jpg',
            nPatrimonio: '99913968',
            date: "Novembro/2Pos/2025",
            local: 'WYNTECH SALA',
            categoria: 'CADEIRA',
            usuario: 'Dani',
            observacao: ''
        },
        {
            img: 'Página2_Images/517218.FOTO PATRIMÔNIO.112341.jpg',
            nPatrimonio: '517218',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'GAVETEIRO',
            usuario: 'Dani',
            observacao: ''
        },
        {
            img: 'Página2_Images/75678632.FOTO PATRIMÔNIO.112402.jpg',
            nPatrimonio: '75678632',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'MESA',
            usuario: 'Dani',
            observacao: ''
        },
        {
            img: 'Página2_Images/83516875.FOTO PATRIMÔNIO.112423.jpg',
            nPatrimonio: '83516875',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'MONITOR',
            usuario: 'Dani',
            observacao: ''
        },
        {
            img: 'Página2_Images/83523197.FOTO PATRIMÔNIO.112450.jpg',
            nPatrimonio: '83523197',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'MONITOR',
            usuario: 'Dani',
            observacao: ''
        },
        {
            img: 'Página2_Images/99931044.FOTO PATRIMÔNIO.112519.jpg',
            nPatrimonio: '99931044',
            date: "Novembro/2025",
            local: 'WYNTECH SALA',
            categoria: 'NOTEBOOK',
            usuario: 'Dani',
            observacao: ''
        },      
        {
            img: 'Página2_Images/479815.FOTO PATRIMÔNIO.115111.jpg',
            nPatrimonio: '479815',
            date: "Novembro/2025",
            local: 'RAJA',
            categoria: 'ARMÁRIO',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/63728940.FOTO PATRIMÔNIO.115129.jpg',
            nPatrimonio: '63728940',
            date: "Novembro/2025",
            local: 'RAJA',
            categoria: 'ARMÁRIO',
            usuario: 'sala',
            observacao: ''
        },
        {
            img: 'Página2_Images.FOTO PATRIMÔNIO.348247.jpg',
            nPatrimonio: '348247',
            date: "Novembro/2025",
            local: 'RAJA',
            categoria: 'ARMÁRIO',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/63652099.FOTO PATRIMÔNIO.115236.jpg',
            nPatrimonio: '63652099',
            date: "Novembro/2025",
            local: 'RAJA',
            categoria: 'ARMÁRIO',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/63655853.FOTO PATRIMÔNIO.115252.jpg',
            nPatrimonio: '63655853',
            date: "Novembro/2025",
            local: 'RAJA',
            categoria: 'ARMÁRIO',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/65688260.FOTO PATRIMÔNIO.115324.jpg',
            nPatrimonio: '65688260',
            date: "Novembro/2025",
            local: 'RAJA',
            categoria: 'MESA',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/489615.FOTO PATRIMÔNIO.115404.jpg',
            nPatrimonio: '489615',
            date: "Novembro/2025",
            local: 'RAJA',
            categoria: 'Outros',
            usuario: 'Sala',
            observacao: 'Frigobar'
        },
        {
            img: 'Página2_Images/83428003.FOTO PATRIMÔNIO.115440.jpg',
            nPatrimonio: '83428003',
            date: "Novembro/2025",
            local: 'RAJA',
            categoria: 'MONITOR',
            usuario: 'Pericles',
            observacao: ''
        },
        {
            img: 'Página2_Images/Sem patrimônio.FOTO PATRIMÔNIO.115535.jpg',
            nPatrimonio: 'Sem patrimônio',
            date: "Novembro/2025",
            local: 'RAJA',
            categoria: 'MONITOR',
            usuario: 'Pericles',
            observacao: ''
        },
        {
            img: 'Página2_Images/501362.FOTO PATRIMÔNIO.115604.jpg',
            nPatrimonio: '501362',
            date: "Novembro/2025",
            local: 'RAJA',
            categoria: 'GAVETEIRO',
            usuario: 'Pericles',
            observacao: ''
        },
        {
            img: 'Página2_Images/99921855.FOTO PATRIMÔNIO.115637.jpg',
            nPatrimonio: '99921855',
            date: "Novembro/2025",
            local: 'RAJA',
            categoria: 'CADEIRA',
            usuario: 'Pericles',
            observacao: ''
        },
        {
            img: 'Página2_Images/75305992.FOTO PATRIMÔNIO.115712.jpg',
            nPatrimonio: '75305992',
            date: "Novembro/2025",
            local: 'RAJA',
            categoria: 'MESA',
            usuario: 'Pericles',
            observacao: ''
        },
        {
            img: 'Página2_Images/63226308.FOTO PATRIMÔNIO.115741.jpg',
            nPatrimonio: '63226308',
            date: "Novembro/2025",
            local: 'RAJA',
            categoria: 'MESA',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/9041462.FOTO PATRIMÔNIO.115820.jpg',
            nPatrimonio: '9041462',
            date: "Novembro/2025",
            local: 'RAJA',
            categoria: 'Outros',
            usuario: 'Sala',
            observacao: 'Impressora'
        },
        {
            img: 'Página2_Images/83461795.FOTO PATRIMÔNIO.115854.jpg',
            nPatrimonio: '83461795',
            date: "Novembro/2025",
            local: 'RAJA',
            categoria: 'COMPUTADOR',
            usuario: 'Pericles',
            observacao: ''
        },
        {
            img: 'Página2_Images/66742358.FOTO PATRIMÔNIO.120003.jpg',
            nPatrimonio: '66742358',
            date: "Novembro/2025",
            local: 'RAJA',
            categoria: 'TELEFONE',
            usuario: 'Na frente do pericles',
            observacao: ''
        },
        {
            img: 'Página2_Images/75130840.FOTO PATRIMÔNIO.120021.jpg',
            nPatrimonio: '75130840',
            date: "Novembro/2025",
            local: 'RAJA',
            categoria: 'COMPUTADOR',
            usuario: 'Na frente do pericles',
            observacao: ''
        },
        {
            img: 'Página2_Images/556943.FOTO PATRIMÔNIO.120057.jpg',
            nPatrimonio: '556943',
            date: "Novembro/2025",
            local: 'RAJA',
            categoria: 'MONITOR',
            usuario: 'Na frente do pericles',
            observacao: ''
        },
        {
            img: 'Página2_Images/67554172.FOTO PATRIMÔNIO.120154.jpg',
            nPatrimonio: '67554172',
            date: "Novembro/2025",
            local: 'RAJA',
            categoria: 'MONITOR',
            usuario: 'Na frente do pericles',
            observacao: 'Sem etiqueta'
        },
        {
            img: 'Página2_Images/63220326.FOTO PATRIMÔNIO.120212.jpg',
            nPatrimonio: '63220326',
            date: "Novembro/2025",
            local: 'RAJA',
            categoria: 'MESA',
            usuario: 'Na frente do pericles',
            observacao: ''
        },
        {
            img: 'Página2_Images/501361.FOTO PATRIMÔNIO.120228.jpg',
            nPatrimonio: '501361',
            date: "Novembro/2025",
            local: 'RAJA',
            categoria: 'GAVETEIRO',
            usuario: 'Na frente do pericles',
            observacao: ''
        },
        {
            img: 'Página2_Images/99921847.FOTO PATRIMÔNIO.120254.jpg',
            nPatrimonio: '99921847',
            date: "Novembro/2025",
            local: 'RAJA',
            categoria: 'CADEIRA',
            usuario: 'Na frente do pericles',
            observacao: ''
        },
        {
            img: 'Página2_Images/66828538.FOTO PATRIMÔNIO.120326.jpg',
            nPatrimonio: '66828538',
            date: "Novembro/2025",
            local: 'RAJA',
            categoria: 'Outros',
            usuario: 'Sala',
            observacao: 'Carrinho de mão'
        },
        {
            img: 'Página2_Images/4700002084352.FOTO PATRIMÔNIO.120356.jpg',
            nPatrimonio: '4700002084352',
            date: "Novembro/2025",
            local: 'RAJA',
            categoria: 'MONITOR',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/213223.FOTO PATRIMÔNIO.120430.jpg',
            nPatrimonio: '213223',
            date: "Novembro/2025",
            local: 'RAJA',
            categoria: 'Outros',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/65335490.FOTO PATRIMÔNIO.120508.jpg',
            nPatrimonio: '65335490',
            date: "Novembro/2025",
            local: 'RAJA',
            categoria: 'CADEIRA',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/65335503.FOTO PATRIMÔNIO.120533.jpg',
            nPatrimonio: '65335503',
            date: "Novembro/2025",
            local: 'RAJA',
            categoria: 'CADEIRA',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/466934.FOTO PATRIMÔNIO.120557.jpg',
            nPatrimonio: '466934',
            date: "Novembro/2025",
            local: 'RAJA',
            categoria: 'COMPUTADOR',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/63950340.FOTO PATRIMÔNIO.120808.jpg',
            nPatrimonio: '63950340',
            date: "Novembro/2025",
            local: 'RAJA',
            categoria: 'GAVETEIRO',
            usuario: 'Cleuber',
            observacao: ''
        },
        {
            img: 'Página2_Images/66751160.FOTO PATRIMÔNIO.120831.jpg',
            nPatrimonio: '66751160',
            date: "Novembro/2025",
            local: 'RAJA',
            categoria: 'TELEFONE',
            usuario: 'Cleuber',
            observacao: ''
        },
        {
            img: 'Página2_Images/65734548.FOTO PATRIMÔNIO.120849.jpg',
            nPatrimonio: '65734548',
            date: "Novembro/2025",
            local: 'RAJA',
            categoria: 'MESA',
            usuario: 'Cleuber',
            observacao: ''
        },
        {
            img: 'Página2_Images/83427996.FOTO PATRIMÔNIO.120910.jpg',
            nPatrimonio: '83427996',
            date: "Novembro/2025",
            local: 'RAJA',
            categoria: 'MONITOR',
            usuario: 'Cleuber',
            observacao: ''
        },
        {
            img: 'Página2_Images/75019531.FOTO PATRIMÔNIO.120958.jpg',
            nPatrimonio: '75019531',
            date: "Novembro/2025",
            local: 'RAJA',
            categoria: 'CADEIRA',
            usuario: 'Cleuber',
            observacao: ''
        },
        {
            img: 'Página2_Images/M786401729011.FOTO PATRIMÔNIO.121035.jpg',
            nPatrimonio: 'M786401729011',
            date: "Novembro/2025",
            local: 'RAJA',
            categoria: 'MONITOR',
            usuario: 'Cleuber',
            observacao: ''
        },
        {
            img: 'Página2_Images/83461817.FOTO PATRIMÔNIO.121102.jpg',
            nPatrimonio: '83461817',
            date: "Novembro/2025",
            local: 'RAJA',
            categoria: 'COMPUTADOR',
            usuario: 'Cleuber',
            observacao: ''
        },
        {
            img: 'Página2_Images/A094333789370651.FOTO PATRIMÔNIO.121154.jpg',
            nPatrimonio: 'A094333789370651',
            date: "Novembro/2025",
            local: 'RAJA',
            categoria: 'Outros',
            usuario: 'Sala',
            observacao: 'Impressora'
        },
        {
            img: 'Página2_Images/7898555219595.FOTO PATRIMÔNIO.121235.jpg',
            nPatrimonio: '7898555219595',
            date: "Novembro/2025",
            local: 'RAJA',
            categoria: 'Outros',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/66720150.FOTO PATRIMÔNIO.124544.jpg',
            nPatrimonio: '66720150',
            date: "Novembro/2025",
            local: 'FÓRUM LAFAETE',
            categoria: 'TELEFONE',
            usuario: 'Alexandre',
            observacao: ''
        },
        {
            img: 'Página2_Images/83477942.FOTO PATRIMÔNIO.124606.jpg',
            nPatrimonio: '83477942',
            date: "Novembro/2025",
            local: 'FÓRUM LAFAETE',
            categoria: 'MONITOR',
            usuario: 'Alexandre',
            observacao: ''
        },
        {
            img: 'Página2_Images/75630818.FOTO PATRIMÔNIO.124624.jpg',
            nPatrimonio: '75630818',
            date: "Novembro/2025",
            local: 'FÓRUM LAFAETE',
            categoria: 'MONITOR',
            usuario: 'Alexandre',
            observacao: ''
        },
        {
            img: 'Página2_Images/63090350.FOTO PATRIMÔNIO.124648.jpg',
            nPatrimonio: '63090350',
            date: "Novembro/2025",
            local: 'FÓRUM LAFAETE',
            categoria: 'MESA',
            usuario: 'Alexandre',
            observacao: ''
        },
        {
            img: 'Página2_Images/100053157.FOTO PATRIMÔNIO.124731.jpg',
            nPatrimonio: '100053157',
            date: "Novembro/2U/2025",
            local: 'FÓRUM LAFAETE',
            categoria: 'CADEIRA',
            usuario: 'Alexandre',
            observacao: ''
        },
        {
            img: 'Página2_Images/83504419.FOTO PATRIMÔNIO.124801.jpg',
            nPatrimonio: '83504419',
            date: "Novembro/2025",
            local: 'FÓRUM LAFAETE',
            categoria: 'COMPUTADOR',
            usuario: 'Alexandre',
            observacao: ''
        },
        {
            img: 'Página2_Images/201116.FOTO PATRIMÔNIO.124835.jpg',
            nPatrimonio: '201116',
            date: "Novembro/2025",
            local: 'FÓRUM LAFAETE',
            categoria: 'GAVETEIRO',
            usuario: 'Alexandre',
            observacao: ''
        },
        {
            img: 'Página2_Images/572536.FOTO PATRIMÔNIA.124915.jpg',
            nPatrimonio: '572536',
            date: "Novembro/2025",
            local: 'FÓRUM LAFAETE',
            categoria: 'Outros',
            usuario: 'Alexandre',
            observacao: 'Impressora'
        },
        {
            img: 'Página2_Images/479814.FOTO PATRIMÔNIO.124930.jpg',
            nPatrimonio: '479814',
            date: "Novembro/2025",
            local: 'FÓRUM LAFAETE',
            categoria: 'ARMÁRIO',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/9042913.FOTO PATRIMÔNIO.124952.jpg',
            nPatrimonio: '9042913',
            date: "Novembro/2025",
            local: 'FÓRUM LAFAETE',
            categoria: 'Outros',
            usuario: 'Sala',
            observacao: 'Impressora'
        },
        {
            img: 'Página2_Images/83483420.FOTO PATRIMÔNIO.125019.jpg',
            nPatrimonio: '83483420',
            date: "Novembro/2025",
            local: 'FÓRUM LAFAETE',
            categoria: 'MONITOR',
            usuario: 'Jaime',
            observacao: ''
        },
        {
            img: 'Página2_Images/543364.FOTO PATRIMÔNIO.125033.jpg',
            nPatrimonio: '543364',
            date: "Novembro/2025",
            local: 'FÓRUM LAFAETE',
            categoria: 'MONITOR',
            usuario: 'Jaime',
            observacao: ''
        },
        {
            img: 'Página2_Images/83507388.FOTO PATRIMÔNIO.125049.jpg',
            nPatrimonio: '83507388',
            date: "Novembro/2025",
            local: 'FÓRUM LAFAETE',
            categoria: 'COMPUTADOR',
            usuario: 'Jaime',
            observacao: ''
        },
        {
            img: 'Página2_Images/83504575.FOTO PATRIMÔNIO.125600.jpg',
            nPatrimonio: '83504575',
            date: "Novembro/2025",
            local: 'FÓRUM LAFAETE',
            categoria: 'COMPUTADOR',
            usuario: 'Luiz  - Stefanini',
            observacao: ''
        },
        {
            img: 'Página2_Images/626773.FOTO PATRIMÔNIO.125617.jpg',
            nPatrimonio: '626773',
            date: "Novembro/2025",
            local: 'FÓRUM LAFAETE',
            categoria: 'MONITOR',
            usuario: 'Leonardo',
            observacao: ''
        },
        {
            img: 'Página2_Images/83477977.FOTO PATRIMÔNIO.125634.jpg',
            nPatrimonio: '83477977',
            date: "Novembro/2025",
            local: 'FÓRUM LAFAETE',
            categoria: 'MONITOR',
            usuario: 'Leonardo',
            observacao: ''
        },
        {
            img: 'Página2_Images/83504427.FOTO PATRIMÔNIO.125652.jpg',
            nPatrimonio: '83504427',
            date: "Novembro/2025",
            local: 'FÓRUM LAFAETE',
            categoria: 'COMPUTADOR',
            usuario: 'Leonardo',
            observacao: ''
        },
        {
            img: 'Página2_Images/63860139.FOTO PATRIMÔNIO.125716.jpg',
            nPatrimonio: '63860139',
            date: "Novembro/2025",
            local: 'FÓRUM LAFAETE',
            categoria: 'GAVETEIRO',
            usuario: 'Leonardo',
            observacao: ''
        },
        {
            img: 'Página2_Images/99840464.FOTO PATRIMÔNIO.125733.jpg',
            nPatrimonio: '99840464',
            date: "Novembro/2025",
            local: 'FÓRUM LAFAETE',
            categoria: 'MESA',
            usuario: 'Leonardo',
            observacao: ''
        },
        {
            img: 'Página2_Images/445436.FOTO PATRIMÔNIO.125756.jpg',
            nPatrimonio: '445436',
            date: "Novembro/2025",
            local: 'FÓRUM LAFAETE',
            categoria: 'Outros',
            usuario: 'Leonardo',
            observacao: 'Impressora'
        },
        {
            img: 'Página2_Images/99788829.FOTO PATRIMÔNIO.125821.jpg',
            nPatrimonio: '99788829',
            date: "Novembro/2025",
            local: 'FÓRUM LAFAETE',
            categoria: 'CADEIRA',
            usuario: 'Leonardo',
            observacao: ''
        },
        {
            img: 'Página2_Images/165812.FOTO PATRIMÔNIO.125842.jpg',
            nPatrimonio: '165812',
            date: "Novembro/2025",
            local: 'FÓRUM LAFAETE',
            categoria: 'GAVETEIRO',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/66721598.FOTO PATRIMÔNIO.125907.jpg',
            nPatrimonio: '66721598',
            date: "Novembro/2025",
            local: 'FÓRUM LAFAETE',
            categoria: 'TELEFONE',
            usuario: 'Peterson',
            observacao: ''
        },
        {
            img: 'Página2_Images/83477950.FOTO PATRIMÔNIO.125920.jpg',
            nPatrimonio: '83477950',
            date: "Novembro/2025",
            local: 'FÓRUM LAFAETE',
            categoria: 'MONITOR',
            usuario: 'Peterson',
            observacao: ''
        },
        {
            img: 'Página2_Images/1098.FOTO PATRIMÔNIO.125940.jpg',
            nPatrimonio: '1098',
            date: "Novembro/2025",
            local: 'FÓRUM LAFAETE',
            categoria: 'MONITOR',
            usuario: 'Peterson',
            observacao: ''
        },
        {
            img: 'Página2_Images/83504435.FOTO PATRIMÔNIO.125959.jpg',
            nPatrimonio: '83504435',
            date: "Novembro/2025",
            local: 'FÓRUM LAFAETE',
            categoria: 'COMPUTADOR',
            usuario: 'Peterson',
            observacao: ''
        },
        {
            img: 'Página2_Images/63090597.FOTO PATRIMÔNIO.130018.jpg',
            nPatrimonio: '63090597',
            date: "Novembro/2025",
            local: 'FÓRUM LAFAETE',
            categoria: 'MESA',
            usuario: 'Peterson',
            observacao: ''
        },
        {
            img: 'Página2_Images/84546689.FOTO PATRIMÔNIO.130039.jpg',
            nPatrimonio: '84546689',
            date: "Novembro/2025",
            local: 'FÓRUM LAFAETE',
            categoria: 'CADEIRA',
            usuario: 'Peterson',
            observacao: ''
        },
        {
            img: 'Página2_Images/83504559.FOTO PATRIMÔNIO.130057.jpg',
            nPatrimonio: '83504559',
            date: "Novembro/2025",
            local: 'FÓRUM LAFAETE',
            categoria: 'COMPUTADOR',
            usuario: 'Marcela',
            observacao: ''
        },
        {
            img: 'Página2_Images/83478094.FOTO PATRIMÔNIO.130113.jpg',
            nPatrimonio: '83478094',
            date: "Novembro/2025",
            local: 'FÓRUM LAFAETE',
            categoria: 'MONITOR',
            usuario: 'Marcela',
            observacao: ''
        },
        {
            img: 'Página2_Images/Sem patrimônioo.FOTO PATRIMÔNIO.130158.jpg',
            nPatrimonio: 'Sem patrimônio',
            date: "Novembro/2025",
            local: 'FÓRUM LAFAETE',
            categoria: 'MONITOR',
            usuario: 'Marcela',
            observacao: ''
        },
        {
            img: 'Página2_Images/349367.FOTO PATRIMÔNIO.130215.jpg',
            nPatrimonio: '349367',
            date: "Novembro/2025",
            local: 'FÓRUM LAFAETE',
            categoria: 'TELEFONE',
            usuario: 'Marcela',
            observacao: ''
        },
        {
            img: 'Página2_Images/582297.FOTO PATRIMÔNIO.130236.jpg',
            nPatrimonio: '582297',
            date: "Novembro/2025",
            local: 'FÓRUM LAFAETE',
            categoria: 'GAVETEIRO',
            usuario: 'Marcela',
            observacao: ''
        },
        {
            img: 'Página2_Images/Sem etiqueta.FOTO PATRIMÔNIO.130328.jpg',
            nPatrimonio: 'Sem etiqueta',
            date: "Novembro/2025",
            local: 'FÓRUM LAFAETE',
            categoria: 'MESA',
            usuario: 'Marcela',
            observacao: ''
        },
        {
            img: 'Página2_Images/100053149.FOTO PATRIMÔNIO.130351.jpg',
            nPatrimonio: '100053149',
            date: "Novembro/2025",
            local: 'FÓRUM LAFAETE',
            categoria: 'CADEIRA',
            usuario: 'Marcela',
            observacao: ''
        },
        {
            img: 'Página2_Images/83497447.FOTO PATRIMÔNIO.130430.jpg',
            nPatrimonio: '83497447',
            date: "Novembro/2025",
            local: 'FÓRUM LAFAETE',
            categoria: 'COMPUTADOR',
            usuario: 'Elias',
            observacao: ''
        },
        {
            img: 'Página2_Images/349806.FOTO PATRIMÔNIO.130500.jpg',
            nPatrimonio: '349806',
            date: "Novembro/2025",
            local: 'FÓRUM LAFAETE',
            categoria: 'TELEFONE',
            usuario: 'Elias',
            observacao: ''
        },
        {
            img: 'Página2_Images/83469931.FOTO PATRIMÔNIO.130514.jpg',
            nPatrimonio: '83469931',
            date: "Novembro/2025",
            local: 'FÓRUM LAFAETE',
            categoria: 'MONITOR',
            usuario: 'Elias',
            observacao: ''
        },
        {
            img: 'Página2_Images/591646.FOTO PATRIMÔNIO.130529.jpg',
            nPatrimonio: '591646',
            date: "Novembro/2025",
            local: 'FÓRUM LAFAETE',
            categoria: 'MONITOR',
            usuario: 'Elias',
            observacao: ''
        },
        {
            img: 'Página2_Images/201110.FOTO PATRIMÔNIO.130554.jpg',
            nPatrimonio: '201110',
            date: "Novembro/2025",
            local: 'FÓRUM LAFAETE',
            categoria: 'GAVETEIRO',
            usuario: 'Elias',
            observacao: ''
        },
        {
            img: 'Página2_Images/83366490.FOTO PATRIMÔNIO.130612.jpg',
            nPatrimonio: '83366490',
            date: "Novembro/2025",
            local: 'FÓRUM LAFAETE',
            categoria: 'MESA',
            usuario: 'Elias',
            observacao: ''
        },
        {
            img: 'Página2_Images/100053122.FOTO PATRIMÔNIO.130638.jpg',
            nPatrimonio: '100053122',
            date: "Novembro/2025",
            local: 'FÓRUM LAFAETE',
            categoria: 'CADEIRA',
            usuario: 'Elias',
            observacao: ''
        },
        {
            img: 'Página2_Images/63726106.FOTO PATRIMÔNIO.130707.jpg',
            nPatrimonio: '63726106',
            date: "Novembro/2025",
            local: 'FÓRUM LAFAETE',
            categoria: 'ARMÁRIO',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/420536.FOTO PATRIMÔNIO.130720.jpg',
            nPatrimonio: '420536',
            date: "Novembro/2025",
            local: 'FÓRUM LAFAETE',
            categoria: 'ARMÁRIO',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/Não tem.FOTO PATRIMÔNIO.130804.jpg',
            nPatrimonio: 'Sem patrimônio',
            date: "Novembro/2025",
            local: 'FÓRUM LAFAETE',
            categoria: 'Outros',
            usuario: 'Sala',
            observacao: 'Sem patrimônio. Apresentando barulho'
        },
        {
            img: 'Página2_Images/63091445.FOTO PATRIMÔNIO.133113.jpg',
            nPatrimonio: '63091445',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'MESA',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/9042970.FOTO PATRIMÔNIO.133132.jpg',
            nPatrimonio: '9042970',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'Outros',
            usuario: 'Sala',
            observacao: 'Impressora'
        },
        {
            img: 'Página2_Images/65938089.FOTO PATRIMÔNIO.133148.jpg',
            nPatrimonio: '65938089',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'MESA',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/63653451.FOTO PATRIMÔNIO.133240.jpg',
            nPatrimonio: '63653451',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'ARMÁRIO',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/63653435.FOTO PATRIMÔNIO.133255.jpg',
            nPatrimonio: '63653435',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'ARMÁRIO',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/211934.FOTO PATRIMÔNIO.133316.jpg',
            nPatrimonio: '211934',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'GAVETEIRO',
            usuario: 'Fabrício',
            observacao: ''
        },
        {
            img: 'Página2_Images/202809.FOTO PATRIMÔNIO.133348.jpg',
            nPatrimonio: '202809',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'MESA',
            usuario: 'Fabrício',
            observacao: ''
        },
        {
            img: 'Página2_Images/63093189.FOTO PATRIMÔNIO.133403.jpg',
            nPatrimonio: '63093189',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'MESA',
            usuario: 'Fabrício',
            observacao: ''
        },
        {
            img: 'Página2_Images/66739349.FOTO PATRIMÔNIO.133423.jpg',
            nPatrimonio: '66739349',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'TELEFONE',
            usuario: 'Fabrício',
            observacao: ''
        },
        {
            img: 'Página2_Images/75545888.FOTO PATRIMÔNIO.133441.jpg',
            nPatrimonio: '75545888',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'MONITOR',
            usuario: 'Fabrício',
            observacao: ''
        },
        {
            img: 'Página2_Images/1099.FOTO PATRIMÔNIO.133500.jpg',
            nPatrimonio: '1099',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'MONITOR',
            usuario: 'Fabrício',
            observacao: ''
        },
        {
            img: 'Página2_Images/100060412.FOTO PATRIMÔNIO.133528.jpg',
            nPatrimonio: '100060412',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'CADEIRA',
            usuario: 'Fabrício',
            observacao: ''
        },
        {
            img: 'Página2_Images/75557592.FOTO PATRIMÔNIO.133553.jpg',
            nPatrimonio: '75557592',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'COMPUTADOR',
            usuario: 'Fabrício',
            observacao: ''
        },
        {
            img: 'Página2_Images/393595.FOTO PATRIMÔNIO.133607.jpg',
            nPatrimonio: '393595',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'VENTILADOR',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/63091399.FOTO PATRIMÔNIO.133644.jpg',
            nPatrimonio: '63091399',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'MESA',
            usuario: 'Vanderson',
            observacao: ''
        },
        {
            img: 'Página2_Images/287545.FOTO PATRIMÔNIO.133659.jpg',
            nPatrimonio: '287545',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'GAVETEIRO',
            usuario: 'Vanderson',
            observacao: ''
        },
        {
            img: 'Página2_Images/483444.FOTO PATRIMÔNIO.133716.jpg',
            nPatrimonio: '483444',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'MESA',
            usuario: 'Vanderson',
            observacao: ''
        },
        {
            img: 'Página2_Images/75545896.FOTO PATRIMÔNIO.133734.jpg',
            nPatrimonio: '75545896',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'MONITOR',
            usuario: 'Vanderson',
            observacao: ''
        },
        {
            img: 'Página2_Images/75557584.FOTO PATRIMÔNIO.133757.jpg',
            nPatrimonio: '75557584',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'COMPUTADOR',
            usuario: 'Vanderson',
            observacao: ''
        },
        {
            img: 'Página2_Images/99790106.FOTO PATRIMÔNIO.133816.jpg',
            nPatrimonio: '99790106',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'CADEIRA',
            usuario: 'Vanderson',
            observacao: ''
        },
        {
            img: 'Página2_Images/84568100.FOTO PATRIMÔNIO.133926.jpg',
            nPatrimonio: '84568100',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'Outros',
            usuario: 'Cristiano',
            observacao: 'Impressora'
        },
        {
            img: 'Página2_Images/75545870.FOTO PATRIMÔNIO.133946.jpg',
            nPatrimonio: '75545870',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'MONITOR',
            usuario: 'Cristiano',
            observacao: ''
        },
        {
            img: 'Página2_Images/63092484.FOTO PATRIMÔNIO.134004.jpg',
            nPatrimonio: '63092484',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'MESA',
            usuario: 'Cristiano',
            observacao: ''
        },
        {
            img: 'Página2_Images/211929.FOTO PATRIMÔNIO.134023.jpg',
            nPatrimonio: '211929',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'GAVETEIRO',
            usuario: 'Cristiano',
            observacao: ''
        },
        {
            img: 'Página2_Images/501573.FOTO PATRIMÔNIO.134040.jpg',
            nPatrimonio: '501573',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'MESA',
            usuario: 'Cristiano',
            observacao: ''
        },
        {
            img: 'Página2_Images/99790114.FOTO PATRIMÔNIO.134101.jpg',
            nPatrimonio: '99790114',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'CADEIRA',
            usuario: 'Cristiano',
            observacao: ''
        },
        {
            img: 'Página2_Images/75557576.FOTO PATRIMÔNIO.134128.jpg',
            nPatrimonio: '75557576',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'COMPUTADOR',
            usuario: 'Cristiano',
            observacao: ''
        },
        {
            img: 'Página2_Images/83517766.FOTO PATRIMÔNIO.134147.jpg',
            nPatrimonio: '83517766',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'MONITOR',
            usuario: 'Matheus',
            observacao: ''
        },
        {
            img: 'Página2_Images/350189.FOTO PATRIMÔNIO.134201.jpg',
            nPatrimonio: '350189',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'TELEFONE',
            usuario: 'Matheus',
            observacao: ''
        },
        {
            img: 'Página2_Images/83524991.FOTO PATRIMÔNIO.134220.jpg',
            nPatrimonio: '83524991',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'COMPUTADOR',
            usuario: 'Matheus',
            observacao: ''
        },
        {
            img: 'Página2_Images/75956853.FOTO PATRIMÔNIO.134247.jpg',
            nPatrimonio: '75956853',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'MESA',
            usuario: 'Matheus',
            observacao: ''
        },
        {
            img: 'Página2_Images/501381.FOTO PATRIMÔNIO.134254.jpg',
            nPatrimonio: '501381',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'GAVETEIRO',
            usuario: 'Matheus',
            observacao: ''
        },
        {
            img: 'Página2_Images/84597488.FOTO PATRIMÔNIO.134310.jpg',
            nPatrimonio: '84597488',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'MESA',
            usuario: 'Matheus',
            observacao: ''
        },
        {
            img: 'Página2_Images/99790084.FOTO PATRIMÔNIO.134334.jpg',
            nPatrimonio: '99790084',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'CADEIRA',
            usuario: 'Matheus',
            observacao: ''
        },
        {
            img: 'Página2_Images/66726239.FOTO PATRIMÔNIO.134410.jpg',
            nPatrimonio: '66726239',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'TELEFONE',
            usuario: 'Vitor',
            observacao: ''
        },
        {
            img: 'Página2_Images/63039567.FOTO PATRIMÔNIO.134441.jpg',
            nPatrimonio: '63039567',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'MESA',
            usuario: 'Vitor',
            observacao: ''
        },
        {
            img: 'Página2_Images/99904810.FOTO PATRIMÔNIO.134457.jpg',
            nPatrimonio: '99904810',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'GAVETEIRO',
            usuario: 'Vitor',
            observacao: ''
        },
        {
            img: 'Página2_Images/75545837.FOTO PATRIMÔNIO.134512.jpg',
            nPatrimonio: '75545837',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'MONITOR',
            usuario: 'Vitor',
            observacao: ''
        },
        {
            img: 'Página2_Images/202677.FOTO PATRIMÔNIO.134547.jpg',
            nPatrimonio: '202677',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'MESA',
            usuario: 'Vitor',
            observacao: 'Sem etiqueta'
        },
        {
            img: 'Página2_Images/Nao tem.FOTO PATRIMÔNIO.134647.jpg',
            nPatrimonio: 'Sem patrimônio',
            date: "Novembro/2V/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'MONITOR',
            usuario: 'Vitor',
            observacao: ''
        },
        {
            img: 'Página2_Images/75557568.FOTO PATRIMÔNIO.134704.jpg',
            nPatrimonio: '75557568',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'COMPUTADOR',
            usuario: 'Vitor',
            observacao: ''
        },
        {
            img: 'Página2_Images/99790076.FOTO PATRIMÔNIO.134727.jpg',
            nPatrimonio: '99790076',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'CADEIRA',
            usuario: 'Vitor',
            observacao: ''
        },
        {
            img: 'Página2_Images/435752.FOTO PATRIMÔNIO.134757.jpg',
            nPatrimonio: '435752',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'VENTILADOR',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/63603705.FOTO PATRIMÔNIO.134823.jpg',
            nPatrimonio: '63603705',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'ARMÁRIO',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/MN3Z196898.FOTO PATRIMÔNIO.134936.jpg',
            nPatrimonio: 'MN3Z196898',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'Outros',
            usuario: 'Sala',
            observacao: 'Impressora'
        },
        {
            img: 'Página2_Images/63603047.FOTO PATRIMÔNIO.135029.jpg',
            nPatrimonio: '63603047',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'MESA',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/63603721.FOTO PATRIMÔNIO.135106.jpg',
            nPatrimonio: '63603721',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'ARMÁRIO',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/63094495.FOTO PATRIMÔNIO.135121.jpg',
            nPatrimonio: '63094495',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'MESA',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/99790092.FOTO PATRIMÔNIO.135155.jpg',
            nPatrimonio: '99790092',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'CADEIRA',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/66175844.FOTO PATRIMÔNIO.135226.jpg',
            nPatrimonio: '66175844',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'MESA',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/66175852.FOTO PATRIMÔNIO.135254.jpg',
            nPatrimonio: '66175852',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'MESA',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/99790068.FOTO PATRIMÔNIO.135322.jpg',
            nPatrimonio: '99790068',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'CADEIRA',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/470585.FOTO PATRIMÔNIO.135344.jpg',
            nPatrimonio: '470585',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'VENTILADOR',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/910SPFX19723.FOTO PATRIMÔNIO.135413.jpg',
            nPatrimonio: '910SPFX19723',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'MONITOR',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/0978.FOTO PATRIMÔNIO.135443.jpg',
            nPatrimonio: '0978',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'MONITOR',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/Semm.FOTO PATRIMÔNIO.135524.jpg',
            nPatrimonio: 'Sem patrimônio',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'MONITOR',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/64242714.FOTO PATRIMÔNIO.135609.jpg',
            nPatrimonio: '64242714',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'ARMÁRIO',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/64243427.FOTO PATRIMÔNIO.135630.jpg',
            nPatrimonio: '64243427',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'ARMÁRIO',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/6423391.FOTO PATRIMÔNIO.135700.jpg',
            nPatrimonio: '6423391',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'ARMÁRIO',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/66828619.FOTO PATRIMÔNIO.135729.jpg',
            nPatrimonio: '66828619',
            date: "Novembro/2025",
            local: 'GOIAS ANEXO I',
            categoria: 'Outros',
            usuario: 'Sala',
            observacao: 'Carrinho de mão'
        },
        {
            img: 'Página2_Images/63652870.FOTO PATRIMÔNIO.140836.jpg',
            nPatrimonio: '63652870',
            date: "Novembro/2025",
            local: 'GONÇALVES DIAS',
            categoria: 'ARMÁRIO',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/63619415.FOTO PATRIMÔNIO.140918.jpg',
            nPatrimonio: '63619415',
            date: "Novembro/2025",
            local: 'GONÇALVES DIAS',
            categoria: 'ARMÁRIO',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/65494954.FOTO PATRIMÔNIO.140958.jpg',
            nPatrimonio: '65494954',
            date: "Novembro/2025",
            local: 'GONÇALVES DIAS',
            categoria: 'CADEIRA',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/63011255.FOTO PATRIMÔNIO.141034.jpg',
            nPatrimonio: '63011255',
            date: "Novembro/2025",
            local: 'GONÇALVES DIAS',
            categoria: 'CADEIRA',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/66833574.FOTO PATRIMÔNIO.141104.jpg',
            nPatrimonio: '66833574',
            date: "Novembro/2025",
            local: 'GONÇALVES DIAS',
            categoria: 'Outros',
            usuario: 'Sala',
            observacao: 'Carrinho de mão'
        },
        {
            img: 'Página2_Images/128648066.FOTO PATRIMÔNIO.141131.jpg',
            nPatrimonio: '128648066',
            date: "Novembro/2025",
            local: 'GONÇALVES DIAS',
            categoria: 'CADEIRA',
            usuario: 'Rodrigo',
            observacao: ''
        },
        {
            img: 'Página2_Images/67404820.FOTO PATRIMÔNIO.141149.jpg',
            nPatrimonio: '67404820',
            date: "Novembro/2025",
            local: 'GONÇALVES DIAS',
            categoria: 'MESA',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/128620161.FOTO PATRIMÔNIO.141241.jpg',
            nPatrimonio: '128620161',
            date: "Novembro/2025",
            local: 'GONÇALVES DIAS',
            categoria: 'VENTILADOR',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/83487140.FOTO PATRIMÔNIO.141258.jpg',
            nPatrimonio: '83487140',
            date: "Novembro/2025",
            local: 'GONÇALVES DIAS',
            categoria: 'MONITOR',
            usuario: 'Rodrigo',
            observacao: ''
        },
        {
            img: 'Página2_Images/Não.FOTO PATRIMÔNIO.141322.jpg',
            nPatrimonio: 'Sem patrimônio',
            date: "Novembro/2025",
            local: 'GONÇALVES DIAS',
            categoria: 'MONITOR',
            usuario: 'Rodrigo',
            observacao: ''
        },
        {
            img: 'Página2_Images/66738784.FOTO PATRIMÔNIO.141340.jpg',
            nPatrimonio: '66738784',
            date: "Novembro/2025",
            local: 'GONÇALVES DIAS',
            categoria: 'TELEFONE',
            usuario: 'Rodrigo',
            observacao: ''
        },
        {
            img: 'Página2_Images/74789325.FOTO PATRIMÔNIO.141402.jpg',
            nPatrimonio: '74789325',
            date: "Novembro/2025",
            local: 'GONÇALVES DIAS',
            categoria: 'MESA',
            usuario: 'Rodrigo',
            observacao: ''
        },
        {
            img: 'Página2_Images/84568089.FOTO PATRIMÔNIO.141441.jpg',
            nPatrimonio: '84568089',
            date: "Novembro/2025",
            local: 'GONÇALVES DIAS',
            categoria: 'Outros',
            usuario: 'Rodrigo',
            observacao: 'Impressora'
        },
        {
            img: 'Página2_Images/234301.FOTO PATRIMÔNIO.141506.jpg',
            nPatrimonio: '234301',
            date: "Novembro/2025",
            local: 'GONÇALVES DIAS',
            categoria: 'GAVETEIRO',
            usuario: 'Rodrigo',
            observacao: ''
        },
        {
            img: 'Página2_Images/62858785.FOTO PATRIMÔNIO.141648.jpg',
            nPatrimonio: '62858785',
            date: "Novembro/2025",
            local: 'GONÇALVES DIAS',
            categoria: 'COMPUTADOR',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/Não possui.FOTO PATRIMÔNIO.141715.jpg',
            nPatrimonio: 'Sem patrimônio',
            date: "Novembro/2025",
            local: 'GONÇALVES DIAS',
            categoria: 'MONITOR',
            usuario: 'Sem',
            observacao: ''
        },
        {
            img: 'Página2_Images/83507388.FOTO PATRIMÔNIO.125049.jpg',
            nPatrimonio: '83507388',
            date: "Novembro/2025",
            local: 'FÓRUM LAFAETE',
            categoria: 'COMPUTADOR',
            usuario: 'Jaime',
            observacao: ''
        },
        {
            img: 'Página2_Images/63082594.FOTO PATRIMÔNIO.125108.jpg',
            nPatrimonio: '63082594',
            date: "Novembro/2025",
            local: 'FÓRUM LAFAETE',
            categoria: 'MESA',
            usuario: 'Jaime',
            observacao: ''
        },
        {
            img: 'Página2_Images/100053130.FOTO PATRIMÔNIO.125134.jpg',
            nPatrimonio: '100053130',
            date: "Novembro/2025",
            local: 'FÓRUM LAFAETE',
            categoria: 'CADEIRA',
            usuario: 'Jaime',
            observacao: ''
        },
        {
            img: 'Página2_Images/83478132.FOTO PATRIMÔNIO.125216.jpg',
            nPatrimonio: '83478132',
            date: "Novembro/2025",
            local: 'FÓRUM LAFAETE',
            categoria: 'MONITOR',
            usuario: 'Luiz  - Stefanini',
            observacao: ''
        },
        {
            img: 'Página2_Images/Sem.FOTO PATRIMÔNIO.125258.jpg',
            nPatrimonio: 'Sem',
            date: "Novembro/2025",
            local: 'FÓRUM LAFAETE',
            categoria: 'MONITOR',
            usuario: 'Luiz  - Stefanini',
            observacao: ''
        },
        {
            img: 'Página2_Images/83366202.FOTO PATRIMÔNIO.125335.jpg',
            nPatrimonio: '83366202',
            date: "Novembro/2025",
            local: 'FÓRUM LAFAETE',
            categoria: 'MESA',
            usuario: 'Luiz  - Stefanini',
            observacao: ''
        },
        {
            img: 'Página2_Images/100053165.FOTO PATRIMÔNIO.125441.jpg',
            nPatrimonio: '100053165',
            date: "Novembro/2025",
            local: 'FÓRUM LAFAETE',
            categoria: 'CADEIRA',
            usuario: 'Luiz  - Stefanini',
            observacao: ''
        },
        {
            img: 'Página2_Images/75046199.FOTO PATRIMÔNIO.123605.jpg',
            nPatrimonio: '75046199',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'ARMÁRIO',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/75046237.FOTO PATRIMÔNIO.123637.jpg',
            nPatrimonio: '75046237',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'ARMÁRIO',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/75048400.FOTO PATRIMÔNIO.123650.jpg',
            nPatrimonio: '75048400',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'ARMÁRIO',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/75046210.FOTO PATRIMÔNIO.123708.jpg',
            nPatrimonio: '75046210',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'ARMÁRIO',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/75047284.FOTO PATRIMÔNIO.123725.jpg',
            nPatrimonio: '75047284',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'ARMÁRIO',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/75046202.FOTO PATRIMÔNIO.123748.jpg',
            nPatrimonio: '75046202',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'ARMÁRIO',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/66828678.FOTO PATRIMÔNIO.123832.jpg',
            nPatrimonio: '66828678',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'Outros',
            usuario: 'Sala',
            observacao: 'Carrinho de mão'
        },
        {
            img: 'Página2_Images/75033828.FOTO PATRIMÔNIO.123919.jpg',
            nPatrimonio: '75033828',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'MESA',
            usuario: 'Igor',
            observacao: ''
        },
        {
            img: 'Página2_Images/66733545.FOTO PATRIMÔNIO.123938.jpg',
            nPatrimonio: '66733545',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'TELEFONE',
            usuario: 'Igor',
            observacao: ''
        },
        {
            img: 'Página2_Images/75085690.FOTO PATRIMÔNIO.123958.jpg',
            nPatrimonio: '75085690',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'GAVETEIRO',
            usuario: 'Igor',
            observacao: ''
        },
        {
            img: 'Página2_Images/75125404.FOTO PATRIMÔNIO.124014.jpg',
            nPatrimonio: '75125404',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'MESA',
            usuario: 'Igor',
            observacao: ''
        },
        {
            img: 'Página2_Images/83406484.FOTO PATRIMÔNIO.124106.jpg',
            nPatrimonio: '83406484',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'MONITOR',
            usuario: 'Igor',
            observacao: ''
        },
        {
            img: 'Página2_Images/84334916.FOTO PATRIMÔNIO.124147.jpg',
            nPatrimonio: '84334916',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'CADEIRA',
            usuario: 'Igor',
            observacao: ''
        },
        {
            img: 'Página2_Images/100046401.FOTO PATRIMÔNIO.124213.jpg',
            nPatrimonio: '100046401',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'NOTEBOOK',
            usuario: 'Igor',
            observacao: ''
        },
        {
            img: 'Página2_Images/Não tem.FOTO PATRIMÔNIO.124236.jpg',
            nPatrimonio: 'Não tem',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'MONITOR',
            usuario: 'Igor',
            observacao: ''
        },
        {
            img: 'Página2_Images/Não dá pra ler.FOTO PATRIMÔNIO.124541.jpg',
            nPatrimonio: 'Não dá pra ler',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'MESA',
            usuario: 'Fred',
            observacao: 'Patrimônio inelegível'
        },
        {
            img: 'Página2_Images/74763733.FOTO PATRIMÔNIO.124650.jpg',
            nPatrimonio: '74763733',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'MESA',
            usuario: 'Fred',
            observacao: ''
        },
        {
            img: 'Página2_Images/66740550.FOTO PATRIMÔNIO.124715.jpg',
            nPatrimonio: '66740550',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'TELEFONE',
            usuario: 'Fred',
            observacao: ''
        },
        {
            img: 'Página2_Images/100046444.FOTO PATRIMÔNIO.124741.jpg',
            nPatrimonio: '100046444',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'NOTEBOOK',
            usuario: 'Fred',
            observacao: ''
        },
        {
            img: 'Página2_Images/BRC52000BS.FOTO PATRIMÔNIO.124800.jpg',
            nPatrimonio: 'BRC52000BS',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'MONITOR',
            usuario: 'Fred',
            observacao: ''
        },
        {
            img: 'Página2_Images/75060116.FOTO PATRIMÔNIO.124829.jpg',
            nPatrimonio: '75060116',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'GAVETEIRO',
            usuario: 'Fred',
            observacao: ''
        },
        {
            img: 'Página2_Images/100000428.FOTO PATRIMÔNIO.124904.jpg',
            nPatrimonio: '100000428',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'CADEIRA',
            usuario: 'Fred',
            observacao: ''
        },
        {
            img: 'Página2_Images/75061988.FOTO PATRIMÔNIO.124953.jpg',
            nPatrimonio: '75061988',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'MESA',
            usuario: 'Rodrigo',
            observacao: ''
        },
        {
            img: 'Página2_Images/74763709.FOTO PATRIMÔNIO.125056.jpg',
            nPatrimonio: '74763709',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'MESA',
            usuario: 'Rodrigo',
            observacao: ''
        },
        {
            img: 'Página2_Images/66732441.FOTO PATRIMÔNIO.125122.jpg',
            nPatrimonio: '66732441',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'TELEFONE',
            usuario: 'Rodrigo',
            observacao: ''
        },
        {
            img: 'Página2_Images/99952254.FOTO PATRIMÔNIO.125151.jpg',
            nPatrimonio: '99952254',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'NOTEBOOK',
            usuario: 'Rodrigo',
            observacao: ''
        },
        {
            img: 'Página2_Images/Nao tem.FOTO PATRIMÔNIO.125233.jpg',
            nPatrimonio: 'Nao tem',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'MONITOR',
            usuario: 'Rodrigo',
            observacao: ''
        },
        {
            img: 'Página2_Images/75060060.FOTO PATRIMÔNIO.125257.jpg',
            nPatrimonio: '75060060',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'GAVETEIRO',
            usuario: 'Rodrigo',
            observacao: ''
        },
        {
            img: 'Página2_Images/84334959.FOTO PATRIMÔNIO.125322.jpg',
            nPatrimonio: '84334959',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'CADEIRA',
            usuario: 'Rodrigo',
            observacao: ''
        },
        {
            img: 'Página2_Images/75034662.FOTO PATRIMÔNIO.125425.jpg',
            nPatrimonio: '75034662',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'MESA',
            usuario: 'Otávio',
            observacao: ''
        },
        {
            img: 'Página2_Images/75125420.FOTO PATRIMÔNIO.125452.jpg',
            nPatrimonio: '75125420',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'MESA',
            usuario: 'Otávio',
            observacao: ''
        },
        {
            img: 'Página2_Images/75808900.FOTO PATRIMÔNIO.125508.jpg',
            nPatrimonio: '75808900',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'MONITOR',
            usuario: 'Otávio',
            observacao: ''
        },
        {
            img: 'Página2_Images/75085739.FOTO PATRIMÔNIO.125540.jpg',
            nPatrimonio: '75085739',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'GAVETEIRO',
            usuario: 'Otávio',
            observacao: ''
        },
        {
            img: 'Página2_Images/66749557.FOTO PATRIMÔNIO.125555.jpg',
            nPatrimonio: '66749557',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'TELEFONE',
            usuario: 'Otávio',
            observacao: ''
        },
        {
            img: 'Página2_Images/84335017.FOTO PATRIMÔNIO.125625.jpg',
            nPatrimonio: '84335017',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'CADEIRA',
            usuario: 'Otávio',
            observacao: ''
        },
        {
            img: 'Página2_Images/100046282.FOTO PATRIMÔNIO.125653.jpg',
            nPatrimonio: '100046282',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'NOTEBOOK',
            usuario: 'Otávio',
            observacao: ''
        },
        {
            img: 'Página2_Images/Não tem etiqueta.FOTO PATRIMÔNIO.125803.jpg',
            nPatrimonio: 'Não tem etiqueta',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'MESA',
            usuario: 'Hiarlley',
            observacao: ''
        },
        {
            img: 'Página2_Images/75126028.FOTO PATRIMÔNIO.125904.jpg',
            nPatrimonio: '75126028',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'MESA',
            usuario: 'Hiarlley',
            observacao: ''
        },
        {
            img: 'Página2_Images/66721326.FOTO PATRIMÔNIO.130012.jpg',
            nPatrimonio: '66721326',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'TELEFONE',
            usuario: 'Hiarlley',
            observacao: ''
        },
        {
            img: 'Página2_Images/66900930.FOTO PATRIMÔNIO.130034.jpg',
            nPatrimonio: '66900930',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'MONITOR',
            usuario: 'Hiarlley',
            observacao: ''
        },
        {
            img: 'Página2_Images/75059983.FOTO PATRIMÔNIO.130056.jpg',
            nPatrimonio: '75059983',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'GAVETEIRO',
            usuario: 'Hiarlley',
            observacao: ''
        },
        {
            img: 'Página2_Images/84334894.FOTO PATRIMÔNIO.130123.jpg',
            nPatrimonio: '84334894',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'CADEIRA',
            usuario: 'Hiarlley',
            observacao: ''
        },
        {
            img: 'Página2_Images/100046460.FOTO PATRIMÔNIO.130147.jpg',
            nPatrimonio: '100046460',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'NOTEBOOK',
            usuario: 'Hiarlley',
            observacao: ''
        },
        {
            img: 'Página2_Images/74959107.FOTO PATRIMÔNIO.130221.jpg',
            nPatrimonio: '74959107',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'ARMÁRIO',
            usuario: 'Sala fundo',
            observacao: ''
        },
        {
            img: 'Página2_Images/75046903.FOTO PATRIMÔNIO.130234.jpg',
            nPatrimonio: '75046903',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'ARMÁRIO',
            usuario: 'Sala fundo',
            observacao: ''
        },
        {
            img: 'Página2_Images/74957759.FOTO PATRIMÔNIO.130308.jpg',
            nPatrimonio: '74957759',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'ARMÁRIO',
            usuario: 'Sala fundo',
            observacao: ''
        },
        {
            img: 'Página2_Images/75048388.FOTO PATRIMÔNIO.130320.jpg',
            nPatrimonio: '75048388',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'ARMÁRIO',
            usuario: 'Sala fundo',
            observacao: ''
        },
        {
            img: 'Página2_Images/75060078.FOTO PATRIMÔNIO.130350.jpg',
            nPatrimonio: '75060078',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'GAVETEIRO',
            usuario: 'Marcelo',
            observacao: ''
        },
        {
            img: 'Página2_Images/75125455.FOTO PATRIMÔNIO.130415.jpg',
            nPatrimonio: '75125455',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'MESA',
            usuario: 'Marcelo',
            observacao: ''
        },
        {
            img: 'Página2_Images/465763.FOTO PATRIMÔNIO.130432.jpg',
            nPatrimonio: '465763',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'TELEFONE',
            usuario: 'Marcelo',
            observacao: ''
        },
        {
            img: 'Página2_Images/75283069.FOTO PATRIMÔNIO.130445.jpg',
            nPatrimonio: '75283069',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'MONITOR',
            usuario: 'Marcelo',
            observacao: ''
        },
        {
            img: 'Página2_Images/84335025.FOTO PATRIMÔNIO.130513.jpg',
            nPatrimonio: '84335025',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'CADEIRA',
            usuario: 'Marcelo',
            observacao: ''
        },
        {
            img: 'Página2_Images/100046398.FOTO PATRIMÔNIO.130534.jpg',
            nPatrimonio: '100046398',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'NOTEBOOK',
            usuario: 'Marcelo',
            observacao: ''
        },
        {
            img: 'Página2_Images/75060132.FOTO PATRIMÔNIO.130616.jpg',
            nPatrimonio: '75060132',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'GAVETEIRO',
            usuario: 'Rollaout',
            observacao: ''
        },
        {
            img: 'Página2_Images/527903.FOTO PATRIMÔNIO.130633.jpg',
            nPatrimonio: '527903',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'MONITOR',
            usuario: 'Rollaout',
            observacao: ''
        },
        {
            img: 'Página2_Images/75125480.FOTO PATRIMÔNIO.130650.jpg',
            nPatrimonio: '75125480',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'MESA',
            usuario: 'Rollaout',
            observacao: ''
        },
        {
            img: 'Página2_Images/99790971.FOTO PATRIMÔNIO.130720.jpg',
            nPatrimonio: '99790971',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'CADEIRA',
            usuario: 'Rollaout',
            observacao: ''
        },
        {
            img: 'Página2_Images/100046290.FOTO PATRIMÔNIO.130747.jpg',
            nPatrimonio: '100046290',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'NOTEBOOK',
            usuario: 'Rollaout',
            observacao: ''
        },
        {
            img: 'Página2_Images/628906.FOTO PATRIMÔNIO.130824.jpg',
            nPatrimonio: '628906',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'MONITOR',
            usuario: 'Rollaout 2',
            observacao: ''
        },
        {
            img: 'Página2_Images/75125471.FOTO PATRIMÔNIO.130839.jpg',
            nPatrimonio: '75125471',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'MESA',
            usuario: 'Rollaout 2',
            observacao: ''
        },
        {
            img: 'Página2_Images/84334940.FOTO PATRIMÔNIO.130909.jpg',
            nPatrimonio: '84334940',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'CADEIRA',
            usuario: 'Rollaout 2',
            observacao: ''
        },
        {
            img: 'Página2_Images/75060086.FOTO PATRIMÔNIO.130937.jpg',
            nPatrimonio: '75060086',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'GAVETEIRO',
            usuario: 'Luiz',
            observacao: ''
        },
        {
            img: 'Página2_Images/75125544.FOTO PATRIMÔNIO.130951.jpg',
            nPatrimonio: '75125544',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'MESA',
            usuario: 'Luiz',
            observacao: ''
        },
        {
            img: 'Página2_Images/83526048.FOTO PATRIMÔNIO.131010.jpg',
            nPatrimonio: '83526048',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'MONITOR',
            usuario: 'Luiz',
            observacao: ''
        },
        {
            img: 'Página2_Images/100046428.FOTO PATRIMÔNIO.131036.jpg',
            nPatrimonio: '100046428',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'NOTEBOOK',
            usuario: 'Luiz',
            observacao: ''
        },
        {
            img: 'Página2_Images/75027143.FOTO PATRIMÔNIO.131111.jpg',
            nPatrimonio: '75027143',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'CADEIRA',
            usuario: 'Luiz',
            observacao: ''
        },
        {
            img: 'Página2_Images/75097621.FOTO PATRIMÔNIO.131140.jpg',
            nPatrimonio: '75097621',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'MESA',
            usuario: 'Mesa da entrada',
            observacao: ''
        },
        {
            img: 'Página2_Images/84209003.FOTO PATRIMÔNIO.131246.jpg',
            nPatrimonio: '84209003',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'Outros',
            usuario: 'Sala',
            observacao: 'Quadro'
        },
        {
            img: 'Página2_Images/128606444.FOTO PATRIMÔNIO.131353.jpg',
            nPatrimonio: '128606444',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'Outros',
            usuario: 'Geladeira',
            observacao: ''
        },
        {
            img: 'Página2_Images/75065436.FOTO PATRIMÔNIO.131430.jpg',
            nPatrimonio: '75065436',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'ARMÁRIO',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/75048272.FOTO PATRIMÔNIO.131454.jpg',
            nPatrimonio: '75048272',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'ARMÁRIO',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/Não dá pra saber.FOTO PATRIMÔNIO.131552.jpg',
            nPatrimonio: 'Não dá pra saber',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'MESA',
            usuario: 'Teste',
            observacao: 'Incompleto'
        },
        {
            img: 'Página2_Images/75126001.FOTO PATRIMÔNIO.131706.jpg',
            nPatrimonio: '75126001',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'MESA',
            usuario: 'Teste',
            observacao: ''
        },
        {
            img: 'Página2_Images/100385630.FOTO PATRIMÔNIO.131739.jpg',
            nPatrimonio: '100385630',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'COMPUTADOR',
            usuario: 'Teste',
            observacao: ''
        },
        {
            img: 'Página2_Images/100046436.FOTO PATRIMÔNIO.131803.jpg',
            nPatrimonio: '100046436',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'NOTEBOOK',
            usuario: 'Teste',
            observacao: ''
        },
        {
            img: 'Página2_Images/Não tem tb.FOTO PATRIMÔNIO.131832.jpg',
            nPatrimonio: 'Não tem tb',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'MONITOR',
            usuario: 'Teste',
            observacao: ''
        },
        {
            img: 'Página2_Images/100000444.FOTO PATRIMÔNIO.131901.jpg',
            nPatrimonio: '100000444',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'CADEIRA',
            usuario: 'Teste',
            observacao: ''
        },
        {
            img: 'Página2_Images/100000479.FOTO PATRIMÔNIO.131935.jpg',
            nPatrimonio: '100000479',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'CADEIRA',
            usuario: 'Teste',
            observacao: ''
        },
        {
            img: 'Página2_Images/75085704.FOTO PATRIMÔNIO.131959.jpg',
            nPatrimonio: '75085704',
            date: "Novembro/2Os/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'GAVETEIRO',
            usuario: 'Teste',
            observacao: ''
        },
        {
            img: 'Página2_Images/74771477.FOTO PATRIMÔNIO.132023.jpg',
            nPatrimonio: '74771477',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'ARMÁRIO',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/74769189.FOTO PATRIMÔNIO.132042.jpg',
            nPatrimonio: '74769189',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'ARMÁRIO',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/74769227.FOTO PATRIMÔNIO.132103.jpg',
            nPatrimonio: '74769227',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'ARMÁRIO',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/74770586.FOTO PATRIMÔNIO.132125.jpg',
            nPatrimonio: '74770586',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'ARMÁRIO',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/75035340.FOTO PATRIMÔNIO.132202.jpg',
            nPatrimonio: '75035340',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'MESA',
            usuario: 'Harley',
            observacao: ''
        },
        {
            img: 'Página2_Images/75125510.FOTO PATRIMÔNIO.132215.jpg',
            nPatrimonio: '75125510',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'MESA',
            usuario: 'Harley',
            observacao: ''
        },
        {
            img: 'Página2_Images/351077.FOTO PATRIMÔNIO.132230.jpg',
            nPatrimonio: '351077',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'TELEFONE',
            usuario: 'Harley',
            observacao: ''
        },
        {
            img: 'Página2_Images/75545969.FOTO PATRIMÔNIO.132244.jpg',
            nPatrimonio: '75545969',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'MONITOR',
            usuario: 'Harley',
            observacao: ''
        },
        {
            img: 'Página2_Images/99952238.FOTO PATRIMÔNIO.132317.jpg',
            nPatrimonio: '99952238',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'NOTEBOOK',
            usuario: 'Harley',
            observacao: ''
        },
        {
            img: 'Página2_Images/75060051.FOTO PATRIMÔNIO.132347.jpg',
            nPatrimonio: '75060051',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'GAVETEIRO',
            usuario: 'Harley',
            observacao: ''
        },
        {
            img: 'Página2_Images/84334908.FOTO PATRIMÔNIO.132418.jpg',
            nPatrimonio: '84334908',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'CADEIRA',
            usuario: 'Harley',
            observacao: ''
        },
        {
            img: 'Página2_Images/83531513.FOTO PATRIMÔNIO.132507.jpg',
            nPatrimonio: '83531513',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'MONITOR',
            usuario: 'Warlen',
            observacao: ''
        },
        {
            img: 'Página2_Images/75881195.FOTO PATRIMÔNIO.132523.jpg',
            nPatrimonio: '75881195',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'MONITOR',
            usuario: 'Warlen',
            observacao: ''
        },
        {
            img: 'Página2_Images/99952246.FOTO PATRIMÔNIO.132541.jpg',
            nPatrimonio: '99952246',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'NOTEBOOK',
            usuario: 'Warlen',
            observacao: ''
        },
        {
            img: 'Página2_Images/75125978.FOTO PATRIMÔNIO.132555.jpg',
            nPatrimonio: '75125978',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'MESA',
            usuario: 'Warlen',
            observacao: ''
        },
        {
            img: 'Página2_Images/75061961.FOTO PATRIMÔNIO.132615.jpg',
            nPatrimonio: '75061961',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'MESA',
            usuario: 'Warlen',
            observacao: ''
        },
        {
            img: 'Página2_Images/66728789.FOTO PATRIMÔNIO.132633.jpg',
            nPatrimonio: '66728789',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'TELEFONE',
            usuario: 'Warlen',
            observacao: ''
        },
        {
            img: 'Página2_Images/75085755.FOTO PATRIMÔNIO.132705.jpg',
            nPatrimonio: '75085755',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'GAVETEIRO',
            usuario: 'Warlen',
            observacao: ''
        },
        {
            img: 'Página2_Images/84334886.FOTO PATRIMÔNIO.132733.jpg',
            nPatrimonio: '84334886',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'CADEIRA',
            usuario: 'Warlen',
            observacao: ''
        },
        {
            img: 'Página2_Images/75545977.FOTO PATRIMÔNIO.132808.jpg',
            nPatrimonio: '75545977',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'MONITOR',
            usuario: 'Vazio',
            observacao: ''
        },
        {
            img: 'Página2_Images/100367194.FOTO PATRIMÔNIO.132827.jpg',
            nPatrimonio: '100367194',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'MESA',
            usuario: 'Vazio',
            observacao: ''
        },
        {
            img: 'Página2_Images/100128483.FOTO PATRIMÔNIO.132848.jpg',
            nPatrimonio: '100128483',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'TELEFONE',
            usuario: 'Vazio',
            observacao: ''
        },
        {
            img: 'Página2_Images/100046312.FOTO PATRIMÔNIO.132911.jpg',
            nPatrimonio: '100046312',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'NOTEBOOK',
            usuario: 'Vazio',
            observacao: ''
        },
        {
            img: 'Página2_Images/75085682.FOTO PATRIMÔNIO.132933.jpg',
            nPatrimonio: '75085682',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'GAVETEIRO',
            usuario: 'Vazio',
            observacao: ''
        },
        {
            img: 'Página2_Images/100000274.FOTO PATRIMÔNIO.132958.jpg',
            nPatrimonio: '100000274',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'CADEIRA',
            usuario: 'Vazio',
            observacao: ''
        },
        {
            img: 'Página2_Images/75085712.FOTO PATRIMÔNIO.133039.jpg',
            nPatrimonio: '75085712',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'GAVETEIRO',
            usuario: 'Ronei',
            observacao: ''
        },
        {
            img: 'Página2_Images/75125986.FOTO PATRIMÔNIO.133108.jpg',
            nPatrimonio: '75125986',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'MESA',
            usuario: 'Ronei',
            observacao: ''
        },
        {
            img: 'Página2_Images/644959.FOTO PATRIMÔNIO.133127.jpg',
            nPatrimonio: '644959',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'MONITOR',
            usuario: 'Ronei',
            observacao: ''
        },
        {
            img: 'Página2_Images/99952270.FOTO PATRIMÔNIO.133151.jpg',
            nPatrimonio: '99952270',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'NOTEBOOK',
            usuario: 'Ronei',
            observacao: ''
        },
        {
            img: 'Página2_Images/84334932.FOTO PATRIMÔNIO.133233.jpg',
            nPatrimonio: '84334932',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'CADEIRA',
            usuario: 'Ronei',
            observacao: ''
        },
        {
            img: 'Página2_Images/74759760.FOTO PATRIMÔNIO.133300.jpg',
            nPatrimonio: '74759760',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'GAVETEIRO',
            usuario: 'Judson',
            observacao: ''
        },
        {
            img: 'Página2_Images/66721440.FOTO PATRIMÔNIO.133319.jpg',
            nPatrimonio: '66721440',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'TELEFONE',
            usuario: 'Judson',
            observacao: ''
        },
        {
            img: 'Página2_Images/83535268.FOTO PATRIMÔNIO.133338.jpg',
            nPatrimonio: '83535268',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'MONITOR',
            usuario: 'Judson',
            observacao: ''
        },
        {
            img: 'Página2_Images/75125994.FOTO PATRIMÔNIO.133355.jpg',
            nPatrimonio: '75125994',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'MESA',
            usuario: 'Judson',
            observacao: ''
        },
        {
            img: 'Página2_Images/99952262.FOTO PATRIMÔNIO.133434.jpg',
            nPatrimonio: '99952262',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'NOTEBOOK',
            usuario: 'Judson',
            observacao: ''
        },
        {
            img: 'Página2_Images/84334983.FOTO PATRIMÔNIO.133515.jpg',
            nPatrimonio: '84334983',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'CADEIRA',
            usuario: 'Judson',
            observacao: ''
        },
        {
            img: 'Página2_Images/75085747.FOTO PATRIMÔNIO.133538.jpg',
            nPatrimonio: '75085747',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'GAVETEIRO',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/75957740.FOTO PATRIMÔNIO.133602.jpg',
            nPatrimonio: '75957740',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'ARMÁRIO',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/65777328.FOTO PATRIMÔNIO.133619.jpg',
            nPatrimonio: '65777328',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'Outros',
            usuario: 'Sala',
            observacao: ''
        },
        {
            img: 'Página2_Images/9050788.FOTO PATRIMÔNIO.133640.jpg',
            nPatrimonio: '9050788',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'Outros',
            usuario: 'Sala',
            observacao: 'Impressora'
        },
        {
            img: 'Página2_Images/100432379.FOTO PATRIMÔNIO.133709.jpg',
            nPatrimonio: '100432379',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'Outros',
            usuario: 'Sala',
            observacao: 'Sofá'
        },
        {
            img: 'Página2_Images/75065746.FOTO PATRIMÔNIO.133730.jpg',
            nPatrimonio: '75065746',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'MESA',
            usuario: 'Marcio',
            observacao: ''
        },
        {
            img: 'Página2_Images/75060159.FOTO PATRIMÔNIO.133745.jpg',
            nPatrimonio: '75060159',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'GAVETEIRO',
            usuario: 'Marcio',
            observacao: ''
        },
        {
            img: 'Página2_Images/75035570.FOTO PATRIMÔNIO.133801.jpg',
            nPatrimonio: '75035570',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'MESA',
            usuario: 'Marcio',
            observacao: ''
        },
        {
            img: 'Página2_Images/66738130.FOTO PATRIMÔNIO.133821.jpg',
            nPatrimonio: '66738130',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'TELEFONE',
            usuario: 'Marcio',
            observacao: ''
        },
        {
            img: 'Página2_Images/644878.FOTO PATRIMÔNIO.133835.jpg',
            nPatrimonio: '644878',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'MONITOR',
            usuario: 'Marcio',
            observacao: ''
        },
        {
            img: 'Página2_Images/100046380.FOTO PATRIMÔNIO.133903.jpg',
            nPatrimonio: '100046380',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'NOTEBOOK',
            usuario: 'Marcio',
            observacao: ''
        },
        {
            img: 'Página2_Images/84335009.FOTO PATRIMÔNIO.133931.jpg',
            nPatrimonio: '84335009',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'CADEIRA',
            usuario: 'Marcio',
            observacao: ''
        },
        {
            img: 'Página2_Images/74959166.FOTO PATRIMÔNIO.134007.jpg',
            nPatrimonio: '74959166',
            date: "Novembro/2025",
            local: 'ÁLVARO',
            categoria: 'ARMÁRIO',
            usuario: 'Álvaro',
            observacao: ''
        },
        {
            img: 'Página2_Images/74957767.FOTO PATRIMÔNIO.134030.jpg',
            nPatrimonio: '74957767',
            date: "Novembro/2025",
            local: 'ÁLVARO',
            categoria: 'ARMÁRIO',
            usuario: 'Álvaro',
            observacao: ''
        },
        {
            img: 'Página2_Images/75060108.FOTO PATRIMÔNIO.134045.jpg',
            nPatrimonio: '75060108',
            date: "Novembro/2025",
            local: 'ÁLVARO',
            categoria: 'GAVETEIRO',
            usuario: 'Álvaro',
            observacao: ''
        },
        {
            img: 'Página2_Images/74847570.FOTO PATRIMÔNIO.134118.jpg',
            nPatrimonio: '74847570',
            date: "Novembro/2025",
            local: 'ÁLVARO',
            categoria: 'MESA',
            usuario: 'Álvaro',
            observacao: ''
        },
        {
            img: 'Página2_Images/75060574.FOTO PATRIMÔNIO.134135.jpg',
            nPatrimonio: '75060574',
            date: "Novembro/2025",
            local: 'ÁLVARO',
            categoria: 'GAVETEIRO',
            usuario: 'Álvaro',
            observacao: ''
        },
        {
            img: 'Página2_Images/75060582.FOTO PATRIMÔNIO.134152.jpg',
            nPatrimonio: '75060582',
            date: "Novembro/2025",
            local: 'ÁLVARO',
            categoria: 'GAVETEIRO',
            usuario: 'Álvaro',
            observacao: ''
        },
        {
            img: 'Página2_Images/75360527.FOTO PATRIMÔNIO.134209.jpg',
            nPatrimonio: '75360527',
            date: "Novembro/2025",
            local: 'ÁLVARO',
            categoria: 'MESA',
            usuario: 'Álvaro',
            observacao: ''
        },
        {
            img: 'Página2_Images/351403.FOTO PATRIMÔNIO.134227.jpg',
            nPatrimonio: '351403',
            date: "Novembro/2025",
            local: 'ÁLVARO',
            categoria: 'TELEFONE',
            usuario: 'Álvaro',
            observacao: ''
        },
        {
            img: 'Página2_Images/644791.FOTO PATRIMÔNIO.134245.jpg',
            nPatrimonio: '644791',
            date: "Novembro/2025",
            local: 'ÁLVARO',
            categoria: 'MONITOR',
            usuario: 'Álvaro',
            observacao: ''
        },
        {
            img: 'Página2_Images/100146589.FOTO PATRIMÔNIO.134302.jpg',
            nPatrimonio: '100146589',
            date: "Novembro/2025",
            local: 'ÁLVARO',
            categoria: 'MONITOR',
            usuario: 'Álvaro',
            observacao: ''
        },
        {
            img: 'Página2_Images/84396318.FOTO PATRIMÔNIO.134350.jpg',
            nPatrimonio: '84396318',
            date: "Novembro/2025",
            local: 'ÁLVARO',
            categoria: 'NOTEBOOK',
            usuario: 'Álvaro',
            observacao: ''
        },
        {
            img: 'Página2_Images/84335033.FOTO PATRIMÔNIO.134424.jpg',
            nPatrimonio: '84335033',
            date: "Novembro/2025",
            local: 'ÁLVARO',
            categoria: 'CADEIRA',
            usuario: 'Álvaro',
            observacao: ''
        },
        {
            img: 'Página2_Images/100141595.FOTO PATRIMÔNIO.134459.jpg',
            nPatrimonio: '100141595',
            date: "Novembro/2025",
            local: 'ÁLVARO',
            categoria: 'COMPUTADOR',
            usuario: 'Álvaro',
            observacao: ''
        },
        {
            img: 'Página2_Images/75992051.FOTO PATRIMÔNIO.134550.jpg',
            nPatrimonio: '75992051',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'WEBCAM',
            usuario: 'Sem',
            observacao: ''
        },
        {
            img: 'Página2_Images/84340630.FOTO PATRIMÔNIO.134634.jpg',
            nPatrimonio: '84340630',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'WEBCAM',
            usuario: 'Sem',
            observacao: ''
        },
        {
            img: 'Página2_Images/84251166.FOTO PATRIMÔNIO.134652.jpg',
            nPatrimonio: '84251166',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'WEBCAM',
            usuario: 'Sem',
            observacao: ''
        },
        {
            img: 'Página2_Images/84448199.FOTO PATRIMÔNIO.134800.jpg',
            nPatrimonio: '84448199',
            date: "Novembro/2025",
            local: 'SALA DA WYNTECH SEDE',
            categoria: 'Outros',
            usuario: 'Sem',
            observacao: 'Gravador de dvd'
        },
          {
            img: 'Página2_Images.FOTO PATRIMÔNIO.332451.jpg',
            nPatrimonio: '332451',
            date: "Novembro/2025",
            local: 'RAJA',
            categoria: 'Mesa',
            usuario: 'SALA',
            observacao: ''
        },
          {
            img: 'Página2_Images.FOTO PATRIMÔNIO.75523485.jpg',
            nPatrimonio: '75523485',
            date: "Novembro/2025",
            local: 'RAJA',
            categoria: 'Outros',
            usuario: 'SALA',
            observacao: 'Scaner'
        },

        
    ];

    
    const itemsPerPage = 10;
    let currentPage = 1;
    let currentFilteredItems = [...patrimonioData];

  
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

   
    function applyFilters() {
        const searchTerm = searchInput.value.toLowerCase();
        const localValue = localSelect.value;
        const categoriaValue = categoriaSelect.value;

        let filteredData = patrimonioData.filter(item => {
           
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

    
    function displayCurrentPage() {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const paginatedItems = currentFilteredItems.slice(startIndex, endIndex);
        renderTable(paginatedItems);
    }


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

        
        const window = 1; 
        const maxVisiblePages = (window * 2) + 5; 
        
        let showedEllipsisStart = false;
        let showedEllipsisEnd = false;

        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.innerText = i;
            pageButton.dataset.page = i;
            if (i === currentPage) pageButton.classList.add('active');

            if (totalPages <= maxVisiblePages) {
               
                paginationControls.appendChild(pageButton);
            } else {
               
                if (i === 1 || i === totalPages || (i >= currentPage - window && i <= currentPage + window)) {
                   
                    paginationControls.appendChild(pageButton);
                } else if (i < currentPage && !showedEllipsisStart) {
                   
                    const ellipsis = document.createElement('span');
                    ellipsis.innerText = '...';
                    ellipsis.className = 'pagination-ellipsis'; 
                    paginationControls.appendChild(ellipsis);
                    showedEllipsisStart = true;
                } else if (i > currentPage && !showedEllipsisEnd) {
                    
                    const ellipsis = document.createElement('span');
                    ellipsis.innerText = '...';
                    ellipsis.className = 'pagination-ellipsis';
                    paginationControls.appendChild(ellipsis);
                    showedEllipsisEnd = true;
                }
            }
        }

     
        const nextButton = document.createElement('button');
        nextButton.innerHTML = 'Próximo &raquo;';
        nextButton.dataset.page = 'next';
        if (currentPage === totalPages) nextButton.disabled = true;
        paginationControls.appendChild(nextButton);
    }

    
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

    
    tableBodyForModal.addEventListener('click', (event) => {
        if (event.target.classList.contains('item-img')) {
            modal.style.display = "flex"; 
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
    
   
    updatePaginationUI();
    displayCurrentPage();


}); 








