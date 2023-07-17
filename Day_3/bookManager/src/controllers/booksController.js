import * as bookServices from '../services/bookServices.js';
import createError from 'http-errors';

const getAllBooksController = async (req, res, next) => {
    try {
        const allBooks = await bookServices.getAllBooks();
        res.status(200);
        res.send(allBooks);
    }
    catch (error) {
        next(createError(500, err));
    }
}
const getAllBooksByAuthorController = async (req, res, next) => {
    try {
        const { authorName } = req.params;
        console.log(authorName)
        const foundBook = await bookServices.getBooksByAuthor(authorName);
        res.status(200);
        res.send(foundBook);
    }
    catch (error) {
        next(createError(500, err));
    }
}

const getBooksByIdController = async (req, res, next) => {
    try {
        const { id } = req.params;
        console.log(id);
        const foundBook = await bookServices.getBooksById(id);
        res.status(200);
        res.send(foundBook);
    }
    catch (error) {
        next(createError(500, err));
    }
}

const createBookController = async (req, res, next) => {
    try {
        const newBookList = await bookServices.createBook(req.body)
        res.status(201);
        res.send(newBookList)
    }
    catch (error) {
        next(createError(500, err));
    }
}

const deleteBookByAuthorController = async (req, res, next) => {
    try {
        const { authorName } = req.params;
        const deletedBook = await bookServices.deleteBookByAuthor(authorName)
        res.status(200);
        res.send(deletedBook)
    }
    catch (error) {
        next(createError(500, err));
    }
}

const deleteBookByIdController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleteBookById = await bookServices.deleteBookById(id)
        res.status(200);
        res.send(deleteBookById)
    }
    catch (error) {
        next(createError(500, err));
    }
}

export { getAllBooksController, getAllBooksByAuthorController, createBookController, deleteBookByAuthorController, getBooksByIdController, deleteBookByIdController }