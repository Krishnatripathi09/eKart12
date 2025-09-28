import { Router, Request, Response } from "express";

const userRouter: Router = Router();

userRouter.post("/register", (_: Request, res: Response) => {
  res.send({ message: "User Registered Successfully" });
});

userRouter.post("/login", (_: Request, res: Response) => {
  res.send({ message: "Login Successfully" });
});

export default userRouter;
