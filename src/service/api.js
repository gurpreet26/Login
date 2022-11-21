import axios from 'axios'
import { API_NOTIFICATION_MESSAGES , SERVICE_URL} from '../constants/config';

const API_URL ='http://localhost:8000';

const axiosInstance= axios.create({
    baseURL: API_URL,
    timeout:1000,
    headers:{
        'Content-Type': 'application/json'
    }

});

axiosInstance.interceptors.request.use(
    function(config){
        return config;
    },
    function (error){
        return Promise.reject(error)
    }
);

axiosInstance.interceptors.response.use(
    function(response){
         return processResponse(response);

    },
    function(error){
        return Promise.reject(processError(error))
    }
)

const processResponse =(response) =>{
    if(response?.status === 200){
        return {isSuccess: true, data:response.data}
    }
    else{
        return{
            isFailure:true,
            status: response?.status,
            msg:response?.msg,
            code:response?.code
        }
    }
}

const processError = (error) =>{
    if(error.response){
        //Request made and server responed with a status other
        //that fails out of the range
        console.log("Error In Response:", error.toJSON()) ;  
        return{
            isError:true,
            msg:API_NOTIFICATION_MESSAGES.requestFailure,
            code:error.response.status
            }
    }else if(error.request){
        //request made but no response was recived
        console.log("Error In Request", error.toJSON()) ;  
        return{
            isError:true,
            msg:API_NOTIFICATION_MESSAGES.requestFailure,
            code:""
            }
    }else{
        //something happened in set
        console.log("Error In Network:", error.toJSON()) ;  
        return{
            isError:true,
            msg:API_NOTIFICATION_MESSAGES.networkError,
            code:""
            }

    }

}

const API ={};
for(const [key,value] of Object.entries(SERVICE_URL)){
    API[key] =(body, showUploadProgress,showDownloadProgres)=>
        axiosInstance({
            method:value.method,
            url:value.url,
            data:body,
            responseType:value.responseType,
            onUploadProgress: function(progressEvent) {
                if (showUploadProgress) {
                    let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    showUploadProgress(percentCompleted);
                }
            },
            onDownloadProgress: function(progressEvent){
                if(showDownloadProgres){
                    let percentageCompleted = Math.round((progressEvent.loaded*100)/progressEvent.total)
                    showDownloadProgres(percentageCompleted);
                }
            },
        })
    }
export {API};