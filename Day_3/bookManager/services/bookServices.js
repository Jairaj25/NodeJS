import { readFile, writeFile } from "node:fs/promises"
import _ from 'lodash'
import { booksModel } from "../models/bookSchema.js";

const getAllBooks = async () => {
    try{
    //const books = await readFile("books.json");
    const books = await booksModel.find().lean()
    console.log(books);
    return books;
    }
    catch(error){
        return error.message
    }
};

const getBooksByAuthor = async (authorToFind) => {
    //const foundBook = await getAllBooks();
    //const findBookByAuthor = _.find(foundBook, (bookToFindFrom) => bookToFindFrom.author === authorToFind)
    try{
        const foundBook = await booksModel.find({ author: authorToFind})
        if(foundBook.length>0){
        console.log(foundBook)
        return foundBook;
        }
        else{
            return "Author Not Found"
        }
    }
    catch(error){
        console.log("Error")
        return error.message
    }
}

const getBooksById = async (id) => {
    //const foundBook = await getAllBooks();
    //const findBookById = _.find(foundBook, (bookToFindFrom) => bookToFindFrom._id === idOfBook)
    
    try{
        const foundBook = await booksModel.findById(id)
        console.log(foundBook)
        if(foundBook){
        console.log(foundBook)
        return foundBook;
        }
        else{
            return "ID not Found"
        }
    }
    catch(error){
        console.log("Error on get book by id ")
        return error
    }
}

const createBook = async (newBook) => {
    try{
        //const foundBook = await getAllBooks();
        //foundBook.push(newBook)
        const foundBook = await booksModel.create(newBook)
        return foundBook
    }
    catch(error){
        return error
    }
}
const deleteBookByAuthor = async (authorToBeDeleted) => {
    try{
        const bookFound = await booksModel.find({author : authorToBeDeleted})
        if(bookFound) {
            await booksModel.deleteOne({ author: authorToBeDeleted});
            return "Deleted Successfully"
        } else{
            return "Delete Book by author Error"
        }
    }
    
    catch(error) {
        return error
    }
}

const deleteBookById = async (id) => {
    try{
        
        const bookFound = await booksModel.findById(id)
        if(bookFound) {
            // _.remove(findBookToDelete, (book) => book.author === author);
            // await writeFile("books.json", JSON.stringify(findBookToDelete));

            await booksModel.deleteOne({_id : id})
            return "Deleted Successfully"
        } else{
            return error.message
        }
    }
    
    catch(error) {
        return error
    }
}

export { getAllBooks, getBooksByAuthor, createBook, deleteBookByAuthor, getBooksById, deleteBookById}