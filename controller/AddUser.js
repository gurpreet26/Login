import addUser from '../models/addUser.js'

export const userAdd =async(request,response)=>{

   try {
    const user= request.body;
    const newUserAdded= new addUser(user)

    await newUserAdded.save()

    return response.status(200).json({msg:"sign sucess"})


    
   } catch (error) {
    response.status(400).json({msg:"unsucessful user"})
    
   }
}