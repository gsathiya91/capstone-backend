//Importing required packages
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const router = require('./routes/routes');

const app = express();
dotenv.config();

//Body parser
app.use(express.json());

//cors
app.use(cors())

//port
const PORT = 5000;

//Router
app.use('/', router)

const URI = "mongodb+srv://Gsathiya:capstoneproject@cluster0.ktemn.mongodb.net/CAPSTONE?retryWrites=true&w=majority";

mongoose.connect(URI).then(() => {
    console.log("DB connected successfully")
}).catch((err) => {
    console.log(err)
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})