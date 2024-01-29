const express =require('express')
// import express from "express"
const app=express()
const port=3000;


app.get('/',(req,res)=>{
    res.send('hello world!')
})
app.listen(port,()=>{
    console.log(`Listening on Port ${port}`)
})


// console.log("chai aur code");
// console.log("testing")