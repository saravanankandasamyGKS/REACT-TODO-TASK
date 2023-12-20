import React, { useState } from 'react'
import './App.css'

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('notCompleted');
  const [filterStatus, setFilterStatus] = useState('all');
  const [editingTodoId, setEditingTodoId] = useState(null);

  const addTodo = () => {
    if (taskName.trim() === '') {
      alert('Task name cannot be empty');
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      taskName,
      description,
      status,
    };

    setTodos([...todos, newTodo]);
    setTaskName('');
    setDescription('');
    setStatus('notCompleted');
  };

  const updateStatus = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, status: todo.status === 'completed' ? 'notCompleted' : 'completed' } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    setEditingTodoId(null); // Clear editing state if the deleted todo was being edited
  };

  const editTodo = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    setTaskName(todoToEdit.taskName);
    setDescription(todoToEdit.description);
    setStatus(todoToEdit.status);
    setEditingTodoId(id);
  };

  const saveEditedTodo = () => {
    const updatedTodos = todos.map((todo) =>
      todo.id === editingTodoId
        ? {
            ...todo,
            taskName,
            description,
            status,
          }
        : todo
    );
    setTodos(updatedTodos);
    setTaskName('');
    setDescription('');
    setStatus('notCompleted');
    setEditingTodoId(null);
  };

  const filterTodos = () => {
    if (filterStatus === 'all') {
      return todos;
    } else {
      return todos.filter((todo) => todo.status === filterStatus);
    }
  };

  return (
    <div className="todo">
      <div>
        <label><button>Task Name:</button></label>
        <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
      </div>
      <div>
        <label><button>Description:</button></label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>
        <label><button>Status:</button></label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="notCompleted">Not Completed</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      {editingTodoId === null ? (
        <button onClick={addTodo}>Add Todo</button>
      ) : (
        <button onClick={saveEditedTodo}>Save Changes</button>
      )}

      <div>
        <label><button>Filter Status:</button></label>
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="all">All</option>
          <option value="notCompleted">Not Completed</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <div>
        {filterTodos().map((todo) => (
          <div key={todo.id}>
            <h3>{todo.taskName}</h3>
            <p>{todo.description}</p>
            <p>Status: {todo.status}</p>
            <button onClick={() => updateStatus(todo.id)}>Toggle Status</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button onClick={() => editTodo(todo.id)}>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
