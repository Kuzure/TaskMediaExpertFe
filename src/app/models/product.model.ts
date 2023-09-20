export class Product {
  code: string;
  name: string;
  price: number;
}

export interface IProduct extends Product {}

export interface IGetProduct extends Product {
  id: string;
}
