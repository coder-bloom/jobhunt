const mongoose = require("mongoose");

const userschema = mongoose.Schema({
    name:{
        type:String 
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String 
    },
    number:{
        type:String 
    },
    work_status:{
        type:String ,
        enum:["fresher","experience"]
    },
})

const usermodel = mongoose.model("user",userschema);
module.exports = usermodel;