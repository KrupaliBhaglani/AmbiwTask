import { Task } from "../Models/Task.js";

async function createTaskService(taskDetails) {
  if (await Task.findOne({ Task: taskDetails.Title })) {
    throw new Error("Task is already taken.");
  }
  const isAddtaskData = await Task.create(taskDetails);
  if (!isAddtaskData) {
    throw new Error("Can't able to add task.");
  }

  return isAddtaskData;
}

async function getTaskService() {
  const task = await Task.find();
  if (task.length == 0 || task == null) {
    throw new Error("No Record is found");
  }
  return task;
}

async function manageTaskService(id, data) {
  const taskid = { _id: id };
  const updateTask = await Task.updateOne(taskid, data);
  if (!updateTask) {
    throw new Error("Can't updated");
  }
  return updateTask;
}

async function deleteTaskService(id, data) {
  const taskid = { _id: id };
  const deleteTask = await Task.deleteOne(taskid);
  if (!deleteTask) {
    throw new Error("Can't deleted");
  }
  return deleteTask;
}

export { createTaskService , getTaskService, manageTaskService, deleteTaskService };
