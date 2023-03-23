import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Signup } from "../component/Signup.jsx";
import { Login } from "../component/Login.jsx";
import { Private } from "../component/Private.jsx";

export const Home = () => {
    const { store, actions } = useContext(Context);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="container mt-5 d-flex justify-content-center">
            {store.token ?
                <Private />
            :
                <>
                    <Login />
                </>    
            }
        </div>
    )

}