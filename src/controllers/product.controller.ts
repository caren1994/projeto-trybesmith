import { Request, Response } from 'express';
import ProductService from '../services/product.service';

export default class ProductController {
  constructor(private productService = new ProductService()) { }

  createP = async (req:Request, res:Response) => {
    try {
      const { message } = await this.productService.createP(req.body);
      res.status(201).json(message);
    } catch (error) {
      res.status(500).json(error);
    }
  };

  findAllP = async (req:Request, res:Response) => {
    try {
      const { message } = await this.productService.findAllP();
      res.status(200).json(message);
    } catch (error) {
      res.status(404).json(error);
    }
  };
}