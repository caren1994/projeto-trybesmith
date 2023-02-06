import connection from '../models/connection';
import ProductModel from '../models/product.model';
import { IProduct } from '../interfaces/product.interface';

export default class ProductService {
  productModel:ProductModel;

  constructor() {
    this.productModel = new ProductModel(connection);
  }

  async createP(body:IProduct) {
    try {
      const result = await this.productModel.createP(body);
      return { message: { id: result, ...body } };
    } catch (error) {
      return { message: 'error product not registered' };
    }
  }

  async findAllP() {
    try {
      const result = await this.productModel.findAllP();
      return { message: result };
    } catch (error) {
      return { message: 'PRODUCTS NOT FOUND' };
    }
  }
}