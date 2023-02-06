import { Request, Response } from 'express';
import ProductsService from '../services/ProductsService';

export default class ProductsController {
  constructor(private productsService = new ProductsService()) { }

  async create(req: Request, res: Response): Promise<Response> {
    const { name, amount } = req.body;
    const product = await this.productsService.create(name, amount);
    return res.status(201).json(product);
  }

  async getAll(req: Request, res: Response): Promise<Response> {
    const products = await this.productsService.getAll();
    return res.status(200).json(products);
  }
}