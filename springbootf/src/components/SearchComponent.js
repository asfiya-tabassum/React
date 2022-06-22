import React, { useState } from "react";
// import Result from "./Result";
function SearchComponent(props){
//    const [input,setState]=useState([])
   const [id,setId]=useState()

    const handleChange = (event) => {
        setId(event.target.value)
        console.log(id);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
       for(let i=0;i<props.list.length;i++){
            if(props.list[i].uid === parseInt(id)){
              
                    props.func(props.list[i]);

            }
        }
    }
 

    
        return (
            <div>
                <form onSubmit={handleSubmit}>  
                    <input type="text" value={id} onChange={handleChange} ></input>
                    <button type='submit'>Search</button>
                </form>
                
            </div>
        )
    
}
export default SearchComponent;