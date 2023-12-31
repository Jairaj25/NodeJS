import _ from 'lodash';
import { userModel } from '../shared/database/models/usersSchema.js';
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";

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
            return (userFound.email, userFound.lastname, userFound.firstname)
        }
        else {
            return "Wrong Credentials (ID)"
        }
    }
    catch (error) {
        return "No User Found"
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

const createNewUser = async (newUser) => {
    
    try {
        const {firstName, lastName, email, password} = newUserr
        const hashedPassword = await bcrypt.hash(password, 10);

        const userFieldsSet = {
            firstname: firstName,
            lastname: lastName,
            email: email,
            password: hashedPassword,
        };
        
        const userToCreate = await  userModel.create(userFieldsSet)
        console.log("Services error");
        if (userToCreate) {
            return ("Profile Created Successfully");
        }
        else {
            throw new Error("User Creationg Error")
        }
    }
    catch (error) {
        return "Profile Not Created Please try again"
    }
}

const loginValidation = async (emailAndPassword) => {
    try {
        
        const { email, password } = emailAndPassword;
        const emailFound = await userModel.findOne({ email: email });
        const checkPassword = await bcrypt.compare(
            password,
            emailFound.password
        );
        console.log("Services error");
        
        if (!emailFound) {
            throw new Error("Wrong Credentials")
        }

        if (!checkPassword) {
            throw new Error("Wrong Credentials")
        }
        else {
            const secretCode = process.env.SECRET_TOKEN;

            console.log(secretCode);

            const jwtToken = Jwt.sign(email, secretCode);
            return ({ token: jwtToken, message: "Logged In " }, "Access Granted");
        }

    } catch (error) {
        return ("Login Error")
    }

}


export { getAllUsers, getUserById, createNewUser, deleteUserById, loginValidation }