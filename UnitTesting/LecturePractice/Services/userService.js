const dbService = require ("../db.js")

const getAllUsers = async () => {
    const users = await dbService.getUsers();
    console.log('controller')
    return users;
}

module.exports={getAllUsers}