import React,{ useState,useEffect } from "react";
import UserService from "../service/UserService";
import SearchComponent from "./SearchComponent";
// import Result from "./Result";

function UserComponent(props){
    // constructor(props){
    //     super(props)
    //     this.state={
    //         users:[]
            
    //     }
    // }
    
    const [users,setState]=useState([])
    const [res,setRest]=useState([])
    useEffect(()=> {
    getusers();
    } ,[])
    

    const getusers=()=>{
        UserService.getusers().then((Response) =>{
            setState(Response.data)
        });
        
    }
    // props.onadd(users);
    const print=(ans)=>{
        setRest(ans)
        console.log(res)
        
    }
   
    
        return(
            <div>
                <h1 className= "text-centre" >RMY USERS</h1>
                <table className="table table-striped">
                    <thead>
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
                <SearchComponent list={users} func={print} />
                {/* <Result user={res}/> */}
                 {/* <h1 className= "text-centre" >RMY USERS</h1> */}
            <table className="table table-striped">
                <tbody>
                    {
                            <tr key={res.uid}>
                                <td>{res.uid}</td>
                                <td>{res.lastName}</td>
                                <td>{res.firstName}</td>
                                <td>{res.address}</td>
                                <td>{res.city}</td>
                                <td>{res.level}</td>

                            </tr>
                        
                    }
                </tbody>

            </table>

                
            </div>
        )

    

}


export default  UserComponent;