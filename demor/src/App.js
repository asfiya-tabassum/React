// import logo from './logo.svg';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
// import Logout from './components/Logout';
import Login from './components/Login';
import Error from './components/Error';

import {useState} from 'react'


// function App() {
//   return (
//     <Router>
//       {/* <nav>
//         <Link to="/">Home</Link> |
//         <Link to="/logout">logout</Link> 
//       </nav> */}
//       <Routes>
//         <Route path="/login" element={<Login/>}/>
//         {/* <Route path="/logout" element={<Logout/>}/> */}
//         <Route path="*" element={<Error/>}/>
//       </Routes>
//     </Router>
//   )
// }



function App() {
  const [car, setCar] = useState([]);
  const selectedcar=(e)=>{
    setCar(e.target.value)
  }


  return (
    <div>
    <div style={{backgroundColor:"green",width:"100vw",height:"100vh"}}>
    <label for="cars">Choose a car:</label>

<select value={car} onChange={selectedcar}>
  <option value="volvo" >Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>

{car==="volvo"&&<p><button>{car}</button></p>}
{car==="saab"&&<p>{`you have selected ${car}`}</p>}
{car==="mercedes"&&<p><button>{car}</button></p>}
{car==="audi"&&<p>{`you have selected ${car}`}</p>}
    </div>
    
    </div>
  );
}

export default App;