import UserModels from '../models/UserModels';
import { IUser } from '../interfaces/userInterface';
import connection from '../models/connection'; 

export default class UserService {
  constructor(private userModels = new UserModels(connection)) { }

  async create(dados: IUser): Promise<IUser> {
    const user = await this.userModels.create(dados);
    return user;
  }
}