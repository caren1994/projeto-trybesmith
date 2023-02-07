import express from 'express';
import OrderController from '../controllers/order.controller';
import verifyToken from '../utils/jwtVerify';
import validationPrroducts from '../middlewares/validationProducts';

const orderController = new OrderController();
const router = express.Router();
router.get('/', orderController.findAllO);
router.post('/', verifyToken, validationPrroducts, orderController.createO);
export default router;