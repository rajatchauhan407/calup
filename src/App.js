import './App.css';
import {React, useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import LoginForm from './pages/loginForm';
import CheckAuth from './pages/check-auth';
import Multiply from './pages/multiply/multiply';
import Subtract from './pages/subtract/subtract';
import Add from './pages/add/add';
import Divide from './pages/divide/divide';
import Header from "./components/header/header";
import Home from './pages/homepage';
import AuthContext from './store/auth-context-new';

function App() {
  const authCtx = useContext(AuthContext);
  console.log(authCtx);
  function logoutHandler(){
    console.log("Logout Handler called !!!")
}
  return ( 
    <div className="App">
      <Header />
      
      <Route path="/" exact>
          <Redirect to="/home" />
      </Route>
      {!authCtx.isLoggedIn && (<Route path="/login">
        <LoginForm />
      </Route>)}
      
      {authCtx.isLoggedIn && (<Route path="/login"><Redirect to="/home" /></Route>)}
      {authCtx.isLoggedIn && (<Route path="/home"><Home /></Route>)}
      {authCtx.isLoggedIn && (<Route path="/multiply"><Multiply /></Route>)}
      {authCtx.isLoggedIn && (<Route path="/divide"><Divide /></Route>)}
      {authCtx.isLoggedIn && (<Route path="/add"><Add /></Route>)}
      {authCtx.isLoggedIn && (<Route path="/subtract"><Subtract /></Route>)}
      {/* {!authCtx.isLoggedIn && (<Route path="/login"><LoginForm /></Route>) } */}
      
      {/* <Route path="/home">
        {authCtx.isLoggedIn && (<Home />)}
        {!authCtx.isLoggedIn && (<LoginForm />)}
      </Route> */}

      {/* <Route path="/login">
          <Redirect to="/login" />
      </Route> */}
    </div>
  );
}

export default App;
