import { Bird } from '@prisma/client';
import { IBaseRepository } from './base';

export interface IBirdsRepository extends IBaseRepository<Bird> {
  findAllByUserId(userId: number): Promise<Bird[]>;
}
