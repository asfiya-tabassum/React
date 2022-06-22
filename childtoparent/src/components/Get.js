import React, {useState} from "react"
// import Form from "./Form"

function Get(props){
    const [firstname,setName]=useState("")


    const handleChange=(event)=>{
        setName(event.target.value);
    }

    const handleSubmit=(event)=>{
    
        event.PreventDefault()
        props.func(firstname)
        
    }

  

  return(  
      <div>
   <form onSubmit={handleSubmit}>
    <input type="text" value={firstname} onChange={handleChange}></input>
    <button type="submit">click</button>
</form>
</div>
)
}

export default Get;