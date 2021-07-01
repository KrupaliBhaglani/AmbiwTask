import { Task } from "../Models/Task";

async function createTaskService(taskDetails) {
  if (await Task.findOne({ Task: taskDetails.Task })) {
    throw new Error("Email is already taken.");
  }
  const isAddtaskData = await Task.create(taskDetails);
  if (!isAddtaskData) {
    throw new Error("Can't able to add task.");
  }

  return isAddtaskData;
}

export { createTaskService };
