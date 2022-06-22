import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import AddEmployee from "./components/AddEmployee";
import EmployeesList from "./components/EmployeesList";
import NotFound from "./components/NotFound";
function App(){
  return(
    <Router>
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<EmployeesList/>}/>
        <Route path="/add" element={<AddEmployee/>}/>
        <Route path="/employees/edit/:id" element={<AddEmployee/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}

export default App;