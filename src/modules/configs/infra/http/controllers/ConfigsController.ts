import CreateConfigService from '@modules/configs/services/CreateConfigService';
import DeleteConfigService from '@modules/configs/services/DeleteConfigService';
import ListConfigsByUserIdService from '@modules/configs/services/ListConfigsByUserIdService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class ConfigsController {
  async create(request: Request, response: Response): Promise<Response> {
    const { name, focus_time, pause_time } = request.body;
    const { id } = request.user;

    const createConfig = container.resolve(CreateConfigService);

    const config = await createConfig.execute({
      owner_id: id,
      name,
      focus_time,
      pause_time,
    });

    return response.json(config);
  }

  async index(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const listConfigsByUserId = container.resolve(ListConfigsByUserIdService);

    const configs = await listConfigsByUserId.execute(id);

    return response.json(configs);
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteConfig = container.resolve(DeleteConfigService);

    await deleteConfig.execute(id);

    return response.status(204).json();
  }
}

export default ConfigsController;
