import { Router } from 'express';
import UsersController from '../controllers/UsersController';

const UserRouter = Router();

const userController = new UsersController();

UserRouter.post('/', userController.create);

export default UserRouter;
