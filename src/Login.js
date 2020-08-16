import React, { useState } from 'react';
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import {auth} from "./Firebase";

function Login() {
    const history = useHistory();
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    const login = (event) => {
        // const history = useHistory();  
        // this stops refreshing the page 
        event.preventDefault();
        auth
        .signInWithEmailAndPassword(email, password)
        .then((auth)=>{
            history.push("/");
            // redirect to the home page
        })
        .catch((e)=> alert(e.message));


        
    };
    const register = (event) => {
        // stops refreshing the page
        event.preventDefault();
        auth
        .createUserWithEmailAndPassword(email , password)
        .then(auth=>{
            history.push("/");
            // logged in redirect to the home page
        })
        .catch((e) => alert(e.message));
    };
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src = "http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/175px-Amazon_logo.svg.png" alt=""/>
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type ="text"/>
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type ="password"/>
                    <button onClick = {login} type="submit" className="login__signInButton">Sign In</button>
                </form>
                
                <p>By continuing , you agree to amazon's <a href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=200545940">condition of Use</a>and <a href ="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=200534380">privacy policy</a></p>
            <button onClick = {register} className="create__accountButton">Create your Amazon Account</button>
            </div>

 
            
        </div> 
    )
}

export default Login
