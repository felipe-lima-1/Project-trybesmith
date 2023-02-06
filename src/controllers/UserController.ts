import { Request, Response } from 'express';
import UserServices from '../services/UserService';
import jwt from '../utils/token';

export default class ProductsController {
  constructor(private userService = new UserServices()) { }

  async create(req: Request, res: Response): Promise<void> {
    const dados = req.body;
    const users = await this.userService.create(dados);
    if (users) {
      const token = jwt(dados.username, Number(users.id));
      res.status(201).json({ token });
    }
  }
}