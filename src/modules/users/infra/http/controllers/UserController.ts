import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '@modules/users/services/CreateUserService';

interface IUserResponse {
  id: string;

  email: string;

  created_at: Date;
}

class UserController {
  async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      email,
      password,
    });

    const userResponse: IUserResponse = {
      id: user.id,
      email: user.email,
      created_at: user.created_at,
    };

    return response.json(userResponse);
  }
}

export default UserController;
