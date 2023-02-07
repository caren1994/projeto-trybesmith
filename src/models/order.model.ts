import { Pool, RowDataPacket } from 'mysql2/promise';

export default class OrderModel {
  connection:Pool;

  constructor(connection:Pool) {
    this.connection = connection;
  }

  async findAllO() {
    const [result] = await this.connection.execute<RowDataPacket[]>(
      ` SELECT tod.id, tod.user_id AS userId, json_arrayagg(pr.id) AS productsIds
      FROM Trybesmith.orders AS tod
      INNER JOIN Trybesmith.products AS pr ON
      tod.id = pr.order_id
      GROUP BY tod.id
      `,
    );
    // json_arrayagg usa na coluna que vc quer agrupar
    return result;
  }
}