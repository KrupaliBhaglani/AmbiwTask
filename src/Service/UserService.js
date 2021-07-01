import { User } from "../Models/User";

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

export { createUserService };
