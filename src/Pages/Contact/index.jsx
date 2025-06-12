import "./contact.css"
import { useState } from "react"
import ToDoForm from "../../Components/ToDoForm/todoform"
import ToDo from "../../Components/ToDo/todo"

export default function Contact() {
    const [todos, setTodos] = useState([])

    const addTask = (userInput) => {
        if (userInput) {
            const newItem = {
                id: Math.random().toString(36).substr(2, 9),
                task: userInput
            }
            setTodos([...todos, newItem])
            console.log(newItem);

        }
    }

    const removeTask = (id) =>{
        setTodos([...todos.filter((todo) => todo.id !== id)])
    }


    return (
        <div className="glob">
            <h1 className="h1">Todo list using ReactJs</h1>
            <ToDoForm addTask={addTask} />
            {todos.map((todo) => {
                return (
                    <ToDo
                        todo={todo}
                        key={todo.id}
                        removeTask={removeTask}
                    />
                )
            })}
        </div>
    )
}