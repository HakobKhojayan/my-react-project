import { useState } from "react";
import "./todolist.css"

function ToDoForm({ addTask }) {
    const [userInput, setUserInput] = useState('')

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    const handleSunmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    }
    const handleKetPress = (e) => {
        if (e.key === "Enter") {
            handleSunmit(e)
        }
    }
    return (
        <form onSubmit={handleSunmit} className="form1">
            <input 
            value={userInput} 
            type="text" 
            onChange={handleChange} 
            onKeyDown={handleKetPress} 
            className="inp"
            name="input"
            placeholder="What Will You Do?"
            />
            <button className="but">Add</button>
        </form>
    )
}
export default ToDoForm