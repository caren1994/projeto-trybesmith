import express from 'express';
import ProductController from '../controllers/product.controller';
import validateName from '../middlewares/validation.name';
import validateAmount from '../middlewares/validation.amount';

const productController = new ProductController();
const router = express.Router();
router.post('/', validateName, validateAmount, productController.createP);
router.get('/', productController.findAllP);
export default router;