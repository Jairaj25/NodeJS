
import _ from 'lodash'
import { booksModel } from "../shared/database/models/bookSchema.js";

const getAllBooks = async () => {
    try {
        const books = await booksModel.find().lean()
        console.log(books);
        return books;
    }
    catch (error) {
        return "No Books Found"
    }
};

const getBooksByAuthor = async (authorToFind) => {
    try {
        const foundBook = await booksModel.find({ author: authorToFind })
        if (foundBook.length > 0) {
            console.log(foundBook)
            return foundBook;
        }
        else {
            return "Author Not Found"
        }
    }
    catch (error) {
        console.log("Error")
        return error.message
    }
}

const getBooksById = async (id) => {

    try {
        const foundBook = await booksModel.findById(id)
        console.log(foundBook)
        if (foundBook) {
            console.log(foundBook)
            return foundBook;
        }
        else {
            return "ID not Found"
        }
    }
    catch (error) {
        console.log("Error on get book by id ")
        return error
    }
}

const createBook = async (newBook) => {
    try {
        const foundBook = await booksModel.create(newBook)
        return foundBook
    }
    catch (error) {
        return error
    }
}
const deleteBookByAuthor = async (authorToBeDeleted) => {
    try {
        const bookFound = await booksModel.find({ author: authorToBeDeleted })
        if (bookFound) {
            await booksModel.deleteOne({ author: authorToBeDeleted });
            return "Deleted Successfully"
        } else {
            return "Delete Book by author Error"
        }
    }

    catch (error) {
        return error
    }
}

const deleteBookById = async (id) => {
    try {

        const bookFound = await booksModel.findById(id)
        if (bookFound) {
            await booksModel.deleteOne({ _id: id })
            return "Deleted Successfully"
        } else {
            return error.message
        }
    }

    catch (error) {
        return error
    }
}

export { getAllBooks, getBooksByAuthor, createBook, deleteBookByAuthor, getBooksById, deleteBookById }