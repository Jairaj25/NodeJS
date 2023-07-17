import {bookSchema} from '../../database/models/bookSchema.js';

const validateBook = (req,res)=>{
  const { error } = bookSchema.validate(req.body);
  if (error) {
    return res.json(error.message);
  } else {
    next();
  }
};
    


export {validateBook}