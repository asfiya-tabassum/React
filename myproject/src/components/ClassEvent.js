import { Component } from "react";
class ClassEvent extends Component{
    handleclick(){
        console.log("event handling")
    }
    render(){
        return <div>
            this is clss Component
            <button onClick={this.handleclick}> clickme </button>
        </div>
    }
}
export default ClassEvent;