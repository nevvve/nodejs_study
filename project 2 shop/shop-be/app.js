const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const indexRoter = require("./routes/index")
const app = express()
const PORT = process.env.PORT || 5000;

require("dotenv").config()
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json()) // req.body 가 객체로 인식
app.use("/api",indexRoter)


const mongoURI = process.env.MONGODB_URI
mongoose
    .connect(mongoURI)
    .then(() => console.log("mongoose connected"))
    .catch((err) => console.log("DB connection fail",err.message))


app.listen(PORT || 5000, () => {
    console.log(`server on ${PORT}`);
})