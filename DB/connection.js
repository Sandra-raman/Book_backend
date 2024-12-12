//
const mongoose=require('mongoose')
const connectionstring=process.env.connectionstring;
mongoose.connect(connectionstring).then(res=>{
    console.log("PF server is connected to DB ");  
})
.catch(err=>{
    console.log("Error "+err);
})