import { NextFunction, Request, Response } from 'express';
import joi from 'joi';
import { ILogin } from '../interfaces/login.interfaces';

const validationreq = (body:ILogin) => joi.object({
  username: joi.string().required(),
  password: joi.string().required(),

}).validate(body);

const validationLogin = (req: Request, res: Response, next: NextFunction) => {
  const { error } = validationreq(req.body);

  if (error) return res.status(400).json({ message: error.message });

  next();
};

export default validationLogin;