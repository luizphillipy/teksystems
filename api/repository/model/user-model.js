const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:String,
    name:String,
    role:String
});
mongoose.model(process.env.USER_MODEL, userSchema,process.env.USER_COLLECTION);

module.exports=userSchema;
