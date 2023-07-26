import Jwt from "jsonwebtoken";
import * as dotenv from 'dotenv';
import createError from "http-errors"
dotenv.config();
const authenticate = (req, res, next) => {
  try {
    const bearerToken = req.headers["auth"];
    //const token = bearerToken.split(" ")[1];
    //console.log(bearerToken)
    Jwt.verify(bearerToken, process.env.SECRET_TOKEN);
    next();
  } catch (error) {

    next(createError(403, new Error("You are Not Authorized to Access This Page")))
  }
};

export { authenticate };