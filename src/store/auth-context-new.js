import React, { useEffect, useState } from 'react';



const AuthContext = new React.createContext({
    isLoggedIn:false,
    email:'',
    name:'',
    imageUrl:'',
    onLogin:()=>{},
    onLogout:()=>{}
});
// Provider component in auth-context file only 
export const AuthContextProvider = (props)=>{
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [imageUrl, setImageUrl] = useState('');

    useEffect(()=>{
     async function getMe(){
      const options = {
        method:'GET',
        mode:'cors',
        credentials:'include'
      }
      const data = await fetch('http://localhost:9000/auth-me',options).then(
        res => res.json()
      ).catch(err=> err);
      return data;
     }
     getMe().then(res => {if(res.email){
      setIsLoggedIn(true);
      setEmail(res.email);
      setImageUrl(res.picture);
     }});
    },[]);
   const loginHandler = ()=>{ console.log("Login Handler")};
   const logoutHandler = () =>{console.log("Logout Handler")};

   const contextValue = {
    isLoggedIn :isLoggedIn,
    onLogin:loginHandler,
    onLogout:logoutHandler,
    email:email,
    imageUrl:imageUrl
   }
   return (<AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>);
}
export default AuthContext;