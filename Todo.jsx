// import { useState } from "react"

// function Todo() {
//     const [newTask, setNewTask] = useState("")
//     const [Todotasks, setTodotasks] = useState([])

//     function addTasks() {
//         if (newTask == '') {
//             alert("please enter something")
//             return
//         }

//         setTodotasks([
//             ...Todotasks,
//             {
//                 text: newTask,
//                 completed: false
//             }
//         ])

//         setNewTask('')
//     }

//     function deleteTask(index) {
//         const filteredTasks = Todotasks.filter(
//             (tasks, currentindex) => currentindex !== index
//         )

//         setTodotasks(filteredTasks)
//     }

//     function toggletask(index) {
//         const updatedTasks = Todotasks.map((task, currentIndex) => {
//             if (currentIndex === index) {
//                 return {
//                     ...task,
//                     completed: !task.completed
//                 }
//             }

//             return task
//         })

//         setTodotasks(updatedTasks)
//     }

//     const completedCount = Todotasks.filter(
//         (task) => task.completed === true
//     ).length

//     const totalCount = Todotasks.length

//     return (
//         <div>
//             <h3>Todo</h3>

//             <input
//                 type="text"
//                 placeholder="type Something"
//                 value={newTask}
//                 onChange={(e) => {
//                     setNewTask(e.target.value)
//                 }}
//             ></input>

//             <button onClick={addTasks}>Add</button>

//             <p>
//                 Completed: {completedCount} / {totalCount}
//             </p>

//             <ul>
//                 {
//                     Todotasks.map((tasks, index) => {
//                         return (
//                             <li key={index}>
//                                 <input
//                                     type="checkbox"
//                                     checked={tasks.completed}
//                                     onChange={() => toggletask(index)}
//                                 ></input>

//                                 <span
//                                     style={{
//                                         textDecoration: tasks.completed
//                                             ? "line-through"
//                                             : "none"
//                                     }}
//                                 >
//                                     {tasks.text}
//                                 </span>

//                                 <button onClick={() => deleteTask(index)}>
//                                     Delete
//                                 </button>
//                             </li>
//                         )
//                     })
//                 }
//             </ul>
//         </div>
//     )
// }

// export default Todo



 
import React, { useState } from 'react'

function Todo() {
  const [NewTask, setNewTask] = useState('')
  const [Todos, setTodos] = useState([])

  function addTasks() {
    if (NewTask.trim() === '') {
      alert("Please enter something")
      return
    }

    setTodos([...Todos, {
      text: NewTask,
      completed: false
    }])

    setNewTask('')
  }

  function deleteTasks(index) {
    setTodos(Todos.filter((tasks, currentIndex) =>
      currentIndex !== index
    ))
  }

  function toggleTasks(index) {
    setTodos(Todos.map((tasks, currentIndex) =>
      currentIndex !== index
        ? tasks
        : { ...tasks, completed: !tasks.completed }
    ))
  }

  return (
    <div style={{
      width: '400px',
      margin: '50px auto',
      padding: '25px',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      fontFamily: 'Arial, sans-serif'
    }}>

      <h2 style={{
        textAlign: 'center',
        color: '#333333'
      }}>
        Todo App
      </h2>

      <div style={{
        display: 'flex',
        gap: '10px'
      }}>
        <input
          type="text"
          placeholder="Enter Task"
          value={NewTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={{
            flex: 1,
            minWidth: 0,
            padding: '10px',
            border: '1px solid #cccccc',
            borderRadius: '6px'
          }}
        />

        <button
          onClick={addTasks}
          style={{
            padding: '10px 15px',
            backgroundColor: '#6c63ff',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          Add
        </button>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '20px',
        color: '#444444'
      }}>
        <h4>
          Completed: {Todos.filter((tasks) => tasks.completed).length}
        </h4>

        <h4>
          Pending: {Todos.filter((tasks) => !tasks.completed).length}
        </h4>
      </div>

      <ul style={{
        listStyle: 'none',
        padding: 0,
        marginTop: '20px'
      }}>
        {Todos.map((tasks, index) => (
          <li
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px',
              marginBottom: '10px',
              backgroundColor: '#f5f5ff',
              borderRadius: '6px'
            }}
          >
            <input
              type="checkbox"
              checked={tasks.completed}
              onChange={() => toggleTasks(index)}
            />

            <span
              onClick={() => toggleTasks(index)}
              style={{
                flex: 1,
                overflowWrap: 'anywhere',
                cursor: 'pointer',
                textDecoration: tasks.completed
                  ? 'line-through'
                  : 'none',
                color: tasks.completed ? '#888888' : '#333333'
              }}
            >
              {tasks.text}
            </span>

            <button
              onClick={() => deleteTasks(index)}
              style={{
                padding: '7px 10px',
                backgroundColor: '#ff4d4d',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default Todo
