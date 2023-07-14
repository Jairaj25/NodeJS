import * as userServices from '../services/usersServices.js';

const getAllUsersController = async (req, res) => {
    const allUsers = await userServices.getAllUsers();
    res.status(200)
    res.send(allUsers)
}

const getUsersByEmailController = async (req, res) => {
    const {email} = req.params
    const foundUser = await userServices.getUsersByEmail(email);
    res.send(foundUser)
}

const getUserByIdController = async (req, res) => {
    const {id} = req.params
    const foundUser = await userServices.getUserById(id);
    res.send(foundUser)
}

const createNewUserController = async (req, res) =>{
    const newUsersList = await userServices.createNewUser(req.body)
    return res.status(201).json(newUsersList);
}

const deleteUserByIdController = async (req, res) => {
    const {id} = req.params;
    const deletedUserById = await userServices.deleteUserById(id)
    res.send(deletedUserById)
}

const loginValidationController = async (req,res) => {
    const emailAndPassword = req.body
    const validatedUser = await userServices.loginValidation(emailAndPassword)
    return res.status(200).json({ token: validatedUser });
}

export{ getAllUsersController, getUsersByEmailController, getUserByIdController, createNewUserController, deleteUserByIdController, loginValidationController }
