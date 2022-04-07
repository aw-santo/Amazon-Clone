import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "./firebase";


function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const signIn = (e) => {
        e.preventDefault();

        // firebase login
        auth.signInWithEmailAndPassword(email, pass)
            .then(auth => {
                navigate('/');
            })
            .catch(err => alert(err.message));
    }

    const register = (e) => {
        e.preventDefault();

        // firebase register
        auth.createUserWithEmailAndPassword(email, pass)
            .then((auth) => {
                console.log(auth);
                if(auth) {
                    navigate('/');
                }
            })
            .catch(err => alert(err.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login-logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt=""
                    srcSet=""
                />
            </Link>

            <div className="login-container">
                <h1>Sign In</h1>

                <form action="">
                    <h5>E-mail</h5>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={pass} onChange={e => setPass(e.target.value)} />

                    <button className="login-signInBtn" onClick={signIn}>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON Conditions of Use and Sale.
                    Please see our Privacy Notice, our Cookies Notice and our
                    Interest-Based Ads Notice.
                </p>

                <button className="login-registerBtn" onClick={register}>Create Amazon account</button>
            </div>
        </div>
    );
}

export default Login;
