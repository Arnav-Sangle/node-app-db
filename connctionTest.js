const mongoose = require('mongoose')
const URL = "mongodb+srv://admin:admin123@cluster0.cuee2hr.mongodb.net/gfgdb?retryWrites=true&w=majority&appName=Cluster0";
//change this in url        admin:admin123      mongodb.net/gfgdb?

mongoose.connect(URL)

const user = mongoose.model('demousers', {name: String, email: String})     //constructer with schema       mongoose.model(collection_name, schema)

const myUser = new user({name: "admin", email: "admin@mail.com"})           //object with values
myUser.save().then(() => console.log("user added"))                         //add user  to db
