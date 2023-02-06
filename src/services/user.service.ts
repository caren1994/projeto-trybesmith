import connection from '../models/connection';
import UserModel from '../models/user.model';
import { IUser } from '../interfaces/users.interface';

export default class UserService {
  userModel:UserModel;

  constructor() {
    this.userModel = new UserModel(connection);
  }

  async createU(body:IUser) {
    try {
      const result = await this.userModel.createU(body);
      return { message: result };
    } catch (error) {
      return { message: 'user not registered error' };
    }
  }
}