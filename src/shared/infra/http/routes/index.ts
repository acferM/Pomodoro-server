import { Router } from 'express';

import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';

const Routes = Router();

Routes.use('/users', usersRouter);
Routes.use('/sessions', sessionsRouter);

export default Routes;
