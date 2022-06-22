// import logo from './logo.svg';
import './App.css';
import UserComponent from './components/UserComponent';
// import SearchComponent from './components/SearchComponent';
// import { useState } from 'react';
// import Result from './components/Result';

function App() {
//   const [usi,usiState]=useState([])
  // const [res,setRest]=useState([])
  // const onadd=(users)=>
  // {
  //     usiState(users);
  //     // console.log(users);
  // }
//   const print=(ans)=>{
//     setRest(ans)
//     console.log(res)
    
// }


  return (
    <div>
      <UserComponent  />
      {/* <SearchComponent list={usi} func={print} /> */}
      {/* <Result user={res}/> */}
    </div> 
  );
}

export default App; 
