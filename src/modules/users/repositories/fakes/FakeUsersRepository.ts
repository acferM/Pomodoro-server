import { v4 } from 'uuid';

import User from '@modules/users/infra/typeorm/entities/User';

import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import IUsersRepository from '../IUsersRepository';

class FakeUsersRepository implements IUsersRepository {
  private users: User[] = [];

  async findById(id: string): Promise<User | undefined> {
    const findUser = this.users.find(user => user.id === id);

    return findUser;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const findUser = this.users.find(user => user.email === email);

    return findUser;
  }

  async create({ email, password }: ICreateUserDTO): Promise<User> {
    const user = new User();

    Object.assign(user, { id: v4(), email, password });

    this.users.push(user);

    return user;
  }
}

export default FakeUsersRepository;
