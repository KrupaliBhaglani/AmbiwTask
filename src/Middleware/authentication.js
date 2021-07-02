import { verifyUser } from "../Service/UserService.js";

async function userAuthentication(req, res, next) {
  try {
    var jwttoken = req.headers.authorization;
    // Bearer Token
    const token = jwttoken.slice(7);

    if (!token)
      return res
        .status(401)
        .send({ auth: false, message: "Token is not provided" });

    const isUserVerify = await verifyUser(token);
    if (!isUserVerify) {
      var error = { statusCode: 401, message: "Unauthorised Access!" };
      throw error;
    } else {
      req.query = isUserVerify.id;
      next();
    }
  } catch (error) {
    res.status(400).send({ message: error.message, status: 400 });
    console.log(error);
  }
}

export { userAuthentication };
