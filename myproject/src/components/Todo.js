import { useState } from "react";

export default function Todo(){
    const [Todo,settodo]=useState("")
    const [TodoL,settodol]=useState([])

    const handlechange=(event)=>{
        settodo(event.target.value)
    }
    const handlesubmit=(event)=>{
        event.preventDefault()
        let temp=TodoL
        temp.push(Todo)
        settodol(temp)
        settodo("")
        console.log(TodoL)

    }
    return (
        <div>
            <form onSubmit={handlesubmit}>
                <input type="text"  value={Todo} onChange={handlechange}></input>
                <button  /*onClick={handleclick}*/ type="submit">Add</button>
            </form>
            {TodoL.map((i,index)=>(      //same as class component display ke liye dusra .js file create karke import karna
                <h5 key={index}>{i}</h5>
            ))}
        </div>
    )
}