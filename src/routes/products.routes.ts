import express from 'express';
import ProductController from '../controllers/product.controller';

const productController = new ProductController();
const router = express.Router();
router.post('/', productController.createP);
router.get('/', productController.findAllP);
export default router;