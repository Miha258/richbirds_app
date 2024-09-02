import { Request, Response } from 'express';
import prisma from '../../prisma/client';
import { User } from '@prisma/client';

// Create a new user
export const createUser = async (req: Request, res: Response) => {
  try {
    const user: Omit<User, 'id' | 'createdAt' | 'updatedAt'> = req.body;

    if (await prisma.user.count({ where: { ...user } })) {
      return res.status(400).json({ message: "User already exists" });
    }
    
    const newUser = await prisma.user.create({
      data: user,
    });
    res.status(201).json(newUser);
  } catch (error) {
    //@ts-ignore
    res.status(500).json({ error: error.message });
  }
};

// Get a list of all users
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    //@ts-ignore
    res.status(500).json({ error: error.message });
  }
};

// Get a user by ID
export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  
  try {
    const user = await prisma.user.findUnique({
      where: { id: Number(id) }
    });
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    
    res.json(user);
  } catch (error) {
    //@ts-ignore
    res.status(500).json({ error: error.message });
  }
};

// Update a user by ID
export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updateData: Partial<Omit<User, 'id' | 'createdAt' | 'updatedAt'>> = req.body;

  try {
    const updatedUser = await prisma.user.update({
      where: { id: Number(id) },
      data: updateData
    });
    
    res.json(updatedUser);
  } catch (error) {
    //@ts-ignore
    res.status(500).json({ error: error.message });
  }
};

// Delete a user by ID
export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.user.delete({
      where: { id: Number(id) }
    });
    
    res.status(204).send(); // No content
  } catch (error) {
    //@ts-ignore
    res.status(500).json({ error: error.message });
  }
};
