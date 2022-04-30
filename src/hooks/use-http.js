import {React, useState} from "react";

const useHttp = (requestConfig)=>{
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const sendRequest = async() =>{
        setIsLoading(true);
        setError(null);
        try{
            console.log(requestConfig.url);
            const response = await fetch(
                requestConfig.url,
                {
                    method:requestConfig.method ? requestConfig.method : 'GET',
                    headers: requestConfig.headers ? requestConfig.headers : {},
                    body:requestConfig.body ? JSON.stringify(requestConfig.body): null
                }
            );
            setIsLoading(false);
            return response.json();
        }catch(err){
            setError(err.message || "something went wrong");
            setIsLoading(false);
            return error;
        }
    }
    return {
        isLoading,
        error,
        sendRequest
    }
}
export default useHttp;