import { Request, Response } from 'express';
import LoginService from '../services/login.service';
import { createToken } from '../utils/jwtCreate';

export default class OrderController {
  constructor(private loginService = new LoginService()) { }

  userExist = async (req:Request, res:Response) => {
    try {
      const result = await this.loginService.userExist(req.body);
      const tokeN = createToken(Number(result));
      res.status(200).json({ token: tokeN });
    } catch (error) {
      res.status(401).json({ message: 'Username or password invalid' });
    }
  };
}