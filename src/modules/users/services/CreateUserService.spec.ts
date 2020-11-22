import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';

let fakeUsersRepository: FakeUsersRepository;
let createUser: CreateUserService;

describe('Create User', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    createUser = new CreateUserService(fakeUsersRepository);
  });

  it('should be able to create a new user', async () => {
    const user = await createUser.execute({
      email: 'teste@teste.com',
      password: '123',
    });

    expect(user).toHaveProperty('id');
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
