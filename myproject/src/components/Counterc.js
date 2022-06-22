import { Component } from "react";

class Counterc extends Component{
    constructor(){
        super()
        this.state={
            counter:0}
            //this.increment=this.increment.bind(this)
    }
    increment = () =>{     //binding method
        console.log(this)
        this.setState(
            {counter: this.state.counter-1,
            })
    }
    render(){
        return <div>
            <h3> counter value:{this.state.counter}</h3>
            <button onClick = {this.increment}>dec</button>
            </div>
    }
}
export default Counterc;