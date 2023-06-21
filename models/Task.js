const mongoose= require('mongoose');
const taskSchema= new mongoose.Schema({
    title:String,
    desc: String,
    username: String,
    userEmail: String,
    userId: String,
    completed: Boolean
})
module.exports=new mongoose.model("Task", taskSchema);