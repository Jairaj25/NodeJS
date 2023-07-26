import mongoose from "mongoose";

const userDBSchema = mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    name: {type: String, required: true}
},
{collection: 'persons'})

const userModel = mongoose.model('persons', userDBSchema)

export {userDBSchema, userModel}