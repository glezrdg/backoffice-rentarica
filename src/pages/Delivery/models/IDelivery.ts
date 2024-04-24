export interface IDelivery {
  _id?: string
  name: string
  phone: string
  cedula: string
  role: string | 'empleado' | 'administrador'
} 