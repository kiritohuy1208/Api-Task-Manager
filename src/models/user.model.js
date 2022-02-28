const mongoose = require('mongoose')
const UserSChema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        minlength:1
    },
    password:{
        type:String,
        required:true,
        minlength:8
    },
    sessions:[
    { 
        token:{
            type:String,
            required:true
        },
        expiresAt:{
            type:Number,
            required:true
        }
    }
    ]
})
const User = mongoose.model("UserSchema",User)
module.exports = {User}