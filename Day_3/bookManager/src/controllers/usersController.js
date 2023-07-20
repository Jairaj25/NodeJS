import * as userServices from '../services/usersServices.js';
import createError from 'http-errors';

const getAllUsersController = async (req, res, next) => {
    try {
        const allUsers = await userServices.getAllUsers();
        res.status(200)
        res.send(allUsers)
    }
    catch (error) {
        next(createError(500, err));
    }
}

const getUserByIdController = async (req, res, next) => {
    try {
        const { id } = req.params
        const foundUser = await userServices.getUserById(id);
        res.send(foundUser)
    }
    catch (error) {
        next(createError(500, err));
    }
}

const createNewUserController = async (req, res, next) => {
    // console.log("controller error");
    try {
        const newUsersList = await userServices.createNewUser(req.body)
        return res.send(newUsersList);
    }
    catch (error) {
        next(createError(500, err));
    }
}

const deleteUserByIdController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedUserById = await userServices.deleteUserById(id)
        res.send(deletedUserById)
    }
    catch (error) {
        next(createError(500, err));
    }
}

const loginValidationController = async (req, res, next) => {
    try {
        const emailAndPassword = req.body
        const validatedUser = await userServices.loginValidation(emailAndPassword)
        return res.send(validatedUser);
    }
    catch (error) {
        next(createError(500, err));
    }
}

export { getAllUsersController, getUserByIdController, createNewUserController, deleteUserByIdController, loginValidationController }
