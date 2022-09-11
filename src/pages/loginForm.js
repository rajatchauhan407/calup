import { React, useEffect, useState, useContext, useRef } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import useInput from "../hooks/use-input";
import styles from "./loginForm.module.css";
import Button from "@mui/material/Button";
import useHttp1 from "../hooks/use-http1";
import { sendAuthData } from "../lib/api";
import { sendSignUpRequest } from "../lib/api";
import AuthContext from "../store/auth-context";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import AuthContextJWT from '../store/auth-context';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import axios from "axios";
import { textTransform } from "@mui/system";

function LoginForm() {

  const authCtx = useContext(AuthContext);
  // console.log(authCtxJWT);

  const [isLogin, setIsLogin] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [formIsValid, setFormIsValid] = useState(true);

  let enteredEmail = useRef();
  let enteredPassword = useRef();

  const validateEmail = (email) => {
    const regex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    const check = regex.test(email);
    if(check){
      setEmailIsValid(true);
    }else{
      setEmailIsValid(false);
    }
  };

  
  // contain only characters, numeric digits, underscore and first character must be a letter
  const validatePassword = (password) => {
    // const regex = new RegExp(/^[A-Za-z]\w{7,21}$/);
    // const check = regex.test(password);
    const check = true;
    if(check){
      setPasswordIsValid(true);
    }else{
      setPasswordIsValid(false);
    }
  }

  function switchAuthHandler() {
    setIsLogin((prevState) => !prevState);
  }

  function checkFormValidity(){
    if(emailIsValid && passwordIsValid){
      setFormIsValid(true);
    }else{
      setFormIsValid(false);
    }
  }
  const { httpState: signInState, sendRequest: sendSignInRequest } =
    useHttp1(sendAuthData);
  const { httpState: signUpState, sendRequest: signUpRequest } =
    useHttp1(sendSignUpRequest);
  const submitHandler = async (event) => {
    console.log(isLogin);
    event.preventDefault();
    const authData = {
      email: enteredEmail.current.value,
      password: enteredPassword.current.value,
    };
    validateEmail(authData.email);
    validatePassword(authData.password);
    // checkform validity in function since state scheduling causing problem
    checkFormValidity();

    if (!formIsValid) {
      console.log("Form is not valid")
      return;
    }
    
    if(!isLogin){
      sendSignInRequest(authData);
    }
    if(isLogin){
      signUpRequest(authData);
    }
    // resetEmail();
    // resetPassword();
  };
  
//   useEffect(()=>{
//     if(signInState.status==="completed" && signInState.data){
//         authCtx.onLogin();
//   }
// },[signInState]);

  return (
    <>
   {(signUpState.status === "completed" && (signUpState.error)) && <Alert 
        severity="error"
        sx={{
          width:"92%",
          alignSelf:"center"
        }}
        >{signUpState.error}</Alert>}
    {(signUpState.status === "completed" && (signUpState.data)) && <Alert 
        severity="success"
        sx={{
          width:"92%",
          alignSelf:"center"
        }}
        >{signUpState.data.message}</Alert>}
    <form onSubmit={submitHandler} className={`${styles["form-container"]}`}>
      {/* <div className={`${styles["image-container"]}`}>
        <h1>{isLogin ? " Sign Up" : "Sign In"}</h1>
        <h1 className={styles.caluph1}>To CalUp</h1>
      </div> */}
      <Box
        sx={{
          width: "90%",
          margin: "0 auto",
          padding: "5% 0",
        }}
      >
        <Card
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CardMedia
            component="img"
            height="200"
            alt="Calup"
            src={require("../images/calup.png")}
            sx={{
              width: "70%",
            }}
          />
        </Card>
      </Box>
      <div className={styles["form-control"]}>
        <input
          type="text"
          className={`${styles["input-field"]} ${!formIsValid ? styles.invalid:''}`}
          ref={enteredEmail}
          autoComplete="on"
          required
        />
        <label
          className={`${styles["input-label"]} ${!formIsValid ? styles["invalid-label"]:''}`}
        >
          Email
        </label>
      </div>
      <div className={styles["form-control"]}>
        <input
          type="password"
          // value={password}
          className={`${styles["input-field"]} ${!formIsValid ? styles.invalid:''}`}
          ref={enteredPassword}
          required
        />
        <label
          className={`${styles["input-label"]} ${!formIsValid ? styles["invalid-label"]:''}`}
        >
          Password
        </label>
      </div>
      <div className={styles["form-control"]}>
        <Button 
        type="submit"
        variant="contained"
        color="primary"
        sx={{
            textTransform:"none"
          }}
        >
          {isLogin ? "Get Started" : "Login"}
        </Button>
      </div>
      <div className={styles["form-control"]}>
        <Button
          variant="contained"
          color="success"
          onClick={switchAuthHandler}
          className={styles.switchAuthHandleBtn}
          sx={{
            textTransform:"none"
          }}
        >
          {isLogin ? "Click To Login" : "Click to SignUp"}
        </Button>
      </div>
      
      <Button
        variant="contained"
        startIcon={<img src={require("../images/google.png")} alt="Google" />}
        sx={{
          width: "88%",
          alignSelf: "center",
          fontSize: "24px",
          textTransform: "none",
        }}
        color="secondary"
        href="http://localhost:9000/authgoogle"
      >
        SignIn with Google
      </Button>
    </form>
    </>
  );
}
export default LoginForm;
//
