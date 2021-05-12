const express= require("express")
const cool = require('cool-ascii-faces');
const app=express()
const port = process.env.PORT || 8080
app.get("/", (req, res)=>{
  res.send(cool())
})
app.listen(port, (req, res)=>{
  console.log("running")
})
