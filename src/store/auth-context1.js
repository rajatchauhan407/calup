import React,{useState, useEffect, useCallback} from 'react';

let logoutTimer;  // Initializing logout timer remaining time calculation

const AuthContextJWT = React.createContext({
    token:'',
    isLoggedIn: false,
    login:(token,expirationTIme) =>{},
    logout: ()=>{}
});

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
    const storedExpirationDate = localStorage.getItem('expirationTime');
    const remainingTime = calculateRemainingTime(storedExpirationDate);
    if(remainingTime <= 0){
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        return null;
    }
    return {
        token:storedToken,
        duration: remainingTime
    }
}

/***********   Component Function AuthContextProvider ********/
export const AuthContextProviderJWT = (props) =>{
    const tokenData = retrieveStoredToken();
    let initialToken;
    if(tokenData){
        initialToken = tokenData.token;
    }
    const [token, setToken] = useState(initialToken);
    const userIsLoggedIn = !!token;
    /******* function to handle Logout  *******/
    const logoutHandler = useCallback(() => {
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        clearTimeout(logoutTimer);
    },[]);

    /***************Function to handle login of the user  **********/
    const loginHandler = (token, expirationTime) =>{
        setToken(token);
        localStorage.setItem('token',"HEy");
        localStorage.setItem('expirationTime',1230001);
        const remainingTime = calculateRemainingTime(expirationTime);
        logoutTimer = setTimeout(()=>{
            logoutHandler();
        },remainingTime);
    };
     useEffect(()=>{
         if(tokenData){
            logoutTimer = setTimeout(logoutHandler,tokenData.duration)
         }
     },[tokenData, logoutHandler]);

/*******  Auth Context Value  *********/
    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    };
    return (<AuthContextJWT.Provider value={contextValue}>
        {props.children}
    </AuthContextJWT.Provider>)
}
export default AuthContextJWT;