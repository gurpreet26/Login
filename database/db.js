 import mongoose from 'mongoose'



export const Connection = async(username, password) =>{
    const URL =`mongodb+srv://${username}:${password}@blog-app.inrzqsb.mongodb.net/?retryWrites=true&w=majority`;
    try {
         await mongoose.connect(URL, {useNewUrlParser:true});
         console.log("DB connected kezi")
    } catch (error) {
        console.log(" error", error)
        
    }
};
 export default Connection;