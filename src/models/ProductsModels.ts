import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IProduct } from '../interfaces/productsInterface';

export default class ProductsModel {
  public connection : Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async create(name: string, amount: string): Promise<IProduct> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name,amount) VALUES (?,?)',
      [name, amount],
    );
    const newProduct = {
      id: insertId,
      name,
      amount,
    };
    return newProduct;
  }
}
