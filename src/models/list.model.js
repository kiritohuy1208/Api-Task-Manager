const mongoose = require('mongoose')

const ListSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim: true,
        minlenght:1
    },
    _userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"

    }
})
const List = mongoose.model("List",ListSchema)

module.exports ={List}