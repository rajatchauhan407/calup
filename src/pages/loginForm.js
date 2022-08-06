import { React, useEffect, useState, useContext} from "react";
import useInput from "../hooks/use-input";
import styles from "./loginForm.module.css";
// import { NavLink } from "react-router-dom";
// import useHttp from "../hooks/use-http";
// import GoogleLogin, { GoogleLogout } from 'react-google-login';
import useHttp1 from "../hooks/use-http1";
import {sendAuthData} from "../lib/api";
import { sendSignUpRequest } from "../lib/api";
import AuthContext from "../store/auth-context";
// import { useHistory } from "react-router-dom";
import axios from "axios";
function LoginForm() {
  const [isLogin, setIsLogin] = useState(false);
  const authCtx = useContext(AuthContext);

  const {
    value: email,
    isTouched: emailTouched,
    isValid: emailIsValid,
    reset: resetEmail,
    inputHandler: emailInputHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput((value) => {
    return value.trim() !== "";
  });
  const {
    value:password,
    isTouched:passwordTouched,
    isValid: passwordIsValid,
    reset: resetPassword,
    inputHandler: passwordInputHandler,
    inputBlurHandler: passwordBlurHandler
  } = useInput(value => value !== "" );
  const authData = {
    email:email,
    password: password
  }
  function switchAuthHandler(){
    setIsLogin((prevState)=> !prevState);
  }
  // const history = useHistory();
  // console.log(history);
  // const {sendRequest, isLoading} = useHttp({url:"http://localhost:9000/signup", method:"POST",
  // headers: {
  //   'Content-Type': 'application/json',
  // },
  // body:{
  // email:email,
  // password:password
  // }});
  const {httpState:signInState, sendRequest:sendSignInRequest} = useHttp1(sendAuthData);
  const {httpState:signUpState, sendRequest:SignUpRequest} = useHttp1(sendSignUpRequest);
  let formIsValid = false;
  if(emailIsValid && passwordIsValid) {
    formIsValid = true;
  }
  // useEffect(
  //   ()=>{
  //     if(signInState.status === 'completed'){
  //       const currentTime = new Date().getTime();
  //       const expirationTime = currentTime + (+signInState.data.expiresIn);
  //       authCtx.login(signInState.data.token, new Date(expirationTime).toISOString());
  //       if(signInState.data.token){
  //         history.replace('/home');
  //       }
  //     }else{
  //       // console.log(signInState);
  //     } 
  //   },[signInState,signUpState,isLogin,authCtx,history]
  // );
  const submitHandler = async (event) => {
    event.preventDefault();
    if(!formIsValid){
      return;
    }
    if(isLogin){
      SignUpRequest(authData);
    }else{
      sendSignInRequest(authData);
    }
    // resetEmail();
    // resetPassword();
  };
  // const googleClickHandler = async ()=>{
  //   const data = {
  //     message:"Request Check"
  //   };
  //  const response = await fetch('http://localhost:9000/authgoogle',{
  //       method:'POST',
  //       mode:'cors',
  //       credentials: 'same-origin',
  //       headers:{
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(data)
  //     }).then(res => {
  //      return res;
  //     });
  //     console.log(await response.json());
  //    }
  return (
    <form onSubmit={submitHandler} className={`${styles["form-container"]}`}>
      <div className={`${styles["image-container"]}`}>
        <h1>{isLogin ? ' Sign Up' : 'Sign In'}</h1>
        <h1 className={styles.caluph1}>To CalUp</h1>
      </div>
      <div className={styles["form-control"]}>
        <input
          type="text"
          value={email}
          className={`${styles["input-field"]} ${
            !emailIsValid && emailTouched ? styles["invalid"] : ""
          }`}
          onChange={emailInputHandler}
          onBlur={emailBlurHandler}
          autoComplete="on"
          required
        />
        <label
          className={`${styles["input-label"]} ${
            !emailIsValid && emailTouched ? styles["invalid-label"] : ""
          }`}
        >
          Email
        </label>
      </div>
      <div className={styles["form-control"]}>
        <input
          type="password"
          value={password}
          className={`${styles["input-field"]} ${
            !passwordIsValid && passwordTouched ? styles["invalid"] : ""
          }`}
          onChange={passwordInputHandler}
          onBlur={passwordBlurHandler}
          required
        />
        <label
          className={`${styles["input-label"]} ${
            !passwordIsValid && passwordTouched ? styles["invalid-label"] : ""
          }`}
        >
          Password
        </label>
      </div>
      <div className={styles["form-control"]}>
        <button disabled={!formIsValid}>
          {isLogin ? 'Get Started' : 'Login'}
        </button>
      </div>
      <div className={styles["form-control"] }>
        <button onClick={switchAuthHandler} className={styles.switchAuthHandleBtn}>
          {isLogin ? 'Click To Login' : 'Click to SignUp'}
        </button>
      </div>
      
    <div className={styles["form-control"]}>
    </div>
    <div className={styles["form-control"]}>
      {/* <GoogleLogin
    buttonText="Sign In With Google"
    onClick={googleClickHandler}
  /> */}
  <a className={styles.active} href="http://localhost:9000/authgoogle"><div className={styles.googleButton}>SignIn with google</div></a>
      </div>
    </form>
    
  );
}
// 357888347936-t044jniqpmrc0ubjkgrn4h50vggi38uv.apps.googleusercontent.com
export default LoginForm;
//