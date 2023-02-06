import ProductsModel from '../models/ProductsModels';
import { IProduct } from '../interfaces/productsInterface';
import connection from '../models/connection'; 

export default class ProductsService {
  constructor(private productsModels = new ProductsModel(connection)) { }

  async create(name: string, amount: string): Promise<IProduct> {
    const product = await this.productsModels.create(name, amount);
    return product;
  }
}