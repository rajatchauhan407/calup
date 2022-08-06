import {Routes, Route} from "react-router-dom";
import Home from "../pages/homepage";
import LoginForm from "../pages/loginForm";
import Multiply from "../pages/multiply/multiply";
import Divide from "../pages/divide/divide";
import Add from "../pages/add/add";
import Subtract from "../pages/subtract/subtract";
import Header from "../components/header/header";
import ProtectedRoute from "./protectedRoute";
import UserRoutes from "./userRoutes";
const Routing = (props)=>{
return (

<Routes >
        <Route element={<UserRoutes />}>
            <Route path="/" element={<Home />} /> 
            <Route path="/home" element={<Home/>} />
            <Route path="/multiply" element={<Multiply/>} />
            <Route path="/divide" element={<Divide/>} />
            <Route path="/add" element={<Add />} />
            <Route path="/subtract" element={<Subtract/>} />
        </Route>     
        <Route element={<ProtectedRoute/>}>
            <Route path="/login" element={<LoginForm/>} />
        </Route>
        <Route path="*" element={<LoginForm/>} />
</Routes>
);
}

export default Routing;