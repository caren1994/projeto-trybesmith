import { ILogin } from '../interfaces/login.interfaces';
import connection from '../models/connection';
import LoginModel from '../models/login.model';

export default class LoginService {
  loginModel:LoginModel;

  constructor() {
    this.loginModel = new LoginModel(connection);
  }

  async userExist(body:ILogin) {
    const result = await this.loginModel.userExist(body);
    if (!result) throw new Error();
    return result;
  }
}