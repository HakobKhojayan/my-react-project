import "./todo.css"
import { HiBackspace } from "react-icons/hi2";

function ToDo({ todo, removeTask }) {
    return (
        <div className="toDo">
            <div>{todo.task}</div>
            <div onClick={() => removeTask(todo.id)} className="x"><HiBackspace/></div>
        </div>
    )
}
export default ToDo;