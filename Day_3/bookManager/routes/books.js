import { Router } from 'express';
import * as bookControllers from '../controllers/booksController.js'
var router = Router();

/* GET users listing. */
router.get('/', bookControllers.getAllBooksController);
router.get('/author/:authorName', bookControllers.getAllBooksByAuthorController);
router.post('/', bookControllers.createBookController);
router.delete('/author/:authorName', bookControllers.deleteBookByAuthorController);
router.get('/author/id/:id', bookControllers.getBooksByIdController)
router.delete('/author/id/:id', bookControllers.deleteBookByIdController);

export default router;