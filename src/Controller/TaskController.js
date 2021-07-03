import { Task } from "../Models/Task.js";
import { createTaskService,  getTaskService, manageTaskService, deleteTaskService } from "../Service/TaskService.js";

// ADD task Data
async function createTask(req, res) {
  try {
    req.body.UserId = req.query;
    const taskDetails = await createTaskService(req.body);
    res
      .status(200)
      .send({ message: "Data Inserted", status: 200, taskDetails });
  } catch (error) {
    res.status(400).send({ message: error.message, status: 400 });
    console.log(error);
  }
}

// manage task
async function manageTask(req, res) {
  try {
    console.log(req.params.id);
    const data = await Task.findById({ _id: req.params.id });
    if (!data) {
      res.status(400).send({ message: "Task not found" });
    }
    const taskIDmanage = await manageTaskService(req.params.id, req.body);
    if (!taskIDmanage) {
      res.status(400).send({ message: "Not able to Update task", status: 400 });
    }

    res.status(200).send({ message: "Sucessfully Updated", status: 200, data:data });
  } catch (error) {
    res.status(400).send({ message: error.message, status: 400 });
    console.log(error);
  }
}

async function deleteTask(req, res) {
  try {
    console.log(req.params.id);
    const data = await Task.findById({ _id: req.params.id });
    if (!data) {
      res.status(400).send({ message: "Task not found" });
    }
    const taskIDmanage = await deleteTaskService(req.params.id);
    if (!taskIDmanage) {
      res.status(400).send({ message: "Not able to delete Task", status: 400 });
    }

    res.status(200).send({ message: "Sucessfully delete", status: 200 });
  } catch (error) {
    res.status(400).send({ message: error.message, status: 400 });

    console.log(error);
  }
}

// get task details
async function getTask(req, res) {
  try {
    const taskData = await getTaskService();
    if (!taskData) {
      res.status(400).send({ message: "something went wrong", status: 400 });
    }

    res.status(200).send({ message: "Task Data", status: 200, task: taskData });
  } catch (error) {
    res.status(400).send({ message: error.message, status: 400 });
    console.log(error);
  }
}

export { createTask, manageTask, getTask, deleteTask };
