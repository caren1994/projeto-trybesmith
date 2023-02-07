import express from 'express';

import UserController from '../controllers/userController';
import validateUsername from '../middlewares/validation.username';
import validateVocation from '../middlewares/validation.vocation';
import validatePassword from '../middlewares/validation.password';
import validateLevel from '../middlewares/validation.level';

const userController = new UserController();
const router = express.Router();
router.post(
  '/', 
  validateUsername,
  validateVocation, 
  validateLevel,
  validatePassword, 
  userController.createU,
);

export default router;