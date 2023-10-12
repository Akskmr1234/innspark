import { ChartType } from './dashboard.model';

const emailSentBarChart: ChartType = {
    chart: {
        height: 340,
        type: 'bar',
        stacked: true,
        toolbar: {
            show: false
        },
        zoom: {
            enabled: true
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '15%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    series: [{
        name: 'Series A',
        data: [44, 55, 41, 67, 22, 43, 36, 52, 24, 18, 36, 48]
    }, {
        name: 'Series B',
        data: [13, 23, 20, 8, 13, 27, 18, 22, 10, 16, 24, 22]
    }, {
        name: 'Series C',
        data: [11, 17, 15, 15, 21, 14, 11, 18, 17, 12, 20, 18]
    }],
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    colors: ['#556ee6', '#f1b44c', '#34c38f'],
    legend: {
        position: 'bottom',
    },
    fill: {
        opacity: 1
    },
};

const monthlyEarningChart: ChartType = {
    chart: {
        height: 200,
        type: 'radialBar',
        offsetY: -10
    },
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 135,
            dataLabels: {
                name: {
                    fontSize: '13px',
                    color: undefined,
                    offsetY: 60
                },
                value: {
                    offsetY: 22,
                    fontSize: '16px',
                    color: undefined,
                    formatter: (val) => {
                        return val + '%';
                    }
                }
            }
        }
    },
    colors: ['#556ee6'],
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            shadeIntensity: 0.15,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 65, 91]
        },
    },
    stroke: {
        dashArray: 4,
    },
    series: [67],
    labels: ['Series A'],
};

const transactions = [
    {
        id: '#SK2540',
        name: 'Neal Matthews',
        date: '07 Oct, 2019',
        total: '$400',
        status: 'Paid',
        payment: ['fa-cc-mastercard', 'Mastercard'],
        index: 1
    },
    {
        id: '#SK2541',
        name: 'Jamal Burnett',
        date: '07 Oct, 2019',
        total: '$380',
        status: 'Chargeback',
        payment: ['fa-cc-visa', 'Visa'],
        index: 2
    },
    {
        id: '#SK2542',
        name: 'Juan Mitchell',
        date: '06 Oct, 2019',
        total: '$384',
        status: 'Paid',
        payment: ['fab fa-cc-paypal', 'Paypal'],
        index: 3
    },
    {
        id: '#SK2543',
        name: 'Barry Dick',
        date: '05 Oct, 2019',
        total: '$412',
        status: 'Paid',
        payment: ['fa-cc-mastercard', 'Mastercard'],
        index: 4
    },
    {
        id: '#SK2544',
        name: 'Ronald Taylor',
        date: '04 Oct, 2019',
        total: '$404',
        status: 'Refund',
        payment: ['fa-cc-visa', 'Visa'],
        index: 5
    },
    {
        id: '#SK2545',
        name: 'Jacob Hunter',
        date: '04 Oct, 2019',
        total: '$392',
        status: 'Paid',
        payment: ['fab fa-cc-paypal', 'Paypal'],
        index: 6
    }
];

