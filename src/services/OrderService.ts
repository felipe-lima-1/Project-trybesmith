import { IOrder } from '../interfaces/orderInterface';
import OrderModel from '../models/OrderModels';
import connection from '../models/connection';

export default class OrderService {
  private model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public getAll = async () => {
    const orders: IOrder[] = await this.model.getAll();
    return orders;
  };
}