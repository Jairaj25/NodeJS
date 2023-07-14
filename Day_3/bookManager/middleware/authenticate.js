import Jwt from "jsonwebtoken";

const authenticate = (res, req) => {
    const bearerToken = req.headers["authorization"];
    const { verify } = Jwt;
  try {
    const token = bearerToken.split(" ")[1];
    verify(token, );
  } catch (error) {
    
      return ("You Don't have proper authorization to access this page")
  }
};

export { authenticate };
