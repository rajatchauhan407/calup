import { useContext } from "react";
import {Navigate, Outlet} from "react-router-dom";
import LoginForm from "../pages/loginForm";
import AuthContext from '../store/auth-context-new';

function ProtectedRoute(){
    
    const authCtx = useContext(AuthContext);
    console.log(authCtx);
    return (
        <>
    {
        !authCtx.isLoggedIn?
        <Outlet/>
        :
        <Navigate to='/home'/>
    }
    </>
    )
}
export default ProtectedRoute;