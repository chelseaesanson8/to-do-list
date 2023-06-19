import "./App.css"
import React from 'react'
import { useState } from "react"
import { Task } from "./Task"

function App() { 
  // State variables
  const [todoList, setTodoList] = useState([]) // Manage the todo list
  const [newTask, setNewTask] = useState("") // Store the value of the new task input field

  // Event handler for input change
  const handleChange = (event) => {
    setNewTask(event.target.value);
  }

  // Event handler for adding a new task
  const addTask = () => {
    // Create a new task object
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    }
    // Check if the new task is not empty, then add it to the todo list 
    setTodoList(task.taskName !== "" ? [...todoList, task] : todoList);

  }

  // Event handler for deleting a task 
  const deleteTask = (id) => { 
    // Remove the task from the todo list based on the provided id
    setTodoList(todoList.filter((task) => task.id !== id))
  }

  // Event handler for completing a task
  const completeTask = (id) => {
    // Toggle the completed state of the task with the provided id
    setTodoList((prevTodoList) =>
      prevTodoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    )
  }


  return ( 
    <div className="App">
      <div className="addTask">
        {/*Input field for entering new tasks */}
        <input onChange={handleChange} /> 
        {/* Button for adding the new task */}
        <button onClick={addTask}> Add Task </button>
      </div>
      <div className="list">
        {/* Render each task in the todo list */}
        {todoList.map((task) => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              completed={task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          )
        })}
      </div>

    </div>
  )
}

export default App; 