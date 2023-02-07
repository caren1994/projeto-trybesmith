import jwt from 'jsonwebtoken';
import { NextFunction, Response, Request } from 'express';

const secret = process.env.JWT_SECRET || 'secret';

const verifyToken = (req:Request, res:Response, next:NextFunction) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    const tokenVerify = jwt.verify(token, secret);
    req.body.user = tokenVerify;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default verifyToken;