const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        minlength:1
    },
    _listId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"List"
    },
    completed:{
        type:Boolean,
        default:false
    }
})
const Task = mongoose.model("Task",TaskSchema)

module.exports = {Task}