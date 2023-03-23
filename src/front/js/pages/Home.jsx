import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Signup } from "../component/Signup.jsx";
import { Login } from "../component/Login.jsx";

export const Home = () => {
    const { store, actions } = useContext(Context);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="container mt-5 d-flex justify-content-center">
            
            

            {store.token ?
                <div className="container d-flex flex-column justify-content-center text-center">
                    <h3 className="display-3">Logged In</h3>
                    <h4 className="fw-light m-4">Hello, {store.email}</h4>
                    <button onClick={() => actions.logout()} type="button" className="btn btn-danger m-5">Logout</button>
                </div> 
            :
                <>
                    <Signup />
                    <Login />
                </>    
            }

        </div>
    )

}