import { injectable, inject } from 'tsyringe';
import Config from '../infra/typeorm/entities/Config';
import IConfigsRepository from '../repositories/IConfigsRepository';

@injectable()
class ListConfigsByUserIdService {
  constructor(
    @inject('ConfigsRepository')
    private configsRepository: IConfigsRepository,
  ) {}

  async execute(owner_id: string): Promise<Config[]> {
    const configs = await this.configsRepository.findByOwnerId(owner_id);

    return configs;
  }
}

export default ListConfigsByUserIdService;
