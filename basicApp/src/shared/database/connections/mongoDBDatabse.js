import mongoose from "mongoose";

export const connectToMongoDB = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/bookManager')
    .then(() => {console.log('MongoDB Connected')})
}