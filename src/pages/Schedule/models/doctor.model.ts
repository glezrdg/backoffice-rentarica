export interface ISelectedDay {
  dayNumber: number
  dayTitle: | 'lunes'
  | 'martes'
  | 'miercoles'
  | 'jueves'
  | 'viernes'
  | 'sabado'
  | 'domingo'
  isBusy: boolean
}