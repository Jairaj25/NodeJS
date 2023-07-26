import { userSchema } from "../../validation/userValidationSchema.js";
const validateUser = (req, res, next) => {
  const { error } = userSchema.validate(req.body);
  if (error) {
    return res.json("Validation Failed");
  } else {
    next();
  }
};
export { validateUser };