import { userModel } from '../shared/database/models/usersSchema.js';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import _ from 'lodash';

export const getAllUsers = async () => {
    try{
        const users = await userModel.find().lean();
        return users;
    }
    catch(err){
        return err;
    }
};

export const loginValidation = async (credentials) => {
    try {
        const {email, password} = credentials;
        const foundEmail = await userModel.findOne({email: email});
        
        if(!foundEmail){
            return("Wrong Credentials");
        }
        const passwordCheck = bcrypt.compareSync(password, foundEmail.password);
        if(!passwordCheck){
            return("Wrong password")
        }else{
            const jwtToken = jwt.sign(email, process.env.SECRET_TOKEN);

            return ({token: jwtToken, message: 'Access Granted'})
        }
    }
    catch(err){
        return err;
    }
}

export const registerUser = async (data) => {
    try{
        const {email, password, name} = data;
        //const userExistsCheck = await userModel.findOne({email: email})

        if(await userModel.findOne({email: email})){
            return ("User Already Exists")
        }
        const encryptedPassword = await bcrypt.hash(password, 16);

        const userProfile = {
            email: email,
            password: encryptedPassword,
            name: name
        }
        const userCreated = await userModel.create(userProfile);
        if(userCreated){
            return "User Created Successfully";
        }
        else{
            return("User Creation Error");
        }
    }
    catch(err){
        return "Profile not created, please try again";
    }
}

export const resetPassword = async (credentials) => {
    try{
        const {email, password} = credentials;
        if(email.length === 0){
            return "Email empty";
        }
        const userFound =await userModel.findOne({email : email});
        if(!userFound){
            return "User not Registered";
        }
        if(password.length === 0){
            return "Password Empty"
        }
        const encryptedPassword = await bcrypt.hash(password, 16);
        const payload = {
            password: encryptedPassword
        }
        const passwordResetCheck = await userModel.findOneAndUpdate({email}, payload);
        console.log(passwordResetCheck);
        return "Password Changed successfully updated"
    }
    catch(err){
        return "Password did not reset, Encountered some error. Please Try Again"
    }
}

export const userService = {getAllUsers, loginValidation, registerUser, resetPassword}