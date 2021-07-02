import { User } from "../Models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

async function createUserService(userDetails) {
  if (await User.findOne({ Email: userDetails.Email })) {
    throw new Error("Email is already taken.");
  }
  const isAdduserData = await User.create(userDetails);
  if (!isAdduserData) {
    throw new Error("Can't able to add user.");
  }

  return isAdduserData;
}

// create JWT
async function createJWT(userData) {
  const token = jwt.sign({ userData }, process.env.TOKEN_SECRET);
  if (!token) {
    throw new Error("Can't able to generate Token");
  }
  return token;
}

// verify user from JWT
async function verifyUser(token) {
  let decoded1 = jwt.verify(token, process.env.TOKEN_SECRET);
  console.log(decoded1.userData[0]._id);
  const userData = await User.checkUserVerification({
    _id: decoded1.userData[0]._id,
    isVerify: true,
  });
  if (!userData) {
    var error = { statusCode: 401, message: "Unauthorised Access!" };
    throw error;
  }
  return userData;
}

// login service
async function loginService(Email, Password) {
  const user = await User.find({ Email: Email });
  if (user.length == 0 || user == null) {
    throw new Error("Email not found");
  }
  let pwd = await bcrypt.compareSync(Password, user[0].Password);
  if (!pwd) {
    throw new Error("User password is incorrect");
  }
  return user;
}

export { createUserService, loginService, createJWT, verifyUser };
