import { createBrowserHistory } from "history";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import employeeService from "../services/employee.service";
// import {useHistory} from "react-router-dom";

const AddEmployee = () => {
    const [empId,setEmpId] = useState('');
    const [lastName,setLastName] = useState('');
    const [firstName,setFirstName] = useState('');
    const [city,setCity] = useState('');
    const [salary,setSalary] = useState('');
    const history = createBrowserHistory();
    const {id} = useParams();

    const saveEmployee =(e) => {
        e.preventDefault();

        const employee = {empId,lastName,firstName,city,salary,id};
        if(id){
            employeeService.update(employee)
            .then(response => {
                console.log("Employee updated",response.data);
                history.push('/');
            })
            .catch(error => {
                console.log("error has occured",error);
            });

        }else{
        employeeService.create(employee)
        .then(response => {
            console.log("Employee added",response.data);
            history.push('/');
        })
        .catch(error => {
            console.log("error has occured",error);
        });
    }
        // setEmpId('');
        // setLastName('');
        // setFirstName('');
        // setCity('');
        // setSalary('');
        

    }
    useEffect(()=>{
        if(id){
            employeeService.get(id)
            .then(x=>{
                setEmpId(x.data.empId);
                setLastName(x.data.lastName);
                setFirstName(x.data.firstName);
                setCity(x.data.city);
                setSalary(x.data.salary);
            })
            .catch(error => {
                console.log("error has occured",error);
            });
        }
    },[id])
    return ( 
        <div className="container">
            <h2>Add New Employee</h2>
            <hr/>
            <form>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="empId"
                        value={empId}
                        onChange={(e) => setEmpId(e.target.value)}
                        placeholder="Enter EmpID"
                    />
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Enter Last Name"
                    />
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Enter First Name"
                    />
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Enter City"
                    />
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="salary"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                        placeholder="Enter Salary"
                    />
                </div>
            
                <div>
                    <button className="btn btn-primary" onClick={(e) => saveEmployee(e)} >Save</button>
                </div>
            </form>
            <hr/>
            <Link to="/">Back to List</Link>
        </div>
     );
}
 
export default AddEmployee;