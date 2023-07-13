import * as bookServices from '../services/bookServices.js'

const getAllBooksController = async(req, res) => {
    const allBooks = await bookServices.getAllBooks();
    res.status(200);
    res.send(allBooks);
}
const getAllBooksByAuthorController = async (req, res) => {
    const { authorName } = req.params;
    console.log(authorName)
    const foundBook = await bookServices.getBooksByAuthor(authorName);
    res.status(200);
    res.send(foundBook);
}

const getBooksByIdController = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const foundBook = await bookServices.getBooksById(id);
    res.status(200);
    res.send(foundBook);
}

const createBookController = async (req, res) =>{
    const newBookList = await bookServices.createBook(req.body)
    res.status(201);
    res.send(newBookList)
}

const deleteBookByAuthorController = async (req, res) =>{
    const {authorName} = req.params;
    const deletedBook = await bookServices.deleteBookByAuthor(authorName)
    res.status(200);
    res.send(deletedBook)
}

const deleteBookByIdController = async (req, res) => {
    const {id} = req.params;
    const deleteBookById = await bookServices.deleteBookById(id)
    res.status(200);
    res.send(deleteBookById)
}

export {getAllBooksController, getAllBooksByAuthorController, createBookController, deleteBookByAuthorController, getBooksByIdController, deleteBookByIdController}