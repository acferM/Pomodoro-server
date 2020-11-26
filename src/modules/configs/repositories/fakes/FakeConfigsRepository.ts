import { v4 } from 'uuid';

import ICreateConfigDTO from '@modules/configs/dtos/ICreateConfigDTO';
import Config from '@modules/configs/infra/typeorm/entities/Config';

import IConfigsRepository from '../IConfigsRepository';

class FakeConfigsRepository implements IConfigsRepository {
  private configs: Config[] = [];

  async findById(id: string): Promise<Config | undefined> {
    const findConfig = this.configs.find(config => config.id === id);

    return findConfig;
  }

  async findByOwnerId(ownerId: string): Promise<Config[]> {
    const foundConfig = this.configs.filter(
      config => config.owner_id === ownerId,
    );

    return foundConfig;
  }

  async create({
    owner_id,
    name,
    focus_time,
    pause_time,
  }: ICreateConfigDTO): Promise<Config> {
    const config = new Config();

    Object.assign(config, {
      id: v4(),
      owner_id,
      name,
      focus_time,
      pause_time,
    });

    this.configs.push(config);

    return config;
  }

  async delete(id: string): Promise<void> {
    const findIndex = this.configs.findIndex(config => config.id === id);

    this.configs.splice(findIndex, 1);
  }
}

export default FakeConfigsRepository;
