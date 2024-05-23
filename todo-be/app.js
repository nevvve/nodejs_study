//라이브러리 및 포트 변수 정의
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const indexRouter = require("./route/index")
const PORT = 5000

//기본 세팅
const app = express()
app.use(bodyParser.json());
app.use("/api", indexRouter);

// DB 세팅 
const mongoURI ='mongodb://127.0.0.1:27017/todo_nodejs'
mongoose.connect(mongoURI)
    .then(() => {
        console.log('mongoose connected');
    })
    .catch((err) => {
        console.log("DB connection fail", err);
    });

// PORT 구성 5000
app.listen(PORT, () =>{
    console.log(`server on ${PORT}`);
})