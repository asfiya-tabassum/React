// import logo from './logo.svg';
import './App.css';
import GoogleLogin from 'react-google-login';
import { useState } from 'react';

function App() {
  const [logindata,setlogindata]=useState(
    localStorage.getItem('logindata')?JSON.parse(localStorage.getItem('logindata')):null
  );

  const handlelogout=()=>{
    localStorage.removeItem('logindata');
    setlogindata(null);
  }

  const handlefailure = (result)=>{
    alert(result)
}
  const handlelogin=async(googledata)=>{
    console.log(googledata);
    const result= await fetch('api/google-login',{
      method:'POST',
      body:JSON.stringify({token: googledata.tokenId}),
      headers:{'Content-Type':'application/json','Accept': 'application/json',},
    });
    console.log(result);
    const data= await JSON.stringify( result.json());
    setlogindata(data);
    localStorage.setItem('logindata',JSON.stringify(data));
  } 
  return (
    <div className="App">
      <header className="App-header">
      <h1>Google Login</h1>
      <div>
        {
          logindata?(
            <div>
              <h4>you logged in as {logindata.email}</h4>
              <button onClick={handlelogout}>Logout</button>
              </div>
          )
          :(
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}        
            buttontext="login with Google Account"
            onSuccess={handlelogin}
            onFailure={handlefailure}
            cookiePolicy={'single_host_origin'}
          ></GoogleLogin>

          )
        }
        
      </div>
      </header>
    </div>
  );
}

export default App;
