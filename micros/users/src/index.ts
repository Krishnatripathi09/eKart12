import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

const app: Express = express();
dotenv.config();

const PORT = Number(process.env?.["USER_SERVICE_PORT"]) || 3001;
const HOST = process.env?.["USER_SERVICE_HOST"] || "localhost";

// Middleware
app.use(express.json());

// Health check
app.get("/health", (_: Request, res: Response) => {
  res.send({
    status: "OK",
    service: "users",
    timestampp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

// Routes
app.listen(PORT, HOST, () => {
  console.log(`🚀🚀 Users service running on http://${HOST}:${PORT}`);
});
