import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]); // State for storing tasks
  const [newTask, setNewTask] = useState(''); // State for new task input

  // Function to add a task
  const addTask = () => {
    if (newTask.trim() === '') return; // Ignore empty tasks
    setTasks([...tasks, newTask]); // Add the new task to the list
    setNewTask(''); // Clear the input field
  };

  // Function to delete a task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)} // Update new task state
          placeholder="Enter a task"
          style={{
            padding: '10px',
            fontSize: '16px',
            marginRight: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        />
        <button
          onClick={addTask}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: 'green',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Add Task
        </button>
      </div>
      <ul style={{ listStyleType: 'none', padding: '0', marginTop: '20px' }}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              marginBottom: '10px',
              fontSize: '18px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <span style={{ marginRight: '10px' }}>{task}</span>
            <button
              onClick={() => deleteTask(index)}
              style={{
                padding: '5px 10px',
                fontSize: '14px',
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
