import React, { useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import { BACKEND_DEV_URL } from '../config/api';

const AuthContext = new React.createContext({
    isLoggedIn:'',
    email:'',
    name:'',
    imageUrl:'',
    onLogin:()=>{},
    onLogout:()=>{}
});
// Provider component in auth-context file only 
export const 

AuthContextProvider = (props)=>{
  let navigate = useNavigate();
  const loggedIn = localStorage.getItem('loggedIn');
  const [isLoggedIn,setIsLoggedIn] = useState(loggedIn || false);
  const [email, setEmail] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  async function getMe(){
    const options = {
      method:'GET',
      mode:'cors',
      credentials:'include'
    }
    const data = await fetch(BACKEND_DEV_URL+'/auth-me',options).then(
      res => res.json()
    ).catch(err=> err);
    return data;
   }
  
  // login handler receives data from getMe() 
   const loginHandler = ()=>{ 
    console.log("Is it working");
    getMe().then(res => {if(res.email){
      localStorage.setItem('loggedIn',true);
      localStorage.setItem('email',res.email);
      localStorage.setItem('profilePic',res.picture);
      setIsLoggedIn(true);
      setEmail(res.email);
      setImageUrl(res.picture);
     }else{
      navigate('../login');
     }});
   }
  //  useEffect to retrieve token
    useEffect(()=>{
      if(isLoggedIn){
        console.log("Check logged In -1 ")
        const email = localStorage.getItem('email');
        const imageUrl = localStorage.getItem('profilePic');
          setIsLoggedIn(true);
          setEmail(email);
          setImageUrl(imageUrl);
      }else{
        console.log("check for login handler");
          loginHandler();
      }
    },[isLoggedIn]);
   
   const logoutHandler = async () =>{
    const options = {
      method:'POST',
      mode:'cors',
      credentials:'include',
      "Content-Type":"application/json"
    }
    await fetch(BACKEND_DEV_URL+'/logout', options).then(async (res)=>{
      const data = await res.json();
      console.log(data.message);
      localStorage.removeItem('email');
      localStorage.removeItem('loggedIn');
      localStorage.removeItem('profilePic');
      setIsLoggedIn(false);
      navigate('../login');
    }).catch(error => {
      console.log(error);
    });
   };

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