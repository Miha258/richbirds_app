import { PrismaClient } from '@prisma/client';
import { IBirdsRepository } from '../entity/bird';
import prisma from '../../prisma/client';

class BirdsRepository implements IBirdsRepository {
  constructor(private connection: PrismaClient) {
    this.connection = connection;
  }

  // Fetch all birds
  async findAll() {
    return await this.connection.bird.findMany();
  }

  // Fetch a specific bird by ID
  async findById(id: number) {
    return await this.connection.bird.findUnique({
      where: { id },
    });
  }

  // Create a new bird
  async create(data: { progress: number; profit: number; ownerId: number }) {
    return await this.connection.bird.create({
      data,
    });
  }

  // Update bird information
  async update(id: number, data: { progress?: number; profit?: number }) {
    return await this.connection.bird.update({
      where: { id },
      data,
    });
  }

  // Delete a bird
  async delete(id: number) {
    await this.connection.bird.delete({
      where: { id },
    });
  }

  // Find all birds belonging to a specific user
  async findAllByUserId(userId: number) {
    return await this.connection.bird.findMany({
      where: { ownerId: userId },
    });
  }
}

export default new BirdsRepository(prisma);
