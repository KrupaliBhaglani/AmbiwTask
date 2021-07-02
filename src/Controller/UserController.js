import {
  createUserService,
  loginService,
  createJWT,
  verifyUser,
} from "../Service/userService.js";
import bcrypt from "bcryptjs";

// ADD user Registration Data
async function createUserData(req, res) {
  try {
    req.body.Password = bcrypt.hashSync(req.body.Password);
    const userDetails = await createUserDataService(req.body);
    res
      .status(200)
      .send({ message: "Data Inserted", status: 200, userDetails });
  } catch (error) {
    res.status(400).send({ message: error.message, status: 400 });
    console.log(error);
  }
}

// login
async function login(req, res) {
  try {
    const islogin = await loginService(req.body.Email, req.body.Password);
    if (!islogin) {
      res
        .status(400)
        .send({ message: "Not login because of some issues", status: 400 });
    }
    const token = await createJWT(islogin);
    const data = islogin[0];

    res.status(200).send({
      message: "Logged in",
      status: 200,
      token: token,
      userData: data,
    });
  } catch (error) {
    res.status(400).send({ message: error.message, status: 400 });
    console.log(error);
  }
}

export { createUserData, login };
