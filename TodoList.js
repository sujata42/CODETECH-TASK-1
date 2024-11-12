// src/components/TodoList.js
import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');

  // Add a new task
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  // Toggle task completion
  const toggleTask = (index) => {
    setTasks(tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    ));
  };

  // Delete a task
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Filter tasks
  const getFilteredTasks = () => {
    if (filter === 'completed') return tasks.filter(task => task.completed);
    if (filter === 'incomplete') return tasks.filter(task => !task.completed);
    return tasks;
  };

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={addTask}>Add Task</button>

      <div className="filters">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('incomplete')}>Incomplete</button>
      </div>

      <ul>
        {getFilteredTasks().map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            <span onClick={() => toggleTask(index)}>{task.text}</span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
