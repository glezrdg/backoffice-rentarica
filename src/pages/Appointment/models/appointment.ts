export interface IAppointment {
  _id: string
  fullname: string
  email: string
  date: string
  time: string
  reason: string
}

export interface IAppointmentDashboard {
  today: number
  week: number
  month: number
}