import express from 'express';
import OrderController from '../controllers/order.controller';

const orderController = new OrderController();
const router = express.Router();
router.get('/', orderController.findAllO);
export default router;