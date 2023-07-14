import _ from 'lodash';
import { userModel } from '../models/usersSchema.js';
import Jwt from 'jsonwebtoken';

const getAllUsers = async () => {
    try {
        const users = await userModel.find().lean()
        return users;
    }
    catch (error) {
        return "No Users Found"
    }
};

const getUserById = async (id) => {
    try {
        const userFound = await userModel.findById(id)
        if (userFound) {
            return (userFound.email, userFound.lastname,userFound.firstname)
        }
        else {
            return "Wrong Credentials (ID)"
        }
    }
    catch (error) {
        return "No User Found"
    }
}

const createNewUser = async (newUser) => {
    try {
        const userToCreate = await userModel.create(newUser)
        return ("Profile Created Successfully", userToCreate);
    }
    catch (error) {
        return "Profile Not Created Please try again"
    }
}

const deleteUserById = async (userToBeDeletedById) => {
    try {
        const userFound = await userModel.findById(userToBeDeletedById)
        if (userFound) {
            await userModel.deleteOne({ _id: userToBeDeletedById })
            return ("Profile Deleted Successfully");
        }
        else {
            return ("User Deletion Error")
        }
    }
    catch (error) {
        return "Profile Not Deleted Please try again"
    }
}

const loginValidation = async (emailAndPassword) => {
    try {
        //const { sign } = Jwt
        const { email, password } = emailAndPassword;
        const emailFound = await userModel.findOne({ email: email });
        if (emailFound && emailFound.password === password) {
            return "Login Successful"
        } 
        else {
            return ("Wrong Credentials")
        }

    }catch (error) {
        return ("Login Error")
    }
    
}


export { getAllUsers, getUserById, createNewUser, deleteUserById, loginValidation }