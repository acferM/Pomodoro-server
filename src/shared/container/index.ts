import { container } from 'tsyringe';

import '@modules/users/providers';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IConfigsRepository from '@modules/configs/repositories/IConfigsRepository';
import ConfigsRepository from '@modules/configs/infra/typeorm/repositories/ConfigsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IConfigsRepository>(
  'ConfigsRepository',
  ConfigsRepository,
);
