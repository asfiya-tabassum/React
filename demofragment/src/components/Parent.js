import { useState } from "react"
import Child from "./Child"

export default function Parent(){
    const [parentcount,setparentcount]=useState(0)
    const [childcount,setchildcount]=useState(0)
    const click=()=>{
        setparentcount(parentcount+1)
    }
    const meclick=()=>{
        setchildcount(childcount+1)
    }
    
    return(
        <div>the parent component
            <h1>this is parent count {parentcount}</h1>
            <button onClick={click}>increse parent count</button>
            <Child count={childcount}/>
            <button onClick={meclick}>increse child count</button>

        </div>
    )
}