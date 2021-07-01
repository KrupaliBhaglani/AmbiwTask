import { createUserService } from "../Service/UserService";
import bcrypt from "bcryptjs";

// ADD user Registration Data
async function createUser(req, res) {
  try {
    req.body.Password = bcrypt.hashSync(req.body.Password);
    const userDetails = await createUserService(req.body);
    res
      .status(200)
      .send({ message: "Data Inserted", status: 200, userDetails });
  } catch (error) {
    res.status(400).send({ message: error.message, status: 400 });
    console.log(error);
  }
}

export { createUser };
