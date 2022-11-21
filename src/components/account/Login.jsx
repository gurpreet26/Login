import React from 'react'
import './Login.css'
import {  TextField, Button } from '@mui/material'
import { useState,useContext } from 'react'
import { API } from '../../service/api'
import { DataContext } from '../../context/DataProvider'

import {useNavigate} from 'react-router-dom';

export const Login = ({isUserAuthenticated}) => {
    const intialValues={
        name: '',
        username: '',
        password: ''

    }
    const loginIntialvalues={
        username:'',
        password:''
    }

    const [account, setAccount] = useState("login")
    const[signup, setSignUp]=useState(intialValues)
    const[error, setError]=useState('');
    const[login, setLogin]=useState(loginIntialvalues)
    const {setAccount1} =useContext(DataContext)
    const navigate=useNavigate();

    const imageUrl = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png'
   
    const onchangeInput = (e) =>{
        setSignUp({...signup, [e.target.name]:e.target.value});

    }

    const signUpUser = async() =>{
      let response = await API.userSignup(signup);
      if(response.isSuccess){
        setError('');
        setSignUp(intialValues);
        setAccount('login')
      }
      else{
        setError("Somethimg went wrong! plz try again")
      }
    }
    //
    const toggleSignUp= () =>{
        account ==='signup' ? setAccount('login') : setAccount('signup')
    }
//
    const onValueChange =(e) =>{
        setLogin({...login, [e.target.name]:e.target.value})
    }
    const loginUser = async() =>{
       let response= await API.userLogin(login)
       if(response.isSuccess){
        setError('');

        sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
        sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
       
        setAccount1({username:response.data.username,name:response.data.name})

        isUserAuthenticated(true);

        navigate('/');
       
       }else{
        setError("Something went wrong ")
       }
    }
    return (<>
        <div className='box'>
            <img src={imageUrl} alt='imagecdcd' className='img' />
        { account ==='login' ? 
            <div className='box2'>
                <TextField variant='standard' value={login.username} label='     Username'   onChange={(e) => onValueChange(e)} name="username"/>
                <TextField variant='standard' value={login.password} label='     Password'   onChange={(e) => onValueChange(e)} name="password"/>
                
                {error &&<p >{error}</p >}
                <Button variant='contained' className='button1' onClick={() => loginUser()}> Login</Button>
                <p>OR</p>
                <Button variant='standard' onClick={() =>toggleSignUp()}> CREATE Account</Button>
            </div>

:

            <div className='box2'>
                <TextField variant='standard' onChange={(e) => onchangeInput(e)} label='Enter Name' name='name' />
                <TextField variant='standard' onChange={(e) => onchangeInput(e)} label='Enter Username' name='username' />
                <TextField variant='standard'  onChange={(e) => onchangeInput(e)} label='Enter Password' name='password' />
               {error && <p>{error}</p>}
                <Button variant='contained' className='button1' onClick={() => signUpUser()}> SignUp</Button>
                <p>OR</p>
                <Button variant='standard' onClick={()=>toggleSignUp()}>You Already have Acoount</Button>
            </div>}
        </div>
    </>
    )
}
