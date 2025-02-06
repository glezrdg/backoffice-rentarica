import { IDoctorSchedule } from "@/pages/Profile/models/doctorSchedule";

export type Colors = "red" | "blue" | "green" | "purple";

export function barChartData(color: Colors) {
  let ChoosenColor = getColor(color);

  return {
    labels: ["ene", "feb", "mar", "abr", "may", "jun"],
    datasets: [
      {
        label: "Neto",
        backgroundColor: ChoosenColor,
        borderColor: "#fff",
        data: [20, 65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };
}

export function getColor(color: Colors) {
  switch (color) {
    case "red":
      return "rgb(255,240,246)";

    case "purple":
      return "rgb(239,239,254)";

    case "green":
      return "rgb(232,250,244)";

    case "blue":
      return "rgb(233,245,255)";

    default:
      break;
  }
}

export const categories = ["En venta", "En Alquiler", "Renta Corta"];

// export const propertyFeatures = [
//   {
//     label: "En Planos",
//     value: "en_planos",
//     icon: "/assets/icons/blueprint.svg",
//   },
//   { label: "Studio", value: "studio", icon: "/assets/icons/studio.svg" },
//   { label: "Piscina", value: "piscina", icon: "/assets/icons/pool.svg" },
//   { label: "Terraza", value: "terraza", icon: "/assets/icons/terrace.svg" },
//   { label: "Balcón", value: "balcon", icon: "/assets/icons/balcony.svg" },
//   {
//     label: "Área Social",
//     value: "area_social",
//     icon: "/assets/icons/social-area.svg",
//   },
//   { label: "Lobby", value: "lobby", icon: "/assets/icons/lobby.svg" },
//   {
//     label: "Seguridad",
//     value: "seguridad",
//     icon: "/assets/icons/security.svg",
//   },
//   { label: "Parqueo", value: "parqueo", icon: "/assets/icons/parking.svg" },
//   { label: "Gym", value: "gym", icon: "/assets/icons/gym.svg" },
//   {
//     label: "Áreas Deportivas",
//     value: "areas_deportivas",
//     icon: "/assets/icons/sports-area.svg",
//   },
//   {
//     label: "Pet Friendly",
//     value: "petfriendly",
//     icon: "/assets/icons/pet-friendly.svg",
//   },
//   {
//     label: "Beach Front",
//     value: "beach_front",
//     icon: "/assets/icons/beach-front.svg",
//   },
//   {
//     label: "Amueblado",
//     value: "amueblado",
//     icon: "/assets/icons/furnished.svg",
//   },
//   {
//     label: "Sin Amueblar",
//     value: "sin_amueblar",
//     icon: "/assets/icons/unfurnished.svg",
//   },
//   {
//     label: "Cocina Caliente",
//     value: "cocina_caliente",
//     icon: "/assets/icons/cocina-caliente.svg",
//   },
//   {
//     label: "Habitación Servicio",
//     value: "habitacion_servicio",
//     icon: "/assets/icons/habitacion-servicio.svg",
//   },
// ];
export const propertyFeatures = [
  { label: "A/C", value: "a_c", icon: "pi pi-snow" },
  { label: "A/C Central", value: "a_c_central", icon: "pi pi-snow" },
  { label: "A/C Preinstalado", value: "a_c_preinstalado", icon: "pi pi-cog" },
  { label: "A/C Split", value: "a_c_split", icon: "pi pi-bars" },
  { label: "Abanicos", value: "abanicos", icon: "pi pi-refresh" },
  { label: "Acceso A Techo", value: "acceso_a_techo", icon: "pi pi-arrow-up" },
  { label: "Amueblado", value: "amueblado", icon: "pi pi-home" },
  { label: "Anexos", value: "anexos", icon: "pi pi-copy" },
  { label: "Area Social", value: "area_social", icon: "pi pi-users" },
  { label: "Areas Deportivas", value: "areas_deportivas", icon: "pi pi-football" },
  { label: "Ascensor", value: "ascensor", icon: "pi pi-sort-amount-up" },
  { label: "Balcón", value: "balcon", icon: "pi pi-home" },
  { label: "Baño Común", value: "bano_comun", icon: "pi pi-bath" },
  { label: "Calentador", value: "calentador", icon: "pi pi-fire" },
  { label: "Cisterna", value: "cisterna", icon: "pi pi-water" },
  { label: "Cocina Caliente", value: "cocina_caliente", icon: "pi pi-utensils" },
  { label: "Comedor", value: "comedor", icon: "pi pi-utensils" },
  { label: "Conserje", value: "conserje", icon: "pi pi-user" },
  { label: "Cornisas", value: "cornisas", icon: "pi pi-tools" },
  { label: "Desayunador", value: "desayunador", icon: "pi pi-coffee" },
  { label: "Ducto Basura", value: "ducto_basura", icon: "pi pi-trash" },
  { label: "En Planos", value: "en_planos", icon: "pi pi-map" },
  { label: "Esc. Emergencia", value: "esc_emergencia", icon: "pi pi-exclamation-triangle" },
  { label: "Escaleras", value: "escaleras", icon: "pi pi-bars" },
  { label: "Estar", value: "estar", icon: "pi pi-circle" },
  { label: "Estudio", value: "estudio", icon: "pi pi-book" },
  { label: "Family Room", value: "family_room", icon: "pi pi-users" },
  { label: "Gym", value: "gym", icon: "pi pi-dumbbell" },
  { label: "Gazebo", value: "gazebo", icon: "pi pi-tree" },
  { label: "Habitación Servicio", value: "habitacion_servicio", icon: "pi pi-home" },
  { label: "Inversor", value: "inversor", icon: "pi pi-bolt" },
  { label: "Jacuzzi", value: "jacuzzi", icon: "pi pi-star" },
  { label: "Lavado", value: "lavado", icon: "pi pi-sync" },
  { label: "Locker", value: "locker", icon: "pi pi-folder" },
  { label: "Lobby", value: "lobby", icon: "pi pi-building" },
  { label: "Mezzanine", value: "mezzanine", icon: "pi pi-columns" },
  { label: "Parqueo", value: "parqueo", icon: "pi pi-parking" },
  { label: "Parq. Techado", value: "parq_techado", icon: "pi pi-car" },
  { label: "Patio", value: "patio", icon: "pi pi-image" },
  { label: "Pet Friendly", value: "petfriendly", icon: "pi pi-paw" },
  { label: "Piscina", value: "piscina", icon: "pi pi-water" },
  { label: "Planta Eléctrica (Común)", value: "planta_electrica_comun", icon: "pi pi-plug" },
  { label: "Planta Eléctrica Full", value: "planta_electrica_full", icon: "pi pi-bolt" },
  { label: "Pozo", value: "pozo", icon: "pi pi-circle" },
  { label: "Portón Eléctrico", value: "porton_electrico", icon: "pi pi-shield" },
  { label: "Recibidor", value: "recibidor", icon: "pi pi-home" },
  { label: "Rejas", value: "rejas", icon: "pi pi-lock" },
  { label: "Sala", value: "sala", icon: "pi pi-home" },
  { label: "Sala/Comedor", value: "sala_comedor", icon: "pi pi-th-large" },
  { label: "Salón De Actividades", value: "salon_de_actividades", icon: "pi pi-calendar" },
  { label: "Seguridad", value: "seguridad", icon: "pi pi-shield" },
  { label: "Telecable", value: "telecable", icon: "pi pi-wifi" },
  { label: "Terraza", value: "terraza", icon: "pi pi-sun" },
  { label: "Terraza Techada", value: "terraza_techada", icon: "pi pi-cloud" },
  { label: "Tinaco", value: "tinaco", icon: "pi pi-box" },
  { label: "Transfer/A", value: "transfer_a", icon: "pi pi-exchange" },
  { label: "Verjas", value: "verjas", icon: "pi pi-lock" }
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
    label: "Santo Domingo y Santiago",
    code: "DO",
    items: [
      { label: "Santo Domingo Centro", value: "Santo Domingo Centro" },
      { label: "Santo Domingo Este", value: "Santo Domingo Este" },
      { label: "Santo Domingo Norte", value: "Santo Domingo Norte" },
      { label: "Santo Domingo Oeste", value: "Santo Domingo Oeste" },
      { label: "Santiago", value: "Santiago" },
    ],
  },
  {
    label: "Zonas Turísticas",
    code: "TO",
    items: [
      { label: "Bávaro, Punta Cana y la Altagracia", value: "Bávaro" },
      { label: "La Romana", value: "La Romana" },
      { label: "Puerto Plata", value: "Puerto Plata" },
      { label: "Samaná", value: "Samaná" },
      { label: "San Pedro de Macorís", value: "San Pedro de Macorís" },
    ],
  },
  {
    label: "Otras Zonas",
    code: "OZ",
    items: [
      { label: "Azua", value: "Azua" },
      { label: "Bahoruco", value: "Bahoruco" },
      { label: "Barahona", value: "Barahona" },
      { label: "Dajabón", value: "Dajabón" },
      { label: "Duarte", value: "Duarte" },
      { label: "El Seibo", value: "El Seibo" },
      { label: "Elías Piña", value: "Elías Piña" },
      { label: "Espaillat", value: "Espaillat" },
      { label: "Hato Mayor", value: "Hato Mayor" },
      { label: "Independencia", value: "Independencia" },
      { label: "La Vega", value: "La Vega" },
      { label: "Monte Cristi", value: "Monte Cristi" },
      { label: "Pedernales", value: "Pedernales" },
    ],
  },
];
