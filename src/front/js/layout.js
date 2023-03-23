import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup } from "./component/Signup.jsx";
import { Login } from "./component/Login.jsx";
import { Home } from "./pages/home.jsx";


import injectContext from "./store/appContext";


//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Signup />} path="/signup" />
                        <Route element={<Login />} path="/login" />
                    </Routes>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
