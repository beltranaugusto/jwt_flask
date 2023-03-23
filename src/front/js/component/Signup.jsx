import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Signup = () => {
    const { store, actions } = useContext(Context);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [created, setCreated] = useState(false);

    const handleSubmit = async () => {
        const check = await actions.createUser({"email": email, "password": password})
        if(check){
            console.log("All good")
            setError(false)
            setCreated(true)
            document.querySelector("#email").value = ""
            document.querySelector("#password").value = ""
        }else{
            console.log("Error")
            setError(true)
        }
    }

    return (
        <div className="container mt-5 d-flex justify-content-center">
            <div>
                <h2 className="m-5">Sign Up</h2>
                <div className="m-3">
                    <h5>Email</h5>
                    <input id="email" className="form-control" onChange={(e) => setEmail(e.target.value)}></input>
                </div>

                <div className="m-3">
                    <h5>Password</h5>
                    <input id="password" className="form-control" type="password" onChange={(e) => setPassword(e.target.value)}></input>
                </div>

                <button onClick={() => handleSubmit() } className="btn btn-success m-3">Create User</button>
                <Link to="/">
                    <button className="btn btn-primary">Log In</button>
                </Link>

                {error && 
                    <div className="alert alert-danger m-3" role="alert">
                        Form Incomplete
                    </div>
                }

                {created && 
                    <div className="alert alert-success m-3" role="alert">
                        User Created
                    </div>
                }
            </div>
        </div>
    )

}