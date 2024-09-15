import { PrismaClient, User } from '@prisma/client';
import prisma from '../../prisma/client';
import { IUsersRepository } from '../entity/user';

class UsersRepository implements IUsersRepository {
  constructor(private connection: PrismaClient) {
    this.connection = connection;
  }
  
  async findAll() {
    return await this.connection.user.findMany();
  }

  async findById(id: number) {
    return await this.connection.user.findUnique({
      where: { id },
    });
  }

  async create(data: Omit<User, 'id' | 'createdAt' | 'updatedAt'>) {
    return await this.connection.user.create({
      data,
    });
  }

  async update(id: number, data: Partial<Omit<User, 'id' | 'createdAt' | 'updatedAt'>>): Promise<User> {
    return await this.connection.user.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<void> {
    await this.connection.user.delete({
      where: { id },
    });
  }
}

export default new UsersRepository(prisma);
