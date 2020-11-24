import AppError from '@shared/errors/AppError';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import AuthenticateUserService from './AuthenticateUserService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let authenticateUser: AuthenticateUserService;

describe('Authenticate User', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();
    authenticateUser = new AuthenticateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );
  });

  it('should be able to authenticate a user', async () => {
    const user = await fakeUsersRepository.create({
      email: 'jest@test.com',
      password: '123',
    });

    const response = await authenticateUser.execute({
      email: 'jest@test.com',
      password: '123',
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });

  it('should not be able to authenticate a non existing user', async () => {
    expect(
      authenticateUser.execute({
        email: 'jest@test.com',
        password: '123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate a user with wrong password', async () => {
    await fakeUsersRepository.create({
      email: 'jest@test.com',
      password: '123',
    });

    expect(
      authenticateUser.execute({
        email: 'jest@test.com',
        password: '1234',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
