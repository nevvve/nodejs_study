//라이브러리 및 포트 변수 정의
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const indexRouter = require("./route/index")
require('dotenv').config()
const PORT = process.env.PORT || 5000;
const cors = require("cors")

//기본 세팅
const app = express()
app.use(cors())
app.use(bodyParser.json());
app.use("/api", indexRouter);

// DB 세팅 
const mongoURI = process.env.MONGODB_URI
mongoose.connect(mongoURI)
    .then(() => {
        console.log('mongoose connected');
    })
    .catch((err) => {
        console.log("DB connection fail", err);
    });

// PORT 구성 5000
app.listen(PORT || 5000, () => {
    console.log(`server on ${PORT}`);
})