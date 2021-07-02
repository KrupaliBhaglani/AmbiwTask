import express from "express";
import { createUserData, login } from "../Controller/UserController.js";
import { checkUserData } from "../Middleware/userValidation.js";

const userRouter = express.Router();

userRouter.post("/register-user", checkUserData, createUserData);
userRouter.post("/login", login);

export { userRouter };
