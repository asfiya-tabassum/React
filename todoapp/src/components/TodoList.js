import Todo from "./Todo"
const TodoList =({todol,settodol})=>{
    return(
        <div>
            {todol.map((Todoitem)=>(<Todo settodol={settodol} todol={todol} key={Todoitem.id} Todoitem={Todoitem}></Todo>))
            }
        </div>
        // kya toh hai
    )
}
export default TodoList;