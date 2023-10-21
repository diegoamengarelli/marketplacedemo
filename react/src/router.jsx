import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./views/Login";
import Signup from "./views/Signup";

const router = createBrowserRouter([
    { path:'/' , element: <App/> },
    { path:'/login' , element: <Login/> },
    { path:'/Signup' , element: <Signup/> },

])

export default router;