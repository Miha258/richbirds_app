import { User } from '@prisma/client';
import { IBaseRepository } from './base';

export interface IUsersRepository extends IBaseRepository<User> {}