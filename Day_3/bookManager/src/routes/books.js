import { Router } from 'express';
import * as bookControllers from '../controllers/booksController.js'
import { validateBook } from '../shared/middleware/validation/validate.js';
import { authenticate } from '../shared/middleware/authenticate.js';
var router = Router();

/* GET users listing. */
router.get('/', bookControllers.getAllBooksController);
router.get('/author/:authorName', bookControllers.getAllBooksByAuthorController);
router.post('/', authenticate, validateBook, bookControllers.createBookController);
router.delete('/author/:authorName', bookControllers.deleteBookByAuthorController);
router.get('/id/:id', bookControllers.getBooksByIdController)
router.delete('/id/:id', bookControllers.deleteBookByIdController);

export default router;