import { createUser } from '../controller/authController';
import { Router } from 'express';

const authRouter = Router();

authRouter.use('/user', createUser);

export default authRouter;
