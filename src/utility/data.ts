import { IDoctorSchedule } from "@/pages/Profile/models/doctorSchedule"


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

export const categories = ['En venta', 'En Alquiler', 'Terreno', 'Airbnb', 'Renta Corta']

export const propertyFeatures = [
  {
    label: "En Planos",
    value: "en_planos",
    icon: "/assets/icons/blueprint.svg",
  },
  { label: "Studio", value: "studio", icon: "/assets/icons/studio.svg" },
  { label: "Piscina", value: "piscina", icon: "/assets/icons/pool.svg" },
  { label: "Terraza", value: "terraza", icon: "/assets/icons/terrace.svg" },
  { label: "Balcón", value: "balcon", icon: "/assets/icons/balcony.svg" },
  {
    label: "Área Social",
    value: "area_social",
    icon: "/assets/icons/social-area.svg",
  },
  { label: "Lobby", value: "lobby", icon: "/assets/icons/lobby.svg" },
  {
    label: "Seguridad",
    value: "seguridad",
    icon: "/assets/icons/security.svg",
  },
  { label: "Parqueo", value: "parqueo", icon: "/assets/icons/parking.svg" },
  { label: "Gym", value: "gym", icon: "/assets/icons/gym.svg" },
  {
    label: "Áreas Deportivas",
    value: "areas_deportivas",
    icon: "/assets/icons/sports-area.svg",
  },
  {
    label: "Pet Friendly",
    value: "petfriendly",
    icon: "/assets/icons/pet-friendly.svg",
  },
  {
    label: "Beach Front",
    value: "beach_front",
    icon: "/assets/icons/beach-front.svg",
  },
  {
    label: "Amueblado",
    value: "amueblado",
    icon: "/assets/icons/furnished.svg",
  },
  {
    label: "Sin Amueblar",
    value: "sin_amueblar",
    icon: "/assets/icons/unfurnished.svg",
  },
];

export const propertyTypes = [
  {
    label: "Apartamentos",
    value: "apartment",
    icon: "/assets/icons/apartment.svg",
  },
  { label: "Casas", value: "house", icon: "/assets/icons/house.svg" },
  { label: "Villas", value: "villa", icon: "/assets/icons/villa.svg" },
  { label: "Solares", value: "land", icon: "/assets/icons/land.svg" },
  { label: "Fincas", value: "farm", icon: "/assets/icons/farm.svg" },
  { label: "Naves", value: "warehouse", icon: "/assets/icons/warehouse.svg" },
  { label: "Oficinas", value: "office", icon: "/assets/icons/office.svg" },

  {
    label: "Penthouses",
    value: "penthouse",
    icon: "/assets/icons/penthouse.svg",
  },
  { label: "Negocios", value: "business", icon: "/assets/icons/business.svg" },
];

export const provincias = [
  {
    label: 'Santo Domingo y Santiago',
    code: 'DO',
    items: [
      { label: 'Santo Domingo Centro', value: 'Santo Domingo Centro' },
      { label: 'Santo Domingo Este', value: 'Santo Domingo Este' },
      { label: 'Santo Domingo Norte', value: 'Santo Domingo Norte' },
      { label: 'Santo Domingo Oeste', value: 'Santo Domingo Oeste' },
      { label: 'Santiago', value: 'Santiago' },
    ],
  },
  {
    label: 'Zonas Turísticas',
    code: 'TO',
    items: [
      { label: 'Bávaro, Punta Cana y la Altagracia', value: 'Bávaro' },
      { label: 'La Romana', value: 'La Romana' },
      { label: 'Puerto Plata', value: 'Puerto Plata' },
      { label: 'Samaná', value: 'Samaná' },
      { label: 'San Pedro de Macorís', value: 'San Pedro de Macorís' },
    ],
  },
  {
    label: 'Otras Zonas',
    code: 'OZ',
    items: [
      { label: 'Azua', value: 'Azua' },
      { label: 'Bahoruco', value: 'Bahoruco' },
      { label: 'Barahona', value: 'Barahona' },
      { label: 'Dajabón', value: 'Dajabón' },
      { label: 'Duarte', value: 'Duarte' },
      { label: 'El Seibo', value: 'El Seibo' },
      { label: 'Elías Piña', value: 'Elías Piña' },
      { label: 'Espaillat', value: 'Espaillat' },
      { label: 'Hato Mayor', value: 'Hato Mayor' },
      { label: 'Independencia', value: 'Independencia' },
      { label: 'La Vega', value: 'La Vega' },
      { label: 'Monte Cristi', value: 'Monte Cristi' },
      { label: 'Pedernales', value: 'Pedernales' },
    ],
  },
]
