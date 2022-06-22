// import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import UserComponent from './components/UserComponent';
import NotFound from './components/NotFound';
import AddUser from './components/AddUser';

function App() {
  return (
    <BrowserRouter>
   
      <Routes>
        <Route path="/" element={<UserComponent/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/add" element={<AddUser/>}/>
      </Routes>
       

    </BrowserRouter>
  );
}

export default App;
