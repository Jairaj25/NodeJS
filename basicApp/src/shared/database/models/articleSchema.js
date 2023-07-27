import mongoose from "mongoose";

const articleDBSchema = mongoose.Schema({
    articles_id: {type: String, required: true},
    title: {type: String, required: true},
    content: {type: String, required: true},
    visibility: {type: String, required: true},
    user_id: {type: String, required: true}
},
{collection: 'articles'})

const articleModel = mongoose.model('articles', articleDBSchema)

export {articleDBSchema, articleModel}