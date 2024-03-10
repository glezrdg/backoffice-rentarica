

export type Colors = 'red' | 'blue' | 'green' | 'purple'

export function barChartData(color: Colors) {

  let ChoosenColor = getColor(color)


  return {
    labels: [
      "ene",
      "feb",
      "mar",
      "abr",
      "may",
      "jun",
    ],
    datasets: [
      {
        label: "Neto",
        backgroundColor: ChoosenColor,
        borderColor: "#fff",
        data: [20, 65, 59, 80, 81, 56, 55, 40],
      },
    ],
  }
}

export function getColor(color: Colors) {
  switch (color) {
    case 'red':
      return 'rgb(255,240,246)'

    case 'purple':
      return 'rgb(239,239,254)'

    case 'green':
      return 'rgb(232,250,244)'

    case 'blue':
      return 'rgb(233,245,255)'

    default:
      break;
  }
}

export const products = [
  {
    id: 1,
    img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/15f901c90a9549d29104aae700d27efb_9366/Superstar_Shoes_Black_EG4959_01_standard.jpg',
    name: 'Tenis adidas',
    qty: 12,
    price: 2500,
  },
  {
    id: 2,
    img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/15f901c90a9549d29104aae700d27efb_9366/Superstar_Shoes_Black_EG4959_01_standard.jpg',
    name: 'Tenis adidas',
    qty: 12,
    price: 2500,
  },
  {
    id: 3,
    img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/15f901c90a9549d29104aae700d27efb_9366/Superstar_Shoes_Black_EG4959_01_standard.jpg',
    name: 'Tenis adidas',
    qty: 12,
    price: 2500,
  },
  {
    id: 4,
    img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/15f901c90a9549d29104aae700d27efb_9366/Superstar_Shoes_Black_EG4959_01_standard.jpg',
    name: 'Tenis adidas',
    qty: 12,
    price: 2500,
  },
  {
    id: 5,
    img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/15f901c90a9549d29104aae700d27efb_9366/Superstar_Shoes_Black_EG4959_01_standard.jpg',
    name: 'Tenis adidas',
    qty: 12,
    price: 2500,
  },
]

export const orders = [
  {
    id: 1,
    number: 1025,
    province: 'Santo domingo',
    paymentMethod: 'Tarjeta',
    totalAmount: 1250,
    products: 5,
    status: 'pending',
    client: 'Carlos Bueno',
    createdAt: '27/10/2023',
    img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/15f901c90a9549d29104aae700d27efb_9366/Superstar_Shoes_Black_EG4959_01_standard.jpg',
    name: 'Tenis adidas',
    qty: 12,
    price: 2500,
  },
  {
    id: 2,
    number: 2025,
    province: 'Santo domingo',
    paymentMethod: 'Tarjeta',
    totalAmount: 1250,
    products: 5,
    status: 'pending',
    client: 'Carlos Bueno',
    createdAt: '27/10/2023',
    img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/15f901c90a9549d29104aae700d27efb_9366/Superstar_Shoes_Black_EG4959_01_standard.jpg',
    name: 'Tenis adidas',
    qty: 12,
    price: 2500,
  },
  {
    id: 3,
    number: 3025,
    province: 'Santo domingo',
    paymentMethod: 'Tarjeta',
    totalAmount: 1250,
    products: 5,
    status: 'pending',
    client: 'Carlos Bueno',
    createdAt: '27/10/2023',
    img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/15f901c90a9549d29104aae700d27efb_9366/Superstar_Shoes_Black_EG4959_01_standard.jpg',
    name: 'Tenis adidas',
    qty: 12,
    price: 2500,
  },
  {
    id: 4,
    number: 4025,
    province: 'Santo domingo',
    paymentMethod: 'Tarjeta',
    totalAmount: 1250,
    products: 5,
    status: 'pending',
    client: 'Carlos Bueno',
    createdAt: '27/10/2023',
    img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/15f901c90a9549d29104aae700d27efb_9366/Superstar_Shoes_Black_EG4959_01_standard.jpg',
    name: 'Tenis adidas',
    qty: 12,
    price: 2500,
  },
  {
    id: 5,
    number: 5025,
    province: 'Santo domingo',
    paymentMethod: 'Tarjeta',
    totalAmount: 1250,
    products: 5,
    status: 'pending',
    client: 'Carlos Bueno',
    createdAt: '27/10/2023',
    img: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/15f901c90a9549d29104aae700d27efb_9366/Superstar_Shoes_Black_EG4959_01_standard.jpg',
    name: 'Tenis adidas',
    qty: 12,
    price: 2500,
  },
]

export const provinces = [
  "AZUA",
  "BAHORUCO",
  "BARAHONA",
  "DAJABON",
  "DISTRITO NACIONAL",
  "DUARTE",
  "EL SEYBO",
  "ELIAS PIÑA",
  "ESPAILLAT",
  "HATO MAYOR",
  "HERMANAS MIRABAL",
  "INDEPENDENCIA",
  "LA ALTAGRACIA",
  "LA ROMANA",
  "LA VEGA",
  "MARIA TRINIDAD SANCHEZ",
  "MONSEÑOR NOUEL",
  "MONTE PLATA",
  "MONTECRISTI",
  "PEDERNALES",
  "PERAVIA",
  "PUERTO PLATA",
  "SAMANA",
  "SAN CRISTOBAL",
  "SAN JOSE DE OCOA",
  "SAN JUAN",
  "SAN PEDRO DE MACORIS",
  "SANCHEZ RAMIREZ",
  "SANTIAGO",
  "SANTIAGO RODRIGUEZ",
  "SANTO DOMINGO",
  "VALVERDE",
]

export const paymentMethods = [
  'Tarjeta',
  'Transferencia',
  'Efectivo',
  'Paypal'
]