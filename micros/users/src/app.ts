import express, { Express, Request, Response } from 'express';
import userRouter from './routes/user.route.js';

const app: Express = express();

// Middlewares
app.use(express.json());

// Health check
app.get('/health', (_: Request, res: Response) => {
  res.send({
    status: 'OK',
    service: 'User Service',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

// Routes
app.use('/users', userRouter);

export default app;
