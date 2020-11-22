import { Router } from 'express';

import UserRouter from '@modules/users/infra/http/routes/UserRouter';

const Routes = Router();

Routes.use('/users', UserRouter);

export default Routes;