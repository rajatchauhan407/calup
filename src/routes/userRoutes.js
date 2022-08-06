import {Navigate, Outlet} from "react-router-dom";
import AuthContext from "../store/auth-context-new"
import {useContext} from "react";

function UserRoutes(){
    let authCtx = useContext(AuthContext);
    return (
        <>
         {
            authCtx.isLoggedIn ? 
            <Outlet/>:
            <Navigate to="/login"/>
         }   
        </>
    )
}

export default UserRoutes;