import {Navigate, Outlet} from "react-router-dom";
import AuthContext from "../store/auth-context-new"
import {useContext} from "react";

function UserRoutes(){
    let authCtx = useContext(AuthContext);
    console.log(authCtx.isLoggedIn);

    return (
        <>
         {
            !authCtx.isLoggedIn ? 
            <Navigate to="/login"/>
            :
            <Outlet/>  
            // <Outlet/>
         }   
        </>
    )
}

export default UserRoutes;