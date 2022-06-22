import styles from "../style.module.css"
const Todo =({Todoitem,todol, settodol})=>{
    const handleclick=()=>{
        settodol(todol.filter((item)=> item.id!== Todoitem.id))
    }

    return (
        <div>
            <div className={styles.todoitem}>
                <h3 className={styles.todoname}>{Todoitem.name}</h3>
                <button onClick={handleclick} className={styles.donebutton}>Done</button>
            </div>
        </div>
    )
}
export default Todo;