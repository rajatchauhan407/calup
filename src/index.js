import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {Helmet} from "react-helmet";
import {AuthContextProvider} from './store/auth-context';
ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
    <BrowserRouter>
    <Helmet>
      <script src="https://accounts.google.com/gsi/client" async defer></script>
    </Helmet>
        <App />
    </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
