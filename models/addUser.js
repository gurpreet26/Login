import mongoose from "mongoose";

const userSchema =mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})

const user =mongoose.model('userAdded', userSchema)

export default user;