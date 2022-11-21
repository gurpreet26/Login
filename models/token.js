import mongoose from "mongoose";

const tokenScehma =mongoose.Schema({
    token:{
        type: String,
        required:true
    }
})

const token =mongoose.model('token', tokenScehma);

export default token; 