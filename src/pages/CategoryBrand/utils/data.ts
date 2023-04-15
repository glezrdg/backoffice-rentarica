import { IBrand } from "../models/IBrand";
import { ICategory } from "../models/ICategory";

export const categories: ICategory[] = [
  { _id: '1', header: 'Hombres', categories: ['Pantalones', 'camisas', 'Tenis'] },
  { _id: '2', header: 'Mujeres', categories: ['Pantalones', 'camisas', 'Tenis'] },
  { _id: '3', header: 'Niños', categories: ['Pantalones', 'camisas', 'Tenis'] },
]

export const brands: IBrand[] = [
  { _id: '1', name: 'Adidas', },
  { _id: '2', name: 'Nike', },
  { _id: '3', name: 'Sara', }
]