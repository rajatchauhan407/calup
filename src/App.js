import './App.css';
import {React, useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import LoginForm from './pages/loginForm';
import Home from './pages/homepage';
import AuthContext from './store/auth-context';
function App() {
  const authCtx = useContext(AuthContext);
  // console.log(authCtx);
  return (
    <div className="App">
      <Route path="/">
          <Redirect to="/home" />
      </Route>
      {/* {!authCtx.isLoggedIn && (<Route path="/login">
        <LoginForm />
      </Route>)} */}
      <Route path="/login">
        <LoginForm />
      </Route>
      {/* <Route path="/home">
        {authCtx.isLoggedIn && (<Home />)}
        {!authCtx.isLoggedIn && (<Redirect to="/login" /> )}
      </Route> */}
      <Route path="/home">
        <Home />
      </Route>
      {/* <Route path="*">
          <Redirect to="/login" />
      </Route> */}
    </div>
  );
}

export default App;
