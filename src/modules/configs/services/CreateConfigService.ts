import { injectable, inject } from 'tsyringe';
import Config from '../infra/typeorm/entities/Config';
import IConfigsRepository from '../repositories/IConfigsRepository';

interface IRequest {
  owner_id: string;

  name: string;

  focus_time: string;

  pause_time: string;
}

@injectable()
class CreateConfigService {
  constructor(
    @inject('ConfigsRepository')
    private configsRepository: IConfigsRepository,
  ) {}

  async execute({
    owner_id,
    name,
    focus_time,
    pause_time,
  }: IRequest): Promise<Config> {
    const config = await this.configsRepository.create({
      owner_id,
      name,
      focus_time,
      pause_time,
    });

    return config;
  }
}

export default CreateConfigService;
