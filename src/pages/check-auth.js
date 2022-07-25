import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useLocation,Redirect} from "react-router-dom";
function CheckAuth(){
    const search = useLocation().search;
    const token = new URLSearchParams(search).get('id_token');
    
   async function getCurrentUser(id_token){
    if(id_token){
        localStorage.setItem('token',id_token)
        // const res = await axios.get('http://localhost:9000/auth-me',{
        //     headers:{
        //         'Authorization': 'Bearer '+id_token
        //     },
        //     method:'cors'
        // }).then(res =>{return res;}).catch(err => {
        //     throw err;
        // });
        // return res;
    }   
}
getCurrentUser(token);
// getCurrentUser(token).then(result => {
//     localStorage.setItem('email')
//  });
return(<div><Redirect to= "/home"/></div>);
}
export default CheckAuth;