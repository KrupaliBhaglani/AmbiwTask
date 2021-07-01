import { createTaskService } from "../Service/TaskService";

// ADD user Registration Data
async function createTask(req, res) {
  try {
    const taskDetails = await createTaskService(req.body);
    res
      .status(200)
      .send({ message: "Data Inserted", status: 200, taskDetails });
  } catch (error) {
    res.status(400).send({ message: error.message, status: 400 });
    console.log(error);
  }
}

export { createTask };
