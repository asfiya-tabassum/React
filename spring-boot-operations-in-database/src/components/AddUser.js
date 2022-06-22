import { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import UserService from "../service/UserService";

const AddUser=()=>{
    const[Uid,setUid]=useState('');
    const[LastName,setLastName]=useState('');
    const[FirstName,setFirstName]=useState('');
    const[Address,setAddress]=useState('');
    const[City,setCity]=useState('');
    const[Level,setLevel]=useState('');
    const navigate = useNavigate()


    const saveUser=(e)=>{
        e.preventDefault();
        const user = {Uid,LastName,FirstName,Address,City,Level};
        UserService.create(user).then(response=>{console.log("prinitng the user data", response.data)
        navigate.push("/")
    })
    .catch(error=>{
        console.log("something went wrong");
    })
    
    }
    return(
        <div className="container">
            <h3>ADD USER</h3>
            <hr/>
            <form>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="Uid"
                        value={Uid}
                        onChange={(e)=>setUid(e.target.value)}
                        placeholder="enter uid"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="LastName"
                        value={LastName}
                        onChange={(e)=>setLastName(e.target.value)}
                        placeholder="enter LastName"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="FirstName"
                        value={FirstName}
                        onChange={(e)=>setFirstName(e.target.value)}
                        placeholder="enter FirstName"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="Address"
                        value={Address}
                        onChange={(e)=>setAddress(e.target.value)}
                        placeholder="enter Address"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="City"
                        value={City}
                        onChange={(e)=>setCity(e.target.value)}
                        placeholder="enter City"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="Level"
                        value={Level}
                        onChange={(e)=>setLevel(e.target.value)}
                        placeholder="enter Level"
                    />
                </div>
                <div>
                    <button className="btn btn-primary" onClick={(e)=>saveUser(e)}>save</button>
                </div>
               
            </form>
            <hr/>
            <Link to="/">Back to List</Link>
        </div>
    )

    
}

export default AddUser;
