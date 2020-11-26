import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import FakeConfigsRepository from '../repositories/fakes/FakeConfigsRepository';
import ListConfigsByUserIdService from './ListConfigsByUserIdService';

let fakeConfigsRepository: FakeConfigsRepository;
let fakeUsersRepository: FakeUsersRepository;
let listConfigsByUserIdService: ListConfigsByUserIdService;

describe('List Configs By User Id', () => {
  beforeEach(() => {
    fakeConfigsRepository = new FakeConfigsRepository();
    fakeUsersRepository = new FakeUsersRepository();
    listConfigsByUserIdService = new ListConfigsByUserIdService(
      fakeConfigsRepository,
    );
  });

  it('should be able to create a config', async () => {
    const user = await fakeUsersRepository.create({
      email: 'teste@jest.com',
      password: '123',
    });

    await fakeConfigsRepository.create({
      owner_id: user.id,
      name: 'teste',
      focus_time: '10:00',
      pause_time: '05:00',
    });

    await fakeConfigsRepository.create({
      owner_id: user.id,
      name: 'teste',
      focus_time: '10:00',
      pause_time: '05:00',
    });

    await fakeConfigsRepository.create({
      owner_id: user.id,
      name: 'teste',
      focus_time: '10:00',
      pause_time: '05:00',
    });

    await fakeConfigsRepository.create({
      owner_id: user.id,
      name: 'teste',
      focus_time: '10:00',
      pause_time: '05:00',
    });

    const configs = await listConfigsByUserIdService.execute(user.id);

    expect(configs).toHaveLength(4);
  });
});
