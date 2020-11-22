import { getRepository, Repository } from 'typeorm';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import User from '../entities/User';

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  async findById(id: string): Promise<User | undefined> {
    const findUser = await this.ormRepository.findOne(id);

    return findUser;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const findUser = await this.ormRepository.findOne({ where: { email } });

    return findUser;
  }

  async create({ email, password }: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create({
      email,
      password,
    });

    this.ormRepository.save(user);

    return user;
  }
}

export default UsersRepository;
