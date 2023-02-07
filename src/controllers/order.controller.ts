import { Request, Response } from 'express';
import OrderService from '../services/order.service';

export default class OrderController {
  constructor(private orderService = new OrderService()) { }

  findAllO = async (req:Request, res:Response) => {
    try {
      const { message } = await this.orderService.findAllO();
      res.status(200).json(message);
    } catch (error) {
      res.status(404).json(error);
    }
  };
}