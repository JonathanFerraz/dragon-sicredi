import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';
import UserRepository from '../repositories/UserRepository';

class UserControler {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const userRepository = new UserRepository();
    const createUser = new CreateUserService(userRepository);

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    delete user.password;

    return response.json(user);
  }
}

export default UserControler;
