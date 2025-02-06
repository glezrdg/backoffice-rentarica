export interface Property {
  _id: string;
  title: string;
  category: string;
  type: string;
  price: number;
  zone: string;
  description: string;
  items: string[];
  images: any;
  titleImages: any[];
  captacionImages: any[];
  bathrooms: number;
  rooms: number;
  size: number;
  floors: number;
  agent: string;
  sharedAgent?: string;
  owner_name: string;
  owner_contact: string;
  airbnb: string;
  youtube: string;
  googleMapsLink: string;
  isShared: boolean;
  isNegotiable: boolean;
  code: string;
  isActive: boolean;
  unitPrice: string;
}

export interface CreatePropertyDto {
  [key: string]: any;
  title: string;
  type: string;
  category: string;
  price: number;
  description: string;
  zone: string;
  items: string[];
  images: any[];
  titleImages: any[];
  captacionImages: any[];
  bathrooms: number;
  rooms: number;
  size: number;
  floors: number;
  owner_name: string;
  agent: string;
  sharedAgent?: string;
  owner_contact: string;
  airbnb: string;
  youtube: string;
  googleMapsLink: string;
  isShared: boolean;
  isNegotiable: boolean;
  code: string;
  isActive: boolean;
  unitPrice: string;
}
