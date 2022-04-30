const sendAuthUrl = 'http://localhost:9000/login';
const SignUpUrl = 'http://localhost:9000/signUp';
export const sendAuthData = async(authData) =>{
        try{
            const response = await fetch(sendAuthUrl,{
                method:'POST',
                body: JSON.stringify(authData),
                headers:{
                    "Content-Type": "application/json",
                }
            });
            const data = await response.json();
            if(data.message){
                throw new Error(data.message || "SomeThing Went Wrong");
            }
            return {data:data}
        }catch(error){
            // console.log(error);
            return {message: error.message};
        }
        
}

export const sendSignUpRequest = async (authData) => {
    try{
            const response = await fetch(SignUpUrl,{
                method:'POST',
                mode:'cors',
                body:JSON.stringify(authData),
                headers:{
                    "Content-Type":"application/json"
                }
            });
            const data = await response.json();
            if(data.message){
                throw new Error(data.message || "SomeThing Went Wrong");
            }
            console.log(data);
            return data;
            
    }catch(error){

         return {message: error.message};
    }
}