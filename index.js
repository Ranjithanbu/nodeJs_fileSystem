import express from "express";
import fs from 'fs';
import {format} from 'date-fns';
import { timeStamp } from "console";
const app=express();
const PORT=8000;


app.get('/',(req,res)=>{
    res.status(200).json({message:"its working"})
})


let today;

app.get('/write',(req,res)=>{   
today=format(new Date(),'dd-MM-yyyy-HH-mm-ss')
console.log(today);
let filePath=`timeStamp/${today}.txt`
fs.writeFileSync(filePath,`${today}`,"utf-8")
})
 app.get('/read',(req,res)=>{
    let filePath=`timeStamp/${today}.txt`
    console.log(filePath) 
const data=fs.readFileSync(filePath,"utf-8")  

res.status(200).send(data)
 })




app.listen(PORT,()=>{console.log(`port ${PORT} is running`);});