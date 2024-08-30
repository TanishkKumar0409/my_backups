import React, { useState } from "react";

function TodoList() {
  // State to hold the list of todos
  const [todos, setTodos] = useState([]);
  // State to hold the current input value
  const [inputValue, setInputValue] = useState("");

  // Status options array
  const statusOptions = ["Started", "Processing", "Completed"];

  // Function to get current date and time
  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toLocaleString(); // Format date and time as a string
  };

  // Function to handle adding a new todo
  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([
        ...todos,
        {
          text: inputValue,
          status: "Started",
          lastStatus: null,
          addedAt: getCurrentDateTime(), // Record the time and date when added
          completedAt: null, // Initially null until completed
        },
      ]);
      setInputValue(""); // Clear the input field after adding the todo
    }
  };

  // Function to handle deleting a todo by index
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  // Function to cycle through the statuses, ensuring no status repeats
  const cycleStatus = (index) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) => {
        if (i === index) {
          const currentStatusIndex = statusOptions.indexOf(todo.status);
          let nextStatusIndex = (currentStatusIndex + 1) % statusOptions.length;

          // Find the next status that is different from the last status
          while (statusOptions[nextStatusIndex] === todo.lastStatus) {
            nextStatusIndex = (nextStatusIndex + 1) % statusOptions.length;
          }

          // Update the todo item with the new status
          return {
            ...todo,
            status: statusOptions[nextStatusIndex],
            lastStatus: todo.status,
            completedAt:
              statusOptions[nextStatusIndex] === "Completed"
                ? getCurrentDateTime()
                : todo.completedAt, // Set completion time if status is "Completed"
          };
        }
        return todo;
      })
    );
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4 text-light">Todo List</h1>

      {/* Section for adding new todos */}
      <div className="d-flex justify-content-center mb-4">
        <input
          type="text"
          className="form-control w-50 rounded-start bg-dark border-light text-light"
          placeholder="Add a new task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="btn btn-primary rounded-end ms-2" onClick={addTodo}>
          Add
        </button>
      </div>

      {/* Section for displaying the todos */}
      <h3 className="text-light">Tasks</h3>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Task</th>
            <th>Status</th>
            <th>Added At</th>
            <th>Completed At</th>
            <th>Change Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{todo.text}</td>
              <td>
                <span
                  className={`badge ${
                    todo.status === "Started"
                      ? "bg-danger"
                      : todo.status === "Processing"
                      ? "bg-info"
                      : "bg-success"
                  }`}
                >
                  {todo.status}
                </span>
              </td>
              <td>{todo.addedAt}</td>
              <td>{todo.completedAt ? todo.completedAt : "-"}</td>
              <td>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => cycleStatus(index)}
                  disabled={todo.status === "Completed"}
                >
                  <i className="fa fa-refresh"></i>
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteTodo(index)}
                >
                  <i className="fa fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;
