const express = require('express')
const app = express()
const PORT = process.env.PORT || 8888
const route = require('./routes/web')  // this route containe all routes 
const routeapi = require('./routes/api')  // this route containe all routes 
const mongoose = require('mongoose');
// db connecetivity code 
mongoose.connect('mongodb://127.0.0.1:27017/RestAPI').then(()=>{
    console.log("mongo connected")
}).catch(err =>{
      console.log("mongo not connected")
})
app.use(express.json())
app.use(express.static("./public")) // all static files like css, js, img
app.use(express.urlencoded({extended:false})) // for pass post method data
app.use("", route) // it is a middleware run on all pages  // it is a middleware run on all pages 
app.use("/api", routeapi) // it is a middleware run on all pages  // it is a middleware run on all pages 
app.set("view engine", "ejs")  // template engine




// server listing on that port number  
app.listen(PORT, ()=>{
    console.log(`Server is listning on ${PORT}`)
})
