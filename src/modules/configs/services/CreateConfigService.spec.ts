import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import FakeConfigsRepository from '../repositories/fakes/FakeConfigsRepository';
import CreateConfigService from './CreateConfigService';

let fakeConfigsRepository: FakeConfigsRepository;
let fakeUsersRepository: FakeUsersRepository;
let createConfig: CreateConfigService;

describe('Create Config', () => {
  beforeEach(() => {
    fakeConfigsRepository = new FakeConfigsRepository();
    fakeUsersRepository = new FakeUsersRepository();
    createConfig = new CreateConfigService(fakeConfigsRepository);
  });

  it('should be able to create a config', async () => {
    const user = await fakeUsersRepository.create({
      email: 'teste@jest.com',
      password: '123',
    });

    const config = await createConfig.execute({
      owner_id: user.id,
      name: 'Teste',
      focus_time: '20:00',
      pause_time: '10:00',
    });

    expect(config).toHaveProperty('id');
    expect(config.owner_id).toBe(user.id);
  });
});
