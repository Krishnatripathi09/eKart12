import prisma from '../DB/db.config';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
export const createUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400).send('All the Fields Are Required');
  }

  const user = await prisma.users.findUnique({
    where: {
      email: email,
    },
  });

  if (user) {
    res.status(400).send('User Already Exists Please Log-In');
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const userz = await prisma.users.create({
    data: {
      username,
      email,
      password: passwordHash,
    },
  });

  console.log(userz);

  res.status(201).send(`User ${username} Created Successfully`);
};
