import Jwt from "jsonwebtoken";
import createError from "http-errors";

const authenticate = (res, req, next) => {
    const bearerToken = req.headers["authorization"];
    const { verify } = Jwt;
  try {
    const token = bearerToken.split(" ")[1];
    verify(token, process.env.PRIVATE_KEY);
    next();
  } catch (error) {
    
      createError(403, new Error("You Don't have proper authorization to access this page"))
  }
};

export { authenticate };
