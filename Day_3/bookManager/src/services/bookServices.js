
import _ from 'lodash'
import { booksModel } from "../shared/database/models/bookSchema.js";

const getAllBooks = async () => {
    try {
        const books = await booksModel.find().lean()
        return books;
    }
    catch (error) {
        return error.message
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
            return ("Author Not Found");
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
            return ("ID not Found");
        }
    }
    catch (error) {
        return error.message
    }
}

const createBook = async (newBook) => {
    try {
        if(newBook){
        const foundBook = await booksModel.create(newBook)
        return foundBook
        }else{
            return('Data Incomplete');
        }
    }
    catch (error) {
        return error.message
    }
}
const deleteBookByAuthor = async (authorToBeDeleted) => {
    try {
        const bookFound = await booksModel.find({ author: authorToBeDeleted })
        if (bookFound) {
            await booksModel.deleteOne({ author: authorToBeDeleted });
            return "Deleted Successfully"
        } else {
            return ("Deletion Error, please try again");
        }
    }

    catch (error) {
        return error.message
    }
}

const deleteBookById = async (id) => {
    try {

        const bookFound = await booksModel.findById(id)
        if (bookFound) {
            await booksModel.deleteOne({ _id: id })
            return "Deleted Successfully"
        } else {
            return ("Deletion Error, please try again");
        }
    }

    catch (error) {
        return error.message
    }
}

export { getAllBooks, getBooksByAuthor, createBook, deleteBookByAuthor, getBooksById, deleteBookById }