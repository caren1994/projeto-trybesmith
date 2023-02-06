import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { IProduct } from '../interfaces/product.interface';

export default class ProductModel {
  connection:Pool;

  constructor(connection:Pool) {
    this.connection = connection;
  }

  async createP(body:IProduct) {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name,amount) VALUES (?,?)',
      [body.name, body.amount],
    );
    return insertId;
  }

  async findAllP() {
    const [result] = await this.connection.execute<RowDataPacket[]>(
      'SELECT * FROM Trybesmith.products ',
    );
    return result;
  }
}