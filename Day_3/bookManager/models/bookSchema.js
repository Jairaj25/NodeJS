import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    author: {type: String, required: true},
    country: {type: String, required: true},
    imageLink: {type: String, required: true},
    language: {type: String, required: true},
    link: {type: String, required: true},
    pages: {type: String, required: true},
    title: {type: String, required: true},
    year: {type: String, required: true},
},
{ collection: 'books' })

const booksModel = mongoose.model('books', bookSchema)


export { bookSchema, booksModel }