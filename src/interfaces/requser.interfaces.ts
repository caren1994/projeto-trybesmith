import { Request } from 'express';
import IPayload from './payload.interfaces';

export default interface IReqUser extends Request {
  user:IPayload,
}