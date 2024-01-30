const express =require('express')
// import express from "express"
const app=express()
const port=3000;


app.get('/',(req,res)=>{
    res.send('hello world!!')
})

app.get('/lorem',(req,res)=>{
    res.send('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat')
})


app.listen(port,()=>{
    console.log(`Listening on Port ${port}`)
})


// console.log("chai aur code");
// console.log("testing")