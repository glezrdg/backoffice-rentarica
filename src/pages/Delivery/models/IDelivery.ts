export interface IDelivery {
  _id?: string
  fullname: string
  phone: string
  email: string
  role: string | 'empleado' | 'administrador'
} 