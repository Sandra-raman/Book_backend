const mongoose=require('mongoose')
//schema creation
const ReviewSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    },
    reviewnote:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    rating:{
        type:String,
        required:true
    },
    bookImg:{
        type:String,
        required:true
    },
    userId:{
         type:String,
    }
})
//model
const reviews=mongoose.model('reviews',ReviewSchema)
module.exports=reviews