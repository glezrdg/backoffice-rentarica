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