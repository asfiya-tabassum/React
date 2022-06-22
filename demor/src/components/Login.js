import React from "react";
import {useState} from "react";
import Logout from "./Logout";
import { GoogleLogin } from 'react-google-login';

const clientId = "1052229999573-1fm67sv1u63vfih9hgbp7caloma00lf5.apps.googleusercontent.com";


function Login(){
    const [showloginButton, setShowloginButton] = useState(true);

    const onLoginSuccess = (res) => {
          console.log('Login Success:', res.profileObj);
          alert("You have been logged in successfully");
          setShowloginButton(false);
        //   setShowlogoutButton(true);
      };
    
      const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
      };
    
    return(
    <div className="App">
      <header className="App-header">
        <div>
            {showloginButton ?<h1>Google Login</h1>:<h1>Google Logout</h1>}
        </div>
        <div>
            { showloginButton ?
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign In"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> : <Logout/>}
                </div>
         </header>
        </div>
       
    )
}

export default Login;