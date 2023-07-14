import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    firstname: {type: String, required: true},
    lastname: {type: String, required: true}
},
{ collection: 'users' })

const userModel = mongoose.model('users', usersSchema)

export { userModel }