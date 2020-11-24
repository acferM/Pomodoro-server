import { Request, Response } from 'express';
import { container } from 'tsyringe';

import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

interface IUserResponse {
  id: string;

  email: string;

  created_at: Date;
}

export default class SessionsController {
  async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateUser = container.resolve(AuthenticateUserService);

    const { user, token } = await authenticateUser.execute({ email, password });

    const userResponse: IUserResponse = {
      id: user.id,
      email: user.email,
      created_at: user.created_at,
    };

    return response.json({ user: userResponse, token });
  }
}
