 import mongoose from 'mongoose'



export const Connection = async(URL) =>{
   
  
    try {
         await mongoose.connect(URL, {useNewUrlParser:true});
         console.log("DB connected kezi")
    } catch (error) {
        console.log(" error", error)
        
    }
};
 export default Connection;