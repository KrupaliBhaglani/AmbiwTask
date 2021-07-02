import express from "express";
import { taskRouter } from "./TaskRoutes.js";
import { userRouter } from "./userRoutes.js";
const router = express.Router();

router.use("/user", userRouter);
router.use("/task", taskRouter);

export { router };
