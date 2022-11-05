import './App.css';
import {React, useContext, useState} from 'react';
import {Route, Routes} from 'react-router-dom';
// import LoginForm from './pages/loginForm';
// import CheckAuth from './pages/check-auth';
// import Multiply from './pages/multiply/multiply';
// import Subtract from './pages/subtract/subtract';
// import Add from './pages/add/add';
// import Divide from './pages/divide/divide';
import Header from "./components/header/header";
// import Home from './pages/homepage';
import AuthContext from './store/auth-context-new';
import Routing from './routes/routing';
import Result from './components/results/resultsNew';
function App() {
  const authCtx = useContext(AuthContext);

  function logoutHandler(){
    console.log("Logout Handler called !!!")
  }
  
  return ( 
    <div className="App">
    {/* <Result/> */}
    {authCtx.isLoggedIn?
    <Header />:
    ''
    }
    <Routing />
    </div>
  );
}

export default App;
