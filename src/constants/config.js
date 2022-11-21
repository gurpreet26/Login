//API notification message

export const API_NOTIFICATION_MESSAGES= {
    loading:{
        title:'Loading...',
        message:" Data is being loaded, please wait"
    },
    success:{
        title:'success',
        message:" data sucessful loaded"
    },
    responseFailure:{
        title:'Error',
        message:" an error occured during  response from the server "
    },
    requestFailure:{
        title:'Error',
        message:"An Error occured while parsin request dat"
    },
    networkError:{
        title:'Error',
        message:"Unable to connect ... plz check internet"
    }

}

//api service call

export const SERVICE_URL ={
    userSignup:{url:'/signup', method:'POST'},
    userLogin:{url:'/login', method:'POST'}
}