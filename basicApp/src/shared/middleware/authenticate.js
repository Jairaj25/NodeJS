import Jwt from "jsonwebtoken";
import * as dotenv from 'dotenv';
import createError from "http-errors"
dotenv.config();
const authenticate = (req, res, next) => {
  try {
    const bearerToken = req.headers["auth"];
    // const token = 'eyJhbGciOiJIUzI1NiJ9.TWlyYWFrQGdtYWlsLmNvbQ.SOUXhEljou18veMi5I2v3PrFQNhaK1QWBMlzMMyXfl4'
    // token.split(".")
    // token.split(".")[1]
    // const payload = token.split(".")[1]
    // const extractedEmail = atob(payload)

    //const token = bearerToken.split(" ")[1];
    //console.log(bearerToken)
    //console.log(req);
    req.token = Jwt.verify(bearerToken, process.env.SECRET_TOKEN);
    //console.log(req);
    next();
  } catch (error) {

    next(createError(403, new Error("You are Not Authorized to Access This Page")))
  }
};

export { authenticate };