import {React, useContext} from "react";
import SuccessBtn from "../components/buttons/success";
import AuthContext from "../store/auth-context";
function Home(){
    const authCtx = useContext(AuthContext);
    const logout = ()=>{
        console.log("hello");
        authCtx.logout();
    }
    return (
        <div>
            <h1>Hello !!</h1>
            <SuccessBtn 
            backgroundColor="green"
            width="50%"
            cursor="pointer"
            />
            <SuccessBtn 
            backgroundColor="red"
            width="50%"
            text="Logout"
            cursor="pointer"
            onClick={logout}
            />
        </div>
    );
}
export default Home;
