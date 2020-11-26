import { getRepository, Repository } from 'typeorm';

import ICreateConfigDTO from '@modules/configs/dtos/ICreateConfigDTO';
import IConfigsRepository from '@modules/configs/repositories/IConfigsRepository';
import Config from '../entities/Config';

class ConfigsRepository implements IConfigsRepository {
  private configsRepository: Repository<Config>;

  constructor() {
    this.configsRepository = getRepository(Config);
  }

  async findById(id: string): Promise<Config | undefined> {
    const foundConfig = await this.configsRepository.findOne(id);

    return foundConfig;
  }

  async findByOwnerId(ownerId: string): Promise<Config[]> {
    const foundConfig = await this.configsRepository.find({
      where: { owner_id: ownerId },
    });

    return foundConfig;
  }

  async create({
    owner_id,
    name,
    focus_time,
    pause_time,
  }: ICreateConfigDTO): Promise<Config> {
    const config = this.configsRepository.create({
      owner_id,
      name,
      focus_time,
      pause_time,
    });

    await this.configsRepository.save(config);

    return config;
  }

  async delete(id: string): Promise<void> {
    await this.configsRepository.delete(id);
  }
}

export default ConfigsRepository;