const statData = [{
    icon: 'bx bx-copy-alt',
    title: 'Orders',
    value: '1,235'
}, {
    icon: 'bx bx-archive-in',
    title: 'Revenue',
    value: '$35, 723'
}, {
    icon: 'bx bx-purchase-tag-alt',
    title: 'Average Price',
    value: '$16.2'
}];
const tableData = [
    {
      name: 'Timoteo Lyddy',
      position: 'Recruiting Manager',
      office: 'Vidago',
      age: 29,
      date: '2018/12/04',
      salary: '$11700'
    }, {
      name: 'Cherye Bleby',
      position: 'Quality Engineer',
      office: 'La Concordia',
      age: 62,
      date: '2018/10/04',
      salary: '$14700'
    }, {
      name: 'Zacharias O\'Shaughnessy',
      position: 'Senior Editor',
      office: 'Maungatapere',
      age: 26,
      date: '2018/07/30',
      salary: '$11600'
    }, {
      name: 'Odie Jentin',
      position: 'Programmer II',
      office: 'Grabovci',
      age: 26,
      date: '2019/05/16',
      salary: '$11200'
    }, {
      name: 'Eugenie Sang',
      position: 'Operator',
      office: 'Oxbow',
      age: 59,
      date: '2019/07/16',
      salary: '$15200'
    }, {
      name: 'Sammy Guyers',
      position: 'Mechanical Systems Engineer',
      office: 'Sanhe',
      age: 53,
      date: '2019/07/09',
      salary: '$14200'
    }, {
      name: 'Tarah Blick',
      position: 'Paralegal',
      office: 'Fylí',
      age: 23,
      date: '2018/12/14',
      salary: '$15200'
    }, {
      name: 'Jemie Ormshaw',
      position: 'Systems Administrator II',
      office: 'Vila Fria',
      age: 28,
      date: '2019/05/15',
      salary: '$14400'
    }, {
      name: 'Gerrie Semeradova',
      position: 'Research Associate',
      office: 'Balykchy',
      age: 26,
      date: '2018/09/28',
      salary: '$14900'
    }, {
      name: 'Ottilie Mostyn',
      position: 'Accounting Assistant II',
      office: 'Eskilstuna',
      age: 43,
      date: '2018/08/20',
      salary: '$11300'
    }, {
      name: 'Lombard Crepin',
      position: 'Project Manager',
      office: 'Novoul’yanovsk',
      age: 63,
      date: '2019/04/28',
      salary: '$13300'
    }, {
      name: 'Fons Sopp',
      position: 'Structural Analysis Engineer',
      office: 'Bealanana',
      age: 47,
      date: '2019/02/22',
      salary: '$13300'
    }, {
      name: 'Berenice Wildey',
      position: 'Sales Representative',
      office: 'Markópoulo Oropoú',
      age: 49,
      date: '2018/10/19',
      salary: '$14700'
    }, {
      name: 'Maybelle Cullotey',
      position: 'Senior Financial Analyst',
      office: 'Arcos de Valdevez',
      age: 33,
      date: '2019/02/06',
      salary: '$14700'
    }, {
      name: 'Mikkel Lingner',
      position: 'Assistant Media Planner',
      office: 'Celestynów',
      age: 32,
      date: '2018/08/12',
      salary: '$11400'
    }, {
      name: 'Silvano Hartil',
      position: 'Assistant Manager',
      office: 'Leles',
      age: 26,
      date: '2019/04/30',
      salary: '$11500'
    }, {
      name: 'Maddi Mansell',
      position: 'Assistant Media Planner',
      office: 'Doug An',
      age: 48,
      date: '2019/05/29',
      salary: '$14600'
    }, {
      name: 'Mohandas Course',
      position: 'Staff Accountant II',
      office: 'Wuping',
      age: 59,
      date: '2019/07/18',
      salary: '$12900'
    }, {
      name: 'Ericha Clilverd',
      position: 'Desktop Support Technician',
      office: 'Conde',
      age: 37,
      date: '2018/09/12',
      salary: '$14400'
    }, {
      name: 'Elspeth Leap',
      position: 'Paralegal',
      office: 'Hägersten',
      age: 42,
      date: '2019/02/15',
      salary: '$14400'
    }, {
      name: 'Sam Chinge',
      position: 'Assistant Media Planner',
      office: 'Arai',
      age: 55,
      date: '2019/05/26',
      salary: '$11800'
    },
    {
      name: 'Lucinda Stickley',
      position: 'Data Coordiator',
      office: 'Sirnarasa',
      age: 31,
      date: '2018/07/29',
      salary: '$13600'
    }, {
      name: 'Henrietta Carsberg',
      position: 'Data Coordiator',
      office: 'Paninggaran',
      age: 59,
      date: '2019/07/13',
      salary: '$13700'
    }, {
      name: 'Phylys David',
      position: 'Senior Developer',
      office: 'New Glasgow',
      age: 52,
      date: '2019/04/08',
      salary: '$15200'
    }, {
      name: 'Brena Shivell',
      position: 'Graphic Designer',
      office: 'Caen',
      age: 50,
      date: '2018/12/14',
      salary: '$15800'
    }, {
      name: 'Carmon Tuiller',
      position: 'Marketing Assistant',
      office: 'Jiangbei',
      age: 46,
      date: '2019/06/19',
      salary: '$12800'
    }, {
      name: 'Tina Strattan',
      position: 'Account Representative III',
      office: 'São Miguel da Carreira',
      age: 31,
      date: '2019/07/08',
      salary: '$13900'
    }, {
      name: 'Jon Tarbox',
      position: 'Senior Cost Accountant',
      office: 'Ryazhsk',
      age: 61,
      date: '2019/02/22',
      salary: '$16000'
    }, {
      name: 'Carmine Hollibone',
      position: 'Assistant Manager',
      office: 'Punta del Este',
      age: 50,
      date: '2019/04/23',
      salary: '$15000'
    }, {
      name: 'Cora Germann',
      position: 'Automation Specialist III',
      office: 'Heshui',
      age: 47,
      date: '2019/03/27',
      salary: '$11300'
    }, {
      name: 'Dawna Hillyatt',
      position: 'Biostatistician I',
      office: 'Suresnes',
      age: 37,
      date: '2018/12/02',
      salary: '$14800'
    }, {
      name: 'Natty Casini',
      position: 'Senior Developer',
      office: 'Pucallpa',
      age: 31,
      date: '2018/08/19',
      salary: '$11900'
    }, {
      name: 'Vittorio Lauder',
      position: 'Developer II',
      office: 'Tønsberg',
      age: 54,
      date: '2018/12/10',
      salary: '$16200'
    }, {
      name: 'Chery Cardenas',
      position: 'Senior Developer',
      office: 'Santo Tomas',
      age: 26,
      date: '2018/12/07',
      salary: '$11100'
    }, {
      name: 'Hilde McFfaden',
      position: 'Senior Financial Analyst',
      office: 'Cruz',
      age: 43,
      date: '2018/11/05',
      salary: '$14100'
    }, {
      name: 'Siward Kindred',
      position: 'Office Assistant III',
      office: 'Béziers',
      age: 39,
      date: '2018/09/26',
      salary: '$15500'
    }, {
      name: 'Tamera Caneo',
      position: 'Executive Secretary',
      office: 'Hetian',
      age: 38,
      date: '2018/09/28',
      salary: '$12300'
    }, {
      name: 'Munmro Rendell',
      position: 'Marketing Manager',
      office: 'Castelo',
      age: 60,
      date: '2018/11/15',
      salary: '$12400'
    }, {
      name: 'Nerta Eddisforth',
      position: 'Social Worker',
      office: 'Al Ḩayfah',
      age: 33,
      date: '2018/12/01',
      salary: '$14900'
    }, {
      name: 'Laraine Hamlyn',
      position: 'Chemical Engineer',
      office: 'Baška Voda',
      age: 44,
      date: '2019/03/25',
      salary: '$12800'
    },
    {
      name: 'Judie Hug',
      position: 'Operator',
      office: 'Verkhniy Rohachyk',
      age: 32,
      date: '2018/11/18',
      salary: '$11300'
    }, {
      name: 'Lulita Espasa',
      position: 'Operator',
      office: 'Sabi',
      age: 59,
      date: '2019/06/06',
      salary: '$13600'
    }, {
      name: 'Kandy Fulker',
      position: 'Human Resources Assistant I',
      office: 'Murowana Goślina',
      age: 57,
      date: '2019/05/01',
      salary: '$13100'
    }, {
      name: 'Bradley Gunbie',
      position: 'Assistant Media Planner',
      office: 'Bundoran',
      age: 34,
      date: '2019/03/16',
      salary: '$13700'
    }, {
      name: 'Katie Proctor',
      position: 'Quality Engineer',
      office: 'Qingxi',
      age: 34,
      date: '2018/10/14',
      salary: '$12400'
    }, {
      name: 'Lin Gallaccio',
      position: 'VP Quality Control',
      office: 'Rongcheng',
      age: 23,
      date: '2018/08/27',
      salary: '$10300'
    }, {
      name: 'Christy Ranaghan',
      position: 'Nurse Practicioner',
      office: 'Naval',
      age: 42,
      date: '2018/11/02',
      salary: '$15700'
    }, {
      name: 'Concordia Varrow',
      position: 'Environmental Specialist',
      office: 'Rashaant',
      age: 48,
      date: '2018/12/11',
      salary: '$12500'
    }, {
      name: 'Normand Tropman',
      position: 'Legal Assistant',
      office: 'Yläne',
      age: 52,
      date: '2019/01/21',
      salary: '$14600'
    }, {
      name: 'Oswald Cruikshank',
      position: 'Help Desk Operator',
      office: 'Armenia',
      age: 57,
      date: '2019/05/16',
      salary: '$15700'
    }, {
      name: 'Debbie Pinchin',
      position: 'Tax Accountant',
      office: 'Seara',
      age: 35,
      date: '2018/08/29',
      salary: '$12100'
    }, {
      name: 'Wells Dartan',
      position: 'Financial Analyst',
      office: 'Bhalwāl',
      age: 44,
      date: '2019/03/03',
      salary: '$10500'
    }, {
      name: 'Kelsey Zucker',
      position: 'Accountant III',
      office: 'Douz',
      age: 44,
      date: '2018/11/09',
      salary: '$15700'
    }, {
      name: 'Lothaire Rubinchik',
      position: 'Operator',
      office: 'Paringin',
      age: 37,
      date: '2018/07/26',
      salary: '$13800'
    }, {
      name: 'Dmitri Marrow',
      position: 'Quality Engineer',
      office: 'Kirzhach',
      age: 30,
      date: '2018/11/25',
      salary: '$13400'
    }, {
      name: 'Virgie Bullivant',
      position: 'Dental Hygienist',
      office: 'Mungyeong',
      age: 34,
      date: '2019/07/16',
      salary: '$14600'
    }, {
      name: 'Simmonds Moughtin',
      position: 'Programmer III',
      office: 'Loma',
      age: 44,
      date: '2018/10/20',
      salary: '$13900'
    }, {
      name: 'Ralina Bounds',
      position: 'Associate Professor',
      office: 'Cacocum',
      age: 52,
      date: '2019/05/12',
      salary: '$11400'
    }, {
      name: 'Bettye Hearons',
      position: 'Food Chemist',
      office: 'Guayabetal',
      age: 30,
      date: '2018/12/29',
      salary: '$16000'
    }, {
      name: 'Cortie Andreacci',
      position: 'Assistant Manager',
      office: 'Yongheshi',
      age: 33,
      date: '2018/11/23',
      salary: '$11200'
    }
  ];
export { emailSentBarChart, monthlyEarningChart, transactions, statData ,tableData};
