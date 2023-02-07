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

  createO = async (req:Request, res:Response) => {
    try {
      const { id } = req.body.user;

      // console.log(req.body, 'eu estou aqui');
      const { productsIds } = req.body;
      await this.orderService.createO(Number(id), productsIds);
      const result = { userId: id, productsIds };
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  };
}