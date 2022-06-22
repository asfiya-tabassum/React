import {useEffect,useState} from "react";
import employeeService from "../services/employee.service";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

const EmployeesList = () => {

  const [employees,setEmployees] = useState([]);
  // useEffect( () => {
  //   employeeService.getAll()
  //   .then( response => {
  //     console.log("Printing employees",response.data);
  //     setEmployees(response.data);
  //   })
  //   .catch(error=>{
  //     console.log('error has occured',error);
  //   })
  // },[])
  

  const init = () => {
    employeeService.getAll()
      .then(response => {
        console.log('Printing employees data', response.data);
        setEmployees(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      }) 
  }

  useEffect(() => {
    init();
  }, []);

  return ( 
    <div className="container">
      <h1>List of Employees</h1>
      <hr/>
      <div>
        <Link to="/add" className="btn btn-primary mb-2">Add Employee</Link>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>EmpID</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>City</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              employees.map((x) => (
                <tr key={x.empId}>
                  <td>{x.empId}</td>
                  <td>{x.lastName}</td>
                  <td>{x.firstName}</td>
                  <td>{x.city}</td>
                  <td>{x.salary}</td>
                  <td>
                      <Link className="btn btn-info " to={`/employees/edit/${x.empId}`}>Update</Link>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
   );
}
 
export default EmployeesList;