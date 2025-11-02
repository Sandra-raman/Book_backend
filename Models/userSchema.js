const mongoose=require('mongoose')
//schema creation
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    profilePic:{
        type:String,
    }
})
//model
const users=mongoose.model('users',userSchema)
module.exports=users