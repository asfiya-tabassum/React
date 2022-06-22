import { Component } from "react";
import Print from "./Print";

class Form extends Component{
    state={
        firstname:"",
        submit:false,
       
    }
    handlechange=(event)=>{
        this.setState({
            firstname:event.target.value
        })

    }
    handlesubmit=(event)=>{
        event.preventDefault()
        //alert(this)
        this.setState({submit: true})
        
    }
  
    render(){
        return(<div>
            <form onSubmit={this.handlesubmit}>
                <input 
                   onChange={this.handlechange}
                   type="text" 
                   value={this.state.firstname}
                   id="name"
                ></input>
                <button  onClick={this.handlesubmit} type="submit">submit</button>
                {this.state.submit &&
                <Print firstname={this.state.firstname} />}
            </form>
        </div>)
    }
}

export default Form;