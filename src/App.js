import './App.css';
import {React, useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import LoginForm from './pages/loginForm';
import CheckAuth from './pages/check-auth';
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
      <Route path="/" exact>
          <Redirect to="/home" />
      </Route>
      {!authCtx.isLoggedIn && (<Route path="/login">
        <LoginForm />
      </Route>)}
      
      {authCtx.isLoggedIn && (<Route path="/login"><Redirect to="Home" /></Route>)}
      {!authCtx.isLoggedIn && (<Route path="/login"><LoginForm /></Route>) }
      
      <Route path="/home">
        {authCtx.isLoggedIn && (<Home />)}
        {!authCtx.isLoggedIn && (<LoginForm />)}
      </Route>

      {/* <Route path="/login">
          <Redirect to="/login" />
      </Route> */}
    </div>
  );
}

export default App;
