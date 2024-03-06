import express from "express";
import fs from 'fs';
import {format} from 'date-fns';
import { timeStamp } from "console";
const app=express();
const PORT=4000;


app.get('/',(req,res)=>{
    res.status(200).json({message:"its working",user_guide:{write:"we have to searach like this-- https://nodejs-filesystem-8tzh.onrender.com/write --to add a new time stamp",
    read:" and we have to put like this --https://nodejs-filesystem-8tzh.onrender.com/read-- to retrieve all timestamps " }})
});




app.get('/write',(req,res)=>{   
let today=format(new Date(),'dd-MM-yyyy-hh-mm-ss')
console.log(today);
let filePath=`timeStamp/${today}.txt`
fs.writeFileSync(filePath,`${today}`,"utf-8")
})
 app.get('/read',(req,res)=>{

    const directoryPath='timeStamp'
fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }
    res.status(200).send(files)

});




 })




app.listen(PORT,()=>{console.log(`port ${PORT} is running`);});
