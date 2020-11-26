import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IConfigsRepository from '../repositories/IConfigsRepository';

@injectable()
class DeleteConfigService {
  constructor(
    @inject('ConfigsRepository')
    private configsRepository: IConfigsRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const config = await this.configsRepository.findById(id);

    if (!config) {
      throw new AppError('No config found with this id.');
    }

    await this.configsRepository.delete(config.id);
  }
}

export default DeleteConfigService;
