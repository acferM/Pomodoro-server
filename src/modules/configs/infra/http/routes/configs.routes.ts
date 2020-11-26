import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ConfigsController from '../controllers/ConfigsController';

const configsRouter = Router();
const configsController = new ConfigsController();

configsRouter.post('/', ensureAuthenticated, configsController.create);
configsRouter.get('/', ensureAuthenticated, configsController.index);
configsRouter.delete('/:id', ensureAuthenticated, configsController.delete);

export default configsRouter;
