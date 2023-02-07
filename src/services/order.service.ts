import connection from '../models/connection';
import OrderModel from '../models/order.model';

export default class OrderService {
  orderModel:OrderModel;

  constructor() {
    this.orderModel = new OrderModel(connection);
  }

  async findAllO() {
    try {
      const result = await this.orderModel.findAllO();
      return { message: result };
    } catch (error) {
      return { message: 'ORDER NOT FOUND' };
    }
  }

  async createO(id:number, productsIds:number[]) {
    try {
      const result = await this.orderModel.createO(id, productsIds);
      return result;
    } catch (error) {
      return error;
    }
  }
}