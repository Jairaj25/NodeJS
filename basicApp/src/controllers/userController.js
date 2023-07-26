import * as userServices from '../services/userService.js'

export const getAllUsersController = async (req, res) => {
    try{
        const foundUsers = await userServices.getAllUsers();
        return res.status(200).json(foundUsers);
    }
    catch(err){
        return res.status(403).json({message: "Your are not authorised to access this page"});
    }
}

export const loginValidationController = async (req, res) => {
    try{
        if(!("email" in req.body && "password" in req.body)){
            return res.status(401).json("Body Empty")
        }
        const credentials = req.body;
        const userValidated = await userServices.loginValidation(credentials);
        return res.status(200).json(userValidated);
    }
    catch(err){
        return res.status(401).json({ message: "The username and password your provided are invalid" });
    }
}

export const registerUserController = async (req, res) => {
    try{
        if(!("email" in req.body && "password" in req.body && "name" in req.body)){
            return res.status(401).json("Incomplete Profile")
        }
        const userCreated = await userServices.registerUser(req.body);
        res.status(200).json(userCreated)
    }
    catch(err){
        res.status(401).json({ message: "The username and password your provided are invalid" });
    }
}

export const resetPasswordController = async (req, res) => {
    try{
        if(!("email" in req.body && "password" in req.body)){
            return res.status(401).json("Incomplete Data")
        }
        const data = req.body;
        const ChangedPassword = await userServices.resetPassword(data);
        res.status(200).json(ChangedPassword)
    }
    catch(err){
        return res.status(500).send()
    }
}