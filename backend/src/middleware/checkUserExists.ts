import { Request, Response, NextFunction } from 'express';
import prisma from '../../prisma/client';

export const checkUserExists = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.body;
    if (await prisma.user.count({ where: { ...user }})) {
        return res.json({ message: "User already exists" })
    }
    next();
  } catch (error) {
    //@ts-ignore
    res.status(500).json({ error: error.message });
  }
};
