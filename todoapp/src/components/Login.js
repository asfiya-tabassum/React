import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import bcrypt from 'bcrypt';
// import crypto from "crypto-js"

var CryptoJS = require("crypto-js");
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

const Login = () => {
    const [userEmailInput,setUserEmailInput]=useState('');
    const [userPasswordInput,setUserPasswordInput]=useState('');
    const userHandleLogin=(e)=>{

        e.preventDefault();
       
        console.log(salt);

        var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(userPasswordInput),salt).toString();
        //log encrypted data
        console.log('Encrypt Data -')
        console.log(ciphertext);
    }
    
    return (
        <form lassName="container">
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="username"
                        value={userEmailInput}
                        onChange={(e) => setUserEmailInput(e.target.value)}
                        placeholder="Enter email"
                    />
                </div>

                <div className="form-group">
                    <input
                        type="password"
                        className="form-control col-4"
                        id="Password"
                        value={userPasswordInput}
                        onChange={(e) => setUserPasswordInput(e.target.value)}
                        placeholder="Enter Password"
                    />
                </div>

                <button className="btn btn-info " onClick={userHandleLogin}>Login</button>
            </form>
      );
}
 
export default Login;