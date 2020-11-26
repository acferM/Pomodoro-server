import { Router } from 'express';

import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import configsRouter from '@modules/configs/infra/http/routes/configs.routes';

const Routes = Router();

Routes.use('/users', usersRouter);
Routes.use('/sessions', sessionsRouter);
Routes.use('/configs', configsRouter);

export default Routes;
