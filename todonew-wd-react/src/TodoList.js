import React from 'react';

const TodoList = ({ todos, editTodo, deleteTodo, toggleStatus }) => {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h3>{todo.task}</h3>
          <p>{todo.description}</p>
          <p>Status: {todo.status}</p>
          <button onClick={() => editTodo(todo.id)}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          <button onClick={() => toggleStatus(todo.id)}>Toggle Status</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
