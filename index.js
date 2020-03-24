const express = require('express');
const moment = require('moment');
const momenttz = require('moment-timezone');
const app = express();

app.get("/localTime",(req,res)=>{
    res.send(moment().format());
})

app.get("/utcTime",(req,res)=>{
    res.send(moment.utc().format());
})

app.listen(3001,()=>{
    
})