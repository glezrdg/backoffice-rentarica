import { ICompany } from "../models/ICompany";
import { IDelivery } from "../models/IDelivery";

export const companies: ICompany[] = [
  { _id: '1', name: 'Caribe tours', price: 200 },
  { _id: '2', name: 'Vimenpaq', price: 160 },
  { _id: '3', name: 'Caribe pack', price: 210 },
]

export const deliveries: IDelivery[] = [
  { _id: '1', name: 'Carlos Bueno Tavares', cedula: '40211326075', mobile: '849-408-7034', placa: '123456' },
  { _id: '1', name: 'German gonzales', cedula: '40211326075', mobile: '849-408-7034', placa: '123456' },
  { _id: '1', name: 'Julio Rodriguez', cedula: '40211326075', mobile: '849-408-7034', placa: '123456' },
]