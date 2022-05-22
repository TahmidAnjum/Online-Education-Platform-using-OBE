const express = require('express');

require('dotenv').config();

const connectDB = require('./utils/db');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

connectDB();


app.use('/api/users',require('./routes/userApi'));
app.use('/api/students',require('./routes/studentApi'));


app.get('/test',(req,res)=>{
    res.send('MUTU')
})

app.listen(port, ()=>{
        console.log(`Connected to port ${port}`);
    });