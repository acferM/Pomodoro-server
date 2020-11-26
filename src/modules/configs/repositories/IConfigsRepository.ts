import Config from '../infra/typeorm/entities/Config';

import ICreateConfigDTO from '../dtos/ICreateConfigDTO';

export default interface IConfigsRepository {
  findById(id: string): Promise<Config | undefined>;
  findByOwnerId(ownerId: string): Promise<Config[]>;
  create(data: ICreateConfigDTO): Promise<Config>;
  delete(id: string): Promise<void>;
}
