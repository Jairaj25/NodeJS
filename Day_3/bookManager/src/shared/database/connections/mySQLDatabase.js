import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const mySQLConn = mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
    }).promise()

   const connectionTest = mySQLConn.connect(function (err) {
        if (err) {
            console.log("Error in the connection")
            console.log(err)
        }
        else {
            console.log(`Database Connected`)
        }
    })
export { mySQLConn, connectionTest}

