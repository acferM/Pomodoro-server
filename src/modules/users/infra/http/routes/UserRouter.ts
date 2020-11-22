import { Router } from 'express';
import UserController from '../controllers/UserController';

const UserRouter = Router();

const userController = new UserController();

UserRouter.post('/', userController.create);

export default UserRouter;
