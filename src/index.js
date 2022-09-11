import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {Helmet} from "react-helmet";
import {AuthContextProvider} from "./store/auth-context-new";
import { AuthContextProviderJWT } from './store/auth-context';
import { Provider } from 'react-redux';
import {store} from './app/store'; 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
    <Provider store={store}>
    <AuthContextProvider>
        <App />
    </AuthContextProvider>
    </Provider>
    </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
