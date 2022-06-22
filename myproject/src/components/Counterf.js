import {useState} from "react"
function Counterf(){
    const [counter,SetCounter]=useState(0)
    const increment =()=>{
        SetCounter(counter-1)
    }
    return(
        <div>value:{counter}
            <button onClick={increment}>click karo</button>
        </div>
    )
}
export default Counterf;