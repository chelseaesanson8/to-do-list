// Importing the required icons from the 'react-icons/fa' package
import { FaCheck, FaTimes } from 'react-icons/fa'

// Task component
export const Task = (props) => {
  return (
    <div
      className="task"
      style={{ backgroundColor: props.completed ? "green" : "white" }}
    >
      <h1>{props.taskName}</h1>
      <button className="complete" onClick={() => props.completeTask(props.id)}> <FaCheck /> </button>
      <button onClick={() => props.deleteTask(props.id)}> <FaTimes /> </button>
    </div>
  )
}