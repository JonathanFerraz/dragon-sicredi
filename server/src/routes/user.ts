import { Router } from 'express';
import UserController from '../controlers/UserController';

const userRoutes = Router();
const userController = new UserController();

userRoutes.post('/', userController.create);

export default userRoutes;
