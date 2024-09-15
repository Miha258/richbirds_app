import { Request, Response } from 'express';
import UsersRepository from '../repository/users.repository';

class UsersController {
  private repository: typeof UsersRepository;
  
  constructor(repository: typeof UsersRepository) {
    this.repository = repository;
  }

  createUser = async (req: Request, res: Response) => {
    try {
      const user = req.body;
      const users = await this.repository.findAll();
      if (users.some(u => u.telegram_id === user.telegram_id)) {
        res.status(400).json({ message: "User already exists" });
        return;
      }

      const newUser = await this.repository.create(user);
      res.status(201).json(newUser);
    } catch (error) {
      // @ts-ignore
      res.status(500).json({ error: error.message });
    }
  };

  getUsers = async (req: Request, res: Response) => {
    try {
      const users = await this.repository.findAll();
      res.json(users);
    } catch (error) {
      // @ts-ignore
      res.status(500).json({ error: error.message });
    }
  };

  getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const user = await this.repository.findById(Number(id));
      if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
      }

      res.json(user);
    } catch (error) {
      // @ts-ignore
      res.status(500).json({ error: error.message });
    }
  };

  updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updateData = req.body;

    try {
      const updatedUser = await this.repository.update(Number(id), updateData);
      res.json(updatedUser);
    } catch (error) {
      // @ts-ignore
      res.status(500).json({ error: error.message });
    }
  };

  deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      await this.repository.delete(Number(id));
      res.status(204).send();
    } catch (error) {
      // @ts-ignore
      res.status(500).json({ error: error.message });
    }
  };
}

export default new UsersController(UsersRepository);
