export function dateFormat(date: Date, option: string) {
  let format = new Date(date);

  if (option === "date") {
    return `${format.getMonth() + 1
      }/${format.getDate()}/${format.getFullYear()}`;
  }

  if (option === "time") {
    return `${format.getHours()}:${format.getMinutes() < 10 ? "0" + format.getMinutes() : format.getMinutes()
      }`;
  }
}

export function formatTime(devoluciones: any[]) {
  let result = devoluciones.reduce(
    (acc, curr) => (acc += (curr?.endedAt || Date.now()) - curr.startedAt),
    0
  );

  return result || 0;
}


export const getAge = (fechaNacimiento: string | Date): number =>
  Math.floor((new Date().getTime() - new Date(fechaNacimiento).getTime()) / 31557600000);

export const getWeeklyDay = (day: number) => {
  if (day == 0) return 'domingo'
  if (day == 1) return 'lunes'
  if (day == 2) return 'martes'
  if (day == 3) return 'miercoles'
  if (day == 4) return 'jueves'
  if (day == 5) return 'viernes'
  if (day == 6) return 'sabado'
  return 'lunes'
}
// const AmPm = (hour: number) => {
//     if(hour)
// }
