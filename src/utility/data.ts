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

export const workSchedule: IDoctorSchedule = {
  lunes: {
    hours: []
  },
  martes: {
    hours: []
  },
  miercoles: {
    hours: []
  },
  jueves: {
    hours: []
  },
  viernes: {
    hours: []
  },
  sabado: {
    hours: []
  },
  domingo: {
    hours: []
  }
}

export const categories = ['En venta', 'En Alquiler', 'Terreno', 'Airbnb',]
export const propertyTypes = ['Casa', 'Apartamento', 'Terreno', 'Villa', 'Treehouse', 'bungalow', 'Casa de Veraneo', 'Otro']

export const projects = [
  {
    id: 1,
    title: 'Beautiful Beachfront Apartments',
    category: 'En Venta',
    categories: [1],
    first_description: 'Te presentamos un proyecto cerrado excepcionalmente ubicado en Boca Chica, Santo Domingo, República Dominicana. Primera linea de playa y una vista expetacular al oceano. A tan solo diez minutos del Aeropuerto Internacional de las Américas, este enclave ofrece impresionantes vistas de las aguas turquesas del Mar Caribe, su blanca arena y el resplandeciente sol tropical, todo a solo dos minutos de la playa.',
    second_description: 'Este residencial se encuentra en una de las zonas más seguras y tranquilas de la región, y está convenientemente cerca de diversas atracciones. Estás a 15 minutos de campos de golf de renombre, a 10 minutos del mega puerto y a solo 35 minutos de Santo Domingo, la ciudad capital.',
    third_description: 'Este proyecto ha sido diseñado en el lugar perfecto para ti y tu familia. Sus áreas comunes son cómodas y acogedoras, con un estilo contemporáneo caracterizado por la simplicidad y la sofisticación, lo que crea un ambiente elegante y fresco. Además, el entorno está rodeado por las aguas turquesas del Mar Caribe, su blanca arena y el sol radiante.',
    items: [
      'Ofrecemos apartamentos de una (1) y dos (2) habitaciones con una distribución pensada para el máximo confort',
      'Los apartamentos cuentan con cocina, sala, comedor y balcón terraza.',
      'Acabados de alta calidad, que incluyen pisos de porcelanato, cristales blue green o similares, puertas de madera preciosa y cocinas modulares.',
      'Estufas empotradas eléctricas y preinstalación para aire acondicionado.',
    ],
    images: [
      'https://static.wixstatic.com/media/828c94_571dd2ee74c24cb6a2502af72856b3d7~mv2.jpg/v1/fill/w_382,h_318,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.jpg',
      'https://static.wixstatic.com/media/828c94_6ec6b2797b414a2184af6025a0bb3cd0~mv2.jpg/v1/fit/w_1216,h_515,q_90/828c94_6ec6b2797b414a2184af6025a0bb3cd0~mv2.jpg',
      'https://static.wixstatic.com/media/828c94_571dd2ee74c24cb6a2502af72856b3d7~mv2.jpg/v1/fill/w_382,h_318,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.jpg',
      'https://static.wixstatic.com/media/828c94_571dd2ee74c24cb6a2502af72856b3d7~mv2.jpg/v1/fill/w_382,h_318,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.jpg',
      'https://static.wixstatic.com/media/828c94_571dd2ee74c24cb6a2502af72856b3d7~mv2.jpg/v1/fill/w_382,h_318,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.jpg',
      'https://static.wixstatic.com/media/828c94_571dd2ee74c24cb6a2502af72856b3d7~mv2.jpg/v1/fill/w_382,h_318,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.jpg',
    ],
  },
  {
    id: 2,
    title: 'Beautiful Beachfront Apartments',
    category: 'En Venta',
    categories: [1],
    first_description: 'GRUPO INAP, hemos llevado a cabo la transformación completa de la fábrica Caribbean Glass, especializada en la producción de envases de vidrio. Este proyecto integral incluyó la implementación de tecnologías avanzadas y sistemas eficientes que han revolucionado la infraestructura existente:',
    items: [
      'Sistemas de Aire Comprimido y de Ventilación: Diseñados para maximizar la eficiencia operativa y garantizar condiciones óptimas en el proceso de fabricación.',
      'Sistemas de Agua Helada y Tratada: Esenciales para mantener los estándares de calidad y seguridad del vidrio producido, asegurando procesos consistentes y eficientes.',
      'Sistemas de Transporte Automatizado (Conveyors): Estos sistemas facilitan una logística fluida y eficiente dentro de la planta, mejorando significativamente los tiempos de producción y la manipulación de materiales.',
      'La reingeniería no solo ha incrementado la capacidad de producción sino que también ha fortalecido nuestro compromiso con la sostenibilidad y la innovación, estableciendo nuevos estándares de excelencia en la industria del vidrio.',
    ],
    images: [
      'https://static.wixstatic.com/media/828c94_571dd2ee74c24cb6a2502af72856b3d7~mv2.jpg/v1/fill/w_382,h_318,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.jpg',
    ],
  },
  {
    id: 3,
    title: 'Beautiful Beachfront Apartments',
    category: 'En Venta',
    categories: [1],
    first_description: 'GRUPO INAP, hemos llevado a cabo la transformación completa de la fábrica Caribbean Glass, especializada en la producción de envases de vidrio. Este proyecto integral incluyó la implementación de tecnologías avanzadas y sistemas eficientes que han revolucionado la infraestructura existente:',
    items: [
      'Sistemas de Aire Comprimido y de Ventilación: Diseñados para maximizar la eficiencia operativa y garantizar condiciones óptimas en el proceso de fabricación.',
      'Sistemas de Agua Helada y Tratada: Esenciales para mantener los estándares de calidad y seguridad del vidrio producido, asegurando procesos consistentes y eficientes.',
      'Sistemas de Transporte Automatizado (Conveyors): Estos sistemas facilitan una logística fluida y eficiente dentro de la planta, mejorando significativamente los tiempos de producción y la manipulación de materiales.',
      'La reingeniería no solo ha incrementado la capacidad de producción sino que también ha fortalecido nuestro compromiso con la sostenibilidad y la innovación, estableciendo nuevos estándares de excelencia en la industria del vidrio.',
    ],
    images: [
      'https://static.wixstatic.com/media/828c94_571dd2ee74c24cb6a2502af72856b3d7~mv2.jpg/v1/fill/w_382,h_318,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.jpg',
    ],
  },
  {
    id: 4,
    title: 'Beautiful Beachfront Apartments',
    category: 'En Venta',
    categories: [1],
    first_description: 'GRUPO INAP, hemos llevado a cabo la transformación completa de la fábrica Caribbean Glass, especializada en la producción de envases de vidrio. Este proyecto integral incluyó la implementación de tecnologías avanzadas y sistemas eficientes que han revolucionado la infraestructura existente:',
    items: [
      'Sistemas de Aire Comprimido y de Ventilación: Diseñados para maximizar la eficiencia operativa y garantizar condiciones óptimas en el proceso de fabricación.',
      'Sistemas de Agua Helada y Tratada: Esenciales para mantener los estándares de calidad y seguridad del vidrio producido, asegurando procesos consistentes y eficientes.',
      'Sistemas de Transporte Automatizado (Conveyors): Estos sistemas facilitan una logística fluida y eficiente dentro de la planta, mejorando significativamente los tiempos de producción y la manipulación de materiales.',
      'La reingeniería no solo ha incrementado la capacidad de producción sino que también ha fortalecido nuestro compromiso con la sostenibilidad y la innovación, estableciendo nuevos estándares de excelencia en la industria del vidrio.',
    ],
    images: [
      'https://static.wixstatic.com/media/828c94_571dd2ee74c24cb6a2502af72856b3d7~mv2.jpg/v1/fill/w_382,h_318,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.jpg',
    ],
  },
  {
    id: 5,
    title: 'Beautiful Beachfront Apartments',
    category: 'En Venta',
    categories: [1],
    first_description: 'GRUPO INAP, hemos llevado a cabo la transformación completa de la fábrica Caribbean Glass, especializada en la producción de envases de vidrio. Este proyecto integral incluyó la implementación de tecnologías avanzadas y sistemas eficientes que han revolucionado la infraestructura existente:',
    items: [
      'Sistemas de Aire Comprimido y de Ventilación: Diseñados para maximizar la eficiencia operativa y garantizar condiciones óptimas en el proceso de fabricación.',
      'Sistemas de Agua Helada y Tratada: Esenciales para mantener los estándares de calidad y seguridad del vidrio producido, asegurando procesos consistentes y eficientes.',
      'Sistemas de Transporte Automatizado (Conveyors): Estos sistemas facilitan una logística fluida y eficiente dentro de la planta, mejorando significativamente los tiempos de producción y la manipulación de materiales.',
      'La reingeniería no solo ha incrementado la capacidad de producción sino que también ha fortalecido nuestro compromiso con la sostenibilidad y la innovación, estableciendo nuevos estándares de excelencia en la industria del vidrio.',
    ],
    images: [
      'https://static.wixstatic.com/media/828c94_571dd2ee74c24cb6a2502af72856b3d7~mv2.jpg/v1/fill/w_382,h_318,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.jpg',
    ],
  },
  {
    id: 6,
    title: 'Beautiful Beachfront Apartments',
    category: 'En Venta',
    categories: [1],
    first_description: 'GRUPO INAP, hemos llevado a cabo la transformación completa de la fábrica Caribbean Glass, especializada en la producción de envases de vidrio. Este proyecto integral incluyó la implementación de tecnologías avanzadas y sistemas eficientes que han revolucionado la infraestructura existente:',
    items: [
      'Sistemas de Aire Comprimido y de Ventilación: Diseñados para maximizar la eficiencia operativa y garantizar condiciones óptimas en el proceso de fabricación.',
      'Sistemas de Agua Helada y Tratada: Esenciales para mantener los estándares de calidad y seguridad del vidrio producido, asegurando procesos consistentes y eficientes.',
      'Sistemas de Transporte Automatizado (Conveyors): Estos sistemas facilitan una logística fluida y eficiente dentro de la planta, mejorando significativamente los tiempos de producción y la manipulación de materiales.',
      'La reingeniería no solo ha incrementado la capacidad de producción sino que también ha fortalecido nuestro compromiso con la sostenibilidad y la innovación, estableciendo nuevos estándares de excelencia en la industria del vidrio.',
    ],
    images: [
      'https://static.wixstatic.com/media/828c94_571dd2ee74c24cb6a2502af72856b3d7~mv2.jpg/v1/fill/w_382,h_318,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.jpg',
    ],
  },
  {
    id: 7,
    title: 'Beautiful Beachfront Apartments',
    category: 'En Venta',
    categories: [1],
    first_description: 'GRUPO INAP, hemos llevado a cabo la transformación completa de la fábrica Caribbean Glass, especializada en la producción de envases de vidrio. Este proyecto integral incluyó la implementación de tecnologías avanzadas y sistemas eficientes que han revolucionado la infraestructura existente:',
    items: [
      'Sistemas de Aire Comprimido y de Ventilación: Diseñados para maximizar la eficiencia operativa y garantizar condiciones óptimas en el proceso de fabricación.',
      'Sistemas de Agua Helada y Tratada: Esenciales para mantener los estándares de calidad y seguridad del vidrio producido, asegurando procesos consistentes y eficientes.',
      'Sistemas de Transporte Automatizado (Conveyors): Estos sistemas facilitan una logística fluida y eficiente dentro de la planta, mejorando significativamente los tiempos de producción y la manipulación de materiales.',
      'La reingeniería no solo ha incrementado la capacidad de producción sino que también ha fortalecido nuestro compromiso con la sostenibilidad y la innovación, estableciendo nuevos estándares de excelencia en la industria del vidrio.',
    ],
    images: [
      'https://static.wixstatic.com/media/828c94_571dd2ee74c24cb6a2502af72856b3d7~mv2.jpg/v1/fill/w_382,h_318,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.jpg',
    ],
  },
  {
    id: 8,
    title: 'Beautiful Beachfront Apartments',
    category: 'En Venta',
    categories: [1],
    first_description: 'GRUPO INAP, hemos llevado a cabo la transformación completa de la fábrica Caribbean Glass, especializada en la producción de envases de vidrio. Este proyecto integral incluyó la implementación de tecnologías avanzadas y sistemas eficientes que han revolucionado la infraestructura existente:',
    items: [
      'Sistemas de Aire Comprimido y de Ventilación: Diseñados para maximizar la eficiencia operativa y garantizar condiciones óptimas en el proceso de fabricación.',
      'Sistemas de Agua Helada y Tratada: Esenciales para mantener los estándares de calidad y seguridad del vidrio producido, asegurando procesos consistentes y eficientes.',
      'Sistemas de Transporte Automatizado (Conveyors): Estos sistemas facilitan una logística fluida y eficiente dentro de la planta, mejorando significativamente los tiempos de producción y la manipulación de materiales.',
      'La reingeniería no solo ha incrementado la capacidad de producción sino que también ha fortalecido nuestro compromiso con la sostenibilidad y la innovación, estableciendo nuevos estándares de excelencia en la industria del vidrio.',
    ],
    images: [
      'https://static.wixstatic.com/media/828c94_571dd2ee74c24cb6a2502af72856b3d7~mv2.jpg/v1/fill/w_382,h_318,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.jpg',
    ],
  },
  {
    id: 9,
    title: 'Beautiful Beachfront Apartments',
    category: 'En Venta',
    categories: [1],
    first_description: 'GRUPO INAP, hemos llevado a cabo la transformación completa de la fábrica Caribbean Glass, especializada en la producción de envases de vidrio. Este proyecto integral incluyó la implementación de tecnologías avanzadas y sistemas eficientes que han revolucionado la infraestructura existente:',
    items: [
      'Sistemas de Aire Comprimido y de Ventilación: Diseñados para maximizar la eficiencia operativa y garantizar condiciones óptimas en el proceso de fabricación.',
      'Sistemas de Agua Helada y Tratada: Esenciales para mantener los estándares de calidad y seguridad del vidrio producido, asegurando procesos consistentes y eficientes.',
      'Sistemas de Transporte Automatizado (Conveyors): Estos sistemas facilitan una logística fluida y eficiente dentro de la planta, mejorando significativamente los tiempos de producción y la manipulación de materiales.',
      'La reingeniería no solo ha incrementado la capacidad de producción sino que también ha fortalecido nuestro compromiso con la sostenibilidad y la innovación, estableciendo nuevos estándares de excelencia en la industria del vidrio.',
    ],
    images: [
      'https://static.wixstatic.com/media/828c94_571dd2ee74c24cb6a2502af72856b3d7~mv2.jpg/v1/fill/w_382,h_318,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.jpg',
    ],
  },
]
export const provincias = [
  "Azua",
  "Baoruco",
  "Barahona",
  "Dajabón",
  "Distrito Nacional",
  "Duarte",
  "Elías Piña",
  "El Seibo",
  "Espaillat",
  "Hato Mayor",
  "Hermanas Mirabal",
  "Independencia",
  "La Altagracia",
  "La Romana",
  "La Vega",
  "María Trinidad Sánchez",
  "Monseñor Nouel",
  "Monte Cristi",
  "Monte Plata",
  "Pedernales",
  "Peravia",
  "Puerto Plata",
  "Samaná",
  "San Cristóbal",
  "San José de Ocoa",
  "San Juan",
  "San Pedro de Macorís",
  "Sánchez Ramírez",
  "Santiago",
  "Santiago Rodríguez",
  "Santo Domingo",
  "Valverde"
];