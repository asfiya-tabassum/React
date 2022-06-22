import { useState } from "react"
export default function Conditional(){
    const [display,setdisplay]= useState(false)
    // if(display){  //in this it uses 2 returns its not a good practise so we use let variable
    //     return(
    //         <div>
    //             it is true
    //         </div>)
    // }
    // else{
    //     return(
    //         <div>
    //             it is false
    //         </div>)
    // }
    // let output  ///  it is by using let method
    // if(display){
    
    //          output=<h4> it is true</h4>
        
    // }else{
               
    //            output= <h4>it is false</h4>

    // }
    // return <div>{output}</div>
    return display ?(<div><h4> it is true</h4></div>):(<div><h4>it is false</h4></div>)
}