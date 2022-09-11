import React,{useState, useCallback} from 'react';
import AuthContext from './auth-context-new';
import {useNavigate} from 'react-router-dom';
const AuthContextJWT = React.createContext({
    token:'',
    isLoggedIn: false,
    login:(token,expirationTIme) =>{},
    logout: ()=>{}
});

let logoutTimer;
/********** Calculates the time reamining for logout to take place *******************/
const calculateRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();
    const remainingDuration = adjExpirationTime - currentTime;
    return remainingDuration;
}

/**********Retrieves the stored token and expiration time from the local storage *******/
const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem('token');
    const storedExpirationDate = localStorage.getItem('expiresIn');
    const remainingTime = calculateRemainingTime(storedExpirationDate);
    if(remainingTime <= 0){
        localStorage.removeItem('token');
        localStorage.removeItem('expiresIn');
        return null;
    }
    return {
        token:storedToken,
        duration: remainingTime
    }
}



export const AuthContextProviderJWT = (props)=>{
        const tokenData = retrieveStoredToken();
        let initialToken;
        if(tokenData){
            initialToken = tokenData.token;
    }
        const [token, setToken] = useState(initialToken);

        let navigate = useNavigate();
        const loginHandler = (token, expirationTime)=>{
            setToken(token);
        localStorage.setItem('token', token);
        localStorage.setItem('expiresIn', expirationTime);
        const remainingTime = calculateRemainingTime(expirationTime);
        logoutTimer = setTimeout(()=>{
            logoutHandler();
        },remainingTime);
        navigate('../home');
    };

    const logoutHandler = useCallback(() => {
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        clearTimeout(logoutTimer);
    },[]);
    const contextValue = {
        token: token,
        isLoggedIn: '',
        login: loginHandler,
        logout: logoutHandler
    };

    return (
        <AuthContextJWT.Provider value={contextValue}>
            {props.children}
        </AuthContextJWT.Provider>
    )
}

export default AuthContextJWT;