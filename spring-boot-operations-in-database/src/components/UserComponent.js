import React,{ useState,useEffect } from "react";
import UserService from "../service/UserService";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function UserComponent(){
    const [users,setState]=useState([])
    // const [res,setRest]=useState([])
    useEffect(()=> {
        UserService.getAll().then(response=>{console.log("prinitng the user data", response.data)
        setState(response.data)
    })
    .catch(error=>{
        console.log("something went wrong");
    })
    
    } ,[])
        return(
            <div className="container">
                <h1 className= "text-centre"> RMY USERS </h1>
                <div>
                    <table className="table table-bordered table-striped">
                        <thead className= "thead-dark" >
                            <tr>
                                <td>Uid</td>
                                <td>LastName</td>
                                <td>FirstName</td>
                                <td>Address</td>
                                <td>City</td>
                                <td>Level</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(user=>
                                    <tr key={user.uid}>
                                        <td>{user.uid}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.address}</td>
                                        <td>{user.city}</td>
                                        <td>{user.level}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                </table>
                </div>
                <hr/>
                <div>
                    <Link to="/add" className="btn btn-primary mb-2">ADD USER</Link>
                </div>
                
            </div>
        )

    

}


export default  UserComponent;