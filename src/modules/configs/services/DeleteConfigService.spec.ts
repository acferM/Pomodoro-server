import AppError from '@shared/errors/AppError';
import FakeConfigsRepository from '../repositories/fakes/FakeConfigsRepository';
import DeleteConfigService from './DeleteConfigService';

let fakeConfigsRepository: FakeConfigsRepository;
let deleteConfig: DeleteConfigService;

describe('Delete Config', () => {
  beforeEach(() => {
    fakeConfigsRepository = new FakeConfigsRepository();
    deleteConfig = new DeleteConfigService(fakeConfigsRepository);
  });

  it('should be able to delete a config', async () => {
    await fakeConfigsRepository.create({
      owner_id: '123',
      name: 'teste',
      focus_time: '12:00',
      pause_time: '05:00',
    });

    await fakeConfigsRepository.create({
      owner_id: '123',
      name: 'teste',
      focus_time: '12:00',
      pause_time: '05:00',
    });

    await fakeConfigsRepository.create({
      owner_id: '123',
      name: 'teste',
      focus_time: '12:00',
      pause_time: '05:00',
    });

    const config = await fakeConfigsRepository.create({
      owner_id: '123',
      name: 'teste',
      focus_time: '12:00',
      pause_time: '05:00',
    });

    await deleteConfig.execute(config.id);

    const list = await fakeConfigsRepository.findByOwnerId('123');

    expect(list).toHaveLength(3);
  });

  it('should be able to delete a config', async () => {
    expect(deleteConfig.execute('123')).rejects.toBeInstanceOf(AppError);
  });
});
