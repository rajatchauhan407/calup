import React,{useContext} from "react";




const sendAuthUrl = 'http://localhost:9000/login';
const SignUpUrl = 'http://localhost:9000/signUp';
export const sendAuthData = async(authData) =>{
        try{
            const response = await fetch(sendAuthUrl,{
                method:'POST',
                mode:'cors',
                credentials:'include',
                body: JSON.stringify(authData),
                headers:{
                    "Content-Type": "application/json",
                }
            });
            const data = await response.json();
            
            if(data.message){
                throw new Error(data.message || "SomeThing Went Wrong");
            }
            return data;
        }catch(error){
            // console.log(error);
            return {message: error.message};
        }    
}

export const sendSignUpRequest = async (authData) => {
    try{
        const response =   await fetch(SignUpUrl,{
                method:'POST',
                mode:'cors',
                body:JSON.stringify(authData),
                credentials:'include',
                headers:{
                    "Content-Type":"application/json"
                }
            });
            // return {data:{
            //     message:"User Saved"
            // }}
            const data = await response.json();
            if(data.message){
                throw new Error(data.message || "SomeThing Went Wrong");
            }
            return data;
    }catch(error){
        // console.log(error);
         return {message: error.message};
    }
}