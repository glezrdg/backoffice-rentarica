import { IProduct, ISizes } from "../models/IProduct";

export const products: IProduct[] = [
  {
    _id: '1',
    name: 'Tenis adidas',
    price: 2500,
    description: 'Los mejores tenis del mercado',
    size: [{ name: 'sm', qty: 2 }, { name: 'lg', qty: 3 }, { name: 'md', qty: 0 }, { name: 'xl', qty: 0 },],
    category: 'Men',
    brand: 'Adidas',
    images: ['https://assets.adidas.com/images/w_940,f_auto,q_auto/cbfa441484464e4493eaae3200c36b0a_9366/GY9629_01_standard.jpg'],
    ofert: '',
    qty: 12
  },
  {
    _id: '2',
    name: 'Tenis Nike',
    price: 3100,
    description: 'Los mejores tenis del mercado',
    size: [{ name: 'sm', qty: 2 }, { name: 'lg', qty: 3 }, { name: 'md', qty: 0 }, { name: 'xl', qty: 0 },],
    category: 'Men',
    brand: 'Nike',
    images: ['https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fc01e3ac-b2d0-4543-b254-6ea989731c1b/calzado-air-force-1-07-lv8-ZvGj5Q.png'],
    ofert: '',
    qty: 12
  },
  {
    _id: '3',
    name: 'Pantalones Jogger Gucci',
    price: 6500,
    description: 'Los mejores pantalones del mercado',
    size: [{ name: 'sm', qty: 2 }, { name: 'lg', qty: 3 }, { name: 'md', qty: 0 }, { name: 'xl', qty: 0 },],
    category: 'Men',
    brand: 'Gucci',
    images: ['https://cdn-images.farfetch-contents.com/19/13/83/06/19138306_41884488_480.jpg'],
    ofert: '',
    qty: 12
  },
  {
    _id: '4',
    name: 'Camisa de playa Zara',
    price: 2500,
    description: 'Los mejores tenis del mercado',
    size: [{ name: 'sm', qty: 2 }, { name: 'lg', qty: 3 }, { name: 'md', qty: 0 }, { name: 'xl', qty: 0 },],
    category: 'Men',
    brand: 'Zara',
    images: ['https://static.zara.net/photos///2023/V/0/2/p/7545/520/512/2/w/185/7545520512_2_1_1.jpg?ts=1680261688051'],
    ofert: '',
    qty: 12
  },
]

export const sizes: ISizes[] = [
  { name: 'sm', qty: 0 },
  { name: 'md', qty: 0 },
  { name: 'lg', qty: 0 },
  { name: 'xl', qty: 0 },
  { name: 'xxl', qty: 0 },
]