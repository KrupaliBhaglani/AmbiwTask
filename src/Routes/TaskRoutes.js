import express from "express";
import {
  createTask,
  manageTask,
  getTask,
  deleteTask,
} from "../Controller/TaskController.js";
import { userAuthentication } from "../Middleware/authentication.js";
import { checkTaskSchema } from "../Middleware/taskValidation.js";

const taskRouter = express.Router();

taskRouter.post(
  "/create-task",
  checkTaskSchema,
  userAuthentication,
  createTask
);

taskRouter.get("/get-task", userAuthentication, getTask);

taskRouter.put("/update-task/:id", userAuthentication, manageTask);

taskRouter.delete("/delete-task/:id", userAuthentication, deleteTask);

export { taskRouter };
