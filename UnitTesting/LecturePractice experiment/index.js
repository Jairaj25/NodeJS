
import express from 'express';
var app = express();

app.get('/hello', (req,res) => (
    res.status(200).json({message: 'Hello, World'})
))

export default app