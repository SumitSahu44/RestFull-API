const mongoose = require('mongoose');

// user db schema

const userSchema = mongoose.Schema({
 
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        require:true,
        unique:true
    },
     password:{
        type: String,
        required:true
    },

})

module.exports = mongoose.model("user",userSchema)
