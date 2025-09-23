import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const userRouter: Router = Router();
const prisma = new PrismaClient();

// Get all users
userRouter.get('/', async (_: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch users' });
  }
});

userRouter.post('/register', (_: Request, res: Response) => {
  res.send({ message: 'User Registered Successfully' });
});

userRouter.post('/login', (_: Request, res: Response) => {
  res.send({ message: 'Login Successfully' });
});

export default userRouter;
