
const app = require('express')();

app.get('/hello', (req,res) => (
    res.status(200).json({message: 'Hello, World'})
))

module.exports=app