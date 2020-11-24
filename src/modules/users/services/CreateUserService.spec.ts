import AppError from '@shared/errors/AppError';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let createUser: CreateUserService;

describe('Create User', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();
    createUser = new CreateUserService(fakeUsersRepository, fakeHashProvider);
  });

  it('should be able to create a new user', async () => {
    const user = await createUser.execute({
      email: 'teste@teste.com',
      password: '123',
    });

    const comparedPassword = await fakeHashProvider.compareHash(
      '123',
      user.password,
    );

    expect(user).toHaveProperty('id');
    expect(comparedPassword).toBe(true);
  });

  it('should not be able to re-create a existing user', async () => {
    await createUser.execute({
      email: 'teste@teste.com',
      password: '123',
    });

    expect(
      createUser.execute({
        email: 'teste@teste.com',
        password: '123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
