import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogout } from 'react-google-login';

// import {navigate} from "react-router-dom";

const clientId = "1052229999573-1fm67sv1u63vfih9hgbp7caloma00lf5.apps.googleusercontent.com";

function Logout(){

    let navigate = useNavigate();
    const onsignoutSuccess=()=>{
        navigate("/login");

    }

    return(
        <div>
            <GoogleLogout
                  clientId={clientId}
                  buttonText="Sign Out"
                  onLogoutSuccess={onsignoutSuccess}
              >
              </GoogleLogout>
        </div>
    )
}

export default Logout;