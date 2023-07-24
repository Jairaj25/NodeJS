import { dbService } from "../db.js";

const getAllUsers = async () => {
    const users = await dbService.getUsers();
    console.log('controller')
    return users;
}

export const userService = {
    getAllUsers
}