const express = require("express")
const bp = require("body-parser")
const mongoose = require("mongoose")
const URL = "mongodb+srv://admin:admin123@cluster0.cuee2hr.mongodb.net/gfgdb?retryWrites=true&w=majority&appName=Cluster0";

const empc = require("./models/model.js")

var app = express()
app.use(bp.json())                                           

app.post("/adduser", (req,res)=>{
    const user = new empc({...req.body})                       // object {...req.body}      select all data inside req.body 
    user.save().then(()=>{console.log('user is added')}) 
    res.send('user is added')
})

app.get("/loadproducts", async(req,res)=>{                         // GET = async response 
    const users = await empc.find()                       
    res.send(users)
})

app.get("/loadproduct/:id", async(req,res)=>{
    const uid = parseInt(req.params.id)                      //integer value in postman passed as string     to convert back to int       use parseInt()        /101 
    // const uid = req.params.id                             //to keep it as string and use ObjectId('666d26117f1e695f435f7daa')                                /666d26117f1e695f435f7daa
    const users = await empc.findById(uid)                       
    res.send(users)
})

app.delete("/deleteproduct/:id", async(req, res)=>{
    const uid = parseInt(req.params.id)
    const users = await empc.findByIdAndDelete(uid)
    res.send('user deleted')
})

const startServer = async()=>{
    await mongoose.connect(URL)
    app.listen(3000, ()=>{
        console.log("server is ready...!")
    })
}
startServer()


