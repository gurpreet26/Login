import  express  from "express";

import {signupUser,loginUser,logoutUser} from '../controller/user_controller.js'; 
import {uploadImage} from '../controller/Image_controller.js'
import upload from '../utils/upload.js'
import { userAdd} from "../controller/AddUser.js";
import {authenticateToken} from '../controller/jwt_controller.js'

const router = express.Router();

router.post('/signup', signupUser);
router.post('/login',loginUser)
 router.post('/file/upload', upload.single('file') ,uploadImage)
 router.post('/addUser',authenticateToken, userAdd)
 router.post('/logout', logoutUser);
 


export default router;