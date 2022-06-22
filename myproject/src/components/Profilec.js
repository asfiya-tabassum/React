import {Component} from "react"
class Profilec extends Component{
    render(){
        const {name}=this.props  //this for destructuring props
        return <h1>message from class prop: {name}</h1> //orelse we hve to use this.props.name
    }
}

export default Profilec;