import { Router } from 'express';
import ProductsController from '../controllers/ProductsController';

const router = Router();

const productController = new ProductsController();

router.post('/', (req, res) => productController.create(req, res));
router.get('/', (req, res) => productController.getAll(req, res));

export default router;