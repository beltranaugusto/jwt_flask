import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {
    const { store, actions } = useContext(Context);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async () => {
        const check = await actions.logIn({"email": email, "password": password})
        if(check){
            console.log("All good")
            setError(false)
        }else{
            console.log("Error")
            setError(true)
        }
    }

    return (
        <div>
            <h2 className="m-5">Login</h2>
            <div className="m-3">
                <h5>Email</h5>
                <input className="form-control" type="text" onChange={(e) => setEmail(e.target.value)}></input>
            </div>

            <div className="m-3">
                <h5>Password</h5>
                <input className="form-control" type="password" onChange={(e) => setPassword(e.target.value)}></input>
            </div>

            <button onClick={() => handleSubmit() } className="btn btn-success m-3">Login</button>
            <Link to="/signup">
                <button className="btn btn-primary">Sign Up</button>
            </Link>
            

            {error && 
                <div className="alert alert-danger m-3" role="alert">
                    Bad Credentials
                </div>
            }

        </div>
    )

}