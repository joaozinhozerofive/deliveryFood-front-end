import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app.routes.jsx";
import { AuthRoutes } from "./auth.routes.jsx";
import { useAuth } from "../hooks/auth.jsx";
import { ToastContainer, toast } from 'react-toastify';



export function Routes() {
    const {user} = useAuth();

    return (
        <BrowserRouter>
        <ToastContainer 
            autoClose = {1000}
            theme="dark"
            />
        {user  ? <AppRoutes/> : <AuthRoutes/>}
        </BrowserRouter>
    )
}