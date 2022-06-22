import styles from "../style.module.css"
import shortid from "shortid"
const Forms=({todo,settodo,todol,settodol})=>{
    const handlechane=(event)=>{
        settodo(event.target.value)
        
    }
    const handlesubmit=(event)=>{
        event.preventDefault();
        settodol([...todol,{name:todo, id:shortid.generate()}])
        console.log(todol)
        settodo("")
    }
    return(
        <div className={styles.todoform}>
            <form onSubmit={handlesubmit}>
                <input 
                value={todo}
                onChange={handlechane}
                className={styles.todoinput} 
                type="text"></input>
                <button type="submit" className={styles.todobutton} >Submit</button>
            </form>
        </div>
    )
}

export default Forms;