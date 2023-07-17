import { usersSchema } from '../../database/models/usersSchema.js';
const validateUser = (req, res, next) => {
  const { error } = usersSchema.validate(req.body);
  if (error) {
    return res.json(error.message);
  } else {
    next();
  }
};
export { validateUser };