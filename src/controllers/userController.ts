import { Request, Response } from 'express';
import UserService from '../services/user.service';
import createToken from '../utils/jwtCreate';

export default class UserController {
  constructor(private userService = new UserService()) { }

  createU = async (req:Request, res:Response) => {
    try {
      const { message } = await this.userService.createU(req.body);
      const tokeN = createToken(Number(message));
      res.status(201).json({ token: tokeN });
    } catch (error) {
      res.status(500).json(error);
    }
  };
}