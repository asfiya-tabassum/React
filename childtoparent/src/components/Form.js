import React, { useState } from "react"
import Get from "./Get"

const Form= ()=>{
    
    const [print,setPrint]=useState("")

    const getdata=(data)=>{
        console.log(data)
        setPrint(data)
        
    }
        
  
    return(
        <div>
           <Get func={getdata}/>
           {print}
        </div>
    )

}

export default Form;