import {GridFsStorage} from 'multer-gridfs-storage'
import dotenv from 'dotenv'
import multer from'multer'

dotenv.config();
const USERNAME= process.env.DB_USERNAME;
const PASSWORD= process.env.DB_PASSWORD;
const storage = new GridFsStorage({

    url:`mongodb+srv://${USERNAME}:${PASSWORD}@blog-app.inrzqsb.mongodb.net/?retryWrites=true&w=majority`,
    options:{useNewUrlParser:true},
    file:(request,file) =>{
        const match=["image/png","image/jpg"];

        if (match.indexOf(file.memeType)===-1){
            return `${Date.now()}-bolg-${file.originalname}`;
        }
        return{
            bucketName:"photos",
            fileName:`${Date.now()}-bolg-${file.originalname}`
        }
           
        
    }
})
export default multer({storage});